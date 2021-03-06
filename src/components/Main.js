import React from 'react';
import PostForm from './PostForm';

function Main() {
  return (
  <main className="content">
    <section className="description">
      <article className="description__article">
        <h2 className="description__heading font">О проекте</h2>
        <div className="description__text font">
          <p className="description__paragraph">Мы знаем, что наши дети постоянно существуют в режиме непрекращающегося творческого процесса. Мы видим это, когда ребёнок что-то напевает, когда он бесконечно рисует, когда придумывает истории, когда разговаривает с едой и игрушками — дети постоянно включены и что-то изобретают. Родители часто недооценивают это спонтанное творчество ребёнка. Это не плохо, просто мы привыкаем к этому. Давайте попробуем внимательнее присмотреться к нашим детям.</p>
          <p className="description__paragraph">Мы запускаем проект «ТУРБИНА», который открывает работу настоящего музыкального лейбла на базе «Маршака». В рамках «ТУРБИНЫ» лучшие современные инди-музыканты пишут свои песни на стихи, написанные детьми. Здесь важно — мы не заставляем наших детей садиться и писать поэзию, мы говорим о том, что родителям стоит быть более внимательными и чуткими к своим детям. Именно так мы сможем получить тексты, которые перестанут быть детскими, не будут осмыслены как взрослые — поэзия, которая сокращает дистанцию между взрослостью и детством, где спонтанное детское творчество и бессознательное, замеченное родителем, становится общественным культурным достоянием.</p>
        </div>
      </article>
      <article className="description__article">
        <h2 className="description__heading font">Как это работает?</h2>
        <p className="description__text font">Вы можете прислать нам тексты, родившиеся у ваших детей, которые вы записали и считаете, что это сильное высказывание. Мы собираем пул таких текстов и передаём их музыкантам. Артисты создают музыку на эти стихи. Мы продюсируем выпуск трека, возможно съёмки клипа и так далее. Мы всегда указываем автора стихотворений внутри релиза: Хадн Дадн feat. Варя Карпова и Федя Быстров — Контур.</p>
      </article>
      <article className="description__article">
        <h2 className="description__heading font">Тезисы</h2>
        <ul className="description__list">
            <li className="description__list-item">
              <p className="description__text font">Дети никогда не прекращают творить и круто стараться быть на них похожими в этом</p>
            </li>
            <li className="description__list-item">
              <p className="description__text font">Детское бессознательное помогает родителям понять, что происходит внутри семьи</p>
            </li>
            <li className="description__list-item">
              <p className="description__text font">Не существует детской и взрослой поэзии. Существует мысль и чувство, зафиксированное в ней</p>
            </li>
            <li className="description__list-item">
              <p className="description__text font">Дети получают невероятное удовольствие и мотивацию от того, что их творчество востребовано сверстниками и взрослыми.</p>
            </li>
        </ul>
      </article>
      <article className="description__article">
        <h2 className="description__heading font">Форма</h2>
        <p className="description__text font">Заполняя эту форму, вы становитесь частью проекта.</p>
        <PostForm />
      </article>
    </section>
  </main>
  )
}

export default Main;
