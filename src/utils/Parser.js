import iconPaths from '../../assets/IcoMoonData';

/**
 * Retrieves multiple Path variables and concatenates them into a single variable. If no such icon data
 * exists, warn console.
 *
 * This function is based on the following solution:
 * https://gist.github.com/davidgilbertson/291e3172ca62ae17260570118cdb4c78#file-icon-jsx
 *
 * @param {String} iconName - name of specified icon name from ICO Moon Data.
 */
const getPath = (iconName) => {
    const icon = iconPaths.icons.find((icon) => icon.tags[0] === iconName);

    if (icon) {
        return icon.paths.join(' ');
    } else {
        console.warn(`icon ${iconName} does not exist.`);
        return '';
    }
};

export { getPath };
