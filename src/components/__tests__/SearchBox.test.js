import { shallow } from 'enzyme';
import SearchBox from '../SearchBox'; 
import React from 'react';


it('expect to render SearchBox component', () => {
  const wrapper = shallow(<SearchBox searchChange={() => null}/>);
  expect(wrapper).toMatchSnapshot();
});