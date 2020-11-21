import React from 'react'
import { france} from './placesdata'
import City2 from './city2'
const France=(props)=>{
    const citylist=france.map((post)=><City2 key={post.title} post={post} />)
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
export default France
