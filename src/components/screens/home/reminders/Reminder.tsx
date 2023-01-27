import { Heading } from '@/components/ui/heading/Heading';
import { Paper } from '@/components/ui/paper/Paper';
import { sliceText } from '@/utils/sliceText';
import Link from 'next/link';
import { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Reminder.module.scss';

export interface IReminderProps {
	title: string;
	text: string;
	link: string;
	linkText: string;
	img: string;
}

export const Reminder: FC<IReminderProps> = ({
	link,
	linkText,
	text,
	title,
	img,
}) => {
	const [open, setOpen] = useState(false);

	const shortedText = sliceText(text);

	const visible = () => {
		setOpen(true);
	};

	const hide = () => {
		setOpen(false);
	};

	return (
		<Paper height={230} className={styles.reminder}>
			<div className={styles.block} style={{ backgroundImage: `url(${img})` }}>
				<Heading className={styles.title} headingLevel='h4'>
					{title}
				</Heading>

				<div className={styles.text}>
					<p onMouseEnter={visible} onMouseLeave={hide}>
						{shortedText}
					</p>
					<CSSTransition
						in={open}
						timeout={400}
						unmountOnExit
						classNames='reminder-anim'
					>
						<p className={styles.tooltip}>{text}</p>
					</CSSTransition>
				</div>

				<Link className='my-link' href={link}>
					{linkText}
				</Link>
			</div>
		</Paper>
	);
};
