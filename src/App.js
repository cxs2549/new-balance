import { Fragment } from 'react'
import GlobalStyles from './globalStyles'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'

const App = () => {
	return (
		<Fragment>
			<GlobalStyles />
			<Header />
			<main>
				<Home />
			</main>
			<Footer />
		</Fragment>
	)
}

export default App
