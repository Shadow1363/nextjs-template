import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
  it('renders the brand name', () => {
    render(<Header />)
    expect(screen.getByText('Lumina')).toBeInTheDocument()
  })

  it('renders desktop navigation links', () => {
    render(<Header />)
    expect(screen.getAllByText('About')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Menu')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Reservations')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Location')[0]).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', () => {
    render(<Header />)
    const toggleButton = screen.getByLabelText('Toggle menu')
    
    // Initially mobile menu links might not be visible or are hidden by CSS
    // The implementation conditionally renders the mobile nav
    fireEvent.click(toggleButton)
    
    // There should now be two instances of each link (one desktop, one mobile)
    const aboutLinks = screen.getAllByText('About')
    expect(aboutLinks.length).toBe(2)
  })
})
