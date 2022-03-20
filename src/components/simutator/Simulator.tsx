import React from "react";
import Styles from './Simulator.module.scss';
import { Select,Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import { BsJoystick as Icon } from 'react-icons/bs';

const { Option } = Select;

const Simulator: React.FC = () => (
 
  <div className={Styles.container}>
      <Select placeholder="Seguro Desejado" size="large" className={Styles.select}>
        <Option value="lucy">lucy</Option>
        <Option value="Mingo">Mingo</Option>
        <Option value="lucy">lucy</Option>
      </Select>
      <Select  placeholder="Anuidade..." size="large" className={Styles.select}>
        <Option value="lucy">lucy</Option>
        <Option value="Mingo">Mingo</Option>
        <Option value="lucy">lucy</Option>
        <Option value="lucy">lucy</Option>
        <Option value="lucy">lucy</Option>
      </Select>
      <Button className={Styles.btn} icon={<Icon/>} size="large" >Simular</Button>
  </div>
  
);

export default Simulator;
