export const jsonSchema = {
  title: 'Contrat',
  type: 'object',
  properties: {
    number: {
      type: 'string',
      title: 'Numéro',
    },
    title: {
      type: 'string',
      title: 'Titre',
    },
    revision: {
      type: 'string',
      title: 'Révision',
    },
    executionDate: {
      type: 'string',
      title: "Date d'éxécution",
      format: 'date',
    },
    signatureDate: {
      type: 'string',
      title: 'Date de signature',
      format: 'date',
    },
    type: {
      type: 'string',
      title: 'Type',
    },
  },
  required: [
    'number',
    'title',
    'revision',
    'executionDate',
    'signatureDate',
    'type',
  ],
};
