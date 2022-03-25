import React from "react";
import Styles from './Simulator.module.scss';
import { Select} from 'antd';
import {Button} from 'components/button/Button';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import { BsJoystick as Icon } from 'react-icons/bs';

const { Option } = Select;

const Simulator: React.FC = () => (
 
  <div className={Styles.container}>
      <Select placeholder="Seguro Desejado" size="large" className={Styles.select}>
        <Option value="lucy">lucy</Option>
        <Option value="Mingo">Mingo</Option>
        <Option value="lucky">lucky</Option>
      </Select>
      <Select  placeholder="Anuidade..." size="large" className={Styles.select}>
      <Option value="lucy">lucy</Option>
        <Option value="Mingo">Mingo</Option>
        <Option value="Mingotas">Mingotas</Option>
        <Option value="Eduarda">Eduarda</Option>
        <Option value="Gorduchas">Gorduchas</Option>
      </Select>
      <Button isOutline={false} title={"Constants.buttons.signup"}/>
  </div>
  
);

export default Simulator;
