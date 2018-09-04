module.exports = {
    projectId: process.env.PROJECT_ID,
    keyFilename: process.env.KEY_FILE_NAME,
    bucketName: process.env.BUCKET_NAME,
    cookieSecret: process.env.COOKIE_SECRET,
    oauth2: {
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        redirectUrl: process.env.REDIRECT_URL || 'http://localhost:8080/oauth2callback',
    }
};
