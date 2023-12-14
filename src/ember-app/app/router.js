import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-itog11-дир-отд-по-раб-с-кл-l');
  this.route('i-i-s-itog11-дир-отд-по-раб-с-кл-e',
  { path: 'i-i-s-itog11-дир-отд-по-раб-с-кл-e/:id' });
  this.route('i-i-s-itog11-дир-отд-по-раб-с-кл-e.new',
  { path: 'i-i-s-itog11-дир-отд-по-раб-с-кл-e/new' });
  this.route('i-i-s-itog11-длительность-l');
  this.route('i-i-s-itog11-длительность-e',
  { path: 'i-i-s-itog11-длительность-e/:id' });
  this.route('i-i-s-itog11-длительность-e.new',
  { path: 'i-i-s-itog11-длительность-e/new' });
  this.route('i-i-s-itog11-договор-l');
  this.route('i-i-s-itog11-договор-e',
  { path: 'i-i-s-itog11-договор-e/:id' });
  this.route('i-i-s-itog11-договор-e.new',
  { path: 'i-i-s-itog11-договор-e/new' });
  this.route('i-i-s-itog11-затр-время-l');
  this.route('i-i-s-itog11-затр-время-e',
  { path: 'i-i-s-itog11-затр-время-e/:id' });
  this.route('i-i-s-itog11-затр-время-e.new',
  { path: 'i-i-s-itog11-затр-время-e/new' });
  this.route('i-i-s-itog11-клиент-l');
  this.route('i-i-s-itog11-клиент-e',
  { path: 'i-i-s-itog11-клиент-e/:id' });
  this.route('i-i-s-itog11-клиент-e.new',
  { path: 'i-i-s-itog11-клиент-e/new' });
  this.route('i-i-s-itog11-расчет-ост-врем-l');
  this.route('i-i-s-itog11-расчет-ост-врем-e',
  { path: 'i-i-s-itog11-расчет-ост-врем-e/:id' });
  this.route('i-i-s-itog11-расчет-ост-врем-e.new',
  { path: 'i-i-s-itog11-расчет-ост-врем-e/new' });
  this.route('i-i-s-itog11-услуги-l');
  this.route('i-i-s-itog11-услуги-e',
  { path: 'i-i-s-itog11-услуги-e/:id' });
  this.route('i-i-s-itog11-услуги-e.new',
  { path: 'i-i-s-itog11-услуги-e/new' });
});

export default Router;
