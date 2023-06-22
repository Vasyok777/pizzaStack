import FooterLink from '../footer-link/FooterLink'

const Footer = () => {
	return (
		<div className='bg-gray-900 p-12'>
			<div className=''>
				<div className='mb-4'>
					<span className='uppercase font-bold text-sm text-zinc-500'>
						Контакти
					</span>
				</div>
				<div className='mb-8'>
					<ul>
						<FooterLink href='tel:+380961234564'>096 123 45 67</FooterLink>
						<FooterLink href='mailto:info@pizzastack.app'>
							info@pizzastack.app
						</FooterLink>
					</ul>
				</div>
				<hr className='relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500 mb-8' />
				<div>
					<span className='text-xl font-semibold text-white'>
						🍕 PizzaStack
					</span>
				</div>
			</div>
		</div>
	)
}
export default Footer
