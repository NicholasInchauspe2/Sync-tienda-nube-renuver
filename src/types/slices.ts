export interface ProductsState {
	order: IOrder;
	products: IProduct[];
	isLoading: boolean;
}

export interface IOrderOptions {
	id: number;
	label: string;
	amount: number;
}

export interface IOrder {
	key: number;
	options: IOrderOptions[];
}

export interface IProduct {
	name: string;
	storage: string;
	color: string;
	usefulLife: number;
	rating: string;
	price: number;
	image: string;
	specifications: {
		usefulLife: number;
		storage: number;
		color: string;
		quality: string;
	};
}
