import React from 'react'

export default function MainPage() {
  return (
    <>
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

      </section>
    </>
  )
}
