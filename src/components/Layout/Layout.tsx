import { type FC, type PropsWithChildren } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppBtn from './WhatsApp/WhatsApp';
import styles from './layout.module.scss';

const Layout: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Navbar />
			<main id={styles.main}>{children}</main>
			<WhatsAppBtn />
			<Footer />
		</>
	);
};

export default Layout;
