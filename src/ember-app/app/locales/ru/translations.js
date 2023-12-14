import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISItog11ДирОтдПоРабСКлLForm from './forms/i-i-s-itog11-дир-отд-по-раб-с-кл-l';
import IISItog11ДлительностьLForm from './forms/i-i-s-itog11-длительность-l';
import IISItog11ДоговорLForm from './forms/i-i-s-itog11-договор-l';
import IISItog11ЗатрВремяLForm from './forms/i-i-s-itog11-затр-время-l';
import IISItog11КлиентLForm from './forms/i-i-s-itog11-клиент-l';
import IISItog11РасчетОстВремLForm from './forms/i-i-s-itog11-расчет-ост-врем-l';
import IISItog11УслугиLForm from './forms/i-i-s-itog11-услуги-l';
import IISItog11ДирОтдПоРабСКлEForm from './forms/i-i-s-itog11-дир-отд-по-раб-с-кл-e';
import IISItog11ДлительностьEForm from './forms/i-i-s-itog11-длительность-e';
import IISItog11ДоговорEForm from './forms/i-i-s-itog11-договор-e';
import IISItog11ЗатрВремяEForm from './forms/i-i-s-itog11-затр-время-e';
import IISItog11КлиентEForm from './forms/i-i-s-itog11-клиент-e';
import IISItog11РасчетОстВремEForm from './forms/i-i-s-itog11-расчет-ост-врем-e';
import IISItog11УслугиEForm from './forms/i-i-s-itog11-услуги-e';
import IISItog11ДирОтдПоРабСКлModel from './models/i-i-s-itog11-дир-отд-по-раб-с-кл';
import IISItog11ДлительностьModel from './models/i-i-s-itog11-длительность';
import IISItog11ДоговорModel from './models/i-i-s-itog11-договор';
import IISItog11ЗатрВремяModel from './models/i-i-s-itog11-затр-время';
import IISItog11КлиентModel from './models/i-i-s-itog11-клиент';
import IISItog11ОказУслугModel from './models/i-i-s-itog11-оказ-услуг';
import IISItog11РасчетОстВремModel from './models/i-i-s-itog11-расчет-ост-врем';
import IISItog11УслугиModel from './models/i-i-s-itog11-услуги';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-itog11-дир-отд-по-раб-с-кл': IISItog11ДирОтдПоРабСКлModel,
    'i-i-s-itog11-длительность': IISItog11ДлительностьModel,
    'i-i-s-itog11-договор': IISItog11ДоговорModel,
    'i-i-s-itog11-затр-время': IISItog11ЗатрВремяModel,
    'i-i-s-itog11-клиент': IISItog11КлиентModel,
    'i-i-s-itog11-оказ-услуг': IISItog11ОказУслугModel,
    'i-i-s-itog11-расчет-ост-врем': IISItog11РасчетОстВремModel,
    'i-i-s-itog11-услуги': IISItog11УслугиModel
  },

  'application-name': 'Itog11',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Itog11',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Itog11',
          title: 'Itog11'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        itog11: {
          caption: 'Itog11',
          title: 'Itog11',
          'i-i-s-itog11-договор-l': {
            caption: 'Договор',
            title: ''
          },
          'i-i-s-itog11-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-itog11-затр-время-l': {
            caption: 'Затр время',
            title: ''
          },
          'i-i-s-itog11-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-itog11-длительность-l': {
            caption: 'Длительность',
            title: ''
          },
          'i-i-s-itog11-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          },
          'i-i-s-itog11-услуги-l': {
            caption: 'Услуги',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-itog11-дир-отд-по-раб-с-кл-l': IISItog11ДирОтдПоРабСКлLForm,
    'i-i-s-itog11-длительность-l': IISItog11ДлительностьLForm,
    'i-i-s-itog11-договор-l': IISItog11ДоговорLForm,
    'i-i-s-itog11-затр-время-l': IISItog11ЗатрВремяLForm,
    'i-i-s-itog11-клиент-l': IISItog11КлиентLForm,
    'i-i-s-itog11-расчет-ост-врем-l': IISItog11РасчетОстВремLForm,
    'i-i-s-itog11-услуги-l': IISItog11УслугиLForm,
    'i-i-s-itog11-дир-отд-по-раб-с-кл-e': IISItog11ДирОтдПоРабСКлEForm,
    'i-i-s-itog11-длительность-e': IISItog11ДлительностьEForm,
    'i-i-s-itog11-договор-e': IISItog11ДоговорEForm,
    'i-i-s-itog11-затр-время-e': IISItog11ЗатрВремяEForm,
    'i-i-s-itog11-клиент-e': IISItog11КлиентEForm,
    'i-i-s-itog11-расчет-ост-врем-e': IISItog11РасчетОстВремEForm,
    'i-i-s-itog11-услуги-e': IISItog11УслугиEForm
  },

});

export default translations;
