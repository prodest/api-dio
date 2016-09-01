module.exports = app => {

    const searchController = require( '../controllers/searchController' )();

    app.get( '/search', searchController.getList );
};
