import { Container, Title, SubTitle } from './styles/feature';

const feature = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

feature.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

feature.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default feature;
