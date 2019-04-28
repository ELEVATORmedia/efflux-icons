import React from 'react';
import renderer from 'react-test-renderer';
import Icon from 'index';

describe('Icon component', () => {
    it('renders default without crashing', () => {
        const defaultIcon = renderer.create(<Icon name={'Home'} />);
        let tree = defaultIcon.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders blue icon crashing', () => {
        const defaultIcon = renderer.create(<Icon name={'Home'} color={'Blue'} />);
        let tree = defaultIcon.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders blue icon at 25px without crashing', () => {
        const defaultIcon = renderer.create(
            <Icon name={'Home'} color={'Blue'} size={25} />
        );
        let tree = defaultIcon.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
