import React, { useState } from 'react';
import { PageHeaderWrapper, FooterToolbar } from '@ant-design/pro-layout';
import { Card, Row, Col, Input } from 'antd';
import styles from './style.less';
import LeftTextArea from './components/LeftTextArea';
import RightParsing from './components/RightParsing';

const defaultJson = '{"Json解析":"支持格式化高亮折叠","支持XML转换":"支持XML转换Json,Json转XML","Json格式验证":"更详细准确的错误信息"}'

const JsonParsing = () => {

  // 输入的数据
  const [textAreaValue, setTextAreaValue] = useState(defaultJson)
  // 错误信息
  const [errorMessage, setErrorMessage] = useState(null)

	return (
    <div>
      <Card
        bordered={false}
        className={styles.mainCard}
      >
        <Row gutter={4}>
          <Col span={11}>
            <LeftTextArea 
              defaultJson={defaultJson}
              textAreaValue={textAreaValue}
              setTextAreaValue={setTextAreaValue}
              setErrorMessage={setErrorMessage}
            />
          </Col>
          <Col span={13}>
            <RightParsing 
              textAreaValue={textAreaValue}
              errorMessage={errorMessage}
            />
          </Col>
        </Row>
      </Card>
    </div>
	)
}

export default JsonParsing