import styles from "./Navbar.module.css"
import PersonalLogo from "../SVG/PersonalLogo";
import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { switchLang } from "../../features/lang/langSlice";
import { useState, useEffect } from "react";
import  useWindowDimensions from "../../hooks/useWindowDimensions.js"

const Navbar = () => {
  const lang = useAppSelector(state => state.lang.value);
  const dispatch = useAppDispatch();
  const [listOpen, setListOpen] = useState(true);
  const { width } = useWindowDimensions();
  
  useEffect(() => {
    if(width < 765){
      setListOpen(false)
    }else{
      setListOpen(true);
    }
  }, [width])
  
  const handdleList = () => {
    setListOpen(prev => (
      prev = !prev
    ))
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <PersonalLogo />
      </div>
      <div className={styles.right}>
        {width < 765 && (
          <div className={styles.langBox}>
            <button
              className={`${styles.lang_btn} ${lang && styles.actived}`}
              onClick={() => dispatch(switchLang(true))}
            >
              EN
            </button>
            /
            <button
              className={`${styles.lang_btn} ${!lang && styles.actived}`}
              onClick={() => dispatch(switchLang(false))}
            >
              中
            </button>
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
                to="/"
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
              >
                {lang ? 'Home' : '博客'}
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
              >
                {lang ? 'Home' : '关于'}
              </NavLink>
            </li>
            {width > 765 && (
              <li className={styles.navItem}>
                <button
                  className={`${styles.lang_btn} ${lang && styles.actived}`}
                  onClick={() => dispatch(switchLang(true))}
                >
                  EN
                </button>
                /
                <button
                  className={`${styles.lang_btn} ${!lang && styles.actived}`}
                  onClick={() => dispatch(switchLang(false))}
                >
                  中
                </button>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar