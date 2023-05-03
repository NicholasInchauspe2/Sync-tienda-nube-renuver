import { useState, useEffect, type FC } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { Icons, Sounds } from '@/constants/assets.constants';
import styles from './whatsapp.module.scss';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';

const WhatsAppBtn: FC = () => {
	const [notification, setNotification] = useState<boolean>(false);
	const CHAT_MESSAGE =
		'¡Hola! ✨ \n\nSoy Reni, asistente comercial de Renúver 😊\n\n¿En qué puedo ayudarte?';

	const sendNotification = (): void => {
		setNotification(true);
	};

	useEffect((): (() => void) => {
		const NOTIFICATION_AUDIO = new Audio(Sounds.NOTIFICATION);

		const play = async (): Promise<void> => {
			await NOTIFICATION_AUDIO.play();
		};

		if (notification) {
			play().catch((error) => {
				console.error(error);
			});
		}

		return () => {
			NOTIFICATION_AUDIO.pause();
		};
	}, [notification]);

	if (WHATSAPP_NUMBER === undefined) return <></>;

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
			onNotification={sendNotification}
		/>
	);
};

export default WhatsAppBtn;
