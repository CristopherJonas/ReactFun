import React from 'react';
import { shallow } from 'enzyme';
import NewComment from './NewComment';

describe('<NewComment/>', () => {
    it('Should handle changes in textarea', () => {
        const wrapper = shallow(<NewComment />);
        const event = {
            target: {
                value: '123'
            }
        }

        wrapper.find('textarea').simulate('change', event);
        expect(wrapper.state().newComment).toBe('123')
    })

    it('Should call sendComment on button click', () => {
        const sendComment = jest.fn();
        const wrapper = shallow(<NewComment sendComment={sendComment} />);
        const event = {
            target: {
                value: '123'
            }
        }

        wrapper.find('textarea').simulate('change', event);
        wrapper.find('button').simulate('click');

        expect(sendComment).toBeCalledWith('123');
        expect(wrapper.state().newComment).toBe('');
    })
})