import React, { useState, useEffect } from 'react';
import BirthdayMessage from './Wishes';
import './WelcomeScreen.css'; 
import coupleImage from './Image/couple.gif';
import Music from './Music/PleaseTellMeWhy.mp3'
import StartClick from './Image/startclick.png';

const WelcomeScreen = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  
  const handleStartClick = () => {
    setShowMessage(true);
    startMusic();
  };
  const startMusic = () => {
    if (!musicStarted) {
      const audio = new Audio(Music);
      audio.play();
      setMusicStarted(true);
    }
  };
  useEffect(() => {
    const heartInterval = setInterval(() => {
      createHeart();
    }, 200); 

  
    return () => {
      clearInterval(heartInterval); 
    };
  }, []); 

  const createHeart = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`; 
    heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
    document.querySelector('.welcome-screen').appendChild(heart);
  
    setTimeout(() => {
      heart.remove(); 
    }, 3000); 
  };
  
  return (
    <div className="welcome-screen">
      {showMessage ? (
        <BirthdayMessage />
      ) : (
        <div className="welcome-content">
          <img src={StartClick} alt="Start Button" className="start-button" onClick={handleStartClick} />
        </div>
      )}
      <img src={coupleImage} alt="Couple" className="couple"  />
      <audio src={Music} autoPlay loop />
    </div>

    
  );
};

export default WelcomeScreen;
