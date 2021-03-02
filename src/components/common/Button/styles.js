import styled from 'styled-components'

export const MyButton = styled.button`
padding: 19px 45px;
width: 250px;
font-family: "Poppins", Sans-serif;
letter-spacing: 2.6px;
font-weight: 600;
background: ${props => props.bg};
border: ${props => props.border || 'none'};
color: ${props => props.color};
transition: 0.3;
:hover{
  background: ${props => props.hoverBg};
  color: ${props => props.hovercolor};
}
@media only screen and (max-width: 726){
  width:100%;
}
`