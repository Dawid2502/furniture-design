import React from 'react'
import { useParams } from 'react-router-dom'
import { jobOffers } from '../../jobofferlist' // Importowanie tablicy jobOffers
import './job-details-page.scss'

export default function JobDetailsPage() {
	// Pobierz ID stanowiska z URL za pomocą React Router
	const { category, id } = useParams()
	console.log(category)
	console.log(id)
	//   // Znajdź ofertę pracy na podstawie ID
	const jobOffer = jobOffers.find(offer => offer.section.toLowerCase().replace(/\s+/g, '-') === category)

	console.log(jobOffer.section.toLowerCase().replace(/\s+/g, '-'))

	const job = jobOffer.offers.find(offer => offer.id === parseInt(id))

	console.log(job)
	if (!jobOffer) {
		return <div>Nie znaleziono oferty pracy.</div>
	}

	return (
		<div className='offer-container'>
			<div className='offer-description'>
				<div className='title-box'>
					<img src={jobOffer.image} />
					<div>
						<h2>{jobOffer.section.replace('-', ' ')}</h2>
						<p>{jobOffer.sectionDescription}</p>
					</div>
				</div>
				<div className='offer-box'>
					<div className='offer-information'>
						<h2>{job.title.replace('-', ' ')}</h2>
						<p>{job.description}</p>

						<h3>Zadania na stanowisku:</h3>
						<ul>
							{job.responsibilities.map((responsibility, index) => (
								<li className='task-item' key={index}>
									{responsibility}
								</li>
							))}
						</ul>

						<h3>Wymagania:</h3>
						<ul>
							{job.requirements.map((requirement, index) => (
								<li className='task-item' key={index}>
									{requirement}
								</li>
							))}
						</ul>

						<h3>Korzyści:</h3>
						<ul>
							{job.benefits.map((benefit, index) => (
								<li className='task-item' key={index}>
									{benefit}
								</li>
							))}
						</ul>
					</div>
					<form>
						<div className='form-group'>
							<label htmlFor='name'>Imię i nazwisko:</label>
							<input type='text' id='name' name='name' required />
						</div>
						<div className='form-group'>
							<label htmlFor='email'>Adres email:</label>
							<input type='email' id='email' name='email' required />
						</div>
						<div className='form-group'>
							<label htmlFor='cv'>Dodaj swoje CV (PDF):</label>
							<input type='file' id='cv' name='cv' accept='.pdf' required />
						</div>
						<div className='form-group'>
							<label htmlFor='msg'>Wiadomość (opcjonalne):</label>
							<textarea type='text' id='msg' name='msg'/>
						</div>
						<button type='submit'>Aplikuj</button>
					</form>
				</div>
			</div>
		</div>
	)
}
