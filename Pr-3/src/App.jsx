import { useState } from 'react'
import { category, product } from './Data'
import Record from "./Record"

function App() {
  const [record, setRecord] = useState(product);

  const filterData = (cat) => {
    if(cat === "all"){
      setRecord(product)
    }else{
      let data = product.filter((item) => item.category === cat);
      setRecord(data);
    }
  }

  return (
    <>
      <Record
        category={category}
        filterBtn={filterData}
        product={record}
      />
    </>
  )
}

export default App
