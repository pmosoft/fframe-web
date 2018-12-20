Ext.define('fframe.app.dams.code.CodeExtListView', {
     extend     : 'Ext.form.Panel'
    ,xtype      : 'codeExtList'
    ,controller : 'codeExtList'
    ,viewModel  : 'codeExtList'
    ,listeners  : { resize : 'setGridHeight' }
    //-------------------------------------------
    // Title
    //-------------------------------------------
    ,title : '코드확장 조회'
    ,items :
     [
      //-------------------------------------------
      // Event
      //-------------------------------------------
      {
          xtype : 'toolbar'
         ,height : 50
         ,items : 
          [
           //,{xtype:'commCombo', id:'CD_UCD', width:150, value:'CD_ID_HNM'}
            {xtype:'combo' , name:'searchCondition' , width:150 , displayField:'key' , valueField:'value' 
                           , editable:false , queryMode:'local'
                           , bind:{value:'{searchKeyCombo}' , store:'{searchCombo}'}
            }
           ,{xtype:'textfield' , name:'searchValue' , width:200 , emptyText:'검색어를 입력하세요'
                               , bind :{value:'{searchValue}'}  , enableKeyEvents: true 
                               , listeners:{afterrender:function(field) {field.focus();} , specialkey: 'searchBtn'}
            }
           ,'->'
           ,{xtype:'button' , text:'조회' , handler:'selBtn' , iconCls:'x-fa fa-gift'}
          ] 
      }
      //-------------------------------------------
      // Grid
      //-------------------------------------------
      ,{
          xtype      : 'grid'
         ,reference  : 'codeExtListGrid'
         ,plugins    : [{ptype:'gridexporter'}]              
         ,requires   : ['Ext.grid.selection.SpreadsheetModel' , 'Ext.grid.plugin.Clipboard']
         ,height     : 150 , frame: true , columnLines : true
         ,selModel   : {type:'spreadsheet' , columnSelect:true , checkboxSelect:true , pruneRemoved:false , extensible:'y'}         
         ,plugins    : ['clipboard' , 'selectionreplicator' , 'cellediting']  //{ptype:'cellediting',clicksToEdit:2}                
         ,viewConfig : {stripeRows:false} //,enableTextSelection: true,markDirty: false
         ,autoScroll : true
         ,columns    :
          [
            {text:'코드ID' , dataIndex:'CD_ID_NM'       , style:'text-align:center' , align:'left' , width:120}
           ,{text:'코드'   , dataIndex:'CD'             , style:'text-align:center' , align:'left' , width:50}
           ,{text:'키1'    , dataIndex:'CD_PARAM1_DESC' , style:'text-align:center' , align:'left' , flex:1}
           ,{text:'값1'    , dataIndex:'CD_PARAM1'      , style:'text-align:center' , align:'left' , flex:1}
           ,{text:'키2'    , dataIndex:'CD_PARAM2_DESC' , style:'text-align:center' , align:'left' , flex:1}
           ,{text:'값2'    , dataIndex:'CD_PARAM2'      , style:'text-align:center' , align:'left' , flex:1}
           ,{text:'키3'    , dataIndex:'CD_PARAM3_DESC' , style:'text-align:center' , align:'left' , flex:1}
           ,{text:'값3'    , dataIndex:'CD_PARAM3'      , style:'text-align:center' , align:'left' , flex:1}
           ,{text:'키4'    , dataIndex:'CD_PARAM4_DESC' , style:'text-align:center' , align:'left' , flex:1}
           ,{text:'값4'    , dataIndex:'CD_PARAM4'      , style:'text-align:center' , align:'left' , flex:1}
           ,{text:'키5'    , dataIndex:'CD_PARAM5_DESC' , style:'text-align:center' , align:'left' , flex:1}
           ,{text:'값5'    , dataIndex:'CD_PARAM5'      , style:'text-align:center' , align:'left' , flex:1}
           ,{text:'키6'    , dataIndex:'CD_PARAM6_DESC' , style:'text-align:center' , align:'left' , flex:1}
           ,{text:'값6'    , dataIndex:'CD_PARAM6'      , style:'text-align:center' , align:'left' , flex:1}
           ,{text:'키7'    , dataIndex:'CD_PARAM7_DESC' , style:'text-align:center' , align:'left' , flex:1}
           ,{text:'값7'    , dataIndex:'CD_PARAM7'      , style:'text-align:center' , align:'left' , flex:1}
           ,{text:'키8'    , dataIndex:'CD_PARAM8_DESC' , style:'text-align:center' , align:'left' , flex:1}
           ,{text:'값8'    , dataIndex:'CD_PARAM8'      , style:'text-align:center' , align:'left' , flex:1}
           ,{text:'키9'    , dataIndex:'CD_PARAM9_DESC' , style:'text-align:center' , align:'left' , flex:1}
           ,{text:'값9'    , dataIndex:'CD_PARAM9'      , style:'text-align:center' , align:'left' , flex:1}
          ]
         ,bind:{store:'{codeExtList}'}
      }
     ]
});
