import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders brand and social links', () => {
    render(<Footer />)
    expect(screen.getByText('Lumina')).toBeInTheDocument()
    expect(screen.getAllByLabelText('Instagram')[0]).toBeInTheDocument()
    expect(screen.getAllByLabelText('Twitter')[0]).toBeInTheDocument()
    expect(screen.getAllByLabelText('Facebook')[0]).toBeInTheDocument()
  })

  it('renders copyright year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(year.toString()))).toBeInTheDocument()
  })
})
