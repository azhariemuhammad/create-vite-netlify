import { memo } from 'react';
import { useDynamicSvgImport } from '../hooks/useDynamicSvgImport';

interface IProps {
	iconName: string;
	wrapperStyle?: string;
	svgProp?: React.SVGProps<SVGSVGElement>;
	onClick?: () => void;
}

function Icon(props: IProps) {
	const { iconName, wrapperStyle, svgProp, onClick } = props;
	const { SvgIcon } = useDynamicSvgImport(iconName);

	return (
		<>
			{SvgIcon && (
				<div className={wrapperStyle} onClick={onClick}>
					<SvgIcon {...svgProp} />
				</div>
			)}
		</>
	);
}

export default memo(Icon);
