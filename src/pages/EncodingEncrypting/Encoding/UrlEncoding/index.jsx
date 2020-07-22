import React, { useState } from 'react';
import { Card, Row, Col, Radio, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import styles from './style.less';
import { ArrowLeftOutlined, ArrowRightOutlined, ClearOutlined } from '@ant-design/icons';

const UrlEncoding = () => {

  const options = [
    { label: 'encodeURI', value: 'encodeURI' },
    { label: 'encodeURIComponent', value: 'encodeURIComponent' },
  ];

  const [encodeOption, setEncodeOption] = useState('encodeURIComponent')
  const [leftEncodeValue, setLeftEncodeValue] = useState('https://www.locusc.cn/?scope=view')
  const [rightDecodeValue, setRightDecodeValue] = useState('')

  const handleEncodeOptionChange = (e) => {
    setEncodeOption(e.target.value)
  }

  const hanldeChangeDecodeValue = (e) => {
    setRightDecodeValue(e.target.value)
  }

  const hanldeChangeEncodeValue = (e) => {
    setLeftEncodeValue(e.target.value)
  }

  const handleClearAllValues = () => {
    setLeftEncodeValue('')
    setRightDecodeValue('')
  }

  const handleEncodeValue = () => {
    switch (encodeOption) {
      case 'encodeURI':
        setRightDecodeValue(encodeURI(leftEncodeValue))
        break;
      case 'encodeURIComponent':
        setRightDecodeValue(encodeURIComponent(leftEncodeValue))
        break;
      default:
        setRightDecodeValue(encodeURIComponent(leftEncodeValue))
        break;
    }
  }

  const handleDecodeValue = () => {
    switch (encodeOption) {
      case 'encodeURI':
        setLeftEncodeValue(decodeURI(rightDecodeValue))
        break;
      case 'encodeURIComponent':
        setLeftEncodeValue(decodeURIComponent(rightDecodeValue))
        break;
      default:
        setLeftEncodeValue(decodeURIComponent(rightDecodeValue))
        break;
    }
  }
  
  return (
    <Card
      bordered={false}
      className={styles.mainCard}
    >
      <Radio.Group
        style={{ marginBottom: 10 }}
        options={options}
        value={encodeOption}
        optionType="button"
        buttonStyle="solid"
        onChange={handleEncodeOptionChange}
      />
      <Row gutter={8} justify="space-around" align="middle" >
        <Col span={11}>
           <TextArea 
              autoSize={{ minRows: 18, maxRows: 18 }}
              value={leftEncodeValue}
              onChange={hanldeChangeEncodeValue}
            />
        </Col>
        <Col span={2}>
            <div
              className={styles.encodeAndDecodeDiv}
            >
              <Button
                icon={<ArrowRightOutlined />}
                style={{ backgroundColor: 'rgba(30, 144, 255, 0.5)' }}
                onClick={handleEncodeValue}
              >
                编码
              </Button>
              <Button
                icon={<ArrowLeftOutlined />}
                style={{ backgroundColor: 'rgba(170, 218, 93, 0.5)' }}
                onClick={handleDecodeValue}
              >
                解码
              </Button>
              <Button
                icon={<ClearOutlined />}
                onClick={handleClearAllValues}
              >
                清空
              </Button>
            </div>
        </Col>
        <Col span={11}>
          <TextArea 
            autoSize={{ minRows: 18, maxRows: 18 }}
            value={rightDecodeValue}
            onChange={hanldeChangeDecodeValue}
          />
        </Col>
      </Row>
    </Card>
  )
}

export default UrlEncoding