import { Route, Switch } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';

const app = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.BROWSE} component={Browse} />
      <Route exact path={ROUTES.SIGN_UP} component={Signup} />
      <Route exact path={ROUTES.SIGN_IN} component={Signin} />
    </Switch>
  );
};

export default app;
