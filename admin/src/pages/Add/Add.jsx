import React, { useState } from 'react'
import './Add.css'
import {assets} from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
const Add = ({url}) => {
  //const url='http://localhost:4000';
  const [image,setImage]=useState(false);
  const [data,setData]=useState({
    name:"",
    description:"",
    price:"",
    category:"salad"
  })

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler= async (event)=>{
    event.preventDefault();
    const formData=new FormData();
    formData.append("name",data.name);
    formData.append("description",data.description);
    formData.append("price",Number(data.price));
    formData.append("category",data.category);
    formData.append("image",image);
    const resposne = await axios.post(`${url}/api/food/add`,formData);
    if(resposne.data.success){
      setData({
        name:"",
        description:"",
        price:"",
        category:"salad"
      })
      setImage(false);
      toast.success(resposne.data.message)
    }else{
      toast.error(resposne.data.message)
    }
  }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-image-upload flex-col'>
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img src={image?URL.createObjectURL(image):assets.upload_area} />
          </label>
          <input onChange={(ev)=>setImage(ev.target.files[0])} type='file' id='image' hidden required/>
        </div>
        <div className='add-product-name flex-col'>
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type Here' />
        </div>
        <div className='add-product-discription flex-col'>
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='Write content here' required></textarea>
        </div>
        <div className='add-category-price'>
          <div className='add-category flex-col'>
            <p>Product Category</p>
            <select onChange={onChangeHandler} name='category'>
              <option value="Salad">Salad</option>
              <option value="Rools">Rools</option>
              <option value="Desserts">Desserts</option>
              <option value="Sandwiches">Sandwiches</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className='add-price flex-col'>
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type='number' name='price' placeholder='$20' />
          </div>
        </div>
        <button type='submit' className='add-button'>ADD</button> 
      </form>
    </div>
  )
}

export default Add