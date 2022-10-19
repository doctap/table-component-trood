import React from 'react';
import { IItemRow } from '../../server/Server';
import ButtonAction from '../buttonAction/ButtonAction';
import styles from './ItemRow.module.scss';

export default function ItemRow(props: IItemRow) {
	return (
		<tr
			id={props.id.toString()}
			className={styles.row}
			style={{ background: getColorStatus(props.status, true) }}
		>
			<td>
				<div className={styles.cellStatus}>
					<div
						className={styles.statusColor}
						style={{ background: getColorStatus(props.status, false) }}
					/>
					<div className={styles.name} children={props.name} />
				</div>
			</td>
			<td>{props.type}</td>
			<td>{props.conditions}</td>
			<td>&#36; {props.volume}</td>
			<td> &#37; {props.roi}</td>
			<td>{props.free}</td>
			<td>&#37; {props.hedge}</td>
			<td>
				<ButtonAction onClick={() => console.log('order id: ', props.id.toString())} buttonText='Buy' />
			</td>
		</tr>
	)
}

const getColorStatus = (color: string, isBackground: boolean) => {
	switch (color) {
		case 'red': return isBackground ? '#FFDEDD' : '#FF4040';
		case 'green': return isBackground ? '#DDFFDF' : '#269926';
		case 'yellow': return isBackground ? '#FFF8DD' : '#FFC900';

		default:
			break;
	}
}