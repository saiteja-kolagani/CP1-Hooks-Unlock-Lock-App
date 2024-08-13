// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940); 
`

export const ImageTag = styled.img`
  width: 200px;
`
export const TextPart = styled.p`
  font-size: 22px;
  color: #ffffff;
  font-family: Roboto;
`
export const Button = styled.button`
  width: 120px;
  padding-block: 8px;
  background-color: #06b6d4;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  margin-top: 40px;
`
