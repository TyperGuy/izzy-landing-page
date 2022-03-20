import type { NextPage } from 'next';
import IMG from '../../assets/images/logo.svg';
import Image from 'next/image';


const CustomImage: NextPage = () => (
  <div>
    <Image width={130} height={70} src={IMG} alt="" />
  </div>
);

export default CustomImage;
