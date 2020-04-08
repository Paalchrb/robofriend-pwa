import { shallow } from 'enzyme';
import Scroll from '../Scroll'; 
import React from 'react';


it('expect to render Scroll component', () => {
  const wrapper = shallow(<Scroll />)
  expect(wrapper).toMatchSnapshot();
})