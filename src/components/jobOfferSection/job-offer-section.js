import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faFileInvoice } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './job-offer-section.scss'

export default function JobOfferSection({ jobOffer }) {

	
	const [showOffersClick, setShowOffersClick] = useState(false)
	const [rotateArrow, setRotateArrow] = useState(false)


	const handleShowOffersClick = () => {
		setShowOffersClick(!showOffersClick);
		setRotateArrow(showOffersClick ? 0 : 180)
	}

	return (
		<div className='job-section'>
			<div className='section-title'>
				<FontAwesomeIcon icon={faFileInvoice} className='job-icon' />
				<h3 className='section-name'>{jobOffer.section}</h3>
				<FontAwesomeIcon icon={faArrowDown} className={`arrow ${showOffersClick ? 'arrow-rotate' : ''}`} onClick={handleShowOffersClick}/>
			</div>
			<div className={showOffersClick ?'offer-box active-job-box' : 'offer-box'}>
				{jobOffer.offers.map((offer, offerIndex) => (
					<Link to={`/offer/${jobOffer.section.toLowerCase().replace(/\s+/g, '-')}/${offer.id}`} key={offerIndex} style={{ textDecoration: 'none', color: 'black' }}>
                       <p> {offer.title}</p>
                    </Link>
				))}
			</div>
		</div>
	)
}
