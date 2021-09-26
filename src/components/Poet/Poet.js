import React from 'react';
import './Poet.css'

const Poet = (props) => {
    // console.log(props)
    const {name,img,age,salary,village,identity} = props.poet
    return (
        <div className="information-container">
            <div>
            <div>
               <img style={{width:'200px',padding:'0 50px',margin:'10px 0'}} src={img} alt="" />
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
                   add to cart
                   </button>
            </div>
            </div>
        </div>
    );
};

export default Poet;