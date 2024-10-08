export const uiSchema = {
  type: 'Stepper',
  elements: [
    {
      label: 'Informations Générales',
      type: 'Group',
      elements: [
        {
          type: 'HorizontalLayout',
          elements: [
            { type: 'Control', scope: '#/properties/number' },
            { type: 'Control', scope: '#/properties/title' },
          ],
        },
        { type: 'Control', scope: '#/properties/revision' },
      ],
    },
    {
      label: 'Dates',
      type: 'Group',
      elements: [
        {
          type: 'HorizontalLayout',
          elements: [
            { type: 'Control', scope: '#/properties/executionDate' },
            { type: 'Control', scope: '#/properties/signatureDate' },
          ],
        },
      ],
    },
    {
      label: 'Détails du Contrat',
      type: 'Group',
      elements: [{ type: 'Control', scope: '#/properties/type' }],
    },
  ],
};
