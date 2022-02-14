import React from 'react'
import Alert from '../components/Alert'

function SportItem() {
  return (
    <>
      <div className="sport__item">
        <img src="/images/image1.png" alt="" className="sport__img" />
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

export default function MainPage() {
  return (
    <>
      <div className="wrapper main-wrapper">
        <header>
          <h1 className="header__title grotesk">бутово. беговой клуб*</h1>
          <h3 className="header__subtitle mont-light">
            программа поддержки массового спорта
          </h3>
          <a className="strava__link" href="https://www.strava.com/athletes/52450656">
            <img src="/images/strava.png" alt="" />
          </a>
        </header>
        <img src="/images/lines.png" alt="" className="lines" />
        <section className="main-page">
          <Alert/>
          <SportItem/>
          <SportItem/>
          <SportItem/>
        </section>
      </div>
    </>
  )
}
