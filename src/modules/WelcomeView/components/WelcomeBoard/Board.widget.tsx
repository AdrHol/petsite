import type { FunctionComponent } from "react";
import styles from './Board.module.scss';


const Board : FunctionComponent = () => {
    return (
        <div className={styles.board}>
            Here there will be information about our page
        </div>
    )
}

export default Board;