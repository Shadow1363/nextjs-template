import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero', () => {
  it('renders main heading and tagline', () => {
    render(<Hero />)
    expect(screen.getByText('Lumina')).toBeInTheDocument()
    expect(screen.getByText('Where East meets West in minimalist harmony.')).toBeInTheDocument()
  })

  it('renders call to action button', () => {
    render(<Hero />)
    expect(screen.getByText('Book a Table')).toBeInTheDocument()
  })
})
