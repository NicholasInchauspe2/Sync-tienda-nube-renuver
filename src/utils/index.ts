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

export const getBreadcrumbs = (path: string): string[] => {
	const crumbs = path.split('/');
	crumbs.shift();
	crumbs.unshift('Home');
	return crumbs;
};
