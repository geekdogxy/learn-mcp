import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className='hero-section'>
      <div className='container'>
        <h1 className='hero-title'>{siteConfig.title}</h1>
        <p className='hero-subtitle'>MCP — AI 应用程序的标准化接口</p>
        <div className={styles.buttons}>
          <Link className='button button--primary button--lg' to='/docs/get-started'>
            开始学习 MCP
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeatureSection() {
  return (
    <div className='container-spacious'>
      <Heading as='h2' className='section-title text--center margin-top--lg'>
        为什么选择 MCP
      </Heading>
      <div className='feature-grid'>
        <div className='card'>
          <div className='card-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              width='32'
              height='32'>
              <path d='M7.5 3.375c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v17.25c0 1.035-.84 1.875-1.875 1.875h-5.25c-1.036 0-1.875-.84-1.875-1.875v-17.25zm1.875-.375a.375.375 0 00-.375.375v17.25c0 .207.168.375.375.375h5.25a.375.375 0 00.375-.375v-17.25a.375.375 0 00-.375-.375h-5.25z' />
              <path d='M12 12.75A.75.75 0 1112 11.25a.75.75 0 010 1.5zM7.95 6.862a.75.75 0 10-1.275-.795A9.726 9.726 0 003 11.25c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a9.726 9.726 0 00-3.675-7.627.75.75 0 10-.9 1.2A8.226 8.226 0 0121 11.25c0 4.558-3.693 8.25-8.25 8.25S4.5 15.808 4.5 11.25c0-1.918.659-3.683 1.76-5.083a8.241 8.241 0 013.756-2.873A.75.75 0 017.95 6.862z' />
            </svg>
          </div>
          <h3>标准化</h3>
          <p>
            MCP 为 AI 应用程序提供了一个标准化的接口，类似于 USB-C 为设备提供了标准化的连接方式。
          </p>
        </div>
        <div className='card'>
          <div className='card-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              width='32'
              height='32'>
              <path d='M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z' />
              <path d='M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z' />
            </svg>
          </div>
          <h3>开放协议</h3>
          <p>
            作为开放协议，MCP 标准化了应用程序如何向 LLM 提供上下文，促进了 AI 生态系统的互操作性。
          </p>
        </div>
        <div className='card'>
          <div className='card-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              width='32'
              height='32'>
              <path d='M16.5 3.75a1.5 1.5 0 01-1.5 1.5h-6A1.5 1.5 0 018.25 3H7.5a3 3 0 00-3 3v12a3 3 0 003 3h9a3 3 0 003-3v-9.75l-3-3V3.75z' />
              <path d='M12.983 8.625c1.937 0 3.512 1.57 3.512 3.5 0 1.937-1.575 3.512-3.512 3.512A3.51 3.51 0 019.47 12.13c0-1.93 1.575-3.505 3.513-3.505z' />
            </svg>
          </div>
          <h3>易于集成</h3>
          <p>无论您使用何种数据源或 AI 模型，MCP 都提供了简单的集成路径，简化开发流程。</p>
        </div>
      </div>
    </div>
  );
}

function ArchitectureSection() {
  return (
    <section className='section section-compact'>
      <div className='container-spacious'>
        <Heading as='h2' className='section-title text--center'>
          MCP 架构
        </Heading>

        <div className='architecture-container'>
          <img
            src='/img/mcp-architecture.png'
            alt='MCP Architecture Diagram'
            className='architecture-img'
          />
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='MCP 是一个开放协议，它标准化了应用程序如何向 LLM 提供上下文。'>
      <HomepageHeader />
      <FeatureSection />
      <ArchitectureSection />
    </Layout>
  );
}
