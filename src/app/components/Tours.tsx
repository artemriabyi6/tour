'use client';

import { useRef, lazy, Suspense, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./tours.module.scss";


const LazyTour = lazy(() => import("./Tour"));

const tours = [
  { id: 1 },
];

const Tours = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); 

 
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (isInView) setShouldLoad(true);
  }, [isInView]);

  return (
    <section ref={ref} className={styles.section}>
      <motion.div
        className={`container ${styles.container}`}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className={styles.infoBlock}>
          <h2 className={styles.title}>
            Leave <br />
            <span>it to us!</span>
          </h2>
          <p className={styles.text}>
            Write a paragraph that talks about your company here. You can talk
            about your company's background, history, mission, vision, or
            philosophy.
          </p>
        </div>

        <div className={styles.carouselBlock}>
          {shouldLoad && (
            <Suspense fallback={<p>Loading tours...</p>}>
              {tours.map((tour) => (
                <LazyTour key={tour.id} />
              ))}
            </Suspense>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Tours;
