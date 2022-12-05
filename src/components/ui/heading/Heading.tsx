import { ElementType, FC, HTMLAttributes } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	headingLevel: ElementType;
}

export const Heading: FC<HeadingProps> = ({
	headingLevel,
	children,
	className,
}) => {
	const THeading = headingLevel;
	return <THeading className={className}>{children}</THeading>;
};
