import React, { Component } from 'react';
import { HorizontalBar, Doughnut } from 'react-chartjs-2';

import '../assets/css/languages.css';

export default class Languages extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.renderColors();
	}

	render() {
		const languages = this.props.languages;
		delete languages.total;
		const dataLabels =
			Object.keys(languages).length > 0
				? Object.keys(languages)
				: ['Javascript', 'HTML', 'CSS', 'Java', 'Python'];
		const dataValues =
			Object.values(languages).length > 0
				? Object.values(languages)
				: [50, 234, 134, 34, 11];

		const primaryColor = getComputedStyle(
			document.documentElement
		).getPropertyValue('--primary-color');
		const textContrasted = getComputedStyle(
			document.documentElement
		).getPropertyValue('--text-color-contrasted');

		const data = {
			labels: dataLabels,
			datasets: [
				{
					data: dataValues,
					backgroundColor: primaryColor,
					hoverBackgroundColor: primaryColor,
					borderWidth: 0,
					borderColor: textContrasted,
					hoverBorderColor: textContrasted,
				},
			],
		};
		const options = {
			scales: {
				yAxes: [
					{
						position: 'right',
						ticks: {
							fontColor: textContrasted,
						},
						gridLines: {
							zeroLineColor: textContrasted,
							color: textContrasted,
							borderDash: [1, 3],
						},
					},
				],
				xAxes: [
					{
						ticks: {
							fontColor: textContrasted,
							min: 0,
						},
						gridLines: { zeroLineColor: textContrasted, color: textContrasted },
					},
				],
			},
			responsive: true,
			maintainAspectRatio: true,
			legend: {
				display: false,
			},
		};

		return (
			<section id='languages' className='languages'>
				<HorizontalBar data={data} options={options} height={100} />
			</section>
		);
	}
}
