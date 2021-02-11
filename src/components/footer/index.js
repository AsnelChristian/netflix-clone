import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from './styles/footer';

const footer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

footer.Row = ({ children, ...restProps }) => {
  return <Row {...restProps}>{children}</Row>;
};

footer.Column = ({ children, ...restProps }) => {
  return <Column {...restProps}>{children}</Column>;
};

footer.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

footer.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

footer.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

footer.Break = ({ children, ...restProps }) => {
  return <Break {...restProps}>{children}</Break>;
};

export default footer;
