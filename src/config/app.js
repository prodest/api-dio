module.exports = {
    env: process.env.NODE_ENV || '',
    port: process.env.PORT || '4242',
    path: process.env.REQUEST_PATH || ''
};

process.env.NODE_TLS_REJECT_UNAUTHORIZED = process.env.REJECT_SELF_SIGNED_CERTIFICATE || 0;
