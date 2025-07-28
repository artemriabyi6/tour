'use client';

import { useEffect, useState } from 'react';
import styles from './tour.module.scss';

type SlideType = {
  id: number;
  title: string;
  description: string;
  img: string;
};

const slides: SlideType[] = [
  { id: 1, title: 'Customized Tours', description: 'Write a paragraph that talks about your company here. You can talk about your  background, history, mission, vision, or philosophy. ', img: '/assets/car.webp' },
  { id: 2, title: 'Hassle-free Arrangements', description: 'Anything that will introduce your brand persona to your clients. ', img: '/assets/forest.webp' },
  { id: 3, title: 'Flexible Rebooking Policy', description: 'This will help build a connection between you and them, that hopefully leads into a working relationship.', img: '/assets/house.webp' },
];

const Tour = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const getNextSlides = () => {
    const reordered = [...slides.slice(activeIndex + 1), ...slides.slice(0, activeIndex)];
    return reordered;
  };

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderContainer}>
        {/* Inactive slides (right of active) */}
        <div className={styles.inactiveContainer}>
          {getNextSlides().map((slide, i) => (
            <div
              key={slide.id}
              className={styles.inactive}
              style={{
                backgroundImage: `url(${slide.img})`,
                // transform: `translateX(${i * 20}px)`,
              }}
              onClick={() => setActiveIndex((activeIndex + i + 1) % slides.length)}
            />
          ))}
        </div>

        {/* Active slide (centered) */}
        <div
          className={styles.active}
          style={{ backgroundImage: `url(${slides[activeIndex].img})` }}
        >
          <div className={styles.overlay}>
            <h2>{slides[activeIndex].title}</h2>
            <p>{slides[activeIndex].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;


