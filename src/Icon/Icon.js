import React from 'react';
import PropTypes from 'prop-types';
import { buildPaths } from '../utils/Parser';

const Icon = (props) => {
    let { name, size, color } = props;

    let paths = buildPaths(name, color);

    if(paths.length < 1){
        return <p>?</p>;
    }

    return (
        <svg width={size} height={size} viewBox="0 0 1024 1024">
            {paths}
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
    size: 20,
    color: 'black',
};

export default Icon;
