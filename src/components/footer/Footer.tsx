import Styles from './Footer.module.scss';
import {BsTwitter,BsLinkedin} from 'react-icons/bs';
import {FaFacebookSquare as BsFacebook} from 'react-icons/fa';


const Footer:React.FC = () =>(
  <div className={Styles.container}>
      <div className={Styles.childContainer}>
        <div className={Styles.upContainer}>
          <div className={Styles.infoContainer}>
            <h2>IZZY Seguros</h2>
            <p>Insurtech mediadora de seguros, focada em simplificar os seguros e levá-los a população de baixa renda. </p>
          </div>
          <div className={Styles.infoContainer}>
            <h2>Redes Sociais</h2>
            <div className={Styles.icon}><BsFacebook/><BsLinkedin/><BsTwitter/></div>
          </div>
        </div>
        <div className={Styles.downContainer}>
          <span>Copyright © 2022 IZZY SEGUROS - Todos os direitos reservados</span> <a> Política de Privacidade</a>
        </div>

      </div>

  </div>
);

export default Footer;
