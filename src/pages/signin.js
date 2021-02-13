import { useState, useContext } from 'react';
import { useHistory } from 'react-router';

import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import FirebaseContext from '../context/firebase';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

const Signin = ({ children, ...restProps }) => {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInValid = password === '' || emailAddress === '';
  const handleSignin = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        setError('');
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Frame onSubmit={handleSignin} method="POST">
            <Form.Title>Sign in</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}

            <Form.Input
              placeholder="Enter email"
              type="email"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInValid} type="submit">
              Sign in
            </Form.Submit>
            <Form.Text>
              New to Netflix?{' '}
              <Form.Link to={ROUTES.SIGN_UP}>Sign up now</Form.Link>.
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </Form.TextSmall>
          </Form.Frame>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default Signin;
