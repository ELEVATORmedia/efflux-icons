import React from 'react';
import PropTypes from 'prop-types';
import { ICONS } from './IconEnumeration';
import { getPath } from '../utils/Parser';

const Icon = (props) => {
    let { name, size, color, fill } = props;
    let dynamicStyle = {
        path: {
            fill: fill ? color : 'none',
            stroke: color,
            strokeMiterlimit: 4,
            strokeWidth: 51.2
        },
    };

    return (
        <svg width={size} height={size} viewBox="0 0 1024 1024">
            <path style={dynamicStyle.path} d={getPath(name)} />
        </svg>
    );
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
    fill: PropTypes.bool,
};

Icon.defaultProps = {
    name: 'BIN2',
    size: 20,
    color: 'black',
    fill: false,
};

export default Icon;
