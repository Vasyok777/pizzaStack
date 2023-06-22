import pizzaMenu from '@app/mocks/pizza.json'
import Footer from './common/footer/Footer'
import Header from './common/header/Header'
import MenuList from './modules/components/menu/menu-list/MenuList'

function App() {
	return (
		<>
			<Header />
			<main className='mx-12 mb-24'>
				<MenuList items={pizzaMenu} />
			</main>
			<Footer />
		</>
	)
}

export default App
