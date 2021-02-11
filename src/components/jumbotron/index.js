import {
  Inner,
  Item,
  Container,
  Title,
  SubTitle,
  Image,
  Pane,
} from './styles/jumbotron';

const jumbotron = ({ children, direction = 'row', ...restProps }) => (
  <Item {...restProps}>
    <Inner direction={direction}>{children}</Inner>
  </Item>
);

jumbotron.Container = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);
jumbotron.Pane = ({ children, ...restProps }) => (
  <Pane {...restProps}>{children}</Pane>
);
jumbotron.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);
jumbotron.SubTitle = ({ children, ...restProps }) => (
  <SubTitle {...restProps}>{children}</SubTitle>
);
jumbotron.Image = (props) => <Image {...props} />;

export default jumbotron;
