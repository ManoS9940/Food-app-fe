import React,{useState,useEffect}from 'react'
import AdminNav from './AdminNav'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function FoodManagement() {
let [name,setName] = useState("")
let [price,setPrice] = useState("")
let [description,setDescription] = useState("")
let [imageUrl,setImageUrl] = useState("")
let img = "https://via.placeholder.com/150"
let navigate = useNavigate()

let [data,setData] = useState([])


let handleDelete = async (id)=>{
  let res = await axios.delete(`https://637a6aea10a6f23f7f93c9e7.mockapi.io/food/${id}`)
  if(res.data.statusCode===200)
  {
    loadData()
  }
}

let loadData = async()=>{
  let res = await axios.get(`https://637a6aea10a6f23f7f93c9e7.mockapi.io/food`)
  if(res.data.statusCode===200)
  {
    setData(res.data.food)
  }
}

let handleSubmit = async ()=>{
  let res = await axios.post(`https://637a6aea10a6f23f7f93c9e7.mockapi.io/aafood`,
  {
    name,
    price:Number(price),
    description,
    imageUrl
  },
  )

  if(res.data.statusCode===200)
  {
    setName("")
    setPrice("")
    setDescription("")
    setImageUrl("")
    loadData()
  }
  else if(res.data.statusCode===401)
  {
    navigate('/login')
  }
}

useEffect(()=>{
  loadData()
},[])
return  <>
<AdminNav/>
<div> 
    <div className='add-food-wrapper col-4'>
      <h3 >Add your Food here!</h3>
    <Form>
    <Form.Group className="mb-3" >
      <Form.Control type="text" value={name} placeholder="Food Name" onChange={(e)=>{setName(e.target.value)}}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Control type="text" value={price} placeholder="Price" onChange={(e)=>{setPrice(e.target.value)}}/>
    </Form.Group>
    
    <Form.Group className="mb-3">
      <Form.Control type="text" value={description} placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}/>
    </Form.Group>
    
    <Form.Group className="mb-3">
      <Form.Control type="text" value={imageUrl} placeholder="Image Url" onChange={(e)=>{setImageUrl(e.target.value)}}/>
    </Form.Group>

    <Button variant="primary" onClick={()=>handleSubmit()}>
      Submit
    </Button>
  </Form>

    </div>
    <div className='list-food-wrapper'>
        <h2>All your Foods are here!</h2>
        {
          data.map((e,i)=>{
            return <div className='card-wrapper ' key={i}>
              <div className='card-image'>
                <img src={e.imageUrl?e.imageUrl:img} alt="" width={"150px"} height={"150px"}></img>
              </div>
              <div className='card-details'>
                <h2>{e.name}</h2>
                <h4>&#8377; {e.price}</h4>
                <div>{e.description}</div>
                <div><Button onClick={()=>handleDelete(e._id)} variant='danger'>Delete</Button></div>
              </div>
            </div>
          })
        }
    </div>
</div>
</>
}

export default FoodManagement