import React from 'react';
import { Card, Tag, Divider } from 'antd';
import ReactMarkDown from 'react-markdown/with-html';
import indexMd from './index.md'
import CodeBlock from '../GlobalComponents/CodeBlock';
import styles from './style.less'

const Introduction = () => {
  return (
    <div>
      <Card
        bordered={false}
        className={styles.mainCard}
      >
        <div>
          <Tag color={'rgb(140, 190, 60)'}>exclusive-utils for you</Tag>
          <Divider />
          <ReactMarkDown 
            source={indexMd}
            escapeHtml={false}
            renderers={{
              code: CodeBlock
            }}
          />
        </div>
      </Card>
    </div>
  )
}

export default Introduction