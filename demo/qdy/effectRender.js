import { createElement, render, useRef, useEffect, useState } from 'react';

export const Counter = () => {
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
		<div key={'Counter_div1'} onClick={increment}>
			<div key={'Counter_div1_div1'}>Count: {count}</div>
			<div key={'Counter_div1_div2'} ref={renderRoot} />
		</div>
	);
};

const Dummy = () => {
	const [temp] = useState('Dummy');
	return <div key="Dummy_div">{temp}</div>;
};
