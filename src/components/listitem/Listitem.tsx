import React from 'react';
import Styled from './Listitem.module.scss';
import {FiArrowRight as Arrow} from 'react-icons/fi';
import {IoLayersSharp, IoLayersSharp as Shape} from 'react-icons/io5';
import image1 from '../../../public/ilustration/auto.png';
import image2 from '../../../public/ilustration/buisness.png';
import image3 from '../../../public/ilustration/home.png';
import image4 from '../../../public/ilustration/tragedy.png';
import Image from 'next/image'


type Item = {
  title: string;
  content: string;
  img : number;
  page : string;
  key: string;
};

let images = [
  image1,image2,image1,image4
]


const Menuitem : React.FC<Item> =({...Item}) => {

  const lazyRoot = React.useRef(null)
  return(
    <div className={Styled.container}>
      <div ref={lazyRoot} className={Styled.box}>
        <Image src={images[Item.img]} alt={Item.title} />
      </div>
      <div className={Styled.childContainer}>
        <div className={Styled.titleContainer}>
          <span className={Styled.title}>{Item.title}</span>
          <Arrow className={Styled.arrow}/>
        </div>
        <p className={Styled.wrapper}>{Item.content}</p>
      </div>
    </div>
  )
}

export default Menuitem;
