'use client';

import styles from './offer.module.scss';
import Image from 'next/image';
import type { FC } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type OfferType = {
  id: number;
  img: string;
  title: string;
};

const offers: OfferType[] = [
  {
    id: 1,
    img: '/assets/offer4.webp',
    title: 'Bespoke Tour Packages',
  },
  {
    id: 2,
    img: '/assets/offer2.webp',
    title: 'Certified Activity Guides',
  },
  {
    id: 3,
    img: '/assets/offer3.webp',
    title: 'A la Carte Activities to customers',
  },
  {
    id: 4,
    img: '/assets/offer1.webp',
    title: 'Transport & Airport Transfers',
  },
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const Offer: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  // const [shouldLoad, setShouldLoad] = useState(false)


  return (
    <section ref={ref}>
      <div className={`container ${styles.container}`}>
       
        <motion.h3
          className={styles.title}
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' as const }}
        >
          What We <span>Can Offer You</span>
        </motion.h3>

       
        <motion.p
          className={styles.subTitle}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Add a short description of the business and the services that you provide.
        </motion.p>

       
        <motion.div
          className={styles.offerWrapper}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {offers.map((offer) => (
            <motion.div
              className={styles.offerCard}
              key={offer.id}
              variants={cardVariants}
            >
              <Image
                src={offer.img}
                alt={offer.title}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.titleOverlay}>{offer.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;
