import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from './section.module.scss';

const SectionReasons = () => {

  const reasons = [
    {
      icon: 'verified',
      title: 'Calidad verificada',
      description: 'Vendedores evaluados a un control de calidad exigente y continuo.'
    },
    {
      icon: 'label',
      title: 'La mejor oferta disponible',
      description: 'El algoritmo de la web te da la mejor calidad-precio.'
    },
    {
      icon: 'shield',
      title: 'Un servicio excelente',
      description: 'Compra segura y atención al cliente'
    },
    {
      icon: 'energy2',
      title: 'Impacto positivo',
      description: 'La alternativa a lo nuevo: reacondicionado y feliz.'
    }
  ];
  
  return (
    <section id={styles.container}>
      <h2>
        Por qué comprar en Furbi
      </h2>
      <div className={styles.content}>
        {
          reasons.map(({icon, title, description}) => (
            <div className={styles.card}>
              <figure className={styles.image}>
                <Image
                  src={`/images/${icon}.svg`}
                  alt={icon}
                  layout="fill"
                />
              </figure>
              <h3>
                {title}
              </h3>
              <p>
                {description}
              </p>
            </div>
          ))
        }
      </div>
      <Button type='secundary'>
        Conocé más sobre tus beneficios
      </Button>
    </section>
    )
  };

export default SectionReasons;