import React from 'react'
import SportItem from '../components/SportItem'

export default function Form() {
  return (
    <>
      <div className="wrapper form-wrapper">
        {/* <h2 className="form__title mont-light">
          <strong>Войдите</strong> в свой <strong>профиль</strong>,<br/> чтобы зарегистрироваться <strong> <br/>на мероприятие.</strong>
        </h2> */}
        <h2 className="form__title mont-light">
          Физкульт-привет, <br/><strong className='name'>Дмитрий!</strong>
        </h2>
        <div className="form-block">
          <SportItem/>
        </div>
        <button className="button">
          <span className="grotesk">Подтвердить</span>
          <img src="/images/arrow.png" alt="" />
        </button>
        {/* <button className="button">
          <span className="button__text mont-light"><strong>Войти</strong> <br/>через <strong>Strava</strong></span>
          <img className='strava__logo' src="/images/strava.png" alt="" />
        </button> */}
        <img src="/images/lines2.png" alt="" className="lines form-lines" />
      </div>
    </>
  )
}
