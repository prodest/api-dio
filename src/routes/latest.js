module.exports = app => {

    const latestController = require( '../controllers/latestController' )();

    app.get( '/latest', latestController.getList );

    return app;
};
