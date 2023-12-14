import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-itog11-расчет-ост-врем-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-itog11-оказ-услуг+договор':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: '',
            required: true,
            relationName: 'договор',
            projection: 'ДоговорL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-itog11-оказ-услуг+услуги':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: '',
            required: true,
            relationName: 'услуги',
            projection: 'УслугиL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
