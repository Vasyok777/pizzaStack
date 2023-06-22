import type { Meta, StoryObj } from '@storybook/react'
import FooterLink from './FooterLink'

const meta: Meta<typeof FooterLink> = {
	title: 'Common/Footer Link',
	component: FooterLink,
}

export default meta
type Story = StoryObj<typeof FooterLink>

export const View: Story = {
	args: {
		href: 'tel:+380961234564',
		children: '096 123 45 67',
	},
	decorators: [
		StoryComponent => (
			<ul>
				<StoryComponent />
			</ul>
		),
	],
}
