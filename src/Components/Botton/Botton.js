// import logo from './logo.svg';
import * as React from 'react';
import botpho from "../assets/H.png";
import './Botton.css';
import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import newchat from '../../Newchat';
// import Chat from '../../pages/Chat';

function Botton() {
    const [input , setInput] = useState("")
    const [result,setResult] = useState('')
    const navigate = useNavigate();
    const handleChange = (e)=>{
    setInput(e.target.value)
    }
    const Reset = ()=>{
    setResult("")
    }
    const chatAi = async () => {
        const RuseltChat = await newchat(input);
        setResult(RuseltChat);
        localStorage.setItem("res",RuseltChat)
        navigate('/Chat')

      };

    return (
<div>
<div className="search-box">
    <input type="text" onChange={handleChange} onClick={Reset}  placeholder="Enter a prompt here" ></input>
    <img src={botpho} alt="botpho" />
    <button onClick={chatAi}>Ask me</button>      
 </div>
 <div className='result'>{localStorage.getItem("res")}</div>
 <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p></div>
   
        );
}

export default Botton;




// import * as React from 'react';
// import botpho from "../assets/H.png";
// import './Botton.css';
// import { useState } from 'react';
// import newchat from '../../Newchat';

// function Botton() {
//   const [input, setInput] = useState("");
//   const [result, setResult] = useState('');
//   const [showResult, setShowResult] = useState(false); // State to control result visibility

//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };

//   const Reset = () => {
//     setResult("");
//     setShowResult(false); // Reset the result visibility
//   };

//   const chatAi = async () => {
//     const RuseltChat = await newchat(input);
//     setResult(RuseltChat);
//     setShowResult(true); // Show the result when the button is clicked
//   };

//   return (
//     <div>
//       <div className="search-box">
//         <input type="text" onChange={handleChange} onClick={Reset} placeholder="Enter a prompt here"></input>
//         <button onClick={chatAi}>Ask me</button>
//       </div>
//       {showResult && (
//         <div className="resultContainer"> {/* Use a container for styling */}
//           <div className="result">{result}</div>
//           <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Botton;