import React from 'react'
import Alert from '../components/Alert'
import SportItem from '../components/SportItem'



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
          <SportItem image/>
          <SportItem image/>
          <SportItem image/>
        </section>
      </div>
    </>
  )
}
