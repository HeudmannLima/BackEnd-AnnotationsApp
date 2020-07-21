const Annotations = require('../models/AnnotationData');

module.exports = {

  // CRIAR REGISTRO
  async create(req, res) {
    const { title, notes, priority } = req.body;

    const titleExists = await Annotations.findOne({ title });
    
    if (!titleExists) {
      const annotationCreated = await Annotations.create({
        title,
        notes,
        priority
      });

      return res.json(annotationCreated);
    }

    return res.status(401).json({ error: `Título (${title}) já existe!` });
  },


  // MOSTRAR TODOS OS REGISTROS
  async read(req, res) {
    const annotationList = await Annotations.find();

    return res.json(annotationList);
  },


  // DELETAR REGISTRO POR ID
  async delete(req, res) {
    const { id } = req.params;

    const annotationDeleted = await Annotations.findOneAndDelete({ _id: id });

    if (annotationDeleted) {
      return res.json(annotationDeleted);
    }
    
    return res.status(401).json({ error: 'Não foi encontrado o registro para deletar' });
  }

};