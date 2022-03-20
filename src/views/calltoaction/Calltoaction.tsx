import React from "react";
import Styles from './Calltoaction.module.scss';

const Calltoaction: React.FC = () => (
  <div className={Styles.container}>
    <div className={Styles.actioncontainer}>
      <p className={Styles.title}>Seguros <strong className={Styles.strong}>encaixam</strong>  perfeitamente em cada um</p>
      <p>Organize seu dinheiro em tempo real em uma solução completa, prática e segura, e garanta o controle total das suas finanças.</p>
    </div>
    <div className={Styles.imgContainer}/>
  </div>
  
);

export default Calltoaction;
