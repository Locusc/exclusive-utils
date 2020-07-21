import React, { useState } from 'react';
import { Card, Col, Row, DatePicker, Input, Button, Tag, Form, message } from 'antd';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/pages/GlobalComponents/CodeBlock';
import indexMd from './index.md';
import rightMd from './right.md';
import styles from './style.less';
import moment from 'moment';
import { filterObject } from '@/utils/utils';

const MomentObjectFormat = () => {
  // 表单hook
  const [form] = Form.useForm();
  // 转换后的值
  const [afterFormatValue, setAfterFormatValue] = useState('')

  const handleOnFinish = (value) => {
    console.log(value)
    if(!value.momemtDateOne && !value.inputValue && !value.momentDateTwo) {
      message.warning('请选择一些参数')
    } else {
      message.success(`选择的对象: 
        {
          ${value.momemtDateOne  ? `${value.momemtDateOne},` : ''}
          ${value.inputValue ? `${value.inputValue},` : ''}
          ${value.momentDateTwo ? `${value.momentDateTwo}` : ''}
        }
      `, 5)
      setAfterFormatValue(JSON.stringify(momentObjectFormatDateType(value)))
    }
  }

  const momentObjectFormatDateType = (param, dateFormat = 'YYYY-MM-DD') => {
    if(Object.keys(param).length > 0) {
      let data = new Map()
      const params = filterObject(param)
      for (const key in params) {
        if(params[key]._d && params[key]._d instanceof Date) {
          params[key] = moment(params[key]).format(dateFormat)
        }
        data.set(key, params[key])
      }
      
      let obj = {};
      for(let [k,v] of data) {
        obj[k] = v;
      }
      return obj
    } else {
      return new Error('Object is null')
    }
  }

  return (
    <Card
      bordered={false}
      className={styles.mainCard}
    >
      <Form
        form={form}
        onFinish={handleOnFinish}
        scrollToFirstError
      >
        <Row gutter={[8]}>
          <Col span={12}>
            <ReactMarkdown
              source={indexMd}
              escapeHtml={false}
              renderers={{
                code: CodeBlock
              }}
            />
          </Col>
          <Col span={12}>
            <ReactMarkdown
              source={rightMd}
              escapeHtml={false}
              renderers={{
                code: CodeBlock
              }}
            />
            <Row gutter={8}>
              <Col span={6}>
                <Form.Item
                  name={'momemtDateOne'}
                >
                  <DatePicker 
                    placeholder={'请选择时间'}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name={'inputValue'}
                >
                  <Input 
                    placeholder={'请输入一个值'}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name={'momentDateTwo'}
                >
                  <DatePicker 
                    placeholder={'请选择时间'}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Button type={'primary'} htmlType={'submit'}>点击转换</Button>
              </Col>
            </Row>
            <div>
              <Input.TextArea 
                autoSize={{ minRows: 10, maxRows: 16 }} 
                value={`转换结果: ${afterFormatValue}`}
              />
            </div>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}

export default MomentObjectFormat