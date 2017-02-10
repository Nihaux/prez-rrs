const Title = (props) => (
  <h1 style={{
    color: props.color || 'red',
  }}>
    {props.children}
  </h1>
);

const MyGreenTitle = (props) => (
  <Title color="green">{props.children}</Title>
);
