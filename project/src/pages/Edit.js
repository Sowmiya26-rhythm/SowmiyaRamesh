import React from 'react'

const Edit = () => {
  return (
    <div>
         <div class='card up1'>
          <h3>Upload Product</h3>
          <form>
            <label value="img">Image</label><br/>
            <input
            type='text'
            name='title'
            id='img'/>
            <br/>
            <label value="title">Title</label><br/>
            <input
            type='text'
            name='title'
            id='title'/>
            <br/>
            <label value="des">Description</label><br/>
            <input
            type='text'
            name='des'
            id='des'/>
            <br/>
            <label value="price">Price</label><br/>
            <input
            type='number'
            name='Price'
            id='Price'/>
            <br/><br/>
            <button type="submit" class='btn btn-sucess'>Upload</button>

          </form>
        </div>
    </div>
  )
}

export default Edit