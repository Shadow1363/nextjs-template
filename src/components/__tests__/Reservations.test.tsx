import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Reservations from '../Reservations'

describe('Reservations', () => {
  it('renders the reservation form', () => {
    render(<Reservations />)
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Time')).toBeInTheDocument()
    expect(screen.getByLabelText('Party Size')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('submits the form and shows success message', async () => {
    render(<Reservations />)
    
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Alice' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'alice@example.com' } })
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2024-05-01' } })
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '19:00' } })
    
    fireEvent.click(screen.getByText('Confirm Reservation'))
    
    await waitFor(() => {
      expect(screen.getByText('Request Received')).toBeInTheDocument()
    })
    
    expect(screen.getByText(/Thank you, Alice/)).toBeInTheDocument()
  })
})
