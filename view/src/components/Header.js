import React from 'react'

const Header = () => {
  return (
    <div>
      <button>
            <a href="/">Home</a>
        </button>
        <button>
            <a href="/intro">Root URL</a>
        </button>
        <button>
            <a href="/characters">Characters</a>
        </button>
        <button>
            <a href="/seasons">Seasons</a>
        </button>
    </div>
  )
}

export default Header