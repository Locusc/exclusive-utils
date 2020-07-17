import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Tag, Divider } from 'antd';
import ReactMarkDown from 'react-markdown/with-html';
import apiMd from './index.md'
import CodeBlock from '../GlobalComponents/CodeBlock';

const Introduction = () => {
  return (
    <Card
      bordered={false}
    >
      <div>
        <Tag color={'rgb(140, 190, 60)'}>exclusive-utils</Tag>
        <Divider />
        <ReactMarkDown 
          source={apiMd}
          escapeHtml={false}
          renderers={{
            code: CodeBlock
          }}
        />
      </div>
    </Card>
  )
}

export default Introduction