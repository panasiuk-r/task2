import '../index.css'
import type { Meta, StoryObj } from '@storybook/react'

import Archive from '../components/Archive'

const meta: Meta<typeof Archive> = {
	title: 'App/Archive',
	component: Archive
}

export default meta

type Story = StoryObj<typeof Archive>

const categoryCounts = {
  'Task': { archived: 2, unarchived: 5 },
  'Random Thought': { archived: 1, unarchived: 3 },
  'Idea': { archived: 3, unarchived: 8 },
  'Quote': { archived: 0, unarchived: 2 },
}

export const Primary: Story = {
	args: {
		categoryCounts: categoryCounts
	}
}
