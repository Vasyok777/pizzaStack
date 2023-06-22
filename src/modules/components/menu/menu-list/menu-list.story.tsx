import PizzaMenu from '@app/mocks/pizza.json'
import type { Meta, StoryObj } from '@storybook/react'
import MenuList from './MenuList'

const meta: Meta<typeof MenuList> = {
	title: 'Menu/Menu List',
	component: MenuList,
}

export default meta
type Story = StoryObj<typeof MenuList>

export const View: Story = {
	args: {
		items: PizzaMenu,
	},
}
