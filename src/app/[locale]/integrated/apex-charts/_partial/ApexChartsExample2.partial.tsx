import React, { useState } from 'react';
import { IChartOptions } from '@/interface/chart.interface';
import Chart from '@/components/Chart';

const ApexChartsExample2Partial = () => {
	const [state] = useState<IChartOptions>({
		series: [
			{
				name: 'TEAM A',
				type: 'column',
				data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
			},
			{
				name: 'TEAM B',
				type: 'area',
				data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
			},
			{
				name: 'TEAM C',
				type: 'line',
				data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
			},
		],
		options: {
			chart: {
				height: 300,
				type: 'line',
				stacked: false,
			},
			stroke: {
				width: [0, 2, 5],
				curve: 'smooth',
			},
			plotOptions: {
				bar: {
					columnWidth: '50%',
				},
			},

			fill: {
				opacity: [0.85, 0.25, 1],
				gradient: {
					inverseColors: false,
					shade: 'light',
					type: 'vertical',
					opacityFrom: 0.85,
					opacityTo: 0.55,
					stops: [0, 100, 100, 100],
				},
			},
			labels: [
				'01/01/2003',
				'02/01/2003',
				'03/01/2003',
				'04/01/2003',
				'05/01/2003',
				'06/01/2003',
				'07/01/2003',
				'08/01/2003',
				'09/01/2003',
				'10/01/2003',
				'11/01/2003',
			],
			markers: {
				size: 0,
			},
			xaxis: {
				type: 'datetime',
			},
			yaxis: {
				title: {
					text: 'Points',
				},
				min: 0,
			},
			tooltip: {
				shared: true,
				intersect: false,
				y: {
					formatter(y) {
						if (typeof y !== 'undefined') {
							return `${y.toFixed(0)} points`;
						}
						return y;
					},
				},
			},
		},
	});
	return (
		<Chart
			series={state.series}
			options={state.options}
			type={state.options.chart?.type}
			height={state.options.chart?.height}
		/>
	);
};

export default ApexChartsExample2Partial;
