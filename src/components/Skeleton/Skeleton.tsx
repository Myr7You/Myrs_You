import React from 'react';
import styles from './Skeleton.module.css';
type Props = {
  type: string;
  count: number
};
const Skeleton: React.FC<Props> = ({type,count}) => {
  console.log(count);
  const blogSkeleton = (
    <div className={styles.blogSk}>
      <div className={styles.blogTitleBoxSk}>
        <div className={styles.blogTitleSk}></div>
        <div className={styles.blogTitleSk}></div>
      </div>
      <div className={styles.infoBoxSk}>
        <span className={styles.dateSk}></span>
        <div className={styles.catesSk}></div>
      </div>
    </div>
  );
  const blogDetialSk = (
    <div className={styles.blogDeSk}>
      <div className={styles.blogTitle}>
        <div className={styles.loading}></div>
      </div>
      <div className={styles.blogSubTitle}></div>
      <div className={styles.date2SK}></div>
      <div className={styles.ctxSk}>
        <div className={styles.loading}></div>
      </div>
      <div className={styles.ctxSk}>
        <div className={styles.loading}></div>
      </div>
      <div className={styles.ctxSk}>
        <div className={styles.loading}></div>
      </div>
      <div className={styles.ctxSk}>
        <div className={styles.loading}></div>
      </div>
      <div className={styles.ctxSk}>
        <div className={styles.loading}></div>
      </div>
      <div className={styles.ctxSk}>
        <div className={styles.loading}></div>
      </div>
      <div className={styles.ctxSk}>
        <div className={styles.loading}></div>
      </div>
      <div className={styles.ctxSk}>
        <div className={styles.loading}></div>
      </div>
    </div>
  );
  let blogs = Array(count).fill(blogSkeleton);
  if(type === 'blog'){
    return <>
      {blogs.map(blog => blog)}
    </>
  } else if (type === 'blogDetail') {
    return blogDetialSk;
  } else {
    return <div>haha</div>;
  }
  
};

export default Skeleton;
