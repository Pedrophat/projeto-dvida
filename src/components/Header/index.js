import { InnerWrapper, Wrapper, Logo } from './styles'
import  HeaderLink  from '../common/HeaderLink'

export default function Header(){
  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <Logo src='./img/logo.png' alt='Marcia-cristina'/>
          <h3>Sweeding</h3>
        </div>
        
          <div>
            <HeaderLink TextoDoLink='Home'/>
            <HeaderLink TextoDoLink='Sobre'/>
            <HeaderLink TextoDoLink='Contato'/>
            <HeaderLink TextoDoLink='Teste1'/>
            <HeaderLink TextoDoLink='Teste2'/>

          </div>
        
      </InnerWrapper>
    </Wrapper>
  )
}