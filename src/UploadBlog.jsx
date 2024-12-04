import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function UploadBlog() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [content, setContent] = useState("")
  const [img, setImg] = useState("")
  const [mail, setMail] = useState("")
  const [rows, setRows] = useState(8)
  const [cols, setCols] = useState(90)

  const navigate = useNavigate()
  const categories = ["Technology","Sports","Nature","Personal","Space","Traveling","Cars"]


  const MAX_FILE_SIZE = 5* 1024 *1204
async function createBlog(){

  if(name != "" && title != "" && category != "" && content != "" && img != ""){
        const result = await axios.post(`${import.meta.env.VITE_API}/posts`,{name,content,title,category,img,mail})
      console.log(result);
      
      
        if(result.status == 200){
          setName("")
          setContent("")
          setTitle("")
          setCategory("")
          setImg("")
          navigate(-1)
        }
  }else{
    alert("All fields are mandatory")
    console.log(name);
    console.log(title);
    console.log(category);
    console.log(content);
    console.log(img);
    
    
  }
    
   
    

  }

  return (
  <>
  <div className='h-screen bg-inherit flex justify-start items-center flex-col text-white px-9'>
     
    <h1 className='font-bold text-[50px] font-create my-9'><span className='text-[#F8EE00]'>C</span>reate <span className='text-[#F8EE00]'>Y</span>our <span className='text-[#F8EE00]'>B</span>log</h1>


    <div className='m-3'>
        <label className='font-create font-bold ' htmlFor="name">
              Blogger Name
              <input value={name}
              onChange={(e)=>{
                setName(e.target.value)
              }}
              id="name" className='px-2 mx-3 text-black' type="text" />
        </label>
    </div>
    <div className='m-3'>
        <label className='font-create font-bold ' htmlFor="name">
              Blogger mail
              <input 
              onChange={(e)=>{
                if(e.target.value.match(/[a-zA-Z0-9]+@[a-z]+.com/)){
                  setCount(1)
                  setMail(e.target.value)
                    
                  }else{
                    setCount(0)
                  }
                  
              }}
              id="name" className={`${count == 1 ? "outline-green-500" :"outline-red-700"} px-2 mx-3 text-black border-2 `} type="email"  />
        </label>
    </div>

    <div className='m-3'>
        <label className='font-create font-bold' htmlFor="name">
              Give Title for Blog
              <input value={title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
              id="name" className='px-2 mx-3 text-black' type="text" />
        </label>

        

        <select value={category}
        onChange={(e)=>{
          setCategory(e.target.value)
        }}
        name="" id="" className='text-black p-3 rounded-lg'>
          <option value="">Select Categories</option>
          {
            categories.map(val => <option value={val}>{val}</option>)
          }
        </select>
    </div>
          
    <div className='m-3'>
        <label className='font-create  font-bold ' htmlFor="name">
              upload image
              <input 
              onChange={(e)=>{
                const file = e.target.files[0]
                if(file){
                  if(file.size > MAX_FILE_SIZE){
                    alert("file size is larger then 5 mb")
                    setImg("")
                  }
                  
                  const reader = new FileReader(e.target.files[0])
                  
                  reader.onloadend = ()=>
                    {
                      setImg(reader.result)
                    }
                    reader.readAsDataURL(file);
                  }}
                }
              id="name" className='px-2 text-black mx-3' type="file" accept='image/*' />

              
        </label>
    </div>

      <div className='m-3'>
          <textarea value={content} className='p-4 text-black'
          rows={rows} 
          cols={cols}
          onChange={(e)=>{

            if(e.target.value.length > (cols * rows)){
              setRows(rows+1)
              console.log(rows);
              
            }else{
              // setRows(2) 
            }
            setContent(e.target.value)
          }} name="" id="">


          </textarea>
      </div>
        <div className='flex  w-full justify-center'>

      <button
      onClick={createBlog}
      className='bg-[#F8EE00]/80 text-black px-9 py-2 rounded-xl ml-9'>submit</button>
      </div>
  </div>
  </>
  )
}

export default UploadBlog
