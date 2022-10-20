import React from "react";
import star from "../images/star.png"

export default function Card(props) {

    //const imgSrc = require(`../images/${props.coverImg}`);


    return (
        <div className="card" >
          <p className="card--title">Name : {props.name}</p>
          <p className="pet--type">Type : {props.type}</p>
          <p className="card--stats">Breed : {props.breed}</p>
          <p className="pet--sex">Sex : {props.sex}</p>
          <p className="card--price">Age : {props.age} months</p>
          {/*
            {
                badgeText &&
                <div className="card--badge">{badgeText}</div>
            }
            <img
                className="card--image"
                src={imgSrc}
                alt=""
            />
            <div className="card--stats">
                <img className="card--star"
                    src={star}
                    alt=""
                />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviwCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
                <p className="card--title">{props.title}</p>
                <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
            */}
        </div>
    )
}
