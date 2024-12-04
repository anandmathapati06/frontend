  import { useEffect, useState } from 'react'
  import {BrowserRouter ,Route,Routes} from 'react-router-dom'
 
  import axios from 'axios'
  import UploadBlog from './UploadBlog'
import Home from './Home'
import Blog from './Blog'
import ContextProvider from './Context'
import Layout from './Layout'




  function App() {
   
    console.log(import.meta.env.VITE_API);
    

    return (
    
<ContextProvider>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>

        <Route path='' element={<Home />} />
        <Route path='/upload' element={<UploadBlog />} />
        <Route path='/blog/:name/:id' element={<Blog />} />
        </Route>
      </Routes>
   </BrowserRouter>
</ContextProvider>
    
    
    )
  }

  export default App
