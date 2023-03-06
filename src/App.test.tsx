import { render, screen } from '@testing-library/react';
import { TagStatusRoom } from './views/Rooms/RoomsStyled';

describe('Background button', () => {

  test('The background is red in booked', () => {
    const color = '#E23428'
    const state = 'Booked'
    render(<TagStatusRoom color={color} status={state}>
      {state}
    </TagStatusRoom>)

    expect(screen.getByText('Booked')).toHaveStyle(`background: #E23428`)
    expect(screen.getByRole('button')).toHaveTextContent('Booked')
  })

  test('The background is green in Avalaible', () => {
    const color = '#5AD07A'
    const state = 'Avalaible'
    render(<TagStatusRoom color={color} status={state}>
      {state}
    </TagStatusRoom>)

    expect(screen.getByText('Avalaible')).toHaveStyle(`background: #5AD07A`)
    expect(screen.getByRole('button')).toHaveTextContent('Avalaible')
  })
})
