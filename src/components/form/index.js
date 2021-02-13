import {
  Container,
  Frame,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from './styles/form';

const form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

form.Error = ({ children, ...restProps }) => {
  return <Error {...restProps}>{children}</Error>;
};
form.Frame = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};
form.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
form.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
form.TextSmall = ({ children, ...restProps }) => {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};
form.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};
form.Input = ({ ...restProps }) => {
  return <Input {...restProps} />;
};
form.Submit = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>;
};

export default form;
