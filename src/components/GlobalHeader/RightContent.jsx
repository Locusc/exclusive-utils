import { Tooltip, Tag } from 'antd';
import { QuestionCircleOutlined, GithubOutlined, WeiboOutlined, InstagramOutlined } from '@ant-design/icons';
import React from 'react';
import { connect, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight = props => {
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className={className}>
      {/* <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="umi ui"
        options={[
          {
            label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>,
            value: 'umi ui',
          },
          {
            label: <a href="next.ant.design">Ant Design</a>,
            value: 'Ant Design',
          },
          {
            label: <a href="https://protable.ant.design/">Pro Table</a>,
            value: 'Pro Table',
          },
          {
            label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
            value: 'Pro Layout',
          },
        ]} // onSearch={value => {
        //   //console.log('input', value);
        // }}
      /> */}
      {/* <Avatar />
      {REACT_APP_ENV && (
        <span>
          <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
        </span>
      )}
      <SelectLang className={styles.action} /> */}
      <a href="https://github.com/Locusc/exclusive-utils" target="_blank">
        <Tooltip title={"Github"}>
          <GithubOutlined className={styles.action} />  
        </Tooltip>
      </a>
      <a href="https://weibo.com/u/3302990745?topnav=1&wvr=6&topsug=1&is_all=1" target="_blank">
        <Tooltip title={"Weibo"}>
          <WeiboOutlined className={styles.action} />
        </Tooltip>
      </a>
      <a href="https://www.blog.locusc.cn" target="_blank">
        <Tooltip title={"个人博客"}>
          <InstagramOutlined className={styles.action} />
        </Tooltip>
      </a>
    </div>
  );
};

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
