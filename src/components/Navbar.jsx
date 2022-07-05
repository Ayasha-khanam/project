import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`

 height:60px;
 background-color:  #ffe6ff;
`
 const Wrapper = styled.div`
  padding:20px 10px;
  display:flex;
  justify-content: space-between;
  color:black;
  align-items:center;
 `
const Left =styled.div`
flex:1;
align-items:center;

`

const Center =styled.div`
flex:1;
text-align:center;
color:black;
`

const Right =styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`
const SearchContainer=styled.div`
width:20px;
align-items:center;
margin-left:20px;
display:flex;
`

const Input=styled.input`
border:none;
`
const PageName=styled.h1`
font-weight:bold;

`
const ManuItem=styled.div`
font-size:14px;
cursor:pointer;
margin-left:20px;
`








const Navbar = () => {
  return (
    <Container>
      <Wrapper>
         <Left>
           <SearchContainer>
            <Input/>
            <Search/>
           </SearchContainer>
         </Left>
         <Center>
           <PageName>Pattern Design House</PageName>
         </Center>
         <Right>
           <ManuItem>
            Register
           </ManuItem>
           <ManuItem>Sign In</ManuItem>
           <ManuItem>
           <Badge badgeContent={1} color="secondary">
           <ShoppingCartOutlined/>
S
            </Badge>
           </ManuItem>
         </Right>
      </Wrapper>
      
    </Container>
  )
}

export default Navbar
