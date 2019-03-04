import React from 'react';
import { shallow } from 'enzyme';
import Comments from './Comments';
import Comment from './Comment';

describe('<Comments />', () => {
    it('should render Comments', () => {
        const comments = {
            1: { comment: 'comment 1' },
            2: { comment: 'comment 2' },
        };
        const wrapper = shallow(<Comments comments={comments} />);
        expect(wrapper.find(Comment).length).toBe(2);

        expect(wrapper.find(Comment).get(0).props.comment).toBe(comments[1]);
        expect(wrapper.find(Comment).get(1).props.comment).toBe(comments[2]);

        expect(wrapper.find(Comment).get(0).key).toBe('1');
        expect(wrapper.find(Comment).get(1).key).toBe('2');
    })

    it('should work without comments', () => {
        const comments = {};
        const wrapper = shallow(<Comments comments={comments} />);

        expect(wrapper.find(Comment).length).toBe(0);
    })
})