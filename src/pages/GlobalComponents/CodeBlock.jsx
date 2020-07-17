import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { jsx, javascript, java, less, python } from 'react-syntax-highlighter/dist/esm/languages/prism';

class CodeBlock extends PureComponent {

  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  }

  static defaultProps = {
    language: null
  }

  componentWillMount() {
    SyntaxHighlighter.registerLanguage("jsx", jsx);
    SyntaxHighlighter.registerLanguage("javascipt", javascript);
    SyntaxHighlighter.registerLanguage("java", java);
    SyntaxHighlighter.registerLanguage("python", python);
    SyntaxHighlighter.registerLanguage("less", less);
  }

  render() {
    const { language, value } = this.props
    
    return (
      <figure className={"highlight"}>
      <SyntaxHighlighter 
        language={language}
        style={tomorrow}
      >
        {value}
      </SyntaxHighlighter>
      </figure>
    )
  }
}

export default CodeBlock;