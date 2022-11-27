import React from "react";

const Header = () => {
  return (
    <header className="background-general">
      <nav>
      <ul>
        <li>
          <button>
            <a href="/">Home</a>
          </button>
        </li>

        <li>
          <button>
            <a href="/intro">Root URL</a>
          </button>
        </li>

        <li>
          <button>
            <a href="/characters">Characters</a>
          </button>
        </li>

        <li>
          <button>
            <a href="/seasons">Seasons</a>
          </button>
        </li>

        <li>
          <button>
          <a href="https://github.com/glopzel/bojack-horseman-api" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
          </button>
           
        </li>
      </ul>
      </nav>
      
    </header>
  );
};

export default Header;
