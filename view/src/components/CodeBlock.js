import React from 'react'
import { CopyBlock } from "react-code-blocks";

const CodeBlock = (props) => {
  return (
    <div className="code-container">
        <CopyBlock
            className='codeblock'
            text={props.text}
            language={props.language}
            theme={props.theme}
            showLineNumbers={props.showLineNumbers}
            wrapLines
        />
    </div>
  )
}

export default CodeBlock