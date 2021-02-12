import { Container, Input, Button, Text, Form } from './styles/opt-form';

const optForm = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

optForm.Input = ({ ...restProps }) => {
  return <Input {...restProps} />;
};

optForm.Button = ({ children, ...restProps }) => {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try now" />
    </Button>
  );
};

optForm.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

optForm.Form = ({ children, ...restProps }) => {
  return <Form {...restProps}>{children}</Form>;
};

export default optForm;
