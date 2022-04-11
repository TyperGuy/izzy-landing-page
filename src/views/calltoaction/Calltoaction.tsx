import React from "react";
import Styles from './Calltoaction.module.scss';
import Simulator from "components/simutator/Simulator";


const Calltoaction: React.FC = () => (

  <div className={Styles.container}>
    <div className={Styles.childContainer}>
      <div className={Styles.actioncontainer}>
        <p className={Styles.title}>Seguros <strong className={Styles.strong}>encaixam</strong>  perfeitamente em cada um</p>
        <p className={Styles.content}>A primeira Startup Angolana focada em levar os seguros a população de baixa renda usando  canais presencial e virtual</p>
        <Simulator/>
     </div>
    <div className={Styles.imgContainer}/>
    </div>
  </div>

);

export default Calltoaction;
