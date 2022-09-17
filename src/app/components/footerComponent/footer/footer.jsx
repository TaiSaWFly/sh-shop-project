import React from "react";
import { footerList } from "../../../constants/footerList";
import { Link } from "react-router-dom";
import { ReactComponent as VkSocial } from "../../../../assets/svg_icons/vk_social.svg";
import { ReactComponent as FaceboofSocial } from "../../../../assets/svg_icons/facebook_social.svg";
import { ReactComponent as InstagramSocial } from "../../../../assets/svg_icons/instagram_social.svg";
import style from "./footer.module.scss";
import ComponentContainer from "../../common/componentContainer/componentContainer";

const Footer = () => {
  return (
    <footer>
      <ComponentContainer name={"footer"}>
        <div className={style.footer__wrapper}>
          {footerList.map((list, index) => (
            <ul key={index} className={style.footer__list}>
              <div className={style.footer__list_title}>{list.title}</div>

              {list.list.map((listItem, index) => (
                <li key={index} className={style.footer__list_link}>
                  <Link to="/">{listItem.name}</Link>
                </li>
              ))}
            </ul>
          ))}

          <ul className={style.footer__list}>
            <div className={style.footer__list_title}>social</div>
            <li>Shoper is made with love in Warsaw</li>
            <li>2014 © All rights reserved. El Passion</li>
            <li>
              <div className={style.footer__list_social}>
                <div className={style.footer__list_social_icon_wrapper}>
                  <VkSocial
                    className={style.footer__list_social_icon}
                    width="15px"
                    height="15px"
                  />
                </div>
                <div className={style.footer__list_social_icon_wrapper}>
                  <FaceboofSocial
                    className={style.footer__list_social_icon}
                    width="15px"
                    height="15px"
                  />
                </div>
                <div className={style.footer__list_social_icon_wrapper}>
                  <InstagramSocial
                    className={style.footer__list_social_icon}
                    width="15px"
                    height="15px"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </ComponentContainer>
    </footer>
  );
};

export default Footer;
