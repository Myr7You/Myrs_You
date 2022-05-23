import React from 'react'
import icons from '../../assets/skills.svg'
import styles from "./BaseIcon.module.css"
type Props = {
  name: string;
  iconWidth?:number;
};
const BaseIcon: React.FC<Props> = ({ name, iconWidth }) => {
  return (
    <div className={styles.icon_wrapper}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.icon}
        width={iconWidth || 100}
      >
        <use xlinkHref={`${icons}#${name}`} />
      </svg>
    </div>
  );
};

export default BaseIcon