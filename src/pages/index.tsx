import { type FC } from 'react';
import HomeView from '@/components/Home';
import getCategories from 'lib/Categories/getCategories';
import { type ICategoriesProps } from '@/types';

const Home: FC<ICategoriesProps> = ({ categories }) => {
	return <HomeView categories={categories} />;
};

export async function getStaticProps(): Promise<{ props: ICategoriesProps; revalidate: number }> {
	const categories = await getCategories();

	return {
		props: {
			categories,
		},
		revalidate: 60,
	};
}

export default Home;
