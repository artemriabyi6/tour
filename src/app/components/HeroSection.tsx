'use client';

import styles from "./heroSection.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const title = "Leave Tours";

// Створюємо анімаційні варіанти
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.3,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <video
        className={styles.video}
        src="https://res.cloudinary.com/daqtqvg3i/video/upload/v1753715956/waterfall_2_rzmwd7.mp4"
        autoPlay
        muted
        loop
      ></video>

      <div className={styles.container}>
        {/* Анімований заголовок по літерах */}
        <motion.h1
          className={styles.title}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            className={styles.pin}
            src="../assets/location-pin.svg"
            width={30}
            height={30}
            alt="pin"
          />
          {/* Анімуємо кожну літеру */}
          {title.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Опис з затримкою після заголовка */}
        <motion.div
          className={styles.descBlock}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
        >
          <p className={styles.text}>
            Heed the call of <br /> nature and{" "}
            <span>
              leave it <br /> all behind.
            </span>
          </p>

          <motion.button
            className={styles.bookBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book now{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.icon}
            >
              <path d="M9 18l6-6-6-6" />
            </svg>{" "}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
