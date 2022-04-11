import React from "react";
import Styles from './Benefities.module.scss';
import Products from 'components/products/Products';



const Benefities: React.FC = () => (

  <div className={Styles.container}>

    <div className={Styles.childContainer}>
      <div className={Styles.flexContainer}>
         <div className={Styles.flexContainer}>
            <div><span className={Styles.tag}>producto</span> </div>
            <div className={Styles.heading} ><span >Seguros criados a medida de cada um, de forma <span className={Styles.marker}>inclusiva</span> </span></div>
            <p>A suite of products integrated to make your life easier when it comes to setting up design systems.</p>
         </div>
         <div className={Styles.flexContainer}>
           <Products/>
           <Products/>
           <Products/>
           <Products/>
        </div>

      </div>
      <div className={Styles.infContainer}>

      </div>
    </div>
  </div>

);

export default Benefities;
