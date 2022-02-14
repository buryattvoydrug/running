import React from 'react'

export default function ThankYou() {
  return (
    <>
      <div className="wrapper thankyou-wrapper">
        <img src="/images/lines3.png" alt="" className="lines thankyou__lines" />
        <div className="thankyou-block">
          <h2 className="thankyou__title grotesk">Бутово. <br/>Увидимся <br/>на тренировке</h2>
          <h4 className="thankyou__subtitle mont-light">лёгких ног!</h4>
          <button className="thankyou__button">
            <img src="/images/back.png" alt="" />
          </button>
        </div>
        
      </div>
    </>
  )
}
