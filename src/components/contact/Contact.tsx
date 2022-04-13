import Styles from './Contact.module.scss';
import Form from '../contact-form/Contactform';

const Contact:React.FC = () =>(
  <div className={Styles.container}>
    <div className={Styles.childContainer}>
      <div className={Styles.locationsContainer}>
        <h2>Nos viste quando quiser</h2>
        <p>Estamos abertos a visitas de qualquer
         pessoa que queira nos conhecer, e saber um
         pouquinho do trabalho incrivel que temos feito.</p>

         <div style={{marginTop:'3rem'}}>
           <p>Email: geral@izzyseguros.ao</p>
           <p>Telefone: (+244) 923 60 63 95</p>
           <p>Morada: São João Nº4, Ngola Kiluanje, Cazenga, Luanda/Angola</p>
         </div>

      </div>
      <div className={Styles.formContainer}>
        <Form/>
      </div>
    </div>
  </div>
);

export default Contact;
