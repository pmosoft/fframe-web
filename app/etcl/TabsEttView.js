Ext.define('fframe.app.etcl.TabsEttiew', {
    extend     : 'Ext.form.Panel'
   ,xtype      : 'tabsEtt'
   //,controller : 'tabsEtt'
   //,viewModel  : 'tabsEtt' 
   //-------------------------------------------
   // titletoolbar
   //-------------------------------------------
   ,title : '1단계 : 소스-타겟 테이블 검색 패널'
   ,layout: { type: 'vbox', align: 'stretch'}   
   ,items : 
    [
      //-------------------------------------------
      // toolbar
      //-------------------------------------------
      {
         xtype : 'toolbar'
        ,height : 50           
        ,items : 
         [
           {
               xtype : 'combo'
              ,name : 'searchCondition'
              ,editable : false
              ,displayField : 'key'
              ,valueField : 'value'
              ,queryMode : 'local'
              // value : 'USR_NM'
              ,bind : { value : '{searchKeyCombo}'}
              ,store : {
                   fields : ['key','value'] 
                  ,data : 
                   [
                     {key : '이름'   , value : 'USR_NM'}
                    ,{key : '아이디' , value : 'USR_ID'}
                   ]
               }
           }
           
        ] 
      }
      ,{ xtype      : 'tabsEtt01' }
   ]
});
