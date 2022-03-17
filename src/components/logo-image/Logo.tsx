import type { NextPage } from 'next';
import IMG from '../../assets/images/logo.svg';
import Image from 'next/image';


const CustomImage: NextPage = () => (
  <div>
    <Image width={110} height={50} src={IMG} alt="" />
  </div>
);

export default CustomImage;
