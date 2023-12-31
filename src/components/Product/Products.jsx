import React from 'react'
import firstShoe from '../../assets/product-img/1.jpeg'
import secondShoe from '../../assets/product-img/2.jpeg'
import thirdShoe from '../../assets/product-img/3.jpeg'
import fourthShoe from '../../assets/product-img/4.png'
import fifthShoe from '../../assets/product-img/5.png'

const Products = () => {
    const products = [
        {   
            pid:1,
            name:"Nike Air Forc 1*07",
            category:"Men's Shoe",
            colorAvailable:1,
            img:firstShoe,
            price:8195.00
        },
        {
            pid:2,
            name:"Nike Air Max Cirro",
            category:"Men's Slides",
            colorAvailable:4,
            img:secondShoe,
            price:3695.00
        },
        {
            pid:3,
            name:"Nike Killshot 2 leather",
            category:"Men's Shoe",
            colorAvailable:2,
            img:thirdShoe,
            price:7995.00
        },
        {
            pid:4,
            name:"Nike Killshot 2 leather",
            category:"Men's Shoe",
            colorAvailable:2,
            img:fourthShoe,
            price:7995.00
        },
        {
            pid:5,
            name:"Nike Killshot 2 leather",
            category:"Men's Shoe",
            colorAvailable:2,
            img:fifthShoe,
            price:7995.00
        },
        {   
            pid:6,
            name:"Nike Air Forc 1*07",
            category:"Men's Shoe",
            colorAvailable:1,
            img:firstShoe,
            price:8195.00
        },
    ]
  return (
    <section id="products">
        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-2">

        <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.img}
                  alt={product.img}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div> 
              </div>
              <div className="mt-1">
              <p className="text-sm font-large font-bold text-gray-900">₹ {product.price}</p> 
                <p className="mt-1 text-sm font-medium text-gray-900">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}

export default Products