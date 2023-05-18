import { createElement, render, useRef, useEffect, useState } from 'react';

export const Counter = () => {
	const [count, setCount] = useState(0);
	useState(8888888);
	const renderRoot = useRef();
	useEffect(() => {
		if (count > 0) {
			const div = renderRoot.current;
			// return () => render(<Dummy key="Dummy" />, div);
			render(<Dummy key="Dummy" />, div);
		}
		return () => 'test';
	}, [count]);

	const increment = () => {
		setCount(x => x + 1);
		setTimeout(() => {
			setCount(x => x + 1);
		}, 0);
	};

	return (
		<div key={'Counter_div1'} onClick={increment}>
			<div key={'Counter_div1_div1'}>Count: {count}</div>
			<div key={'Counter_div1_div2'} ref={renderRoot} />
		</div>
	);
};

const Dummy = () => {
	const [temp] = useState(999999);

	return <div key="Dummy_div">{temp}</div>;
};
