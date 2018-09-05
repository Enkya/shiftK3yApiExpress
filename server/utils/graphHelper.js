const request = require('superagent');
const config = require(__dirname + '/../config/config.js');


/**
 * Generates a GET request to the user endpoint
 * @param {String} accessToken 
 * @param {Function} callback 
 */
function getUserData(accessToken, callback) {
    request
      .get(config.MICROSOFT_URL)
      .set('Authorization', 'Bearer ' + accessToken)
      .end((err, res) => {
        callback(err, res);
      });
}

/**
 * 
 * @param {String} accessToken 
 * @param {Function} callback 
 */
function getProfilePhoto(accessToken, callback) {
  request
    .get(`${config.MICROSOFT_URL}/photo/$value`)
    .set('Authorization', 'Bearer ' + accessToken)
    .end((err, res) => {
      callback(err, res.body);
    });
}

/**
 * 
 * @param {String} accessToken 
 * @param {File} file 
 * @param {Function} callback 
 */
function uploadFile(accessToken, file, callback) {
  request
    .put(`${config.MICROSOFT_URL}/drive/root/children/mypic.jpg/content`)
    .send(file)
    .set('Authorization', 'Bearer ' + accessToken)
    .set('Content-Type', 'image/jpg')
    .end((err, res) => {
      callback(err, res.body);
    });
}

/**
 * 
 * @param {String} accessToken 
 * @param {String} id 
 * @param {Function} callback 
 */
function getSharingLink(accessToken, id, callback) {
  request
    .post(`${config.MICROSOFT_URL}/drive/items/${id}/createLink`)
    .send({type: 'view'})
    .set('Authorization', 'Bearer ' + accessToken)
    .set('Content-Type', 'application/json')
    .end((err, res) => {
      callback(err, res.body.link);
    });
}

/**
 * 
 * @param {String} accessToken 
 * @param {String} message 
 * @param {Function} callback 
 */
function postSendMail(accessToken, message, callback) {
  request
    .post(`${config.MICROSOFT_URL}/sendMail`)
    .send(message)
    .set('Authorization', 'Bearer ' + accessToken)
    .set('Content-Type', 'application/json')
    .set('Content-Length', message.length)
    .end((err, res) => {
      callback(err, res);
    });
}

exports.getUserData = getUserData;
exports.getProfilePhoto = getProfilePhoto;
exports.uploadFile = uploadFile;
exports.getSharingLink = getSharingLink;
exports.postSendMail = postSendMail;
