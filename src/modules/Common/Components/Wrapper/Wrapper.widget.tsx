import type { FunctionComponent } from 'react';
import styles from'./Wrapper.module.scss';

interface Props {
    style: any
    children: any 
}

const Wrapper: FunctionComponent<Props> = (props) => {
return (<div className={styles.wrapper} 
    style={props.style}>
        {props.children}</div>);
}


export default Wrapper;