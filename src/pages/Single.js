import React from 'react'
import Alert from '../components/Alert'

export default function Single() {
  return (
    <>
      <div className="wrapper single-wrapper">
        <img src="/images/image2.jpg" alt="" className="single__img" />
        <div className="single-block">
          <h2 className="single__title grotesk">функциональная тренировка</h2>
          <h4 className="single__subtitle mont-light">парк “Южное Бутово”</h4>
          <span className="single__date mont-light">вторник, 10 мая</span>
          <span className="single__time mont-bold">19:00</span>
        </div>
        <Alert/>
        <div className="single__text mont-light">
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. 
        </div>
        <button className="button">
          <span className="grotesk">Записаться</span>
          <img src="/images/arrow.png" alt="" />
        </button>
        <div className="address-block">
          <div className="map"></div>
          <h4 className="address__text mont-bold">парк “Южное Бутово”</h4>
          <div className="address__place">
            <img src="/images/pin.png" alt="" className="pin" />
            <span className="place__text mont-light">м. Горчакова</span>
          </div>
        </div>
      </div>
    </>
  )
}
