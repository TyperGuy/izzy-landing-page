import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Calltoaction from 'views/calltoaction/Calltoaction';
import Partners from 'components/partners/Partners';
import  Benefities from 'views/benefities/Benefities';
import Download from '../../components/download/Download';
import Fqa from '../../components/fqa/Fqa';
import Footer from '../../components/footer/Footer';
import Contact from '../../components/contact/Contact';
import React from 'react';
import FloatingButton from 'components/landing-page-float-buttons';


const LandingPage: NextPage = () => {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log('altura', window.innerHeight)
      const $float = document.getElementById('float');
      const floating = $float?.getBoundingClientRect();

      if(floating && floating.bottom - window.innerHeight > 10){
        setIsScrolling(true)
      }else setIsScrolling(false)
    })

    return window.addEventListener('scroll', () => {})
  }, [isScrolling])



  return(
    <div id="float" style={{ display: 'flex', height: 'auto',flexDirection: 'column',alignItems: 'center'}}>
      <div style={{width: '100%', height: '70px', borderBottom: '1px solid #ebebeb', display: 'flex', alignItems: 'center' ,justifyContent: 'center'}}>
        <Header/>
      </div>
      <FloatingButton isOnBottom={isScrolling} />
      <Calltoaction/>
      <Partners/>
      < Benefities/>
      <Download/>
      <Fqa/>
      <Contact/>
      <Footer/>
    </div>
  )
};

export default LandingPage;
