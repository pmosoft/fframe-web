Ext.define('fframe.app.comm.CommCombo',{
    extend       : 'Ext.form.field.ComboBox'
   ,alias        : 'widget.commCombo'
   ,editable     : false
   //,forceSelection: true
   ,queryMode    : 'local'
   ,displayField : 'CD_HNM'
   ,valueField   : 'CD'
   ,store        : { type : 'commCombo'}       
   //,listeners  : { boxready:'testBtn'}       
});
