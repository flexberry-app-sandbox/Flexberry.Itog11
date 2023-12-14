﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Itog11
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Оказ услуг.
    /// </summary>
    // *** Start programmer edit section *** (ОказУслуг CustomAttributes)

    // *** End programmer edit section *** (ОказУслуг CustomAttributes)
    [AutoAltered()]
    [Caption("Оказание услуг")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОказУслугE", new string[] {
            "Дата as \'Дата\'",
            "ВремяКонсульт as \'Время консультаций\'",
            "Договор as \'Номер договора\'",
            "Договор.Длительность.Длительность as \'Длителньость\'",
            "Услуги as \'Наименование\'",
            "Услуги.ЗатрВремя.ЗатрВремя as \'Затраченное время\'"})]
    [MasterViewDefineAttribute("ОказУслугE", "Договор", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Номер")]
    [MasterViewDefineAttribute("ОказУслугE", "Услуги", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    public class ОказУслуг : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private int fВремяКонсульт;
        
        private IIS.Itog11.Договор fДоговор;
        
        private IIS.Itog11.Услуги fУслуги;
        
        private IIS.Itog11.РасчетОстВрем fРасчетОстВрем;
        
        // *** Start programmer edit section *** (ОказУслуг CustomMembers)

        // *** End programmer edit section *** (ОказУслуг CustomMembers)

        
        /// <summary>
        /// ВремяКонсульт.
        /// </summary>
        // *** Start programmer edit section *** (ОказУслуг.ВремяКонсульт CustomAttributes)

        // *** End programmer edit section *** (ОказУслуг.ВремяКонсульт CustomAttributes)
        public virtual int ВремяКонсульт
        {
            get
            {
                // *** Start programmer edit section *** (ОказУслуг.ВремяКонсульт Get start)

                // *** End programmer edit section *** (ОказУслуг.ВремяКонсульт Get start)
                int result = this.fВремяКонсульт;
                // *** Start programmer edit section *** (ОказУслуг.ВремяКонсульт Get end)

                // *** End programmer edit section *** (ОказУслуг.ВремяКонсульт Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОказУслуг.ВремяКонсульт Set start)

                // *** End programmer edit section *** (ОказУслуг.ВремяКонсульт Set start)
                this.fВремяКонсульт = value;
                // *** Start programmer edit section *** (ОказУслуг.ВремяКонсульт Set end)

                // *** End programmer edit section *** (ОказУслуг.ВремяКонсульт Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ОказУслуг.Дата CustomAttributes)

        // *** End programmer edit section *** (ОказУслуг.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ОказУслуг.Дата Get start)

                // *** End programmer edit section *** (ОказУслуг.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ОказУслуг.Дата Get end)

                // *** End programmer edit section *** (ОказУслуг.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОказУслуг.Дата Set start)

                // *** End programmer edit section *** (ОказУслуг.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ОказУслуг.Дата Set end)

                // *** End programmer edit section *** (ОказУслуг.Дата Set end)
            }
        }
        
        /// <summary>
        /// Оказ услуг.
        /// </summary>
        // *** Start programmer edit section *** (ОказУслуг.Договор CustomAttributes)

        // *** End programmer edit section *** (ОказУслуг.Договор CustomAttributes)
        [PropertyStorage(new string[] {
                "Договор"})]
        [NotNull()]
        public virtual IIS.Itog11.Договор Договор
        {
            get
            {
                // *** Start programmer edit section *** (ОказУслуг.Договор Get start)

                // *** End programmer edit section *** (ОказУслуг.Договор Get start)
                IIS.Itog11.Договор result = this.fДоговор;
                // *** Start programmer edit section *** (ОказУслуг.Договор Get end)

                // *** End programmer edit section *** (ОказУслуг.Договор Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОказУслуг.Договор Set start)

                // *** End programmer edit section *** (ОказУслуг.Договор Set start)
                this.fДоговор = value;
                // *** Start programmer edit section *** (ОказУслуг.Договор Set end)

                // *** End programmer edit section *** (ОказУслуг.Договор Set end)
            }
        }
        
        /// <summary>
        /// Оказ услуг.
        /// </summary>
        // *** Start programmer edit section *** (ОказУслуг.Услуги CustomAttributes)

        // *** End programmer edit section *** (ОказУслуг.Услуги CustomAttributes)
        [PropertyStorage(new string[] {
                "Услуги"})]
        [NotNull()]
        public virtual IIS.Itog11.Услуги Услуги
        {
            get
            {
                // *** Start programmer edit section *** (ОказУслуг.Услуги Get start)

                // *** End programmer edit section *** (ОказУслуг.Услуги Get start)
                IIS.Itog11.Услуги result = this.fУслуги;
                // *** Start programmer edit section *** (ОказУслуг.Услуги Get end)

                // *** End programmer edit section *** (ОказУслуг.Услуги Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОказУслуг.Услуги Set start)

                // *** End programmer edit section *** (ОказУслуг.Услуги Set start)
                this.fУслуги = value;
                // *** Start programmer edit section *** (ОказУслуг.Услуги Set end)

                // *** End programmer edit section *** (ОказУслуг.Услуги Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Itog11.РасчетОстВрем.
        /// </summary>
        // *** Start programmer edit section *** (ОказУслуг.РасчетОстВрем CustomAttributes)

        // *** End programmer edit section *** (ОказУслуг.РасчетОстВрем CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "РасчетОстВрем"})]
        public virtual IIS.Itog11.РасчетОстВрем РасчетОстВрем
        {
            get
            {
                // *** Start programmer edit section *** (ОказУслуг.РасчетОстВрем Get start)

                // *** End programmer edit section *** (ОказУслуг.РасчетОстВрем Get start)
                IIS.Itog11.РасчетОстВрем result = this.fРасчетОстВрем;
                // *** Start programmer edit section *** (ОказУслуг.РасчетОстВрем Get end)

                // *** End programmer edit section *** (ОказУслуг.РасчетОстВрем Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОказУслуг.РасчетОстВрем Set start)

                // *** End programmer edit section *** (ОказУслуг.РасчетОстВрем Set start)
                this.fРасчетОстВрем = value;
                // *** Start programmer edit section *** (ОказУслуг.РасчетОстВрем Set end)

                // *** End programmer edit section *** (ОказУслуг.РасчетОстВрем Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОказУслугE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОказУслугE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОказУслугE", typeof(IIS.Itog11.ОказУслуг));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ОказУслуг.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfОказУслуг CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfОказУслуг CustomAttributes)
    public class DetailArrayOfОказУслуг : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Itog11.DetailArrayOfОказУслуг members)

        // *** End programmer edit section *** (IIS.Itog11.DetailArrayOfОказУслуг members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ОказУслуг by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ОказУслуг.
        /// </summary>
        public DetailArrayOfОказУслуг(IIS.Itog11.РасчетОстВрем fРасчетОстВрем) : 
                base(typeof(ОказУслуг), ((ICSSoft.STORMNET.DataObject)(fРасчетОстВрем)))
        {
        }
        
        public IIS.Itog11.ОказУслуг this[int index]
        {
            get
            {
                return ((IIS.Itog11.ОказУслуг)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Itog11.ОказУслуг dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
