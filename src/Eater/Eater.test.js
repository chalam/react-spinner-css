import React from 'react'
import renderer from 'react-test-renderer'
import { Eater } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<Eater />).toJSON()
  expect(tree).toMatchSnapshot()
})
