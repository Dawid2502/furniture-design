import './client-reference.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

export default function Reference() {
	return (
		<div className='reference-client-box'>
			<h2>Opinie naszych klientów</h2>
			<div className='reference-list'>
				<div className='reference-item'>
					<p>
						"Nasza współpraca z firmą była niezwykle satysfakcjonująca. Meble, które zakupiliśmy, są nie tylko piękne,
						ale również solidnie wykonane. Polecamy tę firmę wszystkim poszukującym wysokiej jakości mebli." - Anna K.
					</p>
					<div className='rate-stars'>
						<FontAwesomeIcon icon={faStar} className='star' />
						<FontAwesomeIcon icon={faStar} className='star' />
						<FontAwesomeIcon icon={faStar} className='star' />
						<FontAwesomeIcon icon={faStar} className='star' />
						<FontAwesomeIcon icon={faStar} className='star' />
					</div>
				</div>
				<div className='reference-item'>
					<p>
						"Jestem bardzo zadowolony z zakupu mebli w firmie. Obsługa była profesjonalna, a meble dostarczone zostały
						szybko i bezproblemowo. Na pewno będę polecać tę firmę znajomym!" - Piotr S.
					</p>
					<div className='rate-stars'>
						<FontAwesomeIcon icon={faStar} className='star' />
						<FontAwesomeIcon icon={faStar} className='star' />
						<FontAwesomeIcon icon={faStar} className='star' />
						<FontAwesomeIcon icon={faStar} className='star' />
						<FontAwesomeIcon icon={faStarHalfStroke} className='star' />
					</div>
				</div>
				<div className='reference-item'>
					<p>
						"Nasze mieszkanie zostało kompletnie urządzone meblami z firmy, i nie mogliśmy być bardziej zadowoleni z
						efektów. Meble są wysokiej jakości, a obsługa klienta była bez zarzutu. Dziękujemy!" - Katarzyna i Michał R.
					</p>
					<div className='rate-stars'>
						<FontAwesomeIcon icon={faStar} className='star' />
						<FontAwesomeIcon icon={faStar} className='star' />
						<FontAwesomeIcon icon={faStar} className='star' />
						<FontAwesomeIcon icon={faStar} className='star' />
					</div>
				</div>
				<div className='reference-item'>
					<p>
						"Jesteśmy klientami firmy od wielu lat i zawsze byliśmy bardzo zadowoleni z jakości mebli oraz
						profesjonalnej obsługi. Polecamy tę firmę wszystkim, którzy szukają pięknych i solidnych mebli." - Tomasz i
						Agnieszka M.
					</p>
					<div className='rate-stars'>
						<FontAwesomeIcon icon={faStar} className='star' />
						<FontAwesomeIcon icon={faStar} className='star' />
						<FontAwesomeIcon icon={faStar} className='star' />
						<FontAwesomeIcon icon={faStar} className='star' />
						<FontAwesomeIcon icon={faStar} className='star' />
					</div>
				</div>
			</div>
		</div>
	)
}
