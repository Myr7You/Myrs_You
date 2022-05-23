import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        Feel free to contact me
        <a href="mailto: myr7you@icloud.com" className={styles.email}>
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
      <div className={styles.right}>2022 All rights reserved to Myrs You</div>
    </div>
  );
}

export default Footer