import type { NextPage } from 'next';
import Header from '../../components/header/Header';
import Calltoaction from 'views/calltoaction/Calltoaction';
import Partners from 'components/partners/Partners'


const LandingPage: NextPage = () => (
  <div>
    <div style={{width: '100%', height: '70px', borderBottom: '1px solid #ebebeb', display: 'flex', alignItems: 'center' ,justifyContent: 'center'}}>
      <Header/> 
    </div>
    <Calltoaction/>
    <Partners/> 
  </div>
  
);

export default LandingPage;
