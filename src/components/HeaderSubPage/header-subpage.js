import './header-subpage.scss'

export default function HeaderSubPage({ imgSrc, headerTitle }) {
	return (
		<header className='sub-header'>
			<img src={imgSrc} />
			<p>{headerTitle}</p>
		</header>
	)
}
