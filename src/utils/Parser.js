import React from 'react';
import iconData from '../../assets/effluxPaths';

/**
 * Re-colors an icon based on its existing attributes
 *
 * @param {Object[]} orgPathStyles - original path styles
 * @param {String} colorModifier - new color to apply to icon
 * @returns {Object[]} modifiedPathStyles - recolored path styles
 */
const reColorIcon = (orgPathStyles, colorModifier) => {
    orgPathStyles.forEach((pathStyle) => {
        if (pathStyle.hasOwnProperty('fill') && pathStyle.fill !== 'none') {
            pathStyle.fill = colorModifier;
        }

        pathStyle.stroke = colorModifier;
    });

    return orgPathStyles;
};

/**
 * Retrieves multiple Path variables and concatenates them into a single variable. If no such icon data
 * exists, warn console.
 *
 * This function is based on the following solution:
 * https://gist.github.com/davidgilbertson/291e3172ca62ae17260570118cdb4c78#file-icon-jsx
 *
 * @param {Array} iconName - name of specified icon name from ICO Moon Data.
 * @param {String} colorModifier - new color to apply to icon
 */
const getPathStrings = (iconName) => {
    const icon = iconData.icons.find((icon) => icon.tags[0] === iconName);

    if (icon) {
        return icon.paths;
    } else {
        console.warn(`Failed to get paths for icon "${iconName}".`);
        return [];
    }
};

/**
 * Returns an array of Icon Path Attributes (Styles). The indices of this attrs array
 * coincide with the indices of that returned from getPathStrings
 * @param {*} iconName
 */
const getIconAttrs = (iconName) => {
    const icon = iconData.icons.find((icon) => icon.tags[0] === iconName);

    if (icon) {
        return icon.attrs;
    } else {
        console.warn(`Failed to get icon styles for "${iconName}".`);
        return [];
    }
};

/**
 * Builds <path/> svg children by extracting path and style data from the Efflux ico data file.
 * @param {String} iconName - name of requested Icon to build paths for
 * @returns {*[]} pathComponents - array of styled <path /> tags
 */
const buildPaths = (iconName, color) => {
    let pathComponents = [];
    // Step 1: Retrieve Path Strings
    let pathStrings = getPathStrings(iconName);

    // Step 2: Retrieve Path Styles for each individual path & re-color
    let pathStyles = reColorIcon(getIconAttrs(iconName), color);

    // Step 3: Sanity Check that we have necessary components to build SVG paths
    if (pathStrings.length < 1 || pathStyles.length < 1) {
        console.warn(`Failed to build paths for icon ${iconName}.`);
        return pathComponents;
    }

    // Build Array of Path components
    pathStrings.map((pathString, index) => {
        pathComponents.push(
            <path key={index} style={pathStyles[index]} d={pathString} />
        );
    });

    return pathComponents;
};

/**
 * Retrieves a list of available icon data names from the Efflux ico data file.
 *
 * @returns {String[]} iconNames - Array of icon names available for use.
 */
const getAvailableIconNames = () => {
    const iconNames = [];
    iconData.selection.forEach((iconMetaData) => {
        iconNames.push(iconMetaData.name);
    });

    if (iconNames.length < 1) {
        console.warn('There no icon names available in Efflux path data file.');
    }

    return iconNames;
};

export { buildPaths, getAvailableIconNames, getIconAttrs };
