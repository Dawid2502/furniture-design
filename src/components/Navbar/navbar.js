import './navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCouch, faBars, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
	// Stan dla rotacji strzałki menu i aktywności menu i submenu
	const [arrowRotation, setArrowRotation] = useState(0)
	const [menuClick, setMenuClick] = useState(false)
	const [submenuClick, setSubmenuClick] = useState(false)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
	// Funkcja obsługująca kliknięcie w menu
	const handleMenuClick = () => {
		setWindowWidth(window.innerWidth); 
		if (window.innerWidth <= 768) {
			setMenuClick(!menuClick) // Zmiana stanu menu
		}
	}

	// Funkcja obsługująca kliknięcie w submenu
	const handleSubmenuClicked = () => {
		setSubmenuClick(!submenuClick) // Zmiana stanu submenu
		setArrowRotation(menuClick ? 0 : 180) // Zmiana rotacji strzałki menu
	}

	return (
		<>
			<button className='burger-btn'>
				<FontAwesomeIcon className='bars' icon={faBars} onClick={handleMenuClick} />
			</button>
			<nav className={menuClick ? 'nav-active' : ''}>
				<div className='navbar'>
					<div className='company-title'>
						<FontAwesomeIcon className='logo' icon={faCouch} />
						<Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
							<p className='name-company'>FurnitureDesign</p>
						</Link>
					</div>
					<ul className='nav-items'>
						<Link to='/about-company' style={{ textDecoration: 'none', color: 'white' }}>
							<li className='item' onClick={handleMenuClick}>O nas</li>
						</Link>
						<li className='item submenu'>
							<Link to='/category' style={{ textDecoration: 'none', color: 'white' }}>
								<p onClick={handleMenuClick}>Produkty</p>
							</Link>{' '}
							<FontAwesomeIcon
								icon={faArrowDown}
								onClick={handleSubmenuClicked}
								className={`arrow ${submenuClick ? 'arrow-rotate' : ''}`}
							/>
							<ul className={submenuClick ? 'submenu-items active' : 'submenu-items'}>
								<Link to='/products/tables' style={{ textDecoration: 'none', color: 'white' }}>
									<li className='sub-item' onClick={handleMenuClick}>
										Stoliki
									</li>
								</Link>
								<Link to='/products/chairs' style={{ textDecoration: 'none', color: 'white' }}>
									<li className='sub-item' onClick={handleMenuClick}>
										Krzesła
									</li>
								</Link>
								<Link to='/products/sofas' style={{ textDecoration: 'none', color: 'white' }}>
									<li className='sub-item' onClick={handleMenuClick}>
										Kanapy
									</li>
								</Link>
								<Link to='/products/swings' style={{ textDecoration: 'none', color: 'white' }}>
									<li className='sub-item' onClick={handleMenuClick}>
										Huśtawki
									</li>
								</Link>
								<Link to='/products/lamps' style={{ textDecoration: 'none', color: 'white' }}>
									<li className='sub-item' onClick={handleMenuClick}>
										Lampy
									</li>
								</Link>
								<Link to='/products/frames' style={{ textDecoration: 'none', color: 'white' }}>
									<li className='sub-item' onClick={handleMenuClick}>
										Ramki
									</li>
								</Link>
							</ul>
						</li>
						<Link to='/job-main-page' style={{ textDecoration: 'none', color: 'white' }}>
							<li className='item' onClick={handleMenuClick}>
								Kariera
							</li>
						</Link>
						<Link to='/gallery' style={{ textDecoration: 'none', color: 'white' }}>
							<li className='item' onClick={handleMenuClick}>
								Galeria
							</li>
						</Link>
						<Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>
							<li className='item' onClick={handleMenuClick}>
								Kontakt
							</li>
						</Link>
					</ul>
				</div>
			</nav>
		</>
	)
}
