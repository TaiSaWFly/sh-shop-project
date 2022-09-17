import React from "react";
import style from "./titleComponent.module.scss";

const TitleComponent = ({ children }) => {
  return (
    <div className={style.title_component}>
      {React.Children.map(children, (child) => {
        const componentName = child._owner.elementType.name;
        const childTag = child.type;

        if (componentName === "HomeTitle") {
          return childTag === "h1" ? (
            <div className={style.home_title}>{child}</div>
          ) : (
            <div className={style.home_subtitle}>{child}</div>
          );
        } else {
          return childTag === "div" ? (
            <div className={style.title}>{child}</div>
          ) : (
            <div className={style.subtitle}>{child}</div>
          );
        }
      })}
    </div>
  );
};

export default TitleComponent;
