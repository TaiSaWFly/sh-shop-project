import React from "react";
import style from "./aboutPage.module.scss";
import { about } from "../../../constants/aboute";
import TitleComponent from "../../common/titleComponent/titleComponent";

const AboutPage = () => {
  return (
    <div className={style.about_page_conteiner}>
      <div className={style.about_page}>
        <TitleComponent>
          <div>about</div>
          <span>
            Lorem ipsum dolor sit amet enim. Etiam ullamcorp uspendisse a
            pellentesque
          </span>
        </TitleComponent>

        <div className={style.about_page__wrapper}>
          {about.map((item, index) => (
            <div key={index} className={style.about_page__item}>
              <div className={style.about_page__item_img}>
                <img alt="pic" src={require(`/src/${item.imgUrl}`)} />
              </div>
              <div className={style.about_page__item_title}>{item.title}</div>
              <div className={style.about_page__item_description}>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
