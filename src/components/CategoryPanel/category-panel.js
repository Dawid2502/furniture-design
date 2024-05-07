import { Link } from 'react-router-dom'
import tablesCategory from '../../image/stoliki/andrea-davis-zOPRKaYLSdE-unsplash.jpg'
import chairsCategory from '../../image/krzesła/ronnarit-jirathanyakorn-HtF2wx-_R8s-unsplash.jpg'
import sofasCategory from '../../image/kanapy/living-room-2569325_640.jpg'
import swingCategory from '../../image/hustawki/favorite-place-4127943_1280.jpg'
import lampsCategory from '../../image/Lampy/grant-ritchie-pJ1JxTbWyaA-unsplash.jpg'
import framesCategory from '../../image/ramki/poster-2871536_640.jpg'
import headerImg from '../../image/salon_1920.jpg'
import './category-panel.scss'
import HeaderSubPage from '../HeaderSubPage/header-subpage'

export default function CategoryPanel() {
	return (
		<div className='category-page'>
            <HeaderSubPage imgSrc={headerImg} headerTitle='Produkty'/>
			<div className='categories-panel'>
				<Link to='/products/tables' className='category'>
					<img src={tablesCategory} alt='Stolik' />
					<h3 className='category-name'>Stoliki</h3>
				</Link>
				<Link to='/products/chairs' className='category'>
					<img src={chairsCategory} alt='Krzesła' />
					<h3 className='category-name'>Krzesła</h3>
				</Link>
				<Link to='/products/sofas' className='category'>
					<img src={sofasCategory} alt='Kanapy' />
					<h3 className='category-name'>Kanapy</h3>
				</Link>
				<Link to='/products/swings' className='category'>
					<img src={swingCategory} alt='Huśtawki' />
					<h3 className='category-name'>Huśtawki</h3>
				</Link>
				<Link to='/products/lamps' className='category'>
					<img src={lampsCategory} alt='Lampy' />
					<h3 className='category-name'>Lampy</h3>
				</Link>
				<Link to='/products/frames' className='category'>
					<img src={framesCategory} alt='Ramki' />
					<h3 className='category-name'>Ramki</h3>
				</Link>
			</div>
		</div>
	)
}
