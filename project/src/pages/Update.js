import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Update = () => {
    const [productData, setproductData]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/watches`)
        .then((res)=>res.json())
        .then((data)=>setproductData(data));
    },[]);
    const deleteProduct=(id)=>{
        fetch(`http://localhost:5000/watch/${id}`,{
            method:"DELETE",
        })
        .then((res)=>res.json())
        .then((data)=>{
            toast.success("product deleted Successfully");
            setproductData((prevProductData)=>
            prevProductData.filter((item)=>item._id !==id))
        })
    }
  return (
    <div>
<ToastContainer/>
<h4>Update Product</h4>
{productData.map((item)=>(
    <div class="card mb-3" key={item._id}>
        <div class="row g-0">
            <div class="col-md-4 upim">
                <img src={item.img} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.des}</p>
                        <p class="card-text">Rs:{item.price}</p>

                        <button class='btn btn-danger' onClick={()=>{deleteProduct(item._id)}}>Delete</button>
                        <button class='btn btn-warning'>Edit</button>
                    </div>
                </div>
                

        </div>
        </div>
))}
    </div>
  )
}

export default Update