import { API } from '@/constants/api.constants';
import { type ICategory } from '@/types';
import axios from 'axios';

const getCategories = async (): Promise<ICategory[]> => {
	try {
		const idSheet = process.env.NEXT_PUBLIC_ID_SHEET_CATEGORIES ?? '';
		const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY ?? '';
		const values = 'Categorías!A2:F';
		const url = `${API.GOOGLE_SHEETS}/${idSheet}/values/${values}?access_token=${apiKey}&key=${apiKey}`;
		const response = await axios.get(url);

		const categories: ICategory[] =
			response?.data?.values?.map((cat: string[]) => {
				const [id, name, image, minPrice, url, blocked] = cat;

				return {
					id,
					name,
					image,
					minPrice,
					url: `${API.TIENDA_NUBE}/${url}`,
					blocked: Boolean(blocked),
				};
			}) ?? [];

		return categories;
	} catch (error) {
		console.error(error);
		return [];
	}
};

export default getCategories;
