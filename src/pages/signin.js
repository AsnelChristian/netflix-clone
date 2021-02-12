import HeaderContainer from '../containers/header';

const signin = ({ children, ...restProps }) => {
  return (
    <>
      <HeaderContainer /> <h1>Welcome to sign in page!</h1>{' '}
    </>
  );
};

export default signin;
