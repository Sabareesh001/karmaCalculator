import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import './graph.css'
ChartJS.register(ArcElement, Tooltip, Legend);

const GaugeChart = ({ karmavalue, values }) => {
	const data = {
		// labels:['Commute','Food','Appliances'],
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
	  responsive:true,
	  maintainAspectRatio: false
		
	};

	return (
		<div
         className="doughnutContainer"
		>
			<div className="doughnutCanvas">
			<Doughnut
				data={data}
				options={options}
				height={90}
				width={100}
			    
			/>
			</div>
		
			{/* Center Text */}
			<div
				className="karmaValue"
			>
				{karmavalue}
			</div>
			  <div className="Legend">
						    <div className="Color "><div className="color yellow"></div ><div className="text">Commute</div></div>
						    <div className="Color "><div className="color red"></div><div className="text">Food</div ></div>
						    <div className="Color "><div className="color green"></div><div className="text">Appliances</div></div>
						  </div>
		</div>
	);
};

export default GaugeChart;
