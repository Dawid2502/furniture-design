import './products-page.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductItem from '../ProductItem/product-item';
import HeaderSubPage from '../HeaderSubPage/header-subpage';
import { PRODUCTS } from '../../productlist';
import headerImg from '../../image/salon_1920.jpg';
import CategoryNavbar
 from '../CategoryNavbar/category-navbar';
export default function ProductsPage() {
    const { category } = useParams();
    const [selectedCategory, setSelectedCategory] = useState(category); // Ustaw początkową wybraną kategorię na tę, którą otrzymujesz z URL
    const [filteredProducts, setFilteredProducts] = useState([]); // Stan produktów po filtrowaniu
    const [headerTitle, setHeaderTitle] = useState('');

    // Efekt używany do aktualizacji produktów po zmianie wybranej kategorii
    useEffect(() => {
        // Aktualizuj stan `selectedCategory` na podstawie parametru `category` w URL
        setSelectedCategory(category);
    }, [category]);

    useEffect(() => {
        // Jeśli nie ma wybranej kategorii, wyświetl wszystkie produkty
        if (!selectedCategory || selectedCategory === 'all') {
            setFilteredProducts(PRODUCTS);
        } else {
            // W przeciwnym razie, filtruj produkty według wybranej kategorii
            const filtered = PRODUCTS.filter(product => product.category === selectedCategory);
            setFilteredProducts(filtered);
        }
    }, [selectedCategory]); // Uruchom efekt za każdym razem, gdy zmieni się wybrana kategoria

    const setCategoryName = category => {
        let name;
        if (category === 'tables') {
            name = 'Stoliki';
        } else if (category === 'chairs') {
            name = 'Krzesła';
        } else if (category === 'sofas') {
            name = 'Kanapy';
        } else if (category === 'swings') {
            name = 'Huśtawki';
        } else if (category === 'lamps') {
            name = 'Lampy';
        } else {
            name = 'Ramki';
        }
        return name;
    };

    useEffect(() => {
        setHeaderTitle(setCategoryName(selectedCategory));
    }, [selectedCategory]);

    return (
        <div className='products-container'>
            <HeaderSubPage imgSrc={headerImg} headerTitle={headerTitle} />
			<CategoryNavbar setSelectedCategory={setSelectedCategory}/>
            <div className='product-list'>
                {filteredProducts.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
