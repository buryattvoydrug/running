import React from 'react'

export default function SportItem({image}) {
  return (
    <>
      <div className="sport__item">
        {image && <img src="/images/image1.png" alt="" className="sport__img" />}
        <div className="sport-block">
          <span className="sport__date mont-light">вторник, 10 мая </span>
          <span className="sport__time mont-bold">19:00</span>
          <h3 className="sport__title grotesk">функциональная тренировка</h3>
          <h4 className="sport__subtitle mont-light">парк “Южное Бутово”</h4>
          <div className="sport__place">
            <img src="/images/pin.png" alt="" className="pin" />
            <span className="place__text mont-light">м. Горчакова</span>
          </div>
        </div>
      </div>
    </>
  )}