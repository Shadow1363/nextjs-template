import { render, screen } from '@testing-library/react'
import Location from '../Location'

describe('Location', () => {
  it('renders location information', () => {
    render(<Location />)
    expect(screen.getByText(/123 Culinary Ave/)).toBeInTheDocument()
    expect(screen.getByText(/New York, NY 10001/)).toBeInTheDocument()
    expect(screen.getByText('hello@luminarestaurant.com')).toBeInTheDocument()
  })

  it('renders business hours', () => {
    render(<Location />)
    expect(screen.getByText('Mon - Thu')).toBeInTheDocument()
    expect(screen.getByText('5:00 PM - 10:00 PM')).toBeInTheDocument()
  })
})
