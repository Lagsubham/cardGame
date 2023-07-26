import React from "react";

export default function Card(props) {
      
    const {title,imageurl,handelCard}=props;
    
    return (
        <div className="card"  onClick={handelCard}>
        <h2>{title}</h2>
        <img src={imageurl} alt={title}/>
        </div>
    )
}