import { Button } from '@/types';
import styles from './button.module.scss';

const Button = ({ children, type, ...rest } : Button) => {
    return (
        <button className={`${styles.button} ${styles[type]}`} {...rest}>
            {children}
        </button>
    )
};

export default Button;
