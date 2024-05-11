// import logo from './logo.svg';
import React from 'react';
import Navbar from "../Components/NavBar/Navbar";
import Card from "../Components/Card/Card";
import Hero from "../Components/Hero/Hero";
import Nav2 from '../Components/Nav2/Nav2';

import './home.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Botton from '../Components/Botton/Botton';



  function Home() {

    const data = [
      { title: 'Suggest beautiful places to see on an upcoming road trip', image: 'https://image1.jpg', geminiLink: '/places-to-see' },
      { title: 'Briefly summarize this concept: urban planning', image: 'https://image2.jpg', geminiLink: '/team-bonding-activities' },
      { title: 'React Native:Brainstorm team bonding activities for our work retreat', image: 'https://image3.jpg', geminiLink: '/react-react-native' },
      { title: 'React Native:Brainstorm team bonding activities for our work retreat', image: 'https://image3.jpg', geminiLink: '/react-react-native' },

    ];
    
  return (
  
    <div >
 
    <Navbar/>
  
      <div className="main">
      <Nav2/>
        <Hero />
     

      <div className="cards">
        {data.map((cardData) => (
          <Card key={cardData.title} {...cardData} />
        ))}
      </div>
        <div >




        </div>
        <Botton/>
      </div>  
   

  </div>
  );
}

export default Home;