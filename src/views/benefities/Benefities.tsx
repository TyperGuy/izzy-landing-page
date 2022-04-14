import React from "react";
import Styles from './Benefities.module.scss';
import Products from 'components/products/Products';
import { products } from "./bebefities.data";

export interface IProduct {
  id: string;
  title: string;
  description: string;
  img: string;
}

const Benefities: React.FC = () => {
  const [selectedProduct, setselectedProduct] = React.useState<IProduct>(products[0]);

  const handleSelect = React.useCallback((product: IProduct) => {
    setselectedProduct(product);
  }, [])

  return(
  <div className={Styles.container}>
    <div className={Styles.childContainer}>
      <div className={Styles.flexContainer}>
         <div className={Styles.flexContainer}>
            <div><span className={Styles.tag}>producto</span> </div>
            <div className={Styles.heading} ><span >Seguros criados a medida de cada um, de forma <span className={Styles.marker}>inclusiva</span> </span></div>
            <p>A suite of products integrated to make your life easier when it comes to setting up design systems.</p>
         </div>
         <div className={Styles.flexContainer}>
           {products.map(product => (
              <Products
                key={product.id}
                title={product.title}
                description={product.description}
                handleSelect={() => handleSelect(product)}
              />
            ))}
        </div>

      </div>
      <div className={Styles.infContainer}>
        <img src={selectedProduct.img} alt="" className={Styles.infImg} />
        <h1 className={Styles.infTitle}>{selectedProduct.title}</h1>
        <p className={Styles.infDescription}>{selectedProduct.description}</p>
      </div>
    </div>
  </div>

)};

export default Benefities;
