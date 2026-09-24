import { h, render } from 'https://esm.sh/preact@10.27.2';
import { useState } from 'https://esm.sh/preact@10.27.2/hooks';
import htm from 'https://esm.sh/htm@3.1.1';

const html = htm.bind(h);

const App = () => {
    // const [count, setCount] = useState(0);

    return html`
    <p>
        Stack running successfull
    </p>
    `;
}

render(html`<${App} />`, document.getElementById('app'));