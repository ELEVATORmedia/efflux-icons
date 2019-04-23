import React from 'react';
import PropTypes from 'prop-types';
import { buildPaths } from '../utils/Parser';

/**
 * Icon component which interpolates user entered icon named to build SVG from config file.
 * When an icon is not found, a '?' will take its place instead.
 * @param {Object} props
 */
const Icon = (props) => {
    let { name, size, color } = props;

    let paths = buildPaths(name, color);

    if (paths.length < 1) {
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
};

Icon.defaultProps = {
    size: 20,
    color: 'black',
};

export default Icon;
