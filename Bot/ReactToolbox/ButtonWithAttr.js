// Работа с атрибутами компонента
const StyledComponent = styled.tagName.attrs((props) => ({
  attr1: 'value1',
  attr2: 'value2' || 'defaultValue'
}))`
  //...
  prop: ${(props) => props.attr2};
`

// пример
const Input = styled.input.attrs((props) => ({
  type: 'text',
  placeholder: 'Some text...',
  size: props.size || '1em'
}))`
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 2px inset rgba(0, 0, 0, 0.5);
  font-family: Audiowide;
  font-size: ${(props) => props.size};
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  margin: 0.5rem;
  padding: 0.5rem 0;
`


// Функциональные компоненты - это функции, принимающие параметр props и возвращающие JSX.
// type AppProps = { message: string }
// const App = ({ message }: AppProps) => <p>{message}</p>