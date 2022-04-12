import type { NextPage } from 'next';
import Header from '../../components/header/Header';
import Calltoaction from 'views/calltoaction/Calltoaction';
import Partners from 'components/partners/Partners';
import  Benefities from 'views/benefities/Benefities';
import Download from '../../components/download/Download';


const LandingPage: NextPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
    <div style={{width: '100%', height: '70px', borderBottom: '1px solid #ebebeb', display: 'flex', alignItems: 'center' ,justifyContent: 'center'}}>
      <Header/>
    </div>
    <Calltoaction/>
    <Partners/>
    < Benefities/>
    <Download/>
  </div>

);

export default LandingPage;
