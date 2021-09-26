import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Poet from '../Poet/Poet';
import './Component.css'

const Component = () => {
    const [infomations, setInformations] = useState([])

    useEffect( () => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setInformations(data))
    } ,[])

      const handleAddToCart = (poet) => {
          console.log(poet)
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
            <div className="cart-container">
                <h4>poets added:</h4>
                <p>total costs:</p>
            </div>
        </div>
    )
}

export default Component;