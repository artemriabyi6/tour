'use client';

import styles from './adventures.module.scss';
import AdventureCard from './AdventureCard';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type AdventureCardType = {
  id: number;
  title: string;
  price: string;
  description: string;
  img: string;
};

const adventuresCards: AdventureCardType[] = [
  {
    id: 1,
    title: 'Self-Paced Tour',
    price: '399',
    description: 'Give a detailed description of the package you are serving.',
    img: '/assets/adventure1.webp'
  },
  {
    id: 2,
    title: 'Semi-Guided Tour',
    price: '599',
    description: 'Give a detailed description of the package you are serving.',
    img: '/assets/adventure3.webp'
  },
  {
    id: 3,
    title: 'Fully Guided Tour',
    price: '499',
    description: 'Give a detailed description of the package you are serving.',
    img: '/assets/adventure2.webp'
  }
];

// Анімаційні варіанти для контейнера з картками
const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6,
      delayChildren: 0.5,
    },
  },
};

// Анімація кожної картки
const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const  } },
};

const Adventures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className={styles.section}>
      <div className={`container ${styles.container}`}>
        {/* Заголовок з анімацією зверху вниз */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Nature <span>Adventures</span>
        </motion.h2>

        {/* Контейнер з картками — stagger animation */}
        <motion.div
          className={styles.adventureBlock}
          variants={cardsContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {adventuresCards.map((card) => (
            <motion.div key={card.id} variants={cardVariants}>
              <AdventureCard
                title={card.title}
                price={card.price}
                description={card.description}
                img={card.img}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Adventures;
