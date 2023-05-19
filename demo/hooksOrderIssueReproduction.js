import { createElement, render, useRef, useEffect, useState } from 'react';

export const HOIssueReproduction = () => {
	const [count, setCount] = useState(0);
	useState('binggo!!');
	const renderRoot = useRef();
	useEffect(() => {
		if (count > 0) {
			const div = renderRoot.current;
			render(<Dummy key="Dummy" />, div);
		}
	}, [count]);

	const increment = () => {
		setCount(x => x + 1);
		setTimeout(() => {
			setCount(x => x + 1);
		}, 0);
	};

	return (
		<div onClick={increment}>
			<div>Count: {count}</div>
			<div ref={renderRoot} />
		</div>
	);
};

const Dummy = () => {
	const [temp] = useState('Dummy');
	return <div>{temp}</div>;
};
