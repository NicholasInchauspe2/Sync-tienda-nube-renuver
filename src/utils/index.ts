export const currencyFormatter = ({
	currency,
	value,
	minimumFractionDigits,
}: {
	currency: string;
	value: number;
	minimumFractionDigits: number;
}): string => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		minimumFractionDigits,
		currency,
	});
	return formatter.format(value);
};

export const mapper = (arr: Array<Record<string, any>>): Record<string, any> =>
	arr.reduce((acc: Record<string, any>, obj: Record<string, any>) => {
		const { name, ...rest } = obj;
		acc[name] = rest;
		return acc;
	}, {});

export const getBreadcrumbs = (path: string): string[] => {
	const crumbs = path.split('/');
	crumbs.shift();
	crumbs.unshift('Home');
	return crumbs;
};
