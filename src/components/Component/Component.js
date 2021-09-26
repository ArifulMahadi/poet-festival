import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Cart from '../Cart/Cart';
import Poet from '../Poet/Poet';
import './Component.css'

const Component = () => {
    const [infomations, setInformations] = useState([])
    const [cart, setCart] = useState([])


    useEffect( () => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setInformations(data))
    } ,[])

      const handleAddToCart = (poet) => {
          const newCart = [...cart, poet]
          setCart(newCart)
      }

    return (
        <div className="component-container">
            <div className="poet-container">
                
                {
                    infomations.map(infomation => <Poet 
                        key={infomation.name}
                        poet={infomation}
                        handleAddToCart = {handleAddToCart}

                        ></Poet>)
                }
            </div>
            <div className="cart-item">
                <Cart cart={cart} />
            </div>
        </div>
    )
}

export default Component;