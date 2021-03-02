import { InnerWrapper, Wrapper, Logo } from './styles'
import  HeaderLink  from '../common/HeaderLink'
import Menu from '../HeaderMenu'

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
            <HeaderLink TextoDoLink='portifolio'/>
            <HeaderLink TextoDoLink='cadastrar'/>
            <Menu />
          </div>
      </InnerWrapper>
    </Wrapper>
  )
}