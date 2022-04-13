import { Collapse } from 'antd';
import Styles from './Fqa.module.scss';
import Data from '../../international/pt-pt/fqa.json';

const { Panel } = Collapse;

const Fqa:React.FC = () =>(
  <div className={Styles.container}>
    <h1>Peruntas mais frequêntes</h1>
    <Collapse accordion className={Styles.collapse} defaultActiveKey={['1']} ghost>
      {
        Data.map(fqa =>(
            <Panel style={{fontSize:'1.2rem'}} header={fqa.question} key={fqa.id}>
              <p style={{fontSize:'1rem', color:'#808080', marginLeft:'20px'}}>{fqa.answer}</p>
              <ul style={{listStyleType:'circle',fontSize:'1rem', color:'#808080', marginLeft:'20px'}}>
                {
                  fqa.options.map(option =><li>{option}</li>)
                }
              </ul>
            </Panel>
          )
        )
      }

    </Collapse>
  </div>
);

export default Fqa;
