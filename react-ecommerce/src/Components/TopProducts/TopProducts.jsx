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
       <div className="row products-container justify-content-center align-items-center">
        {
          TopProducts.map(Products => {
            return(
              <div key={Products.id} className='cart-deck col-lg-3 col-md-5 col-sm-8 mx-1'> 
                <div className="cart">
                    <img src={Products.image} className='cart-img-top img-fluid mx-auto d-block' alt={Products.name} />
                     <div className="d-flex justify-content-between align-items-center">
                      <div className="cart-body">
                           <h5 className='cart-title'>{Products.name}</h5>
                           <p className='cart-text'>Price: {Products.price} Taka</p>
                      </div>
                      <div className="">
                            <button className='btn btn-outline-dark my-3'>
                                  Details
                            </button>
                            <button className='btn btn-outline-secondary my-3 ms-2'>
                                  Buy
                            </button>
                      </div>
                     </div>
                </div>
              </div>
              
            
            )
              
          })
        }
       </div>
    </section>
  )
}

export default TopProducts
