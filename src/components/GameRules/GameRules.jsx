import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { cards, table, money } from '../../assets/images';

import 'swiper/css';
import 'swiper/css/navigation';
import './GameRules.scss';

const slides = [
  {
    id: 1,
    image: cards,
    title: 'Баккарат',
    subtitle: '- это азартная карточная игра.'
  },
  {
    id: 2,
    image: table,
    title: 'Раздача карт',
    subtitle: 'происходит на поле игрока и поле банкира.'
  },
  {
    id: 3,
    image: money,
    title: 'Победитель',
    subtitle: 'с наибольшим значением очков получает х2 к своей стваке.'
  },
];

function GameRules() {
  return (
    <div className="game-rules-wrapper">
      <Swiper
        modules={[Autoplay]}
        autoplay
        allowTouchMove={false}
        className="game-rules__swiper"
      >
        {slides.map((elem) => (
          <SwiperSlide key={elem.id}>
            <div className="slide-content-wrapper">
              <div className="slide__text">
                <p className="slide__text-title">{elem.title}</p>
                <p className="slide__text-subtitle">{elem.subtitle}</p>
              </div>
              <div className="slide__image">
                <img width={300} src={elem.image} alt="slide-img" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GameRules;
