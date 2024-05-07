import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './footer.scss'

export default function Footer() {
	return (
		<footer>
			<p>Nazwa firmy | Kontakt: +48 000 010 100</p>
			<p>&copy; Copyright 2024</p>
			<div className='social-media'>
				<a className='icon-media' href='#'>
					<FontAwesomeIcon
						// className='icon-media'
						icon={faSquareFacebook}
					/>
				</a>
				<a className='icon-media' href='#'>
					<FontAwesomeIcon
						// className='icon-media'
						icon={faInstagram}
					/>
				</a>
				<a className='icon-media' href='#'>
					<FontAwesomeIcon
						// className='icon-media'
						icon={faLinkedin}
					/>
				</a>
			</div>
		</footer>
	)
}
