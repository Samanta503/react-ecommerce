import React from 'react'
import Products from '../../Data/productsData.json';

const TopProducts = () => {

  let TopProducts = [];
  for(let i=0; i<3; i++){
    const number = Math.floor(Math.random()* Products.length)
    if(!TopProducts.includes(Products[number])){
      TopProducts.push(Products[number])
    }
    else{
      i--
    }
  }
  //console.log(TopProducts)
  return (
    <section>
       <h1 style={{fontSize:'25px', color:"#212529", fontWeight:"700"}} className='mt-3'>Top Products of This Week</h1>
       <div className="row products-container">
        {
          TopProducts.map(Products => {
            return(
              <div className="">
                <h4>{Products.name}</h4>
              </div>
            
            )
              
          })
        }
       </div>
    </section>
  )
}

export default TopProducts
