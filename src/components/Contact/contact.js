import './contact.scss'
import headerImg from '../../image/dining-room-3108037_1920.jpg'
import HeaderSubPage from '../HeaderSubPage/header-subpage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
	return (
		<div className='contact-container'>
			<HeaderSubPage imgSrc={headerImg} headerTitle='Kontakt' />
			<div className='map-box'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10177561.736699564!2d8.60962517061245!3d51.48098770946625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47009964a4640bbb%3A0x97573ca49cc55ea!2sPolska!5e0!3m2!1spl!2spl!4v1706263869884'
					allowFullScreen=''
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
					className='map-google'></iframe>
				<div className='address-box'>
                    <div className='address'>
                        <p>ul. Ulica</p>
                        <p>63-604 Miasto</p>
                        <p><FontAwesomeIcon icon={faPhone} /> tel:<span>+ 48100 300 321</span></p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> email: email@email.pl</p>
                    </div>
                    <div className='krs-nip-data'>
                        <p>KRS: <span>6130090020</span></p>
                        <p>NIP: <span>1235421100</span></p>
                        <p>REGON: <span>334221000</span></p>
                    </div>
                </div>
			</div>
			<div className='contact-box'>
				<h2 className='department-name'>Dział sprzedaży</h2>
				<div className='contact-specialists'>
					<div className='contact-specialist-name'>
						<h3 className='contact-name'>Kierownik działu</h3>
						<p className='person-name'>
							<FontAwesomeIcon icon={faUser} /> John Doe
						</p>
						<p>
							<FontAwesomeIcon icon={faPhone} /> tel: <span>+ 48 100 200 300</span>
						</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> email: email@email.pl</p>
					</div>
					<div className='contact-specialist-name'>
						<h3 className='contact-name'>Specjalista ds. sprzedaży</h3>
						<p className='person-name'>
							<FontAwesomeIcon icon={faUser} /> Alice Bąk
						</p>
						<p>
							<FontAwesomeIcon icon={faPhone} /> tel: <span>+ 48 100 200 300</span>
						</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> email: email@email.pl</p>
					</div>
					<div className='contact-specialist-name'>
						<h3 className='contact-name'>Specjalista ds. sprzedaży</h3>
						<p className='person-name'>
							<FontAwesomeIcon icon={faUser} /> Tomasz Kowalski
						</p>
						<p>
							<FontAwesomeIcon icon={faPhone} /> tel: <span>+ 48 100 200 300</span>
						</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> email: email@email.pl</p>
					</div>
				</div>
			</div>
            <div className='contact-box'>
				<h2 className='department-name'>Serwis</h2>
				<div className='contact-specialists'>
					<div className='contact-specialist-name'>
						<h3 className='contact-name'>Serwisant</h3>
						<p className='person-name'>
							<FontAwesomeIcon icon={faUser} /> Janusz Kowalski
						</p>
						<p>
							<FontAwesomeIcon icon={faPhone} /> tel: <span>+ 48 100 200 300</span>
						</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> email: email@email.pl</p>
					</div>
					<div className='contact-specialist-name'>
						<h3 className='contact-name'>Serwisant</h3>
						<p className='person-name'>
							<FontAwesomeIcon icon={faUser} /> Krzysztof Tymski
						</p>
						<p>
							<FontAwesomeIcon icon={faPhone} /> tel: <span>+ 48 100 200 300</span>
						</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> email: email@email.pl</p>
					</div>
				</div>
			</div>
            <div className='contact-box'>
				<h2 className='department-name'>Dział obsługi klienta</h2>
				<div className='contact-specialists'>
					<div className='contact-specialist-name'>
						<h3 className='contact-name'>Kierownik działu</h3>
						<p className='person-name'>
							<FontAwesomeIcon icon={faUser} /> Agnieszka Rydwan
						</p>
						<p>
							<FontAwesomeIcon icon={faPhone} /> tel: <span>+ 48 100 200 300</span>
						</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> email: email@email.pl</p>
					</div>
					<div className='contact-specialist-name'>
						<h3 className='contact-name'>Specjalista ds. klienta</h3>
						<p className='person-name'>
							<FontAwesomeIcon icon={faUser} /> Beata Dyb
						</p>
						<p>
							<FontAwesomeIcon icon={faPhone} /> tel: <span>+ 48 100 200 300</span>
						</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> email: email@email.pl</p>
					</div>
					<div className='contact-specialist-name'>
						<h3 className='contact-name'>Specjalista ds. reklamacji</h3>
						<p className='person-name'>
							<FontAwesomeIcon icon={faUser} /> Rafał Gat
						</p>
						<p>
							<FontAwesomeIcon icon={faPhone} /> tel: <span>+ 48 100 200 300</span>
						</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> email: email@email.pl</p>
					</div>
				</div>
			</div>
		</div>
	)
}
