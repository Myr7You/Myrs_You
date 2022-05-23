import React from 'react'
import styles from './Skill.module.css'
import BaseIcon from '../BaseIcon/BaseIcon';

type Props = {
  lang: boolean;
};

interface IState {
  en: {
    icon: string;
    iconW?: number;
    title: string;
    content: string;
  }[];
  cn: {
    icon: string;
    iconW?: number;
    title: string;
    content: string;
  }[];
}
const Skill: React.FC<Props> = ({lang}) => {
  const skills: IState = {
    en: [
      {
        icon: 'chrome',
        title: 'Web Oriented',
        content:
          'Experience developing web applications on modern platforms as afont-end developer using HTML5, CSS3, Javascript.<br /> Willing to learn more about back-end skills and amid to be a full stack developer in the future.'
      },
      {
        icon: 'code',
        iconW: 130,
        title: 'Multi-Coding-Skill',
        content:
          'Experience with HTML5, CSS3, SCSS, Bootstrap,Javascript(ES6 and beyond), Git. Good at VUE(Vue Cli, Vue Router, Vuex, Nuxt.js).<br /> Know about React.js, SQL, Ruby, Rails, Node.js and willing to learn more.'
      },
      {
        icon: 'lang',
        title: 'Multi-language',
        content:
          'Mother language Chinese are Mandarin and Cantonese.Also good at English. Reading english document and Communication. <br /> Experience utilizing Google and stack overflow to solve the problem.'
      },
      {
        icon: 'fire',
        title: 'Learning by Doing',
        content:
          'Experience being a motivated learner working on projects or playing around with existing code bases.'
      },
      {
        icon: 'design',
        title: 'Design',
        content:
          'Experience with Adobe Photoshop, Illustrator and Rhino modeling. Interested in UI Design, layout and CSS Animations.'
      },
      {
        icon: 'team',
        iconW: 120,
        title: 'Team Cooperation',
        content:
          'Experience working in team.Maintain good communication with other team members, and are willing to learn from others.'
      }
    ],
    cn: [
      {
        icon: 'chrome',
        title: '面向网络',
        content:
          '作为前端工程师具备有HTML5，CSS3，Javascript等现代网页开发应用程序的使用经验。还保持着不断学习新的前端和后端知识，目标是未来成为一个全栈工程师'
      },
      {
        icon: 'code',
        iconW: 130,
        title: '多种编程技能',
        content:
          '熟练使用HTML5，CSS3，SCSS，Bootstrap，Javascript（ES6及更高版本），Git等。会VUE全家桶使用（该个人网页就是使用VUE搭建的）<br /> 还有了解不继续学习React.js,Node.js,SQL,Ruby on Rails等技术'
      },
      {
        icon: 'lang',
        title: '多语言技能',
        content:
          '母语中文普通话和粤语.还擅长英语. 可以无障碍阅读英文技术文档和进行简单的交流. <br /> 熟练的使用Google和stack overflow等平台来解决开放中碰到的技术问题.'
      },
      {
        icon: 'fire',
        title: '实践学习',
        content:
          '是一位积极的学习者，在不断的尝试和使用各种资料库并合理的运用于项目之中'
      },
      {
        icon: 'design',
        title: '设计能力',
        content:
          '熟练的使用Adobe Photoshop, Illustrator 和 Rhino 建模等设计软件.<br /> 对UI设计感兴趣, 且注重排版和CSS动画. （该个人网页也是自己设计的）'
      },
      {
        icon: 'team',
        title: '团队合作',
        iconW: 120,
        content:
          '有很好的团队合作经验.与团队成员有良好的沟通与交流,愿意向他人学习.'
      }
    ]
  };
  const skillCtx = lang ? skills.en : skills.cn;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {lang ? <h1>Skills</h1> : <h1>技 能</h1>}
        {lang ? (
          <p className={styles.sub_title}>
            These are the following skills I have aquired through hard work on
            my personal life.
          </p>
        ) : (
          <p className={styles.sub_title}>
            以下是个人通过不断学习和工作生活中掌握的技能
          </p>
        )}
      </div>
      <div className={styles.wrapper}>
        {skillCtx.map(skill => (
          <div className={styles.skillCard} key={skill.icon}>
            <BaseIcon name={skill.icon} iconWidth={skill.iconW} />
            <h4 className={styles.skillTitle}>{skill.title}</h4>
            <p
              dangerouslySetInnerHTML={{
                __html: skill.content
              }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill