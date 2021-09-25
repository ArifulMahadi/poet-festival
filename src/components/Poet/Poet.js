import React from 'react';
import './Poet.css'

const Poet = (props) => {
    console.log(props.poet)
    const {name,img,age,salary,village,identity} = props.poet
    return (
        <div>
            <div>
               <img style={{width:'150px'}} src={img} alt="" />
            </div>
            <div>
               <h4>{name}</h4>
               <p>age:{age}</p>
               <p>village:{village}</p>
               <p>salary:${salary}</p>
               <h6>identity:{identity}</h6>
               <button>add to cart</button>
            </div>
        </div>
    );
};

export default Poet;