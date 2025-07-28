'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import styles from './footer.module.scss';

const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3, once: true }); // 30% і тільки один раз

    return (
        <footer ref={ref} className={styles.footer}>
            <motion.div
                className={`container ${styles.container}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h3 className={styles.title}>
                    <span className={styles.icon}>
                        <Image
                            src="/assets/location-pin.svg"
                            alt=""
                            width={30}
                            height={30}
                        />
                    </span>
                    Leave Tours
                </h3>

                <motion.div
                    className={styles.banner}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <Image
                        src="/assets/mountain.webp"
                        alt="Mountain Banner"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </motion.div>

                <motion.div
                    className={styles.infoBlock}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <div className={styles.phone}>
                        <p>Phone</p>
                        <p>(099) 6373164</p>
                    </div>
                    <div className={styles.email}>
                        <p>Email</p>
                        <p>artemriabyi8@gmail.com</p>
                    </div>
                    <div className={styles.social}>
                        <p>Social</p>
                        <Image
                            src="/assets/instagram.svg"
                            alt="instagram"
                            width={30}
                            height={30}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;
