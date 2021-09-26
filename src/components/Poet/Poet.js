import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart } from '@fortawesome/free-solid-svg-icons'



import './Poet.css'

const Poet = (props) => {
    // console.log(props)
    const {name,img,age,salary,village,identity} = props.poet
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="information-container">
            <div>
            <div className='images'>
               <img style={{width:'150px',margin:'10px 65px'}} src={img} alt="" />
            </div>
            <div>
               <h4>{name}</h4>
               <p>age:{age}</p>
               <p>village:{village}</p>
               <p>salary:${salary}</p>
              <p> <small> identity:{identity} </small></p>
               <button 
               onClick = { () => props.handleAddToCart(props.poet)}
               className = 'regular-btn'>
                 {element}   add to cart
                   </button>
            </div>
            </div>
        </div>
    );
};

export default Poet;