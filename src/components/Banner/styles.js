import styled from 'styled-components'

export const Wrapper = styled.div`
height: 60vh;
width: 100%;
background: url('./img/ring.jpg') no-repeat;
background-size: cover;
background-position: 80% 53%;
position: relative;
@media only screen and (max-width: 375px){
  background-size: 100%;
  height: 30vh;
} 
`
export const TitleWrapper = styled.div`
padding: 5rem;
background: linear-gradient(90deg,#F2D9D5 62%, rgba(242, 202, 194, 0) 100%);
font-family: "Cormorant Garamond", Sans-serif;
width: 600px;
position: absolute;
display:flex;
flex-direction: column;
justify-content: center;
left: 4%;
bottom: -15%;
media only screen and (max-width: 1024px){
  bottom: 5%;
}
@media only screen and (max-width: 726px){
  width: 98%;
  left: 2%;
  padding: 1rem;
}
h1{
  font-size: 3.8rem;
  font-weight: 500;
  @media only screen and (max-width: 1024px){
    font-size: 2.8rem;
  }
  @media only screen and (max-width: 726px){
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 568px){
    font-size: 1.3rem;
  }
}

`
