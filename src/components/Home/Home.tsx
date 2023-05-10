import { type FC } from 'react';
import { type ICategoriesProps } from '@/types';
import BannerPrimary from './BannerPrimary';
import BannerReasons from './BannerReasons';
import Categories from './Categories';
// import BannerSteps from "./BannerSteps";
import BannerOpinion from './BannerOpinion';
import BannerEco from './BannerEco';
import BannerQuoter from './BannerQuoter';

const Home: FC<ICategoriesProps> = ({ categories }) => {
	return (
		<>
			<BannerPrimary />
			<BannerReasons />
			<Categories categories={categories} />
			{/* <BannerSteps /> */}
			<BannerQuoter />
			<BannerOpinion />
			<BannerEco />
		</>
	);
};

export default Home;
