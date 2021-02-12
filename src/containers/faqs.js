import faqsData from '../fixtures/faqs.json';
import { Accordion, OptForm } from '../components';

const FaqsContainer = ({ children, ...restProps }) => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Form>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button className="Button">Get Started</OptForm.Button>
        </OptForm.Form>
      </OptForm>
    </Accordion>
  );
};

export default FaqsContainer;
