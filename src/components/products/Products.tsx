import React from 'react';
import Styles from './Products.module.scss';
import {FiArrowRight as Arrow} from 'react-icons/fi';
import {BsShop} from 'react-icons/bs';





const Products : React.FC =() => {

  return(
    <div className={Styles.container}>
      <div className={Styles.icon}>
        <BsShop style={{color:'red',fontSize:'1.7rem', margin:'1rem'}}/>
      </div>
      <div className={Styles.childContainer}>
        <div><span className={Styles.wrapper}>Negócios</span></div>
        <div className={Styles.text}><span>A suite of products integrated to make your life  </span></div>
        <div className={Styles.titleContainer}>
          <span className={Styles.title}>ver mais</span>
          <Arrow className={Styles.arrow}/>
        </div>
      </div>
    </div>
  )
}

export default Products;



