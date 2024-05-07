import './timeline.scss'

export default function Timeline() {
	return (
		<div className='timeline'>
			<ul className='timeline-items'>
				<li className='timeline-item'>
					<div className='item-info'>
						<p>Założenie firmy. Ustalenie wizji, misji i celów firmy.</p>
					</div>
					<div className='item-date'>
						<p> 2004</p>
					</div>
				</li>
                <li className='timeline-item'>
					<div className='item-info'>
						<p>Rozbudowa zakładu produkcyjnego. Zakup nowych maszyn i działania marketingowe</p>
					</div>
					<div className='item-date'>
						<p> 2006</p>
					</div>
				</li>
                <li className='timeline-item'>
					<div className='item-info'>
						<p>Zatrudnienie większej ilości pracowników. Eksport na rynek zagraniczny</p>
					</div>
					<div className='item-date'>
						<p> 2009</p>
					</div>
				</li>
                <li className='timeline-item'>
					<div className='item-info'>
						<p>Rozpoczęcie usług transportowych. Zakup samochodów ciężarowych.</p>
					</div>
					<div className='item-date'>
						<p> 2013</p>
					</div>
				</li>
                <li className='timeline-item'>
					<div className='item-info'>
						<p>Budowa nowej hali produkcyjnej.</p>
					</div>
					<div className='item-date'>
						<p> 2018</p>
					</div>
				</li>
                <li className='timeline-item'>
					<div className='item-info'>
						<p>Budowa filii w pięciu miastach w Polsce.</p>
					</div>
					<div className='item-date'>
						<p> 2022</p>
					</div>
				</li>
                <li className='timeline-item'>
					<div className='item-info'>
						<p>Firma w chwili obecnej zatrudnia ponad 500 osób</p>
					</div>
					<div className='item-date'>
						<p> 2024</p>
					</div>
				</li>
			</ul>
		</div>
	)
}
