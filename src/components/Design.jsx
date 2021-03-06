
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin:1px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Info}{
   
    opacity:1;
  }
`;



const Image =styled.img`
  height: 75%;
  z-index: 2;
  
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;





const Design=({item})=> {
  return (
    <Container>
       
      <Image src= {item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info> 
        
    </Container>
  )
};

export default Design