import { createElement, render } from 'react';
import './style.scss';
import installLogger from './logger';
import { initDevTools } from 'preact/devtools/src/devtools';
import { initDebug } from 'preact/debug/src/debug';
import { HOIssueReproduction } from './hooksOrderIssueReproduction';
let isBenchmark = /(\/spiral|\/pythagoras|[#&]bench)/g.test(
	window.location.href
);
if (!isBenchmark) {
	// eslint-disable-next-line no-console
	console.log('Enabling devtools and debug');
	// initDevTools();
	// initDebug();
}

// mobx-state-tree fix
window.setImmediate = setTimeout;

// document.body.innerHTML = renderToString(<App url={location.href.match(/[#&]ssr/) ? undefined : '/'} />);
// document.body.firstChild.setAttribute('is-ssr', 'true');

installLogger(
	String(localStorage.LOG) === 'true' || location.href.match(/logger/),
	String(localStorage.CONSOLE) === 'true' || location.href.match(/console/)
);

render(<HOIssueReproduction />, document.body);
