import React from 'react'
import {posts} from './citydata.js'
import City from './cities'

const Home=()=>{
    const citylist=posts.map((post)=><City key={post.title} post={post} />)
  return(
  <div>
     <ul>
      {
       citylist
      } 
     </ul>
   
     {/*<City img1={posts.imga1} img2={posts.imga2} img3={posts.imga3} img4={posts.imga4} /> */}
  </div>
  )
  }
  export default Home