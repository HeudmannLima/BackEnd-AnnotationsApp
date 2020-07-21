const Annotations = require('../models/AnnotationData');

module.exports = {

  // ALTERA TÍTULO OU TEXTO DA ANOTAÇÃO
  async update(req, res) {
    const { id } = req.params;
    const { title, notes } = req.body;

    const annotation = await Annotations.findOne({ _id: id });

    if (title) {
      const titleExists = await Annotations. findOne({ 
        $and: [ {_id: {$ne:id}}, {title: title} ]
      });
      if (!titleExists) {
        annotation.title = title;
      }
    }
    if (notes) {
      annotation.notes = notes;
    }

    await annotation.save();

    return res.json(annotation);
  }

}