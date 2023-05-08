import { createElement, render, useRef, useEffect, useState } from 'react';

export const Counter = () => {
	debugger;
	const [count, setCount] = useState(0);
	const renderRoot = useRef();
	useEffect(() => {
		if (count > 0) {
			const div = renderRoot.current;
			return () => render(<Dummy />, div);
		}
		return () => 'test';
	}, [count]);

	const increment = () => {
		setCount(x => x + 1);
		setTimeout(() => {
			debugger;
			setCount(x => x + 1);
		});
	};

	return (
		<div onClick={increment}>
			<div>Count: {count}</div>
			<div ref={renderRoot} />
		</div>
	);
};

const Dummy = () => <div>dummy</div>;
