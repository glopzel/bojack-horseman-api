import React from 'react'
import CodeBlock from './CodeBlock'
// import characterCode from '../codeExamples/characterCode'

const Characters = ({text, language, theme, showLineNumbers}) => {
  return (
    <div>
      <h1>characters blawck</h1>
      <CodeBlock text={text} language={language} theme={theme} showLineNumbers={showLineNumbers}/>

      <p>
    Requests for voice actors and species return arrays of character objects. All the data listed above will be present in each of these objects.
      </p>
      <p>
          Response for rootURL/api/characters/<a href="https://bojack-horseman-api.onrender.com/api/characters/voice/alison brie" target="_blank" rel="noopener noreferrer">voice/Alison Brie</a>
      </p>
    </div>
  )
}

export default Characters