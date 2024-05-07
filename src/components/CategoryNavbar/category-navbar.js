import './category-navbar.scss';
import { PRODUCTS } from '../../productlist';
import { useParams } from 'react-router-dom';

export default function CategoryNavbar({setSelectedCategory}) {
  
  const { category } = useParams();
  const categories = [...new Set(PRODUCTS.map(product => product.category))]; // [...new Set(...)]: Wynikowa tablica(Products.map()) zawierająca kategorie jest przekazywana do konstruktora Set, który automatycznie eliminuje zduplikowane wartości (ponieważ zbiór w JavaScript nie może zawierać duplikatów). 
  const setCategoryName = category => {
		let name
		if (category === 'tables') {
			name = 'Stoliki'
		} else if (category === 'chairs') {
			name = 'Krzesła'
		} else if (category === 'sofas') {
			name = 'Kanapy'
		} else if (category === 'swings') {
			name = 'Huśtawki'
		} else if (category === 'lamps') {
			name = 'Lampy'
		} else name = 'Ramki';

        return name;
	}

  return (
    <div className="category-nav">
      {categories.map((category, index) => (
        <button key={index} onClick={() => setSelectedCategory(category)}>
          {setCategoryName(category)}
        </button>
      ))}
    </div>
  );
}