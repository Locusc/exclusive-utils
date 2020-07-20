import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card } from 'antd';
import {Controlled as CodeMirror} from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

const CodeComparison = () => {
 return (
   <PageHeaderWrapper>
     <Card>
     <CodeMirror
        value={'fghjnk'}
        // options={
        // }
        // options={options}
        // onBeforeChange={(editor, data, value) => {
        //   this.setState({value});
        // }}
        // onChange={(editor, value) => {
        //   console.log('controlled', {value});
        // }}
      />
     </Card>
   </PageHeaderWrapper>
 )
}

export default CodeComparison