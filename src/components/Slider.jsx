
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../Pages/.data';
const Container=styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
background-color: #ffe6ff;
overflow:hidden;
`;
const Arrow=styled.div`
width:40px;
height:40px;
background-color:pink;
border-radius:50%; 
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
margin:auto;
left:${props=>props.direction==="left" && "10px"};
right:${props=>props.direction==="right" && "10px"};
cursor: pointer;
z-index: 2;
`;
const Wrapper=styled.div`
height:100%;
display:flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide=styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
`;
const ImgContainer=styled.div`
flex:1;
height:100%;
`;
const Image =styled.img`
height:80%;
margin:50px;
padding-top:20px;
`;
const ImgInfo=styled.div`
flex:1;
padding:50px;
`;
const Title=styled.h1`
font-size:50px;
color:black;
`;
const Desc=styled.p`
font-size:30px;
font-weight:15px;
color:black;
`;
const Button =styled.button`
padding-top:130px:
font-size:100px;
font-weight:80px;
cursor:pointer;
background-color:#cdc6c6;
border:none;
height:25px;
`;



const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
   };



  return (
   <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeft/>
      </Arrow>
        <Wrapper slideIndex={slideIndex}> 
          {sliderItems.map((item)=>(

           <Slide key={item.id}>
           <ImgContainer>
               <Image src={item.img} />
           </ImgContainer>

           <ImgInfo>
           <Title>{item.title}</Title>
           <Desc>{item.desc}</Desc>
           <Button>Shop Now</Button>
           </ImgInfo>
         </Slide> 

          )
          )}
        

          </Wrapper>
        
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRight/>
      </Arrow>
   </Container>
  )
}

export default Slider

