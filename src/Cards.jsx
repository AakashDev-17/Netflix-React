import React from 'react';

function Cards(props) {
   return (
         <div className='card'>
            <img src={props.imgsrc} alt="myPic" className="card_img" />
            <div className='card_info'>
               <span className="card_category"> {props.heading} </span>
               <h3 className="card_title"> {props.name} </h3>
               <a href={props.link} target="_blank">
                  <button> Watch Now </button>
               </a>
            </div>
         </div>
   );
}

export { Cards };