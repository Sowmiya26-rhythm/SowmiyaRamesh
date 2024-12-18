import React from 'react'
import { toast } from 'react-toastify';

const Upload = () => {
    const handleSumbit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const img= form.img.value;
        const title=form.title.value;
        const des=form.des.value;
        const price=form.price.value;
        const quantity=1;
        if(img===""||title===""||des===""||price===""){
            toast.warn("Fill all the fields");
        }
        const prdObj={
            img,title,des,price,quantity
        };console.log(prdObj);
        fetch("http://localhost:5000/upload",{
            method:"POST",
            headers:{
                "content-type":"applications/json",
            },
            body:JSON.stringify(prdObj)
        })
        .then((res)=>res.json())
        .then((data)=>{
            toast.success("product Added Successfully")
            form.reset();
            window.location.href="/update";
        });
    }
  return (
    <div>
        <div class="card up1">
            <h3>Upload Product</h3>
            <form onSubmit={handleSumbit}>
                <label value="img">Image</label>
                <br/>
                <input
                type='text'
                name='title'
                id='img'/><br/>
                <label value="title">Title</label>
                <br/>
                <input
                type='text'
                name='title'
                id='title'/><br/>
                <label value="des">Description</label>
                <br/>
                <input
                type='text'
                name='des'
                id='des'/><br/>
                <label value="price">Price</label>
                <br/>
                <input
                type='number'
                name='price'
                id='price'/><br/>
                <br/>
                <button type="submit" class='btn btn-sucess'>Upload</button>
            </form>
        </div>
    </div>
  )
}

export default Upload