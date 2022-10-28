import React from 'react';
import dollar from '../assets/images/dollar.webp';
import aim  from '../assets/images/aim.webp';
import lock from '../assets/images/lock.webp';

import './BenefitsSection.scss';

const benefits = [
  {id: 1, title: 'Прибыльность', description: 'Благодаря математической статистике, расширение увеличивает показатель выигрышных партий до 80%.'},
  {id: 2, title: 'Точность вычислений', description: 'Разные методы вычисления позволяют получить наиболее точный результат.'},
  {id: 3, title: 'Открытый код', description: 'Наш код находится в открытом доступе. Каждый может убедиться в его работоспособности.'},
]

function BenefitsSection() {
  return (
    <div className="content-wrapper">
      <div className="benefits-section">
        <div className="benefits-section__title">Наши преимущества</div>
        <div className="benefits-section__description">
          Мы предлагаем расширение, которое поможет снизить риск проигрыша
          в карточной онлайн игре. Среди всех наших преимуществ можно выделить:
        </div>
        <div className="benefits-section__benefits-items">
          {benefits.map((elem) => {
            return (
                <div key={elem.id} className="benefits-section__benefit-item">
                  <div className="benefits-section__benefit-icon">{elem.logo}</div>
                  <div className="benefits-section__benefit-title">{elem.title}</div>
                  <div className="benefits-section__benefit-description">{elem.description}</div>
                </div>
              )
          })}
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;
