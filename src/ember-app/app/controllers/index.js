import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.itog11.caption'),
          title: i18n.t('forms.application.sitemap.itog11.title'),
          children: [{
            link: 'i-i-s-itog11-договор-l',
            caption: i18n.t('forms.application.sitemap.itog11.i-i-s-itog11-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.itog11.i-i-s-itog11-договор-l.title'),
            children: null
          }, {
            link: 'i-i-s-itog11-дир-отд-по-раб-с-кл-l',
            caption: i18n.t('forms.application.sitemap.itog11.i-i-s-itog11-дир-отд-по-раб-с-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.itog11.i-i-s-itog11-дир-отд-по-раб-с-кл-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-itog11-затр-время-l',
            caption: i18n.t('forms.application.sitemap.itog11.i-i-s-itog11-затр-время-l.caption'),
            title: i18n.t('forms.application.sitemap.itog11.i-i-s-itog11-затр-время-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-itog11-клиент-l',
            caption: i18n.t('forms.application.sitemap.itog11.i-i-s-itog11-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.itog11.i-i-s-itog11-клиент-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-itog11-длительность-l',
            caption: i18n.t('forms.application.sitemap.itog11.i-i-s-itog11-длительность-l.caption'),
            title: i18n.t('forms.application.sitemap.itog11.i-i-s-itog11-длительность-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-itog11-расчет-ост-врем-l',
            caption: i18n.t('forms.application.sitemap.itog11.i-i-s-itog11-расчет-ост-врем-l.caption'),
            title: i18n.t('forms.application.sitemap.itog11.i-i-s-itog11-расчет-ост-врем-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-itog11-услуги-l',
            caption: i18n.t('forms.application.sitemap.itog11.i-i-s-itog11-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.itog11.i-i-s-itog11-услуги-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})