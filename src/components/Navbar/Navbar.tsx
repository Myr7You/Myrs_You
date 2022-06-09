import styles from "./Navbar.module.css"
import PersonalLogo from "../SVG/PersonalLogo";
import { NavLink,useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { switchLang } from "../../features/lang/langSlice";
import { useState, useEffect } from "react";
import  useWindowDimensions from "../../hooks/useWindowDimensions.js"

const Navbar = () => {
  const lang = useAppSelector(state => state.lang.value);
  const dispatch = useAppDispatch();
  const [listOpen, setListOpen] = useState(true);
  const { width } = useWindowDimensions();
  const { pathname } = useLocation();
  useEffect(() => {
    if(width < 765){
      setListOpen(false)
    }else{
      setListOpen(true);
    }
  }, [width])
  
  const handdleList = () => {
    if (width < 765) setListOpen(prev => (prev = !prev));
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <NavLink to="/Myrs_You">
          <PersonalLogo />
        </NavLink>
      </div>
      <div className={styles.right}>
        {width < 765 && pathname.indexOf('blog') !== 1 && (
          <div className={styles.langBox}>
            <span
              className={`${styles.lang_btn} ${lang && styles.actived}`}
              onClick={() => dispatch(switchLang(true))}
            >
              EN
            </span>
            /
            <span
              className={`${styles.lang_btn} ${!lang && styles.actived}`}
              onClick={() => dispatch(switchLang(false))}
            >
              中
            </span>
          </div>
        )}
        {width < 765 && (
          <i
            className={`${styles.navMiniBtn} fa-solid fa-bars `}
            onClick={handdleList}
          ></i>
        )}
        {listOpen && (
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `link ${styles.actived} ${styles.navLink} `
                    : `link ${styles.navLink}`
                }
                to="/Myrs_You"
                onClick={handdleList}
              >
                {lang ? 'Home' : '首页'}
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `link ${styles.actived}  ${styles.navLink} `
                    : `link ${styles.navLink}`
                }
                to="/blog"
                onClick={handdleList}
              >
                {lang ? 'Blog' : '博客'}
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `link ${styles.actived}  ${styles.navLink} `
                    : `link ${styles.navLink}`
                }
                to="/about"
                onClick={handdleList}
              >
                {lang ? 'About' : '关于'}
              </NavLink>
            </li>
            {width > 765 && pathname.indexOf('blog') !== 1 && (
              <li className={styles.navItem}>
                <span
                  className={`${styles.lang_btn} ${lang && styles.actived}`}
                  onClick={() => dispatch(switchLang(true))}
                >
                  EN
                </span>
                /
                <span
                  className={`${styles.lang_btn} ${!lang && styles.actived}`}
                  onClick={() => dispatch(switchLang(false))}
                >
                  中
                </span>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar