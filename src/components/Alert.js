import React from 'react'

export default function Alert() {
  return (
    <>
      <div className="alert">
        <p className="mont-light alert__text">Вместимость раздевалок ограничена. Регистрируйтесь на занятия заранее</p>
        <img src="/images/alert.png" alt="" className="alert__icon" />
      </div>
    </>
  )
}
