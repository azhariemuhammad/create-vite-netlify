import { Children, useEffect } from 'react';

import Portal from './ReactPortal';
import Icon from './Icon';

interface Modal {
	children: React.ReactNode;
	title?: string;
	isOpen: boolean;
	primaryBtnText?: string;
	onClickPrimary?: () => void;
	handleClose?: () => void;
	isDisabledPrimaryBtn?: boolean;
	preventClose?: boolean;
}
const Modal = (props: Modal) => {
	const {
		children,
		title,
		isOpen,
		primaryBtnText,
		onClickPrimary,
		handleClose = () => {},
		isDisabledPrimaryBtn,
		preventClose,
	} = props;
	useEffect(() => {
		const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);
		if (isOpen) {
			document.body.addEventListener('keydown', closeOnEscapeKey);
		}
		return () => {
			document.body.removeEventListener('keydown', closeOnEscapeKey);
		};
	}, [handleClose]);

	if (!isOpen) return null;

	return (
		<Portal wrapperId="react-portal-modal-container">
			<div className="w-full h-full">
				<div
					id="modal-bg"
					className="backdrop-blur-sm  w-full h-full top-0 absolute"
				></div>
				<div
					id="modal-box"
					className="w-full sm:max-w-full lg:max-w-lg  min-h-[50%] flex flex-col items-center gap-2  p-6 bg-[#FFFFEB] rounded-xl top-[50%] left-1/2 -translate-x-1/2 absolute"
				>
					<div className="flex justify-center relative w-full">
						<span className="text-2xl font-medium">{title}</span>
						{!preventClose && (
							<button className="btn" onClick={handleClose}>
								<Icon
									iconName="close-circle"
									wrapperStyle="absolute right-0 top-[-10px]"
								/>
							</button>
						)}
					</div>

					{children}

					{primaryBtnText && (
						<button
							id="modal-close"
							onClick={onClickPrimary}
							className="p-3 bg-[#4F46E5] rounded-lg w-1/2 text-white disabled:bg-gray-200 disabled:text-slate-500 disabled:cursor-not-allowed"
							disabled={isDisabledPrimaryBtn}
						>
							{primaryBtnText}
						</button>
					)}
				</div>
			</div>
		</Portal>
	);
};

export default Modal;
