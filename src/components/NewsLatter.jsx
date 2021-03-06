import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
height: 30vh;
background-color:	 #ffe6ff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title=styled.h1`
font-size:40px;
margin:20px;

`
const Description=styled.div`
font-size:15px;
margin-bottom:20px;
`
const InputContainer=styled.div`
width: 50%;
height: 25px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;

`
const Input=styled.input`
border: none;
  flex: 8;
  padding-left: 20px;

`
const Button=styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;

`
function NewsLatter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates of new Designs.</Description>
      <InputContainer>
      <Input Placeholder="Your e-mail"/>
      <Button>
        <Send/>
      </Button>
      
      </InputContainer>




    </Container>
  )
}

export default NewsLatter

