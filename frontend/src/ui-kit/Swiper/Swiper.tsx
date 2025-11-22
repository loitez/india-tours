import styles from "./Swiper.module.scss";
import { useEffect, useRef, useState } from "react";
import { Card } from "../Card";
import { Wrapper } from "../../components";
import { IconCircle } from "../IconCircle";
import { Text } from "../Text";

export const Swiper = ({
  slides,
  loop = true,
  autoPlay = true,
  autoPlayTime = 2000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  // Переход к следующему слайду
  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  // Переход к предыдущему слайду
  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  // Логика для бесконечного цикла
  useEffect(() => {
    if (currentSlide === 0) {
      // Если достигнут клонированный первый слайд, переходим к последнему реальному слайду БЕЗ АНИМАЦИИ
      setTimeout(() => {
        setCurrentSlide(slides.length); // Мгновенный переход
      }, 500); // Задержка для завершения анимации
    } else if (currentSlide === slides.length + 1) {
      // Если достигнут клонированный последний слайд, переходим к первому реальному слайду БЕЗ АНИМАЦИИ
      setTimeout(() => {
        setCurrentSlide(1); // Мгновенный переход
      }, 500); // Задержка для завершения анимации
    }
  }, [currentSlide, slides.length]);

  return (
    <div className={styles.swiper}>
      <div
        className={styles.swiper__cards}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`, // Перемещаем слайды
          transition:
            currentSlide === 0 || currentSlide === slides.length + 1
              ? "none"
              : "transform 0.5s ease",
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            className={styles.swiper__card}
            key={index}
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            <Card version="orange-card">
              {slide?.img ? (
                <Wrapper wrapperType="image">
                  <img src={slide?.img} alt="" />
                </Wrapper>
              ) : (
                <IconCircle icon="user" color="gray" size="xl" />
              )}
              <div className={styles.feedback__card_text}>
                <Text weight="font-bold">{slide?.author}</Text>
                <div>{slide?.review_text}</div>
                <div>{slide?.created_at}</div>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <button className={styles.prev} onClick={prevSlide}>
        ←
      </button>
      <button className={styles.next} onClick={nextSlide}>
        →
      </button>
    </div>
  );
};
