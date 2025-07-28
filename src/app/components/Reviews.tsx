'use client';

import styles from "./reviews.module.scss";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ReviewType = {
  name: string;
  text: string;
};

const reviews: ReviewType[] = [
  {
    name: "Miguel Rivera",
    text: `Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.`,
  },
  {
    name: "Emily Johnson",
    text: `This service changed the way I work. Highly recommended to anyone who values quality and support.`,
  },
  {
    name: "Alex Tanaka",
    text: `I've seen great results after just a few weeks. Their team is professional and always there to help.`,
  },
];

// Контейнер для стагеру карток
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
    },
  },
};

// Варіант анімації кожної картки
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className={styles.section}>
      <video
        className={styles.videoBackground}
        src="https://res.cloudinary.com/daqtqvg3i/video/upload/v1753715958/forest-video_1_mqiyrz.mp4"
        autoPlay
        muted
        loop
      />

      <div className={`container ${styles.container}`}>
        {/* Заголовок */}
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          What Our <span>Clients Say</span>
        </motion.h3>

        {/* Стагер обгортка для карток */}
        <motion.div
          className={styles.reviewsWrapper}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reviews.map((review, index) => (
            <motion.div
              className={styles.reviewCard}
              key={index}
              variants={cardVariants}
            >
              <div className={styles.starsBlock}>
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/assets/star-icon.svg"
                    alt="star"
                    width={20}
                    height={20}
                  />
                ))}
              </div>

              <div className={styles.textBlock}>{review.text}</div>
              <p className={styles.name}>{review.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
