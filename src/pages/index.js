import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useThemeContext from '@theme/hooks/useThemeContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Current Exec to go here',
    imageUrl: 'img/logTEST.svg',
    description: (
      <>
        Avatar about 64x64px and a name tag, maybe a short blurb?
      </>
    ),
  },{
    title: 'Current Exec to go here',
    imageUrl: 'img/logTEST.svg',
    description: (
      <>
        Avatar about 64x64px and a name tag, maybe a short blurb?
      </>
    ),
  },{
    title: 'Current Exec to go here',
    imageUrl: 'img/logTEST.svg',
    description: (
      <>
        Avatar about 64x64px and a name tag, maybe a short blurb?
      </>
    ),
  },
  ];
const executive = [
  {
    name: 'Jessica Piotrowski',
    image: 'img/JP.png',
    position: 'Vice President',
    description: 'Wears the pants in this exec',
  },{
    name: 'Raylene Tate',
    image:'img/RT.png',
    position: 'Social Coordinator',
    description: 'Had pants, Jessica took them'
  },{
    name: 'James Welsh',
    image:'img/JW.png',
    position: 'President',
    description: 'Committed to building a Shadow-Exec'
  },{
    name: 'Lewai Ratudradra',
    image: 'img/LR.png',
    position: "Woman's Rep",
    description: 'Neque porro quisquam est, qui dolorem'
  },{
    name: 'Bethany Dueck',
    image: 'img/BD.png',
    position: "Women's Fixtures",
    description: 'illo inventore veritatis et quasi architecto'
  },{
    name:'Fernanda Hernández',
    image: 'img/FH.png',
    position: 'Secretary',
    description: 'unde omnis iste natus error'
  },{
    name:'Talor Mykle-Winkler',
    image: 'img/TW.png',
    position: 'Treasurer',
    description: '"Lorem ipsum dolor sit amet'
  },{
    name:'Tapiwa Samkange',
    image: 'img/TS.png',
    position: "Men's Fixtures",
    description: 'Ut enim ad minim veniam, quis nostrud'
  },{
    name:'Benji Wilson',
    image: 'img/BW.png',
    position: "Men's Rep",
    description: 'ut aliquip ex ea commodo consequat'
  },{
    name:'Liam Gottschalk',
    image: 'img/LG.png',
    position: 'University Liaison',
    description: 'exercitation ullamco laboris nisi'
  },{
    name:'Lumpy Lucas',
    image: 'img/LL.png',
    position: 'Past President',
    description: 'Lumpy'
  }


]

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function ExecConstructor({name, image, position, description}) {
  return (
  <div class="avatar" className={clsx('col col--4', styles.feature)}>
    <div class="avatar">
      <a class="avatar__photo-link avatar__photo avatar__photo--lg">
        <img
          alt={name.slice(0,1)}
          src={image}
        />
      </a>
      <div class="avatar__intro">
        <h4 class="avatar__name">{name}</h4>
        <strong class="avatar__subtitle">
          {position}
        </strong>
        <small class="avatar__subtitle">
          {description}
        </small>
        <br />
      </div>
    </div>
  </div>
  )
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  // const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext()
  // console.log(isDarkTheme)
  return (
    <Layout
      // title={siteConfig.title}
      description="web application for SFU Rugby's constitution and policies">
      <header className={clsx(/* 'hero hero--primary', */ styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                `button button--outline button--${true && 'secondary'} button--lg`,
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              GET CONSTITUTIONAL!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {executive && executive.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {executive.map((props, idx) => (
                  <ExecConstructor key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
