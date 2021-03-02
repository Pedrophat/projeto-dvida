import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #fff;
`

export const InnerWrapper = styled.div`
width: 1300px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.6rem 0rem;
position: relative;
div{
  display:flex;
  align-items: center;
  h3{
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    font-size: 1.8rem;
    @media only screen and (max-width: 768px){
      font-size: 1.3rem;
    }
  }
}

`
export const Logo = styled.img`
widht: 32px;
height: auto; 
margin: 0 1rem;
`