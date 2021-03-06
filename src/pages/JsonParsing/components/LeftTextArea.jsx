import React, { useRef, useState } from 'react';
import { Input } from 'antd';
import styles from '../style.less';
import jsonlint from 'jsonlint';
import fastXmlParser from 'fast-xml-parser';

const { TextArea } = Input

const LeftTextArea = (props) => {
  // 文本框防抖标识
  let textAreaTimeout = null;
  const textAreaRef = useRef()

  const handleTextAreaChange = (e) => {
    const textAreaValue = e.target.value
    if (textAreaTimeout) {
      clearTimeout(textAreaTimeout);
      textAreaTimeout = null;
    }
    const handleJsonParsing = () => {
      if(!textAreaValue) {
        setViewFlag(0)
      } else {
        try {
          const trimTextAreaValue = textAreaValue.trim()
          if (trimTextAreaValue.substr(0,1) === '<' && trimTextAreaValue.substr(-1,1) === '>') {
            const parseXmlValue = fastXmlParser.parse(trimTextAreaValue)
            setTextAreaValue(parseXmlValue)
          } else {
            const parseJsonValue = jsonlint.parse(trimTextAreaValue)
            setTextAreaValue(parseJsonValue)
          }
          setViewFlag(1)
        } catch (error) {
          setViewFlag(-1)
          setErrorMessage(String(error))
        }
      }
    }
    textAreaTimeout = setTimeout(handleJsonParsing, 300);
  }

  const {
    setTextAreaValue,
    defaultJson,
    setErrorMessage,
    setViewFlag
  } = props

  return (
    <div>
      <TextArea
        ref={textAreaRef}
        className={styles.textArea}
        style={{ height: '100%', minHeight: 'calc(100vh - 128px)' }}
        placeholder={''}
        onChange={handleTextAreaChange}
        defaultValue={defaultJson}
      />
    </div>
  )
}

export default LeftTextArea
