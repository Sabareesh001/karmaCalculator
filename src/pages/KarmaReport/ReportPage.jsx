import "./ReportPage.css";
import bdImg from "../../assets/Mask Group 112.svg";
import "../../assets/Fonts/css/excon.css";
import SVGComponent from "../../assets/SVGComponent";
import Status from "../../assets/icons8-graph-report (2).svg";
import SVGComponent2 from "../../assets/SVGComponent2";
import tree from "../../assets/Deciduous Tree.png";
import GaugeChart from "./graph";
import { Link } from "react-router-dom";
import Buttons from "../../components/button";

const ReportPage = () => {
	return (
		<div className="parent" style={{ backgroundImage: `url(${bdImg})` }}>
			<div className="head">
				<h3 style={{ color: "#000" }}>Summary</h3>
			</div>
			<div className="body">
				<div className="Report">
					<SVGComponent className="svg" />
					<div className="container">
						<div className="conTitle">
							<h5 style={{ color: "#000" }}>Your annual carbon footprint</h5>
						</div>
						<div className="Graph" style={{ color: "#000" }}>
							<GaugeChart karmavalue="18 ton CO2" values={[60, 20, 30]} />
						
						</div>
						<div className="GraphReport">
							<div className="RepContainer">
								<div className="RepImg">
									<img src={Status}></img>
								</div>
								<div className="RepFeed">
									<p>Which is 20% higher than average</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="PlantTree">
					<SVGComponent2 className="svg" />
					<div className="container">
						<div className="tree">
							<img src={tree}></img>
						</div>
						<div className="Tag">
							<h6 style={{ color: "#000" }}>
								Offset your excess Carbon footprint by
							</h6>
							<h4>Planting 15 Saplings</h4>
						</div>
						<div className="Submit">
							<Link to="/form">
								<Buttons
									text="Plant now to offset"
									background="#1b9863"
									color="#fff"
									fontSize="12px"
								/>
							</Link>
						</div>
					</div>
				</div>
				<div className="Remaind">
					<Link to="/instructions">
						<button style={{ color: "#0E70EB" }}>Remind Me Later</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ReportPage;
