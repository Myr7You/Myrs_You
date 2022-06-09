import React from 'react'
import styles from './SideBox.module.css';
import Categories from '../Categories/Categories';

type Props = {
  onSBCate: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    cateId: string
  ) => void;
};
const SideBox: React.FC<Props> = ({onSBCate}) => {
  const handleSBCate = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,cateId:string
  ) => {
    onSBCate(event, cateId);

  };
  return (
    <div className={styles.sideWrapper}>
      <div className={styles.searchBox}></div>
      <div className={styles.cateBox}>
        <h1 className={styles.cateBoxTitle}>_ BROWSE BY TOPIC</h1>
        <ul className={styles.cateList}>
          <li className={styles.cateItem}>
            <Categories cate="JavaScript" onCate={handleSBCate}>
              JavaScript
            </Categories>
          </li>
          <li className={styles.cateItem}>
            <Categories cate="HTML" onCate={handleSBCate}>
              HTML
            </Categories>
          </li>
          <li className={styles.cateItem}>
            <Categories cate="CSS" onCate={handleSBCate}>
              CSS
            </Categories>
          </li>
          <li className={styles.cateItem}>
            <Categories cate="React" onCate={handleSBCate}>
              React
            </Categories>
          </li>
          <li className={styles.cateItem}>
            <Categories cate="VUE" onCate={handleSBCate}>
              VUE
            </Categories>
          </li>
          <li className={styles.cateItem}>
            <Categories cate="Next" onCate={handleSBCate}>
              Next.js
            </Categories>
          </li>
          <li className={styles.cateItem}>
            <Categories cate="Express" onCate={handleSBCate}>
              Express.js
            </Categories>
          </li>
          <li className={styles.cateItem}>
            <Categories cate="All" onCate={handleSBCate}>
              Show All
            </Categories>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBox