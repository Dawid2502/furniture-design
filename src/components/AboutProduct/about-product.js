import './about-product.scss'
import { PRODUCTS } from '../../productlist'

export default function AboutProduct({ productIndex }) { // productIndex to props. W komponencie funkcyjnym nie trzeba używać słowa props. Dzięki destrukturyzacji można od razu użyć danej.
	
	// Pobranie informacji o produkcie na podstawie indeksu produktu
	const product = PRODUCTS[productIndex];

	// Funkcja do wyświetlania wymiarów tylko jeśli są dostępne w obiekcie produktu
	const setDimensions = () => {
		const dimensions = [];
		if (product.height) dimensions.push(<li key='height'>Wysokość: {product.height} cm</li>);
		if (product.width) dimensions.push(<li key='width'>Szerokość: {product.width} cm</li>);
		if (product.length) dimensions.push(<li key='length'>Długość: {product.length} cm</li>);
		return dimensions;
	};

	// Funkcja do wyświetlania cech produktu
	const setFeatures = () => {
		return product.features.map((feature, index) => <li key={index}>{feature}</li>);
	};

	return (
		<div className='description-box'>
			<h2 className='product-name'>{product.productName}</h2>
			<p className='product-code'>Kod produktu: {product.productCode}</p>
			<ul className='dimensions'>{setDimensions()}</ul>
			<label>Dostępne kolory:</label>
			<ul className='available-colors'>
				<li className='color1'></li>
				<li className='color2'></li>
				<li className='color3'></li>
			</ul>
			<label>Cechy:</label>
			<ul className='features'>{setFeatures()}</ul>
			<label>Opis:</label>
			<p className='description'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem quod facere atque obcaecati sapiente
				reprehenderit quia temporibus. Officia optio laudantium, quia tenetur dolorum corporis incidunt consequuntur
				sunt quo corrupti omnis modi quas reprehenderit in voluptates? Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Minus autem quod facere atque obcaecati sapiente reprehenderit quia temporibus. Officia optio
				laudantium, quia tenetur dolorum corporis incidunt consequuntur sunt quo corrupti omnis modi quas reprehenderit
				in voluptates?
			</p>
			<label>Zamówienie</label>
			<p className='order-info'>
				Jeśli interesuje cię ten produkt i chciał/a-byś go zamówić lub poznać jego cenę, skontaktuj się z naszym biurem
				obsługi klienta w celu uzgodnienia szczegółów.
			</p>
		</div>
	)
}
