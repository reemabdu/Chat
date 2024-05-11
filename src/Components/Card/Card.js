// import Card from 'react-bootstrap/Card';




// function card(props) {
//   return (
//     <div className="cards">
//       <div className="carda">
     
//          <h2>{props.title}</h2>
//          <p>{props.content}</p>
//          <div className="icon"> 
     
//         </div>
         
      
  
//       </div>
    
//     </div>
//   );
// }

// export default card;
    

// import React from 'react';
import * as React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ title, image, geminiLink }) => {
  return (
    <div className="cards">
    <div className="carda">
      <img src={image} alt={title} />
      {/* <p>{title}</p> */}
      <Link to={{ pathname: geminiLink }}>
        <button>Gemini</button>
      </Link>
    </div>
    </div>
  );
};

export default Card;
    

