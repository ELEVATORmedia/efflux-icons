import React from 'react';
import Icon from '../src/index';
import { getAvailableIconNames } from '../src/utils/Parser';

class Example extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {getAvailableIconNames().map((iconName, index) => {
                    return <Icon key={index} size={20} name={iconName} color={'red'} />;
                })}
            </div>
        );
    }
}

export default Example;
