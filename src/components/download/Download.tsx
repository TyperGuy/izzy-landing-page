import React from "react";
import Styles from './Download.module.scss';
import img from '../../../public/phone.png';
import apple from '../../../public/applestore.png';
import google from '../../../public/playstore.png';
import Image from 'next/image';



const Download: React.FC = () => (

  <div className={Styles.container}>
    <div className={Styles.childContainer}>
      <div className={Styles.flexContainer}>
            <div><span className={Styles.tag}>producto</span> </div>
            <div className={Styles.heading} ><span >Seguros criados a medida de cada um, de forma <span className={Styles.marker}>inclusiva</span> </span></div>
            <div className={Styles.downloadContainer}>
              <Image className={Styles.imgBtn} src={google} alt="" />
              <Image className={Styles.imgBtn} src={apple} alt="" />
            </div>
         </div>
      <div className={Styles.img}>
        <Image src={img} alt="" />
      </div>
    </div>
  </div>

);

export default Download;
