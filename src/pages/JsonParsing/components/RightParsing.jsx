import React, { useEffect } from 'react';
import { Card } from 'antd';
import styles from '../style.less';
import ReactJson from 'react-json-view';

const ErrorMessageArea = (props) => {
  return (
    <Card
      bordered={false}
      className={styles.errorMessage}
    >
      {props.errorMessage}
    </Card>
  )
}

const RightParsing = (props) => {

  const { 
    textAreaValue,
    errorMessage,
    viewFlag
   } = props
  return (
    <div
      className={styles.rightParsing}
    >
      {
        viewFlag !== -1 ? (
          viewFlag === 1 ? 
          <ReactJson 
            className={styles.reactJson}
            theme={'monokai'}
            src={textAreaValue}
          /> : 
          <ErrorMessageArea 
            errorMessage={null}
          />
        ) : (
          <ErrorMessageArea 
            errorMessage={errorMessage}
          />
        )
      }
    </div>
  )
}

export default RightParsing