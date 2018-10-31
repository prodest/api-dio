const dioService = require('../services/dioService');
const dio = require('../config/dio');

module.exports = () => {
  var latestController = new Object();

  latestController.getList = (req, res, next) => {
    dioService()
      .getLatest()
      .then(result => {
        const itens = result.itens.map(a => {
          return {
            date: a.data,
            description: a.tipo_edicao_nome,
            url: `${dio.pdfEndpoint}/${a.id}`
          };
        });
        res.json(itens);
      })
      .catch(err => {
        next(err);
      });
  };

  return latestController;
};
