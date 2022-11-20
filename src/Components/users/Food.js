import React, { useEffect,useState} from 'react'
import TopBar from './TopBar'
import axios from 'axios'

function Food() {

  let [data,setData] = useState([])
 
  let loadData = async()=>{
    let res = await axios.get(`https://637a6aea10a6f23f7f93c9e7.mockapi.io/food`)
      setData(res.data)
    
  }
  useEffect(()=>{
    loadData()
  },[])

  return <>
  <TopBar/>
  <div>
  <div className='list-food-wrapper'>
        <h2>All your Foods are here!</h2>
        {
          data.map((e,i)=>{
            return <div className='card-wrapper' key={i}>
              <div className='card-image'>
                <img src={e.imageUrl} alt="" width={"150px"} height={"150px"}></img>
              </div>
              <div className='card-details'>
                <h2>{e.name}</h2>
                <h4>&#8377; {e.price}</h4>
                <div>{e.description}</div>
              </div>
            </div>
          })
        }
    </div>
  </div>
  </>
}

export default Food