import Button from "../common/Button"
import { TitleWrapper, Wrapper } from './styles'

export default function Banner(){
  return(
    <Wrapper>
      <TitleWrapper>
        <h1>International Luxury Wedding & Event Planner</h1>
       <div>
        <Button 
        text='Plan My Wedding'
        color='#fff'
        bg='#BF6F5F'
        hoverBg='#804A40'/>
        </div>
      </TitleWrapper>

    </Wrapper>
  )
}