import React from 'react'
import styles from './Categories.module.css'
type Props = {
  cate: string;
  children: React.ReactNode;
  onCate: (event: React.MouseEvent<HTMLDivElement, MouseEvent>,cateId:string) => void;
};
const Categories: React.FC<Props> = (props) => {
  return (
    <div
      className={`${styles.category} ${styles[props.cate]}`}
      onClick={event => props.onCate(event, props.cate)}
    >
      {props.children}
    </div>
  );
};

export default Categories