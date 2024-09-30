import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const GaugeChart = ({ karmavalue, values }) => {
	const data = {
		datasets: [
			{
				data: values, // Data for the sections (Commute, Food, Appliances)
				backgroundColor: ["#FFBF00", "#FF5F5F", "#5BE12C"], // Section colors
				borderWidth: 0, // Border thickness for the arcs
				hoverOffset: 4,
				cutout: "90%", // This determines the size of the center, making the arc thinner
				rotation: 270, // Start the semi-circle from the bottom
				circumference: 180, // Create the half-circle shape
				weight: 0.5, // Decrease this to reduce the thickness of the arcs
				borderRadius: 1,
			},
		],
	};

	const options = {
		responsive: false,
		maintainAspectRatio: false,
		plugins: {
			tooltip: { enabled: false }, // Disable tooltip
			legend: {
				display: true, // Show the legend
				position: "bottom", // Position it below the chart
				labels: {
					font: {
						size: 12, // Font size for the legend labels
						weight: "bold", // Font weight
						position: "relative",
						family: "'Excon-medium'",
					},
					color: "#000", // Legend label text color
					boxWidth: 20, // Size of the box next to the label
					padding: 20, // Spacing between each legend item
				},
			},
		},
plugins: {
      tooltip: { enabled: false },}
	};

	return (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: "90%",
				display: "flex",
				width: "60%",
				height: "80%",
				display: "fle6x",
				justifyContent: "center",
				alignItems: "center",
				fontFamily: "Excon-medium",
			}}
		>
			<Doughnut
				data={data}
				options={options}
				style={{ fontFamily: "Excon-medium" }}
			/>
			{/* Center Text */}
			<Doughnut data={data} options={options} style={{ width: "100%" }} />
			<div
				style={{
					position: "absolute",
					top: "75%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					fontSize: "16px",
					fontWeight: "800",
					fontFamily: "Excon-medium",
					fontSize: "18px",
					fontWeight: "1000",
				}}
			>
				{karmavalue}
			</div>
		</div>
	);
};

export default GaugeChart;
