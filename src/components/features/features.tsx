import { BiMoney, BiUserCircle, BiLogoGithub } from 'react-icons/bi/index';
import { BsSoundwave, BsStars } from 'react-icons/bs/index';
import { RxMixerHorizontal } from 'react-icons/rx/index';

import { Balancer } from 'react-wrap-balancer';

import { Container } from '@/components/container';
import { count as soundCount } from '@/lib/sounds';

import styles from './features.module.css';

export function Features() {
  const count = soundCount();

  const features = [
    {
      Icon: BiMoney,
      body: '沉浸在声音的世界里，无需花费一分钱。',
      id: 'free-access',
      label: '免费使用',
    },
    {
      Icon: BiUserCircle,
      body: '即刻开启，无需注册登录。',
      id: 'no-registration',
      label: '无需注册',
    },
    {
      Icon: BsSoundwave,
      body: `探索 ${count} 种独特音景，从雨林到城市风光。`,
      id: 'diverse-sounds',
      label: '多样音效',
    },
    {
      Icon: RxMixerHorizontal,
      body: '混合和调节声音，打造你的完美音景。',
      id: 'customizable-mixes',
      label: '自定义混音',
    },
    {
      Icon: BiLogoGithub,
      body: '贡献与协作，让美好更加美好。',
      id: 'open-source',
      label: '开源项目',
      link: {
        label: '源代码',
        url: 'https://github.com/remvze/moodist',
      },
    },
    {
      Icon: BsStars,
      body: '无缝体验，专注于声音，而非技术。',
      id: 'seamless-experience',
      label: '流畅体验',
    },
    {
      Icon: BsStars,
      body: '传播宁静，轻松分享你的定制音效组合。',
      id: 'share-selections',
      label: '分享音效',
    },
    {
      Icon: BsStars,
      body: '保存你最喜欢的混音，即刻回到你的声音天堂。',
      id: 'save-presets',
      label: '保存预设',
      soon: true,
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <Container>
        <div className={styles.iconContainer}>
          <div className={styles.tail} />
          <div className={styles.icon}>
            <BsStars />
          </div>
        </div>

        <h2 className={styles.title}>功能特性</h2>

        <div className={styles.features}>
          {features.map(feature => (
            <div className={styles.reason} key={feature.id}>
              <div className={styles.icon}>
                <feature.Icon />
              </div>
              <h3 className={styles.label}>{feature.label}</h3>
              <p className={styles.body}>
                <Balancer>{feature.body}</Balancer>
              </p>

              {feature.link && (
                <a className={styles.link} href={feature.link.url}>
                  {feature.link.label}
                </a>
              )}

              {feature.soon && <div className={styles.soon}>即将推出</div>}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
