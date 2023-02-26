import { useState, useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function createWrapperAndAppendToBody(wrapperId: string) {
	const wrapperElement = document.createElement('div');
	wrapperElement.setAttribute('id', wrapperId);
	document.body.appendChild(wrapperElement);
	return wrapperElement;
}

const Portal = ({ children, wrapperId }) => {
	const [wrapperElement, setWrapperElement] = useState(null);
	const createdWrapperRef = useRef(false);

	useLayoutEffect(() => {
		let element = document.getElementById(wrapperId);
		// if element is not found with wrapperId or wrapperId is not provided,
		// create and append to body
		if (!element) {
			createdWrapperRef.current = true;
			element = createWrapperAndAppendToBody(wrapperId);
		}
		setWrapperElement(element);

		return () => {
			// delete the programatically created element
			if (createdWrapperRef.current && element.parentNode) {
				element.parentNode.removeChild(element);
			}
		};
	}, [wrapperId]);

	if (wrapperElement === null) return null;

	return createPortal(children, wrapperElement);
};

export default Portal;
