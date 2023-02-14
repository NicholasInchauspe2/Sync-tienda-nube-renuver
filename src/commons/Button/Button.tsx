import { Props } from '@/types';
import styles from './button.module.scss';

const Button = ({ children, ...rest } : Props) => {
    return (
        <button className={styles.button}>
            {children}
        </button>
    )
};

export default Button;
