import  styled  from "styled-components";

const Container=styled.div`
margin:3px;
height:70vh;
position:relative;
`
const Image=styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Info=styled.div`
position:absolute;
top: 100px;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Title=styled.h1`
color:white;
background-color:#162a3a;
margin-bottom: 10px;

`
const Button=styled.button`
border:none;
padding: 10px;
background-color:#162a3a;
color:white;
cursor: pointer;
font-weight: 600;


`


function CategoryItem({item}) {
  return (
    <Container >
      <Image src= {item.img} />

      <Info>
         <Title> {item.title}</Title>
         <Button>Shop Now</Button>
      </Info>
       
        
   </Container>
  )
}

export default CategoryItem