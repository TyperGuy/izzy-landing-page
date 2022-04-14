import React from 'react';
import Styles from './Products.module.scss';
import {FiArrowRight as Arrow} from 'react-icons/fi';
import {BsShop} from 'react-icons/bs';


export interface IProduct {
  title: string
  description: string
  handleSelect: (product: object) => void
}


const Products : React.FC<IProduct> =({ title, description, handleSelect }) => {

  return(
    <div className={Styles.container} onClick={handleSelect}>
      <div className={Styles.icon}>
        <BsShop style={{color:'red',fontSize:'1.7rem', margin:'1rem'}}/>
      </div>
      <div className={Styles.childContainer}>
        <div><span className={Styles.wrapper}>{title}</span></div>
        <div className={Styles.text}><span>{description}</span></div>
        <div className={Styles.titleContainer}>
          <span className={Styles.title}>ver mais</span>
          <Arrow className={Styles.arrow}/>
        </div>
      </div>
    </div>
  )
}

export default Products;



