const request = require( 'request-promise' );
const dio = require( '../config/dio' );

module.exports = () => {
    var dioService = new Object();

    dioService.getLatest = function() {
        const options = {
            uri: dio.latestEndpoint,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };

        return request( options );
    };

    dioService.getListBy = function( query, dateMin, dateMax, page, sort ) {
        if ( !query ) {
            throw new Error( 'Parâmetro query é obrigatório.' );
        }

        query = encodeURIComponent( query );

        let uri = `${dio.searchEndpoint}/${query}/${page || 0}`;

        if ( dateMin ) {
            uri = `${uri}/di:${dateMin.slice( 0, 10 )}`;
        }

        if ( dateMax ) {
            uri = `${uri}/df:${dateMax.slice( 0, 10 )}`;
        }

        if ( sort ) {
            uri = `${uri}/?${dio.sort.param}${sort}`;
        } else {
            uri = `${uri}/?${dio.sort.param}${dio.sort.default}`;
        }

        const options = {
            uri: uri,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };

        return request( options );
    };

    return dioService;
};
