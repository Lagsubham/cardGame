import React from "react";
import Card from "./Card";
import  { useState ,useEffect } from "react";


export default function Main(){

    const [clickCard,setClickCard]=useState([])
    const [currentScore,setCurrentScore]=useState(0)
    const [bestScore,setBestScore]=useState(0)

    const [cardData,setCardData]=useState([
        {title:'car-1',
        imageurl:"./images/car-1.jpg"
        },
        {title:'car-2',
        imageurl:"./images/car-2.jpg"
        },
        {title:'car-3',
        imageurl:"./images/car-3.jpg"
        },
        {title:'car-4',
        imageurl:"./images/car-4.jpg"
        }
    ])
   const shuffleCards=()=>{
    const shuffleData=[...cardData]
    let j=0;
    for(let i=shuffleData.length-1;i>0;i--){
         j=Math.floor(Math.random()*(i+1))
         const temp = shuffleData[i];
         shuffleData[i] = shuffleData[j];
         shuffleData[j] = temp;
    }
    setCardData(shuffleData)
   }
  

   const clickCards=(title)=>{
    if(clickCard.includes(title))
    resetScore()
    else
      updateScore()
      setClickCard([...clickCard,title])
   }

   function updateScore(){
        setCurrentScore(currentScore+1)
        if(currentScore>=bestScore)
        setBestScore(currentScore+1)
   }

   function resetScore(){
    setCurrentScore(0)
    setClickCard([])
   }
  
   useEffect(() => {
    shuffleCards();
  }, [clickCard, currentScore]);

    return(

        <div>
        <div className="heda">
         <h3>Current Score:{currentScore}</h3>
         <h3>Best Score:{bestScore}</h3>
         </div>
         <div className="card-container">
        {cardData.map((card,index)=>(
            <Card key={index} title={card.title} imageurl={card.imageurl} handelCard={clickCards}/>
            ))}
        </div>
        </div>
    )
}