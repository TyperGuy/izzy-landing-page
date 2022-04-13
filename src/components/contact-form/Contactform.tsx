import Styles from './Contactform.module.scss';
import  { Input} from 'antd';
import {IconButton} from '../button/Button';


const { TextArea } = Input;




const ContactForm:React.FC = () =>(
  <div className={Styles.container}>
    <div className={Styles.myForm} >
      <h2>Fale conosco</h2>
      <Input type="email" className={Styles.input} placeholder="Seu nome" />
      <Input className={Styles.input} placeholder="seuemail@dominio.com" />
      <TextArea placeholder="Escreva aqui a tua mensagem" rows={4} />
      <IconButton isOutline={false} title="Enviar"/>
    </div>
  </div>
);

export default ContactForm;





