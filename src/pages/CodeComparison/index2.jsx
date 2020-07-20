import React, { useEffect, useRef, Component } from 'react';
import { Card } from 'antd';
import CodeMirror from 'codemirror/lib/codemirror';
import DiffMatchPatch from 'diff_match_patch';
import styles from './style.less';

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'

import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/python/python'

import 'codemirror/addon/merge/merge.css';
import 'codemirror/addon/merge/merge.js';

import "codemirror/addon/fold/foldgutter.css"
import "codemirror/addon/fold/foldcode"
import "codemirror/addon/fold/brace-fold"//折叠js
import "codemirror/addon/fold/xml-fold"//折叠xml和html
import "codemirror/addon/fold/markdown-fold"//折叠md
import "codemirror/addon/fold/comment-fold"//折叠注释，但是测试一下只能折叠html的注释；
import "codemirror/addon/selection/active-line"

Object.keys(DiffMatchPatch).forEach((key) => { window[key] = DiffMatchPatch[key]; });

// MergeView 设置
const mergeViewParams = {
  readOnly: false, // 只读
  allowEditingOriginals: true, // 原始编辑器是否可编辑
  lineNumbers: true, // 显示行号
  theme: 'idea', // 设置主题
  value: "代码对比/归并 left area", // 左边的内容（新内容）
  orig: "代码对比/归并 right area", // 右边的内容（旧内容）
  mode: "javascript", // 代码模式为js模式，这里还可以是xml，python，java，等等，会根据不同代码模式实现代码高亮
  highlightDifferences: "highlight", // 有差异的地方是否高亮
  // connect: null,
  revertButtons: true, // revert按钮设置为true可以回滚
  styleActiveLine: true, // 光标所在的位置代码高亮
  lineWrap: false, // 文字过长时，是换行(wrap)还是滚动(scroll),默认是滚动
  lineWrapping: false, // 是否换行
  smartIndent: true, // 智能缩进
  matchBrackets: true, // 括号匹配
  foldGutter: true, // 代码折叠
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  // 智能提示
  extraKeys: {
    "Alt-/": "autocomplete", "F11": (cm) => {
      cm.setOption("fullScreen", !cm.getOption("fullScreen"));
    }
  }
}
/**
 * 代码对比组件
 */
class CodeComparison extends Component {

  componentDidMount() {
    const { FileContentData } = this.props
    this.initUI(FileContentData)
  }

  componentWillReceiveProps(nextProps){
    this.initUI(nextProps.FileContentData);
  }

  initUI(data) {
    CodeMirror.MergeView(
      this.refs['react-diff-code-view'], 
      Object.assign({}, 
      mergeViewParams,
      this.props.options || {})
    )
  }

  handleChangeData = (e) => {
    console.log(e)
  }

  render() {
    return (
      <Card
        bordered={false}
        className={styles.mainCard}
      >
        <div 
          ref="react-diff-code-view"
          className={styles.codeDiffView}
        />
      </Card>
    )
  }
}

export default CodeComparison