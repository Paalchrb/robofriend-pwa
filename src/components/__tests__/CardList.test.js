import { shallow } from 'enzyme';
import CardList from '../CardList'; 
import React from 'react';


it('expect to render CardList component', () => {
  const robotsMock = [
    {
      id: 1,
      name: 'Harry Hole',
      username: 'Holey',
      email: 'hole@gmail.com'
    }
  ];
  const wrapper = shallow(<CardList robots={robotsMock} />);
  expect(wrapper).toMatchSnapshot();
})