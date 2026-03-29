import { render, screen, fireEvent } from '@testing-library/react'
import Menu from '../Menu'

describe('Menu', () => {
  it('renders menu categories', () => {
    render(<Menu />)
    expect(screen.getByText('Starters')).toBeInTheDocument()
    expect(screen.getByText('Mains')).toBeInTheDocument()
    expect(screen.getByText('Desserts')).toBeInTheDocument()
  })

  it('renders starters by default', () => {
    render(<Menu />)
    expect(screen.getByText('Yuzu Kosho Scallop Crudo')).toBeInTheDocument()
  })

  it('switches to mains when category is clicked', () => {
    render(<Menu />)
    fireEvent.click(screen.getByText('Mains'))
    expect(screen.getByText('Miso Black Cod')).toBeInTheDocument()
    // Starters should no longer be in document
    expect(screen.queryByText('Yuzu Kosho Scallop Crudo')).not.toBeInTheDocument()
  })
})
