'use client';

import { FC } from 'react';
import styles from './offer.module.scss';
import Image from 'next/image';

type Props = {
  img: string;
  title: string;
};

const OfferCard: FC<Props> = ({ img, title }) => {
  return (
    <div className={styles.offerCard}>
      <Image
        src={img}
        alt={title}
        fill
        className={styles.image}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className={styles.titleOverlay}>{title}</div>
    </div>
  );
};

export default OfferCard;
