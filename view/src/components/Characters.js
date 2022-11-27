import React from "react";
import CodeBlock from "./CodeBlock";
import { getCharacter, getVoice, getSpecies } from "../codeExamples/characterCode";
import TableB from "./tables/TableB";
import bodyTableCharacters from "../codeExamples/charactersTableContent";

const Characters = ({ language, theme, showLineNumbers }) => {
  return (
    <div>
      <h3>
        GET Characters
      </h3>

      <p>When requesting a character by their name, voice person or species, you will get either an object or an array of objects. Each object will have a minimum of 7 keys, and certain characters will have an additional 1 or 2 keys to indicate their filmography and/or breed.</p>


      <TableB tableContent={bodyTableCharacters}/>

      <div class="under-table-block">
        <p>Result of searching bojack horseman with rootUrl/api/<a href="https://bojack-horseman-api.onrender.com/api/characters/bojack%20horseman" target="_blank" rel="noopener noreferrer">characters/bojack horseman</a> :</p>
      </div>

      <CodeBlock
        text={getCharacter}
        language={language}
        theme={theme}
        showLineNumbers={showLineNumbers}
      />

      <p>
        Requests for voice actors and species return arrays of character
        objects. All the data listed above will be present in each of these
        objects.
      </p>
      <p>
        Response for rootURL/api/characters/
        <a
          href="https://bojack-horseman-api.onrender.com/api/characters/voice/alison brie"
          target="_blank"
          rel="noopener noreferrer"
        >
          voice/Alison Brie
        </a>
      </p>

      <div>
      <CodeBlock
        text={getVoice}
        language={language}
        theme={theme}
        showLineNumbers={showLineNumbers}
      />
      </div>

      <p>
      Response for rootURL/api/characters/<a rel="noopener noreferrer" href="https://bojack-horseman-api.onrender.com/api/characters/species/cat">species/cat</a>
      </p>

      <div>
      <CodeBlock
        text={getSpecies}
        language={language}
        theme={theme}
        showLineNumbers={showLineNumbers}
      />
      </div>
    </div>
  );
};

export default Characters;
