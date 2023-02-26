import React from 'react';

const Loader = () => {
	return (
		<div className="w-full  mt-2">
			<div className="flex animate-pulse flex-row items-center h-full  space-x-5">
				<div className="w-full flex flex-col space-y-3">
					<div className="w-100 bg-gray-300 h-14 rounded-md "></div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
