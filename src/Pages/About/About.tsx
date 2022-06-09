import React from 'react'
import styles from './About.module.css'
import { useAppSelector } from '../../app/hooks';
const About = () => {
  const lang = useAppSelector(state => state.lang.value);
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.wrapper}>
          {!lang && (
            <div className={styles.aboutWrapper}>
              <h1 className={styles.aboutTitle}>关 于</h1>
              <span className={styles.aboutSubTitle}>Myrs You 的个人主页</span>
              <span className={styles.aboutSubTitle}>
                MERN(MongoDB+Express+React(redux+TypeScript)+Node.js)全栈开发
              </span>
              <p className={`${styles.aboutCtx} ${styles.firstLine}`}>
                这是一个前端使用 <b>React + Redux + TypeScript</b>{' '}
                编写的SPA页面， 因为使用 <b>TypeScript</b>{' '}
                能拥有良好的代码风格与编辑器自动提示。 使用{' '}
                <b>React Hook api</b> 实现整个页面，用 <b>Redux</b>{' '}
                进行状态管理，React router
                实现路由及动态路由的匹配，以及纯手写module CSS来实现UI组件的
                <b>自适应</b>网页。
              </p>
              <p className={styles.aboutCtx}>
                后端使用 <b>Node.js + Express + MongoDB</b>{' '}
                技术栈。通过Express编写的api， 供前端请求获取数blogs数据。
              </p>
              <p className={styles.aboutCtx}>
                可通过链接：
                <a
                  className={styles.aboutLink}
                  href="https://github.com/Myr7You/Myrs_You"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/Myr7You/Myrs_You
                </a>{' '}
                ，下载和了解代码。
              </p>
              <p className={`${styles.aboutCtx} ${styles.aboutCtxCh}`}>
                感谢您的浏览!
                <br />
                <span className={styles.signed}>Myrs You</span>
              </p>
            </div>
          )}
          {lang && (
            <div className={styles.aboutWrapper}>
              <h1 className={styles.aboutTitle}>About</h1>
              <span className={styles.aboutSubTitle}>
                Myrs_You's Personal Webside
              </span>
              <span className={styles.aboutSubTitle}>
                MERN(MongoDB+Express+React(redux+TypeScript)+Node.js) Fullstack
                development
              </span>
              <p className={`${styles.aboutCtx} ${styles.firstLine}`}>
                This is a responsive Single-Page-Application webside developed
                by using <b>React + Redux + TypeScript</b> .Because of using{' '}
                <b>TypeScript</b> ,the code has a better coding style and there
                will be automatically warning in the IDE. Using{' '}
                <b>React Hook api</b> to fulfill the pages functionality and
                applying <b>Redux</b> to manage the states ，using React router
                to accomplish the router and dispatch of dynamic router，and
                writing the module CSS by myself to make the{' '}
                <b>responsive designed</b> webside.
              </p>
              <p className={styles.aboutCtx}>
                The back-end is using <b>Node.js + Express + MongoDB</b> . And
                it provides the blogs api by Express and MongoDB for the
                front-end to fecthing the blogs data.
              </p>
              <p className={styles.aboutCtx}>
                More on link：
                <a
                  className={styles.aboutLink}
                  href="https://github.com/Myr7You/Myrs_You"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/Myr7You/Myrs_You
                </a>{' '}
                ，to download and learn the code。
              </p>
              <p className={`${styles.aboutCtx} ${styles.aboutCtxEn}`}>
                Thank you for browsing !
                <br />
                <span className={styles.signed}>Myrs You</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About