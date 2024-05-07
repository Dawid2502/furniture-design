import testImg from './image/jobOffers/headset-151660_640.png'
import salesImg from './image/jobOffers/dział_sprzedaży.png'
import itImg from './image/jobOffers/dział_IT.png'
import supportClientImg from './image/jobOffers/dział_obsługi_klienta.png'
import projectImg from './image/jobOffers/dział_projektu.png'
import administrationImg from './image/jobOffers/dział_administracji.png'
import productionImg from './image/jobOffers/dział_produkcja.png'

export const jobOffers = [
	{
		id: 0,
		section: 'Dział-sprzedaży',
		image: salesImg,
		sectionDescription:
			'Dział Sprzedaży to serce firmy, odpowiedzialne za nawiązywanie i utrzymywanie relacji z klientami oraz generowanie przychodów. Nasz zespół sprzedaży aktywnie pozyskuje nowych klientów, prezentuje nasze produkty lub usługi, oraz negocjuje korzystne warunki handlowe. Dzięki indywidualnemu podejściu do klienta oraz solidnemu doradztwu, staramy się zaspokoić nawet najbardziej wymagające potrzeby. Naszym celem jest budowanie trwałych relacji biznesowych opartych na zaufaniu i profesjonalizmie.',
		offers: [
			{
				id: 0,
				title: 'Specjalista-ds.-sprzedaży z j. niemieckim',
				description:
					'Stanowisko Specjalisty ds. Sprzedaży z językiem niemieckim to kluczowa rola w naszym zespole sprzedażowym, odpowiedzialna za rozwijanie relacji biznesowych z klientami z obszaru niemieckojęzycznego. Nasz Specjalista ds. Sprzedaży aktywnie pozyskuje nowych klientów, doradza w zakresie naszej oferty oraz dba o satysfakcję i lojalność klientów. Poszukujemy osoby z doskonałą znajomością języka niemieckiego oraz umiejętnościami sprzedażowymi, która będzie skutecznie reprezentować naszą firmę na rynku niemieckim.',
				responsibilities: [
					'Aktywne pozyskiwanie klientów oraz budowanie długotrwałych relacji biznesowych',
					'Doradztwo i prezentacja produktów meblowych zgodnie z potrzebami klientów',
					'Opracowywanie ofert handlowych i negocjowanie warunków sprzedaży',
					'Monitorowanie rynku i analiza trendów sprzedażowych',
					'Współpraca z zespołem sprzedaży oraz innymi działami firmy w celu zapewnienia wysokiej jakości obsługi klienta',
					'Prowadzenie działań marketingowych i promocyjnych w celu zwiększenia świadomości marki i sprzedaży',
				],
				requirements: [
					'Biegła znajomość języka niemieckiego w mowie i piśmie',
					'Doświadczenie w pracy na podobnym stanowisku w branży meblowej lub pokrewnej',
					'Umiejętności negocjacyjne i komunikacyjne',
					'Orientacja na klienta oraz zdolność budowania relacji biznesowych',
					'Znajomość trendów i nowości na rynku meblowym',
					'Umiejętność pracy w zespole oraz samodzielności w podejmowaniu decyzji',
				],
				benefits: [
					'Atrakcyjne wynagrodzenie podstawowe oraz system premiowy motywujący do osiągania celów sprzedażowych',
					'Możliwość rozwoju zawodowego poprzez szkolenia wewnętrzne i zewnętrzne.',
					'Elastyczne godziny pracy lub system pracy zdalnej w zależności od potrzeb',
					'Pakiet benefitów pozapłacowych, takich jak prywatna opieka medyczna, karty sportowe, czy karty multisport',
					'Rabaty na produkty meblowe dla pracowników',
					'Przyjazna atmosfera pracy i wsparcie ze strony zespołu oraz przełożonych',
				],
			},
			{
				id: 1,
				title: 'Przedstawiciel handlowy',
				description:
					'Przedstawiciel Handlowy to kluczowy członek naszego zespołu, odpowiedzialny za rozwijanie sprzedaży i budowanie relacji z klientami. Nasz Przedstawiciel Handlowy aktywnie poszukuje nowych klientów, prezentuje naszą ofertę, negocjuje warunki handlowe oraz dba o satysfakcję klientów. Poszukujemy osoby z doświadczeniem w sprzedaży, doskonałymi umiejętnościami komunikacyjnymi oraz determinacją w realizacji celów sprzedażowych. Praca na tym stanowisku daje możliwość rozwijania kariery w dynamicznym środowisku biznesowym i współtworzenia sukcesu naszej firmy.',
				responsibilities: [
					'Pozyskiwanie nowych klientów oraz utrzymywanie relacji z obecnymi klientami',
					'Prezentacja produktów lub usług przedsiębiorstwa potencjalnym klientom',
					'Negocjowanie warunków handlowych i finalizowanie transakcji',
					'Regularne raportowanie wyników sprzedażowych i analiza efektywności działań',
					'Śledzenie trendów rynkowych i konkurencji',
					'Współpraca z działem marketingu w celu opracowywania strategii sprzedażowych',
					'Dbanie o wysoką jakość obsługi klienta i satysfakcję z zakupów',
				],
				requirements: [
					'Doświadczenie w pracy na podobnym stanowisku, preferowane w branży związanej z oferowanymi produktami lub usługami',
					'Umiejętności negocjacyjne i komunikacyjne',
					'Znajomość technik sprzedaży oraz umiejętność budowania relacji z klientami',
					'Samodzielność w działaniu oraz umiejętność pracy pod presją czasu',
					'Umiejętność analizy danych i raportowania',
					'Prawo jazdy kat. B oraz gotowość do podróży służbowych',
				],
				benefits: [
					'Atrakcyjne wynagrodzenie składające się z podstawy oraz premii od sprzedaży',
					'Możliwość rozwoju zawodowego poprzez szkolenia i wsparcie ze strony firmy',
					'Elastyczny czas pracy lub system pracy zdalnej w zależności od potrzeb',
					'Pakiet benefitów pozapłacowych, takich jak prywatna opieka medyczna, karta multisport, czy ubezpieczenie na życie',
					'Samochód służbowy lub ryczałt na koszty podróży służbowych',
					'Dodatkowe premie za osiąganie określonych celów sprzedażowych',
					'Przyjazna atmosfera pracy i wsparcie ze strony zespołu',
				],
			},
		],
	},
	{
		id: 1,
		section: 'Dział IT',
		image: itImg,
		sectionDescription:
			'Dział IT to rdzeń technologiczny naszej firmy, dbający o sprawne funkcjonowanie wszystkich systemów informatycznych. Nasz zespół IT zajmuje się konfiguracją, utrzymaniem i zabezpieczeniem infrastruktury IT, zapewniającą niezawodność i bezpieczeństwo naszych danych. Jesteśmy odpowiedzialni za wsparcie techniczne dla pracowników, diagnozowanie i rozwiązywanie problemów oraz wdrażanie nowych technologii, aby nasza firma była na czele innowacji. Naszym celem jest zapewnienie sprawnego działania wszystkich systemów IT, aby wspierać efektywność i rozwój naszej organizacji.',
		offers: [
			{
				id: 2,
				title: 'Front-end Developer',
				description:
					'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ',
				responsibilities: [
					'Tworzenie responsywnych, estetycznych interfejsów użytkownika zgodnie z zaprojektowanymi wytycznymi',
					'Programowanie i implementacja funkcjonalności interaktywnych, takich jak formularze, animacje czy efekty wizualne',
					'Optymalizacja struktur HTML, CSS i JavaScript w celu zapewnienia szybkiego i efektywnego działania aplikacji',
					'Współpraca z zespołem projektowym oraz back-end developerami w celu integracji interfejsu z logiką aplikacji',
					'Testowanie i debugowanie kodu w różnych przeglądarkach i urządzeniach',
					'Śledzenie najnowszych trendów i technologii w dziedzinie front-endu oraz wdrażanie ich w praktyce',
				],
				requirements: [
					'Doświadczenie w pracy jako front-end developer lub pokrewne stanowiska',
					'Znajomość języków programowania webowych, takich jak HTML, CSS i JavaScript',
					'Umiejętność pracy z frameworkami front-endowymi, np. React, Angular, Vue.js',
					'Zrozumienie zasad projektowania responsywnego i dostępności',
					'Znajomość narzędzi do kontroli wersji, np. Git',
					'Umiejętność pracy w zespole oraz komunikacji z innymi członkami projektu',
					'Kreatywność i umiejętność rozwiązywania problemów',
				],
				benefits: [
					'Konkurencyjne wynagrodzenie z możliwością premii za wyjątkowe osiągnięcia',
					'Elastyczny czas pracy lub możliwość pracy zdalnej',
					'Pakiet benefitów pozapłacowych, takich jak prywatna opieka medyczna, karta multisport, czy ubezpieczenie grupowe',
					'Szkolenia i kursy doskonalące umiejętności programistyczne',
					'Nowoczesne narzędzia i technologie pracy',
					'Przyjazna atmosfera pracy i wsparcie ze strony zespołu',
					'Możliwość udziału w konferencjach branżowych i wydarzeniach networkingowych',
				],
			},
			{
				id: 3,
				title: 'Programista .NET',
				description:
					'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ',
				responsibilities: [
					'Projektowanie, rozwój i utrzymanie aplikacji opartych na platformie .NET',
					'Programowanie w językach takich jak C# lub VB.NET',
					'Tworzenie i implementacja rozwiązań back-endowych, w tym logiki biznesowej i integracji z bazą danych',
					'Testowanie, debugowanie i optymalizacja kodu',
					'Współpraca z zespołem programistycznym oraz innymi działami firmy w celu realizacji projektów',
					'Monitorowanie i aktualizacja istniejących aplikacji',
					'Badanie i wprowadzanie nowych technologii, narzędzi i praktyk w pracy programistycznej',
				],
				requirements: [
					'Doświadczenie w programowaniu aplikacji na platformie .NET',
					'Znajomość języka programowania C# oraz frameworka .NET',
					'Umiejętność pracy z bazami danych, preferowane MS SQL Server lub Entity Framework',
					'Zrozumienie zagadnień związanych z architekturą oprogramowania i wzorcami projektowymi',
					'Znajomość narzędzi deweloperskich, takich jak Visual Studio, Team Foundation Server (TFS) lub Azure DevOps',
					'Umiejętność pracy w zespole oraz komunikacji z innymi członkami projektu',
					'Znajomość podstawowych koncepcji DevOps, w tym automatyzacji procesów i wdrażania ciągłego',
				],
				benefits: [
					'Konkurencyjne wynagrodzenie z możliwością premii za wyjątkowe osiągnięcia',
					'Elastyczny czas pracy lub możliwość pracy zdalnej',
					'Pakiet benefitów pozapłacowych, takich jak prywatna opieka medyczna, karta multisport, czy ubezpieczenie grupowe',
					'Szkolenia i kursy doskonalące umiejętności programistyczne',
					'Nowoczesne narzędzia i technologie pracy',
					'Przyjazna atmosfera pracy i wsparcie ze strony zespołu',
					'Możliwość udziału w konferencjach branżowych i wydarzeniach networkingowych',
				],
			},
			{
				id: 4,
				title: 'Informatyk',
				description:
					'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ',
				responsibilities: [
					'Zapewnienie sprawnego działania infrastruktury IT w firmie',
					'Konfiguracja, instalacja i aktualizacja oprogramowania oraz systemów operacyjnych',
					'Diagnozowanie i rozwiązywanie problemów związanych z sieciami komputerowymi, sprzętem i oprogramowaniem',
					'Zarządzanie systemami baz danych, ich konserwacja i optymalizacja',
					'Zapewnienie bezpieczeństwa danych oraz zabezpieczeń sieciowych',
					'Współpraca z innymi działami firmy w celu identyfikacji potrzeb informatycznych i zapewnienia odpowiednich rozwiązań',
					'Dbanie o dokumentację techniczną oraz prowadzenie szkoleń dla użytkowników w zakresie korzystania z systemów informatycznych',
				],
				requirements: [
					'Wykształcenie wyższe lub średnie techniczne o kierunku informatycznym',
					'Doświadczenie w pracy na podobnym stanowisku lub odpowiednie umiejętności techniczne',
					'Znajomość systemów operacyjnych, takich jak Windows, Linux, czy macOS',
					'Umiejętność konfiguracji i administracji sieciami komputerowymi',
					'Znajomość narzędzi i technologii z zakresu bezpieczeństwa IT',
					'Umiejętność pracy z systemami baz danych, np. SQL',
					'Umiejętność rozwiązywania problemów i elastyczne podejście do zmieniających się sytuacji',
				],
				benefits: [
					'Konkurencyjne wynagrodzenie z możliwością premii za wyjątkowe osiągnięcia',
					'Elastyczny czas pracy lub możliwość pracy zdalnej',
					'Pakiet benefitów pozapłacowych, takich jak prywatna opieka medyczna, karta multisport, czy ubezpieczenie grupowe',
					'Szkolenia i kursy doskonalące umiejętności programistyczne',
					'Nowoczesne narzędzia i technologie pracy',
					'Przyjazna atmosfera pracy i wsparcie ze strony zespołu',
					'Możliwość udziału w konferencjach branżowych i wydarzeniach networkingowych',
				],
			},
		],
	},
	{
		id: 2,
		section: 'Obsługa klienta',
		image: supportClientImg,
		sectionDescription:
			'Dział Obsługi Klienta jest głosem naszej firmy w relacji z klientami. Nasz zespół obsługi klienta dba o zadowolenie i satysfakcję naszych klientów poprzez profesjonalne i skuteczne rozwiązywanie wszelkich problemów i zapytań. Jesteśmy gotowi służyć pomocą i udzielać wsparcia w każdej sytuacji, aby zapewnić naszym klientom doskonałe doświadczenie zakupowe i długotrwałą relację z naszą firmą.',
		offers: [
			{
				id: 5,
				title: 'Specjalista ds. obsługi klienta',
				description: 'Opis oferty...',
				responsibilities: ['Zadanie 1', 'Zadanie 2'],
				requirements: ['Wymaganie 1', 'Wymaganie 2'],
				benefits: ['Benefit 1', 'Benefit 2'],
			},
			{
				id: 6,
				title: 'Specjalista ds. Reklamacji',
				description: 'Opis oferty...',
				responsibilities: ['Zadanie 1', 'Zadanie 2'],
				requirements: ['Wymaganie 1', 'Wymaganie 2'],
				benefits: ['Benefit 1', 'Benefit 2'],
			},
		],
	},
	{
		id: 3,
		section: 'Produkcja',
		image: productionImg,
		sectionDescription:
			'Dział Produkcji stanowi serce operacyjne naszej firmy, gdzie realizowane są nasze produkty lub usługi. Nasz zespół produkcyjny dba o sprawne i efektywne wytwarzanie naszych produktów zgodnie z najwyższymi standardami jakości. Dzięki starannej organizacji, zaangażowaniu i doświadczeniu naszych pracowników, jesteśmy w stanie zapewnić terminową dostawę wysokiej jakości produktów naszym klientom.',
		offers: [
			{
				id: 7,
				title: 'Operator CNC',
				description: 'Opis oferty...',
				responsibilities: ['Zadanie 1', 'Zadanie 2'],
				requirements: ['Wymaganie 1', 'Wymaganie 2'],
				benefits: ['Benefit 1', 'Benefit 2'],
			},
			{
				id: 8,
				title: 'Tapicer',
				description: 'Opis oferty...',
				responsibilities: ['Zadanie 1', 'Zadanie 2'],
				requirements: ['Wymaganie 1', 'Wymaganie 2'],
				benefits: ['Benefit 1', 'Benefit 2'],
			},
		],
	},
	{
		id: 4,
		section: 'Dział projektu i rozwoju',
		image: projectImg,
		sectionDescription:
			'Dział Projektu i Rozwoju to silnik innowacji w naszej firmie. Nasz zespół zajmuje się opracowywaniem i realizacją nowych pomysłów, projektów i inicjatyw mających na celu rozwój naszej oferty produktów lub usług. Dzięki kreatywności, zaangażowaniu i wiedzy naszych pracowników, ciągle doskonalimy nasze produkty i procesy, aby sprostać zmieniającym się potrzebom rynku i naszych klientów.',
		offers: [
			{
				id: 9,
				title: 'Projektant mebli',
				description: 'Opis oferty...',
				responsibilities: ['Zadanie 1', 'Zadanie 2'],
				requirements: ['Wymaganie 1', 'Wymaganie 2'],
				benefits: ['Benefit 1', 'Benefit 2'],
			},
		],
	},
	{
		id: 5,
		section: 'Dział Administracji',
		image: administrationImg,
		sectionDescription:
			'Dział Administracji jest ważnym elementem naszej firmy, zapewniającym sprawną organizację i funkcjonowanie wszystkich procesów biurowych. Nasz zespół administracyjny zajmuje się zarządzaniem dokumentacją, obsługą biurową, księgowością oraz innymi kluczowymi obszarami administracyjnymi. Dzięki profesjonalizmowi i dokładności naszych pracowników, zapewniamy efektywną i profesjonalną obsługę wszelkich spraw administracyjnych, wspierając tym samym naszą firmę w osiąganiu celów biznesowych.',
		offers: [
			{
				id: 10,
				title: 'Specjalista ds. Finansowych',
				description: 'Opis oferty...',
				responsibilities: ['Zadanie 1', 'Zadanie 2'],
				requirements: ['Wymaganie 1', 'Wymaganie 2'],
				benefits: ['Benefit 1', 'Benefit 2'],
			},
			{
				id: 11,
				title: 'Specjalista HR',
				description: 'Opis oferty...',
				responsibilities: ['Zadanie 1', 'Zadanie 2'],
				requirements: ['Wymaganie 1', 'Wymaganie 2'],
				benefits: ['Benefit 1', 'Benefit 2'],
			},
		],
	},
]
