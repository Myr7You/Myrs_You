// import styles from "./Home.module.css"
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import HomeContent from '../../components/HomeContent/HomeContent';
import Skill from '../../components/Skills/Skill';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const lang = useAppSelector(state => state.lang.value);

  return (
    <React.Fragment>
      <HomeContent lang={lang} />
      <Skill lang={lang} />
      <Footer />
    </React.Fragment>
  );
}

export default Home