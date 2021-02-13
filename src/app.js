import { Switch } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import * as ROUTES from './constants/routes';

const app = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user } = useAuthListener();
  console.log('logging user : ', user);
  return (
    <Switch>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        exact
        path={ROUTES.SIGN_IN}
      >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        exact
        path={ROUTES.SIGN_UP}
      >
        <Signup />
      </IsUserRedirect>
      <IsUserRedirect
        exact
        path={ROUTES.HOME}
        user={user}
        loggedInPath={ROUTES.BROWSE}
      >
        <Home />
      </IsUserRedirect>
      <ProtectedRoute exact path={ROUTES.BROWSE} user={user}>
        <Browse />
      </ProtectedRoute>
    </Switch>
  );
};

export default app;
