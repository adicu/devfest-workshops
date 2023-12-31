import { render, screen } from '@testing-library/react'
import Home from '../pages/index';
import '@testing-library/jest-dom'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', {
            name: /next\.js template/i,
        })

        expect(heading).toBeInTheDocument()
    })

    it('one + one is two', () => {
        expect(1 + 1).toBe(2)
    })
})