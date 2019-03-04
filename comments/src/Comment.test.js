import React from 'react';
import Comment from './Comment';
import { render } from 'enzyme';

it('should render', () => {
    const c = {
        comment: 'test'
    }
    const wrapper = render(<Comment comment={c} />);

    expect(wrapper.text()).toBe('test');
})