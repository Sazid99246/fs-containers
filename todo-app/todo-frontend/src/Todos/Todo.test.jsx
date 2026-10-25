// @vitest-environment jsdom

import { render, screen, cleanup } from '@testing-library/react'
import { afterEach, describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom/vitest'
import Todo from './Todo'

afterEach(() => {
  cleanup()
})

describe('Todo component', () => {
  it('renders the todo text and the correct buttons', () => {
    const todo = {
      id: '1',
      text: 'Learn Docker',
      done: false,
    }

    const deleteTodo = vi.fn()
    const completeTodo = vi.fn()

    render(
      <Todo
        todo={todo}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
    )

    expect(screen.getByText('Learn Docker')).toBeInTheDocument()
    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Set as done' })).toBeInTheDocument()
  })


  it('shows the completed status without the Set as done button', () => {
    const todo = {
      id: '2',
      text: 'Learn testing',
      done: true,
    }

    render(
      <Todo
        todo={todo}
        deleteTodo={vi.fn()}
        completeTodo={vi.fn()}
      />
    )

    expect(screen.getByText('Learn testing')).toBeInTheDocument()
    expect(screen.getByText('This todo is done')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Set as done' })).not.toBeInTheDocument()
  })
})
