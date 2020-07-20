import React, { useState } from 'react';
import { PageHeaderWrapper, FooterToolbar } from '@ant-design/pro-layout';
import { Card, Row, Col, Input } from 'antd';
import styles from './style.less';
import LeftTextArea from './components/LeftTextArea';
import RightParsing from './components/RightParsing';
import jsonlint from 'jsonlint';

const defaultJson = '{\n  "Json解析\":\"支持格式化高亮折叠\", \n  "支持XML转换\":\"支持XML转换Json,Json转XML\", \n  "Json格式验证\": \"更详细准确的错误信息\"\n}'

const JsonParsing = () => {

  // 输入的数据
  const [textAreaValue, setTextAreaValue] = useState(jsonlint.parse(defaultJson))
  // 错误信息npm install xml2json
  const [errorMessage, setErrorMessage] = useState(null)
  // 显示数据的标识 1.json数据正常解析 -1.格式错误的报错信息 0.没有数据
  const [viewFlag, setViewFlag] = useState(1)

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
              setViewFlag={setViewFlag}
            />
          </Col>
          <Col span={13}>
            <RightParsing 
              textAreaValue={textAreaValue}
              errorMessage={errorMessage}
              viewFlag={viewFlag}
            />
          </Col>
        </Row>
      </Card>
    </div>
	)
}

export default JsonParsing