// Define the Property type here with all needed fields
export type Property = {
	id: number;
	title: string;
	type: "Apartment" | "House" | "Villa" | "Condo" | "Townhouse";
	price: string;
	location: string;
	bedrooms: number;
	bathrooms: number;
	sqft: number;
	imageUrl: string;
	featured?: boolean;
	description?: string;
	yearBuilt?: number;
	amenities?: string[];
	nearbyPlaces?: string[];
};

export const properties: Property[] = [
	{
		id: 1,
		title: "Luxury Villa in Tuscany",
		type: "Villa",
		price: "$2,500,000",
		location: "Florence, Italy",
		bedrooms: 5,
		bathrooms: 4,
		sqft: 4500,
		imageUrl:
			"https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		featured: true,
		description:
			"This stunning villa in the heart of Tuscany offers panoramic views of the countryside. The property features a private pool, expansive gardens, and a wine cellar. Perfect for those seeking luxury and tranquility.",
		yearBuilt: 2010,
		amenities: ["Pool", "Garden", "Wine Cellar", "Terrace", "Security System"],
		nearbyPlaces: [
			"Historic City Center",
			"Fine Dining Restaurants",
			"Vineyards",
			"Art Galleries",
		],
	},
	{
		id: 2,
		title: "Modern Apartment in Manhattan",
		type: "Apartment",
		price: "$1,800,000",
		location: "New York, USA",
		bedrooms: 3,
		bathrooms: 2,
		sqft: 2200,
		imageUrl:
			"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		featured: true,
		description:
			"Luxurious apartment in the heart of Manhattan with stunning city views. Features high-end finishes, floor-to-ceiling windows, and state-of-the-art appliances. Building amenities include a gym, concierge service, and roof terrace.",
		yearBuilt: 2018,
		amenities: [
			"Gym",
			"Concierge",
			"Roof Terrace",
			"Smart Home System",
			"Pet Friendly",
		],
		nearbyPlaces: [
			"Central Park",
			"Broadway Theater District",
			"Museum Mile",
			"Michelin Star Restaurants",
		],
	},
	{
		id: 3,
		title: "Charming House in the Cotswolds",
		type: "House",
		price: "$950,000",
		location: "Cotswolds, UK",
		bedrooms: 4,
		bathrooms: 3,
		sqft: 2800,
		imageUrl:
			"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 4,
		title: "Beachfront Condo in Miami",
		type: "Condo", // This is now included in the type definition
		price: "$1,200,000",
		location: "Miami, USA",
		bedrooms: 2,
		bathrooms: 2,
		sqft: 1500,
		imageUrl:
			"https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 5,
		title: "Elegant Townhouse in Paris",
		type: "Townhouse", // This is now included in the type definition
		price: "$3,200,000",
		location: "Paris, France",
		bedrooms: 4,
		bathrooms: 3,
		sqft: 3300,
		imageUrl:
			"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		featured: true,
	},
	{
		id: 6,
		title: "Secluded Cabin in Aspen",
		type: "House",
		price: "$1,500,000",
		location: "Aspen, USA",
		bedrooms: 3,
		bathrooms: 2,
		sqft: 2000,
		imageUrl:
			"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 7,
		title: "Spacious Apartment in Sydney",
		type: "Apartment",
		price: "$1,100,000",
		location: "Sydney, Australia",
		bedrooms: 2,
		bathrooms: 2,
		sqft: 1600,
		imageUrl:
			"https://images.unsplash.com/photo-1560067174-e553b3647603?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 8,
		title: "Historic House in Kyoto",
		type: "House",
		price: "$850,000",
		location: "Kyoto, Japan",
		bedrooms: 3,
		bathrooms: 1,
		sqft: 1800,
		imageUrl:
			"https://images.unsplash.com/photo-1688733962362-398792b44628?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 9,
		title: "Luxury Condo in Dubai",
		type: "Condo", // This is now included in the type definition
		price: "$2,100,000",
		location: "Dubai, UAE",
		bedrooms: 3,
		bathrooms: 3,
		sqft: 2500,
		imageUrl:
			"https://images.unsplash.com/photo-1688733962303-48c860c3f92d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 10,
		title: "Traditional Townhouse in Amsterdam",
		type: "Townhouse", // This is now included in the type definition
		price: "$1,700,000",
		location: "Amsterdam, Netherlands",
		bedrooms: 4,
		bathrooms: 2,
		sqft: 2900,
		imageUrl:
			"https://images.unsplash.com/photo-1688733962191-60372ee73c4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];
