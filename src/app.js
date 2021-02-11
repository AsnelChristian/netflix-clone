import { Route } from 'react-router-dom';
import Home from './pages/home';

const app = () => {
  return <Route exact path="/" component={Home} />;
};

export default app;
