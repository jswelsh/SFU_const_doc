import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const executive = [
  {
    name: 'James Welsh',
    avatar:'img/JW.svg',
    altAvatar: 'img/altAvatar/JW.png',
    position: 'President',
    description: 'Committed to building a Shadow-Exec.'
  },{
    name: 'Jessica Piotrowski',
    avatar: 'img/JP.svg',
    altAvatar: 'img/altAvatar/JP.png',
    position: 'Vice President',
    description: 'Wears the pants in this exec.',
  },{
    name:'Lumpy Lucas',
    avatar: 'img/LL.svg',
    altAvatar: 'img/altAvatar/LL.png',
    position: 'Past President',
    description: 'Lumpy.'
  },{
    name:'Talor Mykle-Winkler',
    avatar:'img/TW.svg',
    altAvatar: 'img/altAvatar/TW.png',
    position: 'Treasurer',
    description: 'The first to ever be remotely qualified/competent to be treasurer.'
  },{
    name: 'Raylene Tate',
    avatar:'img/RT.svg',
    altAvatar: 'img/altAvatar/RT.png',
    position: 'Social Coordinator',
    description: 'Had pants, Jessica took them.'
  },{
    name: 'Lewai Ratudradra',
    avatar:'img/LR.svg',
    altAvatar: 'img/altAvatar/LR.png',
    position: "Woman's Rep",
    description: 'Creative mastermind behind the sfu meme generator'
  },{
    name: 'Bethany Dueck',
    avatar:'img/BD.svg',
    altAvatar: 'img/altAvatar/BD.png',
    position: "Women's Fixtures",
    description: 'literally terrifying on and off the field.'
  },{
    name:'Fernanda Hernández',
    avatar:'img/FH.svg',
    altAvatar: 'img/altAvatar/FH.png',
    position: 'Secretary',
    description: 'Little does she know her role entails babysitting the president and making sure they do something; anything.'
  },{
    name:'Benji Wilson',
    avatar:'img/BW.svg',
    altAvatar: 'img/altAvatar/BW.png',
    position: "Men's Rep",
    description: "Hail from the opposite side of the world. Benji came for a green card; he isn't going home any time soon."
  },{
    name:'Tapiwa Samkange',
    avatar:'img/TS.svg',
    altAvatar: 'img/altAvatar/TS.png',
    position: "Men's Fixtures",
    description: 'Pretty sure he is only here for the free dues and good times.'
  },{
    name:'Liam Gottschalk',
    avatar:'img/LG.svg',
    altAvatar: 'img/altAvatar/LG.png',
    position: 'University Liaison',
    description: 'To be honest, pretty sure he was forced into this position.'
  },
]

function ExecConstructor({name, avatar, altAvatar, position, description}) {
  return (
  <div class="avatar" className={clsx('col col--4', styles.feature)}>
    <div class="avatar">
      <a class="avatar__photo-link avatar__photo avatar__photo--xl">
        <img
          src={avatar ? avatar : altAvatar}
        />
      </a>
      <div class="avatar__intro">
        <h4 class="avatar__name">{name}</h4>
        <strong class="avatar__subtitle">
          {position}
        </strong>
        {/* <div className={clsx(styles.description, "avatar__subtitle")}> */}
        <small className={clsx(styles.description, "avatar__subtitle")}>
          {description}
        </small>
        {/* </div> */}
        <br />
      </div>
    </div>
  </div>
  )
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      description="web application for SFU Rugby's constitution and policies">
      <header className={clsx( styles.heroBanner)}>
        <div className="container">
        <img src='img/sfu_athletic_logo_vertical_v1.1.svg'/>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                `button button--outline button button--lg`,
                styles.getConstitutional,
                )}
              to={useBaseUrl('docs/')}>
              GET CONSTITUTIONAL!
            </Link>
          </div>
        </div>
      </header>
      <main>
      
      <h1 className={clsx( styles.execBanner)}>{siteConfig.tagline}
      </h1>

        {executive && executive.length > 0 && (
          <section className={styles.features}>
            <div className="container">

            <div className="container">
            </div>
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
