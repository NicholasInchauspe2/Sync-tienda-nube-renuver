import { useRouter } from 'next/navigation';
import { Button } from "@/types";
import styles from "./button.module.scss";

const Button = ({ children, type = '', href = '', onClick, ...rest }: Button) => {
  const router = useRouter();
  const goTo = () => router.push(href);
  const handleButton = href ? goTo : onClick;
  return (
    <button className={`${styles.button} ${styles[type]}`} onClick={handleButton} {...rest}>
      {children}
    </button>
  );
};

export default Button;
