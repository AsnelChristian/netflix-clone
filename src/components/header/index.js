import { Background, Container, Logo, ButtonLink } from './styles/header';
import { Link as ReactRouterLink } from 'react-router-dom';

const header = ({ bg = true, children, ...restProps }) => {
  return bg ? <Background {...restProps}>{children}</Background> : children;
};

header.Frame = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

header.ButtonLink = ({ children, ...restProps }) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

header.Logo = ({ to, ...restProps }) => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

export default header;
