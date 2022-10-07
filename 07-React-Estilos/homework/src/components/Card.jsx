import React from 'react';
import s from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (<div className={s.div}>
    <div>
      <div className={s.div1}>
        <button className={s.button} onClick={props.onClose}>X</button>
      </div>
      <h2>{props.name}</h2>
      <div className={s.div2}>
        <h4 className={s.h4}>
          <ul>Min</ul>
          <ul>{props.min}°</ul>
        </h4>
        <h4 className={s.h4}>
          <ul>Max</ul>
          <ul>{props.max}°</ul>
        </h4>
        <img className={s.img} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='Img not found'/>
      </div>
    </div>  
  </div>)
};