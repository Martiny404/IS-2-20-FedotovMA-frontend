import { ElementType, FC, HTMLAttributes } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	headingLevel: ElementType;
}

export const Heading: FC<HeadingProps> = ({
	headingLevel,
	children,
	className,
	style,
}) => {
	const THeading = headingLevel;
	return (
		<THeading style={style} className={className}>
			{children}
		</THeading>
	);
};
