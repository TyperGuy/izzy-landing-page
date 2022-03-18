import type { NextPage } from 'next';
import Header from '../../components/header/Header';


const LandingPage: NextPage = () => (
  <div style={{width: '100%', height: '70px', borderBottom: '1px solid #ebebeb', display: 'flex', alignItems: 'center' ,justifyContent: 'center'}}>
     <Header/>
  </div>
);

export default LandingPage;