import React from 'react';
import { shallow } from 'enzyme';
import Icon from 'index';

describe('Icon', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Icon />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render name from prop', () => {
    const wrapper = shallow(<Icon name='Jack'/>);
    expect(wrapper.find('.name-holder').text()).toContain('My name is - Jack');
  });
});
