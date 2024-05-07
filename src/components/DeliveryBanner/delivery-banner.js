import './delivery-banner.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import bannerPhoto from '../../image/mainPage/delivery_banner_img.png'

export default function DeliveryBanner() {
	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<div className='banner'>
			<img src={bannerPhoto} className='bg-photo' />
			<div>
				<p className='banner-title'>
					Dostarczymy twoje zamówienie
				</p>
				<p data-aos='fade-right' className='banner-title-part2'>Prosto do twojego domu</p>
			</div>
		</div>
	)
}
