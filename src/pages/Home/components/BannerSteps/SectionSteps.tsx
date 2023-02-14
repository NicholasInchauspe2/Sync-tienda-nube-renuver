import React from 'react';
import Image from 'next/image';
import styles from './section.module.scss';

const SectionReasons = () => {

  const reasons = [
    {
      icon: 'step1',
      title: 'Encontrá el iPhone ideal para vos',
      description: 'Todos los vendedores están certificados y tienen tiendas físicas verificadas.'
    },
    {
      icon: 'step2',
      title: 'Retiralo o recibilo a domicilio',
      description: 'Podes retirar tu iPhone por el local del vendedor o recbirlo en tu domicilio.'
    },
    {
      icon: 'step3',
      title: 'Probalo por 7 días',
      description: 'Si te arrepentís lo podes devolver sin cargo.'
    }
  ];
  
  return (
    <section id={styles.container}>
      <h2>
        Comprar un iPhone reacondicionado, nunca fue tan fácil y seguro.
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
    </section>
    )
  };

export default SectionReasons;