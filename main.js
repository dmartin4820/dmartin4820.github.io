import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <header class="">
        <nav class="">
          <div class="">
            <h1>Denzal Martin</h1>
          </div>
          <div class="">
            <ul>
              <a>Hello</a>
            </ul>
          </div>
        </nav>
    	</header>
  </div>
`

document.querySelectorAll('section').

setupCounter(document.querySelector('#counter'))
