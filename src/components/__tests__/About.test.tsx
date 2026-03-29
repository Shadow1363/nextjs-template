import { render, screen } from '@testing-library/react'
import About from '../About'

describe('About', () => {
  it('renders about section with correct content', () => {
    render(<About />)
    expect(screen.getByText('Our Philosophy')).toBeInTheDocument()
    expect(screen.getByText(/Chef Elena Rostova curates each plate/)).toBeInTheDocument()
  })

  it('renders the chef image', () => {
    render(<About />)
    const image = screen.getByAltText('Chef plating a dish')
    expect(image).toBeInTheDocument()
  })
})
