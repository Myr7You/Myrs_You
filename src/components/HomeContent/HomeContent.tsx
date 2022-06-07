import styles from './HomeContent.module.css';
import useWindowDimensions from '../../hooks/useWindowDimensions.js';
type Props = {
  lang: boolean;
};

const HomeContent: React.FC<Props>  = ({lang}) => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.container}>
      <div className={styles.skewDiv}>
        <div className={styles.wrapper}>
          {width < 541 && (
            <div className={styles.picBox}>
              <img
                className={styles.samllPic}
                src="https://res.cloudinary.com/dq8qhdgox/image/upload/v1653232247/common/me_plwtoz.png"
                alt=""
              />
            </div>
          )}
          {lang && (
            <div className={styles.skewDiv_content}>
              <h1>Hello ~</h1>
              <h1>I am Myrs You.</h1>
              <h2>I build stuff for the web</h2>
              <br />
              <br />
              <p>
                I'm a front-end web developer based in Shenzhen, China
                <br />
                <br />
                I build outstanding,high-quality websites and web applications.
                <br />
                <br />
                Scroll down to find out more about my work or hire me.
              </p>
            </div>
          )}
          {!lang && (
            <div className={styles.skewDiv_content}>
              <h1>嗨 ~</h1>
              <h1>我是游竣平.</h1>
              <h2>是一位前端工程师</h2>
              <br />
              <br />
              <p>
                我是在深圳生活的前端工程师
                <br />
                <br />
                会设计和搭建现代响应式的网页应用程序
                <br />
                <br />
                下滑了解更多关于我的工作吧！
              </p>
            </div>
          )}
        </div>
        {width > 765 && (
          <div className={styles.wrapper}>
            <div className={styles.skew}>
              <img
                className={styles.imgDiv}
                src={process.env.PUBLIC_URL + '/IMG_3671.jpg'}
                alt=""
              />
            </div>
          </div>
        )}

        <div className={styles.overlay}></div>
      </div>

      <div className={styles.top_overlay}></div>
    </div>
  );
};

export default HomeContent;

