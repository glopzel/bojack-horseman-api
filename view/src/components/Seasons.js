import React from 'react'
import TableB from './tables/TableB'
import seasonsTableContent from '../codeExamples/seasonsTableContent'
import CodeBlock from './CodeBlock'
import seasonsCode from '../codeExamples/seasonsCode'

const Seasons = ({language, theme, showLineNumbers}) => {
  return (
    <div>
      <h3>GET Seasons</h3>
      <p>
          When requesting a season by the number of it, you will get an object with the season, the year it was released, and the episode names.
      </p>

      <TableB tableContent={seasonsTableContent}/>

        <p>
            Result of search for season 1 <a href="https://bojack-horseman-api.onrender.com/api/seasons/1" target='_blank' rel="noopener noreferrer">rootURL/seasons/1</a>
        </p>

      <CodeBlock
        text={seasonsCode.getCode}
        language={language}
        theme={theme}
        showLineNumbers={showLineNumbers}
      />
    </div>
  )
}

export default Seasons