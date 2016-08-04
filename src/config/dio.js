const dioLatestUrl = process.env.DIO_LATEST_URL || 'https://dio.es.gov.br/apifront/portal/edicoes/ultimas_edicoes/';
const dioSearchUrl = process.env.DIO_BUSCA_URL || 'http://www.dio.es.gov.br/busca/busca/buscar';
const pdfUrl = process.env.DIO_BUSCA_URL || 'http://cdn.dio.es.gov.br/portal/edicoes/download';
const sortParam = process.env.SORT_PARAM || 'sort=';
const sortDefault = process.env.SORT_DEFAULT || 'date';

module.exports = {
    latestEndpoint: dioLatestUrl,
    searchEndpoint: dioSearchUrl,
    pdfEndpoint: pdfUrl,
    sort: {
        param: sortParam,
        default: sortDefault
    }
};
