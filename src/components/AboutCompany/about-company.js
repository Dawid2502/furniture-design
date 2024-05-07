import './about-company.scss'
import { useState } from 'react'
import Timeline from '../Timeline/timeline'
import HeaderSubPage from '../HeaderSubPage/header-subpage'
import headerImg from '../../image/asia-culturecenter-b0kpzPPXj1Y-unsplash (1).jpg'
import CounterUp from '../CounterUp/counter-up'
import teamPhoto1 from '../../image/AboutCompany/language-school-834138_640.jpg'
import teamPhoto2 from '../../image/AboutCompany/jason-goodman-bzqU01v-G54-unsplash.jpg'
import teamPhoto3 from '../../image/AboutCompany/cherrydeck-UpsEF48wAgk-unsplash.jpg'
import teamPhoto4 from '../../image/AboutCompany/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg'

export default function AboutCompany() {
	const [countingFinished, setCountingFinished] = useState(false)

	const handleCountingFinish = () => {
		setCountingFinished(true)
	}

	return (
		<div className='about-company'>
			<HeaderSubPage imgSrc={headerImg} headerTitle='O nas' />
			<div className='company-description'>
				Witaj w [Nazwa Firmy], miejscu, gdzie marzenia o pięknym i funkcjonalnym wnętrzu stają się rzeczywistością.
				Jesteśmy dumną firmą z pasją do tworzenia wyjątkowych mebli, które nie tylko urozmaicają przestrzeń, ale również
				dodają wyjątkowego charakteru i komfortu do każdego domu. [Nazwa Firmy] to nie tylko firma meblarska - to
				miejsce, gdzie tradycja spotyka się z nowoczesnością, a kunszt rzemieślniczy łączy się z innowacyjnymi
				rozwiązaniami projektowymi. Nasza firma ma bogate doświadczenie w projektowaniu i produkowaniu mebli wysokiej
				jakości, które spełniają najwyższe standardy estetyczne i funkcjonalne. Nasz zespół składa się z pasjonatów,
				którzy kochają to, co robią. Od projektantów po stolarzy, każdy członek naszego zespołu angażuje się w proces
				tworzenia, dbając o każdy detal i zapewniając najwyższą jakość wykonania. Nasze meble są wytworzone z
				najlepszych materiałów, z dbałością o detale, aby zapewnić trwałość i niepowtarzalny wygląd. Ale nie jesteśmy
				tylko producentami mebli - jesteśmy partnerami w kreowaniu Twojego wymarzonego wnętrza. Nasza firma oferuje
				również profesjonalne doradztwo i wsparcie w doborze odpowiednich mebli do Twojego domu lub biura. Chcemy, abyś
				poczuł się komfortowo i zainspirowany każdym meblem, który wybierzesz z naszej oferty. W [Nazwa Firmy] cenimy
				indywidualność i różnorodność, dlatego oferujemy szeroki wybór stylów, wzorów i kolorów, abyś mógł znaleźć meble
				idealnie pasujące do Twojego gustu i potrzeb. Nasza misja to tworzenie nie tylko mebli, ale także miejsc, w
				których możesz żyć, pracować i cieszyć się życiem w pełni. Dołącz do naszej rodziny [Nazwa Firmy] i odkryj świat
				elegancji, funkcjonalności i niepowtarzalnego designu. Razem możemy stworzyć wnętrze, które odzwierciedli Twoją
				osobowość i styl życia. Zapraszamy do wspólnego odkrywania naszej pasji do piękna i wygody w każdym detalu.
			</div>
			<div className='vision-company'>
				<h2>Nasze cele</h2>
				<div className='vision-box'>
					<div className='vision-item item1'>
						<h3>Misja</h3>
						<p>
							Nasza misja to dostarczanie wysokiej jakości rozwiązań, które spełniają i przekraczają oczekiwania naszych
							klientów. Staramy się stale rozwijać i doskonalić nasze produkty, aby pomagać naszym klientom osiągać
							swoje cele biznesowe.
						</p>
					</div>
					<div className='vision-item item2'>
						<h3>Wizja</h3>
						<p>
							Nasza wizja to być liderem w naszej branży, oferując innowacyjne produkty i usługi, które zmieniają
							sposób, w jaki ludzie pracują i komunikują się ze sobą. Chcemy być uznawani za partnera, który wspiera
							rozwój i sukces naszych klientów.
						</p>
					</div>
				</div>
			</div>
			<h2>Oś czasu</h2>
			<Timeline />
			<h2>Firma w liczbach</h2>
			<div className='counters-box'>
				<div className='counter-item'>
					<h3>Kapitał zakładowy:</h3>
					<CounterUp
						startValue={0}
						endValue={20}
						duration={2}
						suffix='+ mln'
						onCountingFinish={handleCountingFinish}
						className='counter'
					/>
				</div>
				<div className='counter-item'>
					<h3>Na rynku</h3>
					<CounterUp startValue={0} endValue={20} duration={2} suffix=' lat' onCountingFinish={handleCountingFinish} />
				</div>
				<div className='counter-item'>
					<h3>Ilość oddziałów</h3>
					<CounterUp startValue={0} endValue={10} duration={4} suffix=' ' onCountingFinish={handleCountingFinish} />
				</div>
				<div className='counter-item'>
					<h3>Liczba pracowników</h3>
					<CounterUp
						startValue={0}
						endValue={450}
						duration={1}
						suffix='+ osób'
						onCountingFinish={handleCountingFinish}
					/>
				</div>
			</div>
			<div className='team'>
				<h2>Nasz zespół</h2>
				<p>
					{' '}
					Nasz zespół to nie tylko profesjonaliści w swoich dziedzinach, ale także ludzie o otwartych sercach i
					pozytywnych nastawieniach. Wspieramy się nawzajem, tworząc przyjazną i inspirującą atmosferę pracy. Dobre
					relacje między członkami zespołu są dla nas niezwykle ważne, ponieważ wiemy, że tylko w takiej atmosferze
					możemy osiągać najlepsze rezultaty. Dlatego staramy się dbać o harmonię i współpracę, budując silne więzi
					między nami. Wierzymy, że dobra atmosfera sprzyja nie tylko efektywnej pracy, ale także tworzeniu
					niezapomnianych wspomnień i przyjacielskich więzi.
				</p>
				<div className='team-items'>
					<img src={teamPhoto1} alt='kobiety w biurze' />
					<img src={teamPhoto2} alt='mężczyzna szkoli zespół' />
					<img src={teamPhoto3} alt='team w biurze' />
					<img src={teamPhoto4} alt='Pracownicy w odblaskowych kamizelkach' />
					<img src={teamPhoto1} alt='kobiety w biurze' />
					<img src={teamPhoto2} alt='mężczyzna szkoli zespół' />
				</div>
			</div>
		</div>
	)
}
