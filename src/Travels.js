import React from "react";

import Travel from "./Travel";

const travels = [
	{
		destination : "OuiouiLand",
		country : "France",
		image : "https://cdn.connections.be/destinations/NewYork/NYTimesSquare.jpg",
		distance : "1234"
	},
	{
		destination : "NonNonLand",
		country : "Spain",
		image : "https://cdn.connections.be/destinations/NewYork/NYTimesSquare.jpg",
		distance : "4567"
	},
	{
		destination : "MaybeMaybeLand",
		country : "Germany",
		image : "https://cdn.connections.be/destinations/NewYork/NYTimesSquare.jpg",
		distance : "2345"
	},
	{
		destination : "UnJourLand",
		country : "Italy",
		image : "https://cdn.connections.be/destinations/NewYork/NYTimesSquare.jpg",
		distance : "6544"
	},
	{
		destination : "MaisNonland",
		country : "Non",
		image : "https://cdn.connections.be/destinations/NewYork/NYTimesSquare.jpg",
		distance : "1234"
	}
];

  // const Travels = () => (
	// <div>
	//   {travels.map(travels => (
	// 	<figure>
	// 		<img src={travels.image} alt={travels.destination}/>
	// 		<figcaption>
  //     			<blockquote>{travels.destination} located in the {travels.country} is {travels.distance} from Paris</blockquote>
  //   		</figcaption>
  // 		</figure>
	//   ))}
	// </div>
  // );

	const Travels = () => (
		<div>
		{travels.map((travel, index) => (
			<Travel key={index} {...travel}/>
	))}
	</div>
	);

  export default Travels;