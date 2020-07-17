import React, { useRef } from 'react';
import { Input } from 'antd';
import styles from '../style.less';

const JSONLint = require( 'json-lint' );

const { TextArea } = Input

const LeftTextArea = (props) => {

  const textAreaRef = useRef()

  const handleTextAreaChange = (e) => {
    if(!e.target.value) {
      console.log(textAreaRef)
    } else {
      setTextAreaValue(e.target.value)
    }
  }

  const { 
    setTextAreaValue,
    defaultJson
  } = props
  return (
    <div>
      <TextArea
        ref={textAreaRef}
        style={{ height: 450 }}
        placeholder={''}
        min-height={'100%'}
        onChange={handleTextAreaChange}
        defaultValue={defaultJson}
      />  
    </div>
  )
}

export default LeftTextArea