import React from 'react';
import {aim} from '../../assets/images';
import {dollar} from '../../assets/images';
import {lock} from '../../assets/images';

import './BenefitsSection.scss';

const benefits = [
  {id: 1, logo: dollar, title: 'Прибыльность', description: 'Благодаря математической статистике, расширение увеличивает показатель выигрышных партий до 80%.'},
  {id: 2, logo: aim, title: 'Точность вычислений', description: 'Разные методы вычисления позволяют получить наиболее точный результат.'},
  {id: 3, logo: lock, title: 'Открытый код', description: 'Наш код находится в открытом доступе. Каждый может убедиться в его работоспособности.'},
]

function BenefitsSection() {
  return (
    <div className="benefits-content-wrapper">
      <div className="benefits-section">
        <div className="benefits-section__title">Наши преимущества</div>
        <div className="benefits-section__description">
          Мы предлагаем расширение, которое поможет снизить риск проигрыша
          в карточной онлайн игре.
        </div>
        <div className="benefits-section__benefits-items">
          {benefits.map((elem) => {
            return (
                <div key={elem.id} className="benefits-section__benefit-item">
                  <div className="benefit-icon-wrapper">
                    <img src={elem.logo} className="benefits-section__benefit-icon" alt="benefit-icon"/>
                  </div>
                  <div className="benefits-section__benefit-title">{elem.title}</div>
                  <div className="benefits-section__benefit-description">{elem.description}</div>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;
