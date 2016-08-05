const dioService = require( '../services/dioService' );
const dio = require( '../config/dio' );

module.exports = () => {
    var searchController = new Object();

    searchController.getList = ( req, res, next ) => {

        const query = req.query.query;
        const dateMin = req.query.dateMin;
        const dateMax = req.query.dateMax;
        const page = req.query.pageNumber;
        const sort = req.query.sort;

        dioService().getListBy( query, dateMin, dateMax, page, sort )
        .then( result => {
            const total = result.hits.total;
            const itens = result.hits.hits.map( a => {
                return {
                    date: `${a.fields.day}/${a.fields.month}/${a.fields.year}`,
                    editionUrl: `${dio.pdfEndpoint}/${a.fields.diario_id}`,
                    pageNumber: a.fields.pagina[ 0 ],
                    pageUrl: `${dio.pdfEndpoint}/${a.fields.diario_id}/${a.fields.pagina}`,
                    highlights: a.highlight.conteudo
                };
            } );

            res.json( {
                totalHits: total,
                hits: itens
            } );
        } )
        .catch( err => {
            next( err );
        } );
    };

    return searchController;
};
