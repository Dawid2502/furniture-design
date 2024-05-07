import './new-offer.scss'
import newOffer1 from '../../image/kanapy/living-room-2569325_640.jpg'
import newOffer2 from '../../image/kanapy/sofa-184551_640.jpg'
import newOffer3 from '../../image/stoliki/jason-goodman-ynQnpqyrLC0-unsplash.jpg'
import { Link } from 'react-router-dom'
export default function NewOffer() {
	return (
		<div className='offer-items'>
			<div className='offer-block offer-title'>
				<h2 className='section-title'>Nowości</h2>
				<p>Zapoznaj się z naszą ofertą</p>
			</div>
			<div className='offer-block offer1'>
				<Link to={`/product/6`}>
					<img src={newOffer1} alt='szara kanapa' />
				</Link>
				<h3>Sofa Grey</h3>
			</div>
			<div className='offer-block offer2'>
				<Link to={`/product/7`}>
					<img src={newOffer2} alt='czarny narożnik w salonie' />
				</Link>
				<h3>Narożnik Black</h3>
			</div>
			<div className='offer-block offer3'>
				<Link to={`/product/2`}>
					<img src={newOffer3} alt='biały stolik' />
				</Link>
				<h3>Stolik White</h3>
			</div>
		</div>
	)
}
