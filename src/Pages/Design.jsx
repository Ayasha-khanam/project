import React from 'react'
import { Add, Remove } from "@material-ui/icons";
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLatter from '../components/NewsLatter'

const Container=styled.div`
background-color:	 #ffe6ff;
`
const Wrapper=styled.div`
padding: 50px;
display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover; 
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
 
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 80px;
  font-size: 20px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
 
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterType = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterTypeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;



function Design() {
  return (
    <Container>
     <Navbar/>
      <Wrapper>
        <ImgContainer>
          <Image src="./images/lineart.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>One Line Art </Title>
          <Desc> Included Files    :JPEG, PSD </Desc>
          <Desc>-Size      :3600 x 3600 px / 31 x 31 cm </Desc>
          <Desc>-Resolution:300 dpi</Desc>
          <Desc>-In Repeat + Seamless Tile</Desc>
          <Desc>-Layered Photoshop PSD</Desc>
          <Desc>-Vector AI or EPS</Desc>
          <Price>$ 80</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>License Type</FilterTitle>
              <FilterType>
                <FilterTypeOption>Personal (JPEG Only)</FilterTypeOption>
                <FilterTypeOption>Commercial (Layered PSD + JPEG)</FilterTypeOption>
                <FilterTypeOption>Commercial Unlimited (Layered PSD + JPEG)</FilterTypeOption>
              
              </FilterType>
            </Filter>
            
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLatter/>
      <Footer/>
    </Container>
  )
}

export default Design