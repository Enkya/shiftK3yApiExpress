/**
 * 
 * @param {String} e 
 */
function hasAccessTokenExpired(e) {
    let expired;
    if (!e.innerError) {
        expired = false;
    } else {
        expired = e.forbidden &&
            e.message === 'InvalidAuthenticationToken' &&
            e.response.error.message === 'Accewss token has expired.';
    }
    return expired;
}

/**
 * 
 * @param {*} e 
 * @param {*} res 
 */
function serveError(e, res) {
    e.innerError = (e.message) ? e.response.text : '';
    res.send({
        error: e
    });
}

exports.hasAccessTokenExpired = hasAccessTokenExpired;
exports.serveError = serveError;