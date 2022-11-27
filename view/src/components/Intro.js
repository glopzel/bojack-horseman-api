import React from 'react'
import CodeBlock from './CodeBlock'

const Intro = ({text, language, theme, showLineNumbers}) => {
  return (
    <section id="intro">
            <h2 id="intro-header">Introduction</h2>
            <div>
                <p>
                    The BoJack Horseman API is based on the BoJack Horseman Netflix series. Data for characters in this API include name, species, aliases, first and last appearances, occupation, and other information.
                </p>
            </div>
              
            <section>
              <h2>Endpoints</h2>
              <h3>
                    GET root/api
                </h3>

                <p>
                    This endpoint provides the information for all the url endpoints within the API. All Requests are GET requests sent over HTTPS.
                </p>
                <p>Result of searching <a class="api-link" href="https://bojack-horseman-api.onrender.com/api" target="_blank" rel="noopener noreferrer">https://bojack-horseman-api.onrender.com/api</a> :</p>

                <CodeBlock text={text} language={language} theme={theme} showLineNumbers={showLineNumbers}/>
            </section>
            
    </section>
  )
}

export default Intro