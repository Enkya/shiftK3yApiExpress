module.exports = {
    projectId: process.env.PROJECT_ID,
    keyFilename: process.env.KEY_FILE_NAME,
    bucketName: process.env.BUCKET_NAME,
    cookieSecret: process.env.COOKIE_SECRET,
    oauth2: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        redirectUrl: process.env.REDIRECT_URL || 'http://localhost:8080/token',
    },
    MICROSOFT_URL: process.env.MICROSOFT_URL || 'https://graph.microsoft.com/beta/me',
    creds: {
        redirectUrl: process.env.OFFICE_RETURN_URL || 'http://localhost:3000/auth/openid/return',
        clientID: process.env.OFFICE_CLIENT_ID,
        clientSecret: process.env.OFFICE_CLIENT_SECRET,
        identityMetadata: process.env.IDENTITY_METADATA,
        allowHttpForRedirectUrl: true, // For development only
        responseType: 'code',
        validateIssuer: false, // For development only
        responseMode: 'query',
        scope: ['User.Read', 'Mail.Send', 'Files.ReadWrite']
      }
};
