import { useState, useContext } from 'react';
import { useHistory } from 'react-router';

import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import FirebaseContext from '../context/firebase';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

const Signup = (props) => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInValid = firstName === '' || password === '' || emailAddress === '';

  const handleSignup = async (e) => {
    e.preventDefault();

    setError('');
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, password);
      await user.updateProfile({
        displayName: firstName,
        photoURL: Math.floor(Math.random() * 5) + 1,
      });

      history.push(ROUTES.BROWSE);
    } catch (error) {
      setFirstName('');
      setEmailAddress('');
      setPassword('');

      setError(error.message);
    }
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Frame onSubmit={handleSignup} method="POST">
            <Form.Title>Sign up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}

            <Form.Input
              placeholder="First name"
              type="text"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
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
              Sign up
            </Form.Submit>
            <Form.Text>
              Already have an account?{' '}
              <Form.Link to={ROUTES.SIGN_IN}>Sign in now</Form.Link>.
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

export default Signup;
