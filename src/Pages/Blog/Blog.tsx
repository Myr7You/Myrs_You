import styles from './Blog.module.css'

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.wrapper}>
          <div className={styles.blogWrapper}>
            <div className={styles.blogBox}>
              <h1 className={styles.blogTitle}>
                Why does useEffect run two times?
              </h1>
              <div className={styles.infoBox}>
                <span className={styles.date}>May 07 2022</span>
                <span className={styles.category}>React</span>
              </div>
            </div>
            <div className={styles.blogBox}>
              <h1 className={styles.blogTitle}>
                Why does useEffect run two times?
              </h1>
              <div className={styles.infoBox}>
                <span className={styles.date}>May 07 2022</span>
                <span className={styles.category}>React</span>
              </div>
            </div>
            <div className={styles.blogBox}>
              <h1 className={styles.blogTitle}>
                Why does useEffect run two times?
              </h1>
              <div className={styles.infoBox}>
                <span className={styles.date}>May 07 2022</span>
                <span className={styles.category}>React</span>
              </div>
            </div>
          </div>
          <div className={styles.sideWrapper}>
            <div className={styles.searchBox}></div>
            <div className={styles.cateBox}>
              <ul className={styles.cateList}>
                <li className={styles.cateItem}>JavaScript</li>
                <li className={styles.cateItem}>HTML</li>
                <li className={styles.cateItem}>CSS</li>
                <li className={styles.cateItem}>React</li>
                <li className={styles.cateItem}>VUE</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog