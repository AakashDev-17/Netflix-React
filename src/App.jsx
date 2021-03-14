import React from 'react';
import { Cards } from './Cards';
import { Data } from './Data';

function App() {


   return (
      <>
         <h1 className="title"> List of Top 5 Netflix Series </h1>
         <div className="cardBox">
            {Data.map((val) => {
               return (
                  <Cards
                     key={val.id}
                     imgsrc={val.imgsrc}
                     heading={val.heading}
                     name={val.name}
                     link={val.link}
                  />
               )
            }
            )}
         </div>
      </>
   )
}

export default App;