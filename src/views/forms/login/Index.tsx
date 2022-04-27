import Styles from './Styles.module.scss';
import Link from 'next/link';
import  { Input} from 'antd';
import {IconButton} from '../../../components/button/Button';
import Logo from '../../../components/logo-image/Logo';



const { TextArea } = Input;




const Login:React.FC = () =>(
  <div className={Styles.container}>
    <Link href="/"><a><Logo/></a></Link>
    <h2>Seja bem vindo</h2>
    <div className={Styles.myForm} >
      <Input className={Styles.input} placeholder="Telefone" />
      <Input.Password type="password" className={Styles.input} placeholder="Palavra Pass" />
      <IconButton isOutline={false} title="Entrar"/>
      <div>
        <a>Esqueci-me da palavra passe</a>
        <div><span>Não tem uma conta ? </span> <a>Cadastrar</a></div>
      </div>
    </div>
  </div>
);

export default Login;





