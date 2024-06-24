import React, { useEffect, useState } from 'react'


const Product1 = () => {
    const [items, setItems] = useState([]);
    const [reload,setReload] =useState(false);
   
    
    useEffect(() =>{
        fetch("http://localhost:4001/category")
        .then((res)=>res.json())
        .then((data)=> setItems(data))
        .catch((error)=>console.log(error));
    },[reload]);

  
// chat gpt method
    // const deleteData = (id) => {
    //   fetch(`http://localhost:4001/category/${id}`, {
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json())
    //     .then(() => {
    //       // Update the state to remove the deleted item
    //       setItems((prevItems) => prevItems.filter((item) => item._id !== id));
    //     })
    //     .catch((error) => console.error("Error:", error));
    //   console.log(fetch);
    // };

    // method by sir
    const deleteData = (id) =>{
       fetch(`http://localhost:4001/category/${id}`, {
         method: "DELETE",
       })
         .then((res) => res.json())
        .then((data)=>{
          setReload(!reload);
          console.log(data)
        })
    }
  return (
    
    <div>
       
      <table border={1} align='center' cellSpacing={0} cellPadding={10} className=''>
      <thead>

        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>price</th>
          <th>Image</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
    
        {items.map((item) => (
          <tr key={item._id}>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>
              <img src={item.thumbnail} alt="" height={100} />
            </td>
            <td><button onClick={()=>deleteData(item._id)}>Delete</button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product1