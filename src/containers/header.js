import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

const headerContainer = ({ children, ...restProps }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}> Sign in </Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
};

export default headerContainer;
