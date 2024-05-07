import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import CategoryPanel from './components/CategoryPanel/category-panel';
import MainComponent from './components/MainComponent/main-component';
import ProductsPage from './components/ProductsPage/products-page';
import ProductDetails from './components/ProductDetails/product-details';
import Footer from './components/Footer/footer';
import JobOfferMainPage from './components/jobOfferMainPage/job-main-page';
import JobDetailsPage from './components/JobDetailsPage/job-details-page';
import AboutCompany from './components/AboutCompany/about-company';
import Gallery from './components/Gallery/gallery';
import Contact from './components/Contact/contact';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<MainComponent />} />
					<Route path='/category' element={<CategoryPanel />} />
					<Route path="/products/:category" element={<ProductsPage />} />
					<Route path="/product/:id" element={<ProductDetails />} />
					<Route path="/job-main-page" element={<JobOfferMainPage />} />
					<Route path="/offer/:category/:id" element={<JobDetailsPage />} />
					<Route path="/about-company" element={<AboutCompany />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App
