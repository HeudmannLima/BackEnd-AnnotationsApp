const Annotations = require('../models/AnnotationData');

module.exports = {

  // MOSTRA REGISTROS POR PRIORIDADE TRUE/FALSE
  async read(req, res) {
    const priority = req.query;

    const priorityNotes = await Annotations.find(priority);

    return res.json(priorityNotes);
  },

  // MUDA PRIORIDADE DA ANOTAÇÃO (QUERY > priority > true/false)
  async update(req, res) {
    const { id } = req.params;

    const annotation = await Annotations.findOne({ _id: id });

    if (annotation.priority) {
      annotation.priority = false;
    } else {
      annotation.priority = true;
    }
    await annotation.save();

    return res.json(annotation);
  }

};