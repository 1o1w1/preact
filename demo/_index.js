import { render, useState } from 'react';

import './style.scss';
import installLogger from './logger';
import { initDevTools } from 'preact/devtools/src/devtools';
import { initDebug } from 'preact/debug/src/debug';

let isBenchmark = /(\/spiral|\/pythagoras|[#&]bench)/g.test(
	window.location.href
);
if (!isBenchmark) {
	// eslint-disable-next-line no-console
	console.log('Enabling devtools and debug');
	initDevTools();
	initDebug();
}

// mobx-state-tree fix
window.setImmediate = setTimeout;

function Home({ text }) {
	return <div key={'Home_div'}>{text}</div>;
}

function App() {
	const [text, setText] = useState('Hello');
	return (
		<div key={'App_div'} onClick={() => setText('World')}>
			<Home key="Home" text={text} />
		</div>
	);
}

// document.body.innerHTML = renderToString(<App url={location.href.match(/[#&]ssr/) ? undefined : '/'} />);
// document.body.firstChild.setAttribute('is-ssr', 'true');

installLogger(
	String(localStorage.LOG) === 'true' || location.href.match(/logger/),
	String(localStorage.CONSOLE) === 'true' || location.href.match(/console/)
);

render(<App key="App" />, document.body);
