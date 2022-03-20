import React from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import * as Styles from './Partners.styles';
import Image from "next/image";
import IMG from "../../assets/images/insurence.png";


 

const Simulator: React.FC = () => (
 
  <div style={{width:'100%',height:200, backgroundColor:'#f5f5f5', display:'flex',justifyContent:'center', alignItems:'center'}}>
    <Styles.Container>
      <div style={{width:'200px',height:200, display:'flex',justifyContent:'center', alignItems:'center'}}>
        <p>Construindo um relacionamento forte com os nossos parceiros</p>
      </div>
      <Styles.ChildContainer>
        <Image width={200} height={40} src={IMG} alt="img n carregada" />
        <Image width={200} height={40} src={IMG} alt="img n carregada" />
        <Image width={200} height={40} src={IMG} alt="img n carregada" />
        <Image width={200} height={40} src={IMG} alt="img n carregada" />
     </Styles.ChildContainer>
    </Styles.Container>
  </div>
  
);

export default Simulator;
