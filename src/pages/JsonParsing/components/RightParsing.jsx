import React, { useEffect, useState } from 'react';
import { Card, Input } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import styles from '../style.less';
import ReactJson from 'react-json-view';

const { TextArea } = Input

const RightParsing = (props) => {

  useEffect(() => {
  }, [])

  const { textAreaValue } = props

  return (
    <div
      className={styles.rightParsing}
    >
      {/* {
        !errorMessage ? (
          <ReactJson 
            className={styles.reactJson}
            // theme={'google'}
            src={!errorMessage ? JSON.parse(textAreaValue) : null}
          />
        ) : (
          <Card>{errorMessage}</Card>
        )
      } */}
      <ReactJson 
            className={styles.reactJson}
            // theme={'google'}
            src={JSON.parse(textAreaValue)}
          />
    </div>
  )
}

export default RightParsing