import JumbotronContainer from '../containers/jumbotron';
import FaqsContainer from '../containers/faqs';
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';
import { OptForm, Feature } from '../components';

const home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere.Cancel anytime.</Feature.SubTitle>

          <OptForm>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
            <OptForm.Form>
              <OptForm.Input placeholder="Email address" />
              <OptForm.Button>Get Started</OptForm.Button>
            </OptForm.Form>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default home;
