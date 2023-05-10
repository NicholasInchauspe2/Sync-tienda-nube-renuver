import { useEffect, useState, type FC } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { Icons, Sounds } from '@/constants/assets.constants';
import styles from './whatsapp.module.scss';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';

const WhatsAppBtn: FC = () => {
	const [notification, setNotification] = useState<boolean>(false);
	const CHAT_MESSAGE =
		'¡Hola! ✨ \n\nSomos Renúver, estamos acá para acompañarte a buscar lo que querés. 😊\n\n ¿En qué podemos ayudarte?';

	useEffect(() => {
		if (notification) {
			new Audio(Sounds.NOTIFICATION)
				.play()
				.then((data) => {
					console.log(data);
				})
				.catch((error) => {
					console.error(error);
				});
		}
	}, [notification]);

	if (WHATSAPP_NUMBER.length === 0) return <></>;

	return (
		<FloatingWhatsApp
			phoneNumber={WHATSAPP_NUMBER}
			accountName="Renúver"
			allowEsc
			allowClickAway
			notification
			avatar={Icons.FAVICON}
			chatMessage={CHAT_MESSAGE}
			messageDelay={1}
			notificationDelay={3}
			placeholder={'Escribe un mensaje'}
			chatboxHeight={350}
			statusMessage={'Siempre disponibles para ayudarte'}
			chatboxClassName={styles.container}
			onNotification={() => {
				setNotification(true);
			}}
		/>
	);
};

export default WhatsAppBtn;
