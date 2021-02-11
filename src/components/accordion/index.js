import { useState, useContext, createContext } from 'react';
import {
  Container,
  Inner,
  Title,
  Item,
  Header,
  Body,
} from './styles/accordion';

const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = ({ children, ...restProps }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = ({ children, ...restProps }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      {...restProps}
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
    >
      {children}

      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Add" />
      )}
    </Header>
  );
};

Accordion.Body = ({ children, ...restProps }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow ? (
    <Body {...restProps}>{children}</Body>
  ) : (
    <Body style={{ 'max-height': '0', padding: '0' }} {...restProps} />
  );
};

export default Accordion;
