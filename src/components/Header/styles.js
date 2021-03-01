import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #fff;
`

export const InnerWrapper = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
align items: center;
padding: 1rem 0rem;
div{
  display: flex;
  align-items: center;
}
  h3{
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    font-size: 1.8rem;
  }

}
`
export const Logo = styled.img`
widht: 32px;
height: auto; 
margin-right: 1rem;
`