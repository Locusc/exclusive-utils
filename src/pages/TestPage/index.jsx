import React, { Component } from 'react';
import jsonlint from 'jsonlint'
import { Card } from 'antd';

class TestPage extends Component {

  componentDidMount() {
    const defaultJson = '{"Json解析":"支持格式化高亮折叠","支持XML转换":"支持XML转换Json,Json转XML","Json格式验证":"更详细准确的错误信息"}'
    
    try {
      const parseValue = jsonlint.parse(defaultJson)
      console.log(parseValue)
    } catch (error) {
      console.log(error)
    }
  }

  state = {

  }

  render(){
    return (
      <Card
        bordered={false}
      >
        <div>TestPage</div>
      </Card>
    )
  }
}
export default TestPage