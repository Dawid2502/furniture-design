import React, { Component, useState } from 'react'
import './gallery.scss'
import CloseIcon from '@mui/icons-material/Close'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Photo } from '@mui/icons-material'
import galleryPhoto1 from '../../image/gallery/bedroom-6778193_1280.jpg'
import galleryPhoto2 from '../../image/gallery/bedroom-1872196_1280.jpg'
import galleryPhoto3 from '../../image/gallery/building-8714901_1280.jpg'
import galleryPhoto4 from '../../image/gallery/chairs-2181960_1280.jpg'
import galleryPhoto5 from '../../image/gallery/chairs-2181994_1280.jpg'
import galleryPhoto6 from '../../image/gallery/furniture-998265_1280.jpg'
import galleryPhoto7 from '../../image/gallery/living-room-8480223_1280.jpg'
import galleryPhoto8 from '../../image/gallery/living-room-8539237_1280.jpg'
import galleryPhoto9 from '../../image/gallery/real-estate-6893060_1280.jpg'
import galleryPhoto10 from '../../image/gallery/workplace-5517744_1280.jpg'
import HeaderSubPage from '../HeaderSubPage/header-subpage'
import headerImg from '../../image/salon_1920.jpg';

export default function Gallery() {
	let photos = [
		{
			id: 0,
			className: 'gallery-photo photo1',
			imgSrc: galleryPhoto1,
			description: 'Sypialnia',
		},
		{
			id: 1,
			className: 'gallery-photo photo2',
			imgSrc: galleryPhoto2,
			description: 'Sypialnia',
		},
		{
			id: 2,
			className: 'gallery-photo photo3',
			imgSrc: galleryPhoto3,
			description: 'Aneks kuchenny',
		},
		{
			id: 3,
			className: 'gallery-photo photo4',
			imgSrc: galleryPhoto4,
			description: 'Jadalnia',
		},
		{
			id: 4,
			className: 'gallery-photo photo5',
			imgSrc: galleryPhoto5,
			description: 'Jadalnia',
		},
		{
			id: 5,
			className: 'gallery-photo photo6',
			imgSrc: galleryPhoto6,
			description: 'Salon',
		},
		{
			id: 6,
			className: 'gallery-photo photo7',
			imgSrc: galleryPhoto7,
			description: 'Kanapa w salonie',
		},
		{
			id: 7,
			className: 'gallery-photo photo8',
			imgSrc: galleryPhoto8,
			description: 'Stolik',
		},
		{
			id: 8,
			className: 'gallery-photo photo9',
			imgSrc: galleryPhoto9,
			description: 'Kanapa',
		},
		{
			id: 9,
			className: 'gallery-photo photo10',
			imgSrc: galleryPhoto10,
			description: 'Biurko',
		},
	]

	const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null)

	const handlePhotoClick = index => {
		setSelectedPhotoIndex(index)
	}

	const handlePrevPhoto = () => {
		setSelectedPhotoIndex(prevIndex => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1))
	}

	const handleNextPhoto = () => {
		setSelectedPhotoIndex(prevIndex => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1))
	}

	return (
		<>
			<div className={`popup ${selectedPhotoIndex !== null ? 'open' : ''}`}>
				<CloseIcon onClick={() => setSelectedPhotoIndex(null)} />
				{selectedPhotoIndex !== null && (
					<div className='popup-photo'>
						<img src={photos[selectedPhotoIndex].imgSrc} />
						<p>{photos[selectedPhotoIndex].description}</p>
						<FaArrowLeft className='arrow-icon arrow-left' onClick={handlePrevPhoto} />
						<FaArrowRight className='arrow-icon arrow-right' onClick={handleNextPhoto} />
					</div>
				)}
			</div>
			<div className='gallery' id='gallery'>
				<HeaderSubPage imgSrc={headerImg} headerTitle='Galeria' />
				<div className='photos'>
					{photos.map((item, index) => {
						return (
							<div className={item.className} key={index}>
								<img src={item.imgSrc} onClick={() => handlePhotoClick(index)} />
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}
