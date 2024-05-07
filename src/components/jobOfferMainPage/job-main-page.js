import { useState } from 'react'
import HeaderSubPage from '../HeaderSubPage/header-subpage'
import jobHeaderImg from '../../image/jobOffers/teamwork-4338949_1920.jpg'
import { jobOffers } from '../../jobofferlist'
import JobOfferSection from '../jobOfferSection/job-offer-section'
import handShakeImg from '../../image/jobOffers/hands-8062985_640.jpg'
import './job-main-page.scss'

export default function JobOffersMainPage() {
	return (
		<>
			<HeaderSubPage imgSrc={jobHeaderImg} headerTitle='Praca' />
			<div className='jobs-page'>
				<div className='info-phone-box'>
					<div className='info-square'>
						<p>Rozwiń z nami swoje skrzydła</p>
					</div>
					<div className='img-box'>
						<img src={handShakeImg} />
						<p>
							Zadzwoń i zapytaj o pracę lub praktyki:<br></br> +00 121 001 200
						</p>
					</div>
				</div>
				<h2 className='section-title'>Oferty pracy</h2>
				<div className='jobs-container'>
					{jobOffers.map((jobOffer, categoryIndex) => (
						<JobOfferSection jobOffer={jobOffer} key={categoryIndex} />
					))}
				</div>
				<div className='recruitment-info'>
					<h2 className='section-title'>O to jak przebiega rekrutacja!</h2>
					<div className='info-box'>
						<div className='info-item'>
							<h3>Prześlij swoje CV</h3>
							<p>Jeśli znajdziesz w naszej ofercie pracę, która jest dla ciebie, wyślij do nas swoje CV</p>
						</div>
						<div className='info-item'>
							<h3>Spotkanie rekrutacyjne</h3>
							<p>
								Gdy uznamy, że twoja kandytatura idealnie pasuje do naszej firmy, zaprosimy cię na spotkanie. Opowiemy o
								fimrnie i obowiązkach
							</p>
						</div>
						<div className='info-item'>
							<h3>Oferta pracy</h3>
							<p>Po rozmowie z wszystkimi wybranymi kandytatami, wybierzemy najlepszą osobą i zaproponujemy pracę</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
