import { Wrapper } from './styles' 

export default function Title(props) {
  return (
    <Wrapper>
      <img src='./img/title.png' alt='Flores'/>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      {props.children}
    </Wrapper>
  )
}
