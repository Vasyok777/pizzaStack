import { IPizzaList } from '@app/modules/components/types/pizza'
import { FC } from 'react'
import MenuItem from '../menu-item/MenuItem'

const MenuList: FC<IPizzaList> = ({ items }) => {
	return (
		<div className='flex flex-wrap gap-10 justify-center'>
			{items.map(({ image, ...pizza }) => (
				<MenuItem
					key={pizza.id}
					{...pizza}
					imagePath={'assets/pizza/' + image}
				/>
			))}
		</div>
	)
}
export default MenuList
