import  styled  from "styled-components"
import { categories } from "../Pages/.data"
import CategoryItem from "./CategoryItem"
const Container=styled.div`

display:flex;
padding:20px;
justify-content:space-between;
background-color:	 #ffe6ff;
`

function Categories() {
  return (
    <Container>
      {categories.map(item=>(
         <CategoryItem item={item} key={item.id}/>

      ))}
    </Container>
  )
}

export default Categories