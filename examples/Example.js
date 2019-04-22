import React from 'react';
import Icon from '../src/index';

class Example extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <div>
                <Icon size={500} name={'office'} color={'blue'} />
            </div>
        );
    }
}

export default Example;
