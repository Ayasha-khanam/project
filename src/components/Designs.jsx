import styled from "styled-components"
import Design from "./Design"
import { PatternDesigns } from "../Pages/.data"
const Container=styled.div`
padding:20px;
display:flex;
flex-wrap: wrap;
justify-content: space-between;
background-color: #ffe6ff;
`

function Designs() {
  return (
    <Container>
      {PatternDesigns.map((item)=>
      (
       < Design item={item} key={item.id}/>

      )
      
       
      )}
    </Container>
  )
}

export default Designs

