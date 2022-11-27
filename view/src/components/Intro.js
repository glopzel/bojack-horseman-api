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
            <CodeBlock text={text} language={language} theme={theme} showLineNumbers={showLineNumbers}/>
    </section>
  )
}

export default Intro