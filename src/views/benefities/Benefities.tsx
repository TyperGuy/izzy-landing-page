import React from "react";
import Styles from './Benefities.module.scss';
import {BsShop} from 'react-icons/bs';



const Benefities: React.FC = () => (
 
  <div className={Styles.container}>

    <div className={Styles.childContainer}>
      <div className={Styles.flexContainer}>
        <p className={Styles.heading}>A medida para cada um</p>
        <h1>lklklkllkklklklss</h1>
      </div>
      <div>
        <div className={Styles.filter}>
          <div className={Styles.icon}>
            <BsShop style={{color:'red',fontSize:'2rem'}}/>
          </div>
          <div>
            <div><span className={Styles.title}>cdddddfdfdffddf</span></div>
            <span>dkm fkkdklkldkl kdkkkcjkds</span>
          </div>
        </div>
      </div>
    </div>
     
  </div>
  
);

export default Benefities;
