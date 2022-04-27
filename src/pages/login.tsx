import type { NextPage } from 'next';
import Form from 'views/forms/login/Index';

const Login: NextPage = () => (

    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#fefefe',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <Form/>

    </div>

);

export default Login;
