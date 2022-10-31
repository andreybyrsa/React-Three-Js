import React from 'react';
import {
  GitHub,
} from 'react-feather';

import './FooterSection.scss';

const authors = [
  {id: 1, name: 'AndreyByrsa', link: 'https://github.com/andreybyrsa',},
  {id: 2, name: 'KirillVlasov', link: 'https://github.com/kivaX9',},
  {id: 3, name: 'TimurMinyazev', link: 'https://github.com/TimurMA',},
  {id: 4, name: 'MamedBayramov', link: 'https://github.com/cap111ffs',},
]

function FooterSection() {
  return (
    <div className="content-wrapper">
      <div className="footer-section">
        <div style={{padding: '30px 0',}}>
          <span className="footer-section__info">
            <p><strong>BACCARATHELPER © 2022</strong>. All Rights Reserved. Contacts:</p>
            <p style={{display: "flex",}}>
              {authors.map((elem) => {
                return (
                  <a href={elem.link} target="_blank" rel="noreferrer" className="footer-section__link" key={elem.id}>
                    <GitHub color="#007bff" size={20}/>
                    {elem.name}
                  </a>
                );
              })}
            </p>
          </span>
          <p className="footer-section__info">
            By using this service, you can't copy any design.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
