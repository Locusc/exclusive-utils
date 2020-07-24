import React, { useState } from 'react';
import { Card, Row, Col, Button, message } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import styles from './style.less';
import { ArrowLeftOutlined, ArrowRightOutlined, ClearOutlined } from '@ant-design/icons';
import request from '@/utils/request';
import YamlLint from 'yaml-lint';
import properties from 'properties';

const Yaml2Properties = () => {

  // 左文本.properties value
  const [leftPropertiesValue, setLeftPropertiesValue] = useState('')
  // 右文本.yaml value
  const [rightYamlValue, setRightYamlValue] = useState('')

  const handleYaml2Properties = async () => {
    if(rightYamlValue) {
      // YamlLint.lint(rightYamlValue)
      //   .then(value => console.log(value))
      //   .catch(error => console.log(error))
      const response = await request('/api/ymlToProperties', {
        method: 'POST',
        data: { content: rightYamlValue }
      })
      setLeftPropertiesValue(response.message)
    } else {
      message.warning('输入yml格式的内容')
    }
  }

  const handleProperties2Yaml = async () => {
    if(leftPropertiesValue) {
      const response = await request('/api/propertiesToYml', {
        method: 'POST',
        data: { content: leftPropertiesValue }
      })
      setRightYamlValue(response.message)
    } else {
      message.warning('输入properties格式的内容')
    }
  }

  const handleChangePropertiesValue = (e) => {
    setLeftPropertiesValue(e.target.value)
  }

  const handleChangeYamlValue = (e) => {
    setRightYamlValue(e.target.value)
  }

  const handleClearAllValues = () => {
    setLeftPropertiesValue('')
    setRightYamlValue('')
  }
  
  return (
    <Card
      bordered={false}
      className={styles.mainCard}
    >
      <Row gutter={8} justify="space-around" align="middle" >
        <Col span={11}>
           <TextArea 
              style={{ minHeight: 'calc(100vh - 128px)' }}
              placeholder={'properties contents'}
              value={leftPropertiesValue}
              onChange={handleChangePropertiesValue}
            />
        </Col>
        <Col span={2}>
            <div
              className={styles.middleButtonDiv}
            >
              <Button
                icon={<ArrowRightOutlined />}
                style={{ backgroundColor: 'rgba(30, 144, 255, 0.5)' }}
                onClick={handleProperties2Yaml}
              >
                2Yml
              </Button>
              <Button
                icon={<ArrowLeftOutlined />}
                style={{ backgroundColor: 'rgba(170, 218, 93, 0.5)' }}
                onClick={handleYaml2Properties}
              >
                2Pro
              </Button>
              <Button
                icon={<ClearOutlined />}
                onClick={handleClearAllValues}
              >
                清除
              </Button>
            </div>
        </Col>
        <Col span={11}>
          <TextArea 
            style={{ minHeight: 'calc(100vh - 128px)' }}
            placeholder={'yaml contents'}
            value={rightYamlValue}
            onChange={handleChangeYamlValue}
          />
        </Col>
      </Row>
    </Card>
  )
}

export default Yaml2Properties