import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Context } from './Context'
import image from './assets/image.jpg'

function Home() {
    const [count, setCount] = useState(0)
    const [blog, setBlogs] = useState([])
    
    const {setSelectedBlog} = useContext(Context)
    const id = useParams(null)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    

    const navigate = useNavigate()
useEffect(()=>{
  async function fetchBlog(){

    const result1 = await axios.get(`${import.meta.env.VITE_API}/blogs`)
 
    console.log(result1.data);
    setBlogs(result1.data)
  }
  fetchBlog()

},[])



async function byids(para){

    const result1 = await axios.get(`${import.meta.env.VITE_API}/blogs/${para}`)
    console.log(para)
    
    // console.log(result1.data[0])
    setSelectedBlog(result1.data[0])
    

  }

 
  return (
    <div className=' text-white bg-inherit h-full w-full flex flex-col items-center'>
      {
        blog != "" && 

        blog.map(({id,name,content,title,category,createdDate,img})=>{

          let c = new Date(createdDate.slice(0,10))
          let d  = createdDate.replace(createdDate.slice(0,10).split("-")[1],months[c.getMonth()].slice(0,3)).slice(0,11)
          console.log(d);
          
          return (<>
          <div className='bg-white-900 border-b py-8 w-[90%]'>
              
              <div className='flex justify-between'> 

              <a
              onClick={()=>{
              byids(id)
              navigate(`/blog/${name}/${id}`)
              }}
              className='text-[#E0D700] font-bold sm:text-3xl text-xl underline'>{title}</a>
              <p className=' font-bold text-xl '><p className='text-sm'>category</p>{category}</p>
              </div>
              <p className='text-[13px] mb-8'>By : {name}</p>
              <img className='h-[160px] border' src={img} alt={image} />
              <p className='max-h-[35px] break-words py-3 overflow-hidden '>{content}</p>
              
              
              <p className='my-3'>published on : {d}</p>
             

          </div>
          </>)
        })
      }

      
    </div>
  )
}

export default Home
