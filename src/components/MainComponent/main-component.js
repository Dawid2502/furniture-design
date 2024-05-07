import './main-component.scss'
import Header from '../Header/header'
import NewOffer from '../NewOffer/new-offer'
import CounterUp from '../CounterUp/counter-up'
import Reference from '../clientReference/client-reference'
import DeliveryBanner from '../DeliveryBanner/delivery-banner'
import { useState } from 'react'

export default function MainComponent() {
	const [countingFinished, setCountingFinished] = useState(false)

	const handleCountingFinish = () => {
		setCountingFinished(true)
	}

	return (
		<>
			<Header />
			<div className='counters-box'>
				<div className='counter-item'>
					<h3>Roczna produkcja</h3>
					<CounterUp
						startValue={0}
						endValue={230000}
						duration={2}
						suffix='+ sztuk'
						onCountingFinish={handleCountingFinish} className='counter'
					/>
				</div>
				<div className='counter-item'>
					<h3>Liczba klientów rocznie</h3>
					<CounterUp
						startValue={0}
						endValue={1600}
						duration={3}
						suffix='+ osób'
						onCountingFinish={handleCountingFinish}
					/>
				</div>
				<div className='counter-item'>
					<h3>Czas realizacji zamówienia</h3>
					<CounterUp startValue={0} endValue={10} duration={10} suffix=' dni max' onCountingFinish={handleCountingFinish} />
				</div>
				<div className='counter-item'>
					<h3>Satysfakcja klientów:</h3>
					<CounterUp startValue={0} endValue={95} duration={4} suffix=' %' onCountingFinish={handleCountingFinish} />
				</div>
			</div>
			<NewOffer />
			<Reference />
			<DeliveryBanner />
		</>
	)
}
