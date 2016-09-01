const apicache = require( 'apicache' ).options( { debug: false } ).middleware;

module.exports = app => {

    const latestController = require( '../controllers/latestController' )();

    app.get( '/latest', apicache( '10 minutes' ), latestController.getList );
};
