import { type FC, useEffect, useState, type SetStateAction, type Dispatch } from 'react';
import { motion } from 'framer-motion';
import Dropdown, { type Item } from '@/commons/Dropdown/Dropdown';
import Products from '@/constants/Products.json';
import { mapper } from '@/utils';
import styles from './quoter.module.scss';

const BRANDS_MAP = mapper(Products);

interface Model {
	name: string;
}
interface Serie {
	name: string;
	models: Model[];
}
interface Brand {
	name: string;
	series: Serie[];
	icon: string;
}

const PhoneModel: FC<{
	closeDropdown?: boolean;
	setCloseDropdown?: (value: boolean) => void;
}> = ({ /** onSubmit, register, */ setCloseDropdown, closeDropdown }) => {
	const [brands, setBrands] = useState<Item[]>([]);
	const [series, setSeries] = useState<Item[]>([]);
	const [models, setModels] = useState<Item[]>([]);

	const [brand, setBrand] = useState<Item | null>(null);
	const [serie, setSerie] = useState<Item | null>(null);
	const [model, setModel] = useState<Item | null>(null);

	const handleClick = (item?: Item, type?: 'brand' | 'serie' | 'model'): void => {
		if (item == null) return;
		if (type === 'brand') {
			setBrand(item);
			if (item.name !== brand?.name) {
				setSerie(null);
				setModel(null);
			}
		}
		if (type === 'serie') {
			setSerie(item);
			if (item.name !== serie?.name) {
				setModel(null);
			}
		}
		if (type === 'model') setModel(item);
	};

	useEffect(() => {
		const BRANDS_LIST = Products.map((brand: Brand) => ({
			name: brand.name,
			icon: brand.icon,
		}));
		setBrands(BRANDS_LIST);
	}, []);

	useEffect(() => {
		if (brand != null) {
			const series = BRANDS_MAP[brand.name].series.map((serie: Serie) => ({
				name: serie.name,
			}));

			setSeries(series);
		} else setSeries([]);
	}, [brand]);

	useEffect(() => {
		if (brand != null && serie != null) {
			const seriesMap = mapper(BRANDS_MAP[brand.name].series);
			const models = seriesMap[serie.name]?.models?.map((model: Model) => ({
				name: model.name,
			}));

			setModels(models);
		} else setModels([]);
	}, [brand, serie]);

	return (
		<div className={styles.phoneModel}>
			<Dropdown
				label="Marca"
				items={brands}
				type="select"
				placeholder="Seleccione la marca"
				selectedItem={brand}
				onClick={(item) => {
					handleClick(item, 'brand');
				}}
				parentOnClick={closeDropdown}
				setParentOnClick={setCloseDropdown}
			/>

			<Dropdown
				label="Serie"
				items={series}
				type="select"
				placeholder="Seleccione la serie"
				selectedItem={serie}
				onClick={(item) => {
					handleClick(item, 'serie');
				}}
				parentOnClick={closeDropdown}
				setParentOnClick={setCloseDropdown}
			/>

			<Dropdown
				label="Modelo"
				items={models}
				type="select"
				placeholder="Seleccione el modelo"
				selectedItem={model}
				onClick={(item) => {
					handleClick(item, 'model');
				}}
				parentOnClick={closeDropdown}
				setParentOnClick={setCloseDropdown}
			/>
		</div>
	);
};

const Characteristics: FC = (/** { onSubmit, register } */) => <></>;
const AestheticConditions: FC = (/** { onSubmit, register } */) => <></>;
const FunctionalConditions: FC = (/** { onSubmit, register } */) => <></>;

const PersonalData: FC = (/** { onSubmit, register } */) => <></>;

const Quoter: FC = () => {
	const SECTIONS = 5;
	const [activeSection, setActiveSection] = useState<number>(1);
	const [formData, setFormData] = useState<any[]>([]);
	const [closeDropdown, setCloseDropdown] = useState<boolean>(false);

	const handleSectionSubmit = (data: any): void => {
		setFormData([...formData, data]);
		setActiveSection(activeSection + 1);
	};

	const renderTitle = (activeSection: number): string => {
		switch (activeSection) {
			case 1:
				return '¿Qué celular teneś?';
			case 2:
				return '¿Qué características tiene?';
			case 3:
				return '¿Cuál es su condición estética?';
			case 4:
				return '¿Cuál es su condición funcional?';
			case 5:
				return 'Dejanos tus datos así te contactamos';
			default:
				return '';
		}
	};

	const renderActiveSection = (
		activeSection: number,
		closeDropdown: boolean,
		setCloseDropdown?: Dispatch<SetStateAction<boolean>>
		// register,
		// handleSectionSubmit,
	): JSX.Element => {
		switch (activeSection) {
			case 1:
				return (
					<PhoneModel
						// onSubmit={handleSectionSubmit}
						// register={register}
						closeDropdown={closeDropdown}
						setCloseDropdown={setCloseDropdown}
					/>
				);
			case 2:
				return (
					<Characteristics
					/** onSubmit={handleSectionSubmit} register={register} */
					/>
				);
			case 3:
				return (
					<AestheticConditions
					// onSubmit={handleSectionSubmit}
					// register={register}
					/>
				);
			case 4:
				return (
					<FunctionalConditions
					// onSubmit={handleSectionSubmit}
					// register={register}
					/>
				);
			case 5:
				return (
					<PersonalData
					// onSubmit={handleSectionSubmit} register={register}
					/>
				);
			default:
				return <></>;
		}
	};

	const renderProgressDots = (): JSX.Element[] => {
		const dots = [];
		for (let i = 1; i <= SECTIONS; i++) {
			const dotClass = i <= activeSection ? styles.progressDotActive : styles.progressDotInactive;
			dots.push(<div key={i} className={`${styles.progressDot} ${dotClass}`} />);
		}
		return dots;
	};

	return (
		<div
			className={styles.container}
			onClick={() => {
				setCloseDropdown(true);
			}}
		>
			<div className={styles.progressContainer}>{renderProgressDots()}</div>

			<form className={styles.form}>
				<motion.h3>{renderTitle(activeSection)}</motion.h3>
				<div className={styles.content}>
					{renderActiveSection(
						activeSection,
						closeDropdown,
						setCloseDropdown
						// register,
					)}
				</div>
			</form>

			<div className={styles.buttonContainer}>
				<button
					type="button"
					className={`${styles.prevButton} ${activeSection > 1 ? '' : styles.hidden}`}
					onClick={() => setActiveSection(activeSection - 1)}
				>
					Anterior
				</button>

				{activeSection < SECTIONS ? (
					<button
						type="submit"
						className={styles.nextButton}
						onClick={() => setActiveSection(activeSection + 1)}
					>
						Continuar
					</button>
				) : (
					<button type="submit" className={styles.submitButton} onSubmit={handleSectionSubmit}>
						Enviar
					</button>
				)}
			</div>
		</div>
	);
};

export default Quoter;
