/*******************************************************************************
@title:테이블 컬럼 목록 
@description-start
@description-end  
@developer:피승현
@progress-rate:100%
@update-history-start
-------------------------------------------------------------------------------
|   날짜   |수정자|내용
-------------------------------------------------------------------------------
|2017.10.01|피승현|최초개발
|2017.10.10|피승현|주석정비
-------------------------------------------------------------------------------
@update-history-end
********************************************************************************/
Ext.define('fframe.app.dams.table.TabColListView', {
    extend     : 'Ext.form.Panel' 
//   ,xtype      : 'tabColList'
   ,alias: 'widget.tabColList'   
   ,controller : 'tabColList' 
   ,viewModel  : 'tabColList'
   ,listeners  : { resize : 'setGridHeight', boxready:'comboLoad'}
//    ,initComponent: function() {
//        this.store = "SomeStore";
//
//        this.dockedItems = [{
//             xtype: 'toolbar',
//            dock: 'top',
//            items: [{
//                xtype: 'exporterbutton'
//            }];
//        this.columns = [/* YOUR COLUMNS */];
//        this.callParent(arguments);
//    }    
    
    //-------------------------------------------
    // titletoolbar
    //-------------------------------------------
    ,title : '테이블컬럼 조회'
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
           {xtype:'component' , width:40  , html:['&nbsp;','DB명']}             
          ,{xtype:'commCombo' , width:170 , itemId:'DB_CONN_CD' , bind :{value:'{DB_CONN_CD}'}, listeners:{select:'dbComboSel',afterrender:function(field) {field.focus();} , specialkey: 'searchBtn'}}
          ,{xtype:'component' , width:65  , html:['&nbsp;&nbsp;&nbsp;','DB유저']}             
          ,{xtype:'commCombo' , width:170 , itemId:'DB_USR_UCD' , bind :{value:'{DB_USR_UCD}'}, listeners:{select:'dbusrComboSel',afterrender:function(field) {field.focus();} , specialkey: 'searchBtn'}}
          ,{xtype:'commCombo' , width:170 , itemId:'TAB_COL_UCD' , bind :{value:'{TAB_COL_UCD}'} , listeners:{select:'tabComboSel',afterrender:function(field) {field.focus();} , specialkey: 'searchBtn'}}
          ,{xtype:'textfield' , name:'searchValue' , width:200 , emptyText:'검색어를 입력하세요'
               , bind :{value:'{searchValue}'}  , enableKeyEvents: true 
               , listeners:{afterrender:function(field) {field.focus();} , specialkey: 'searchBtn'}
           }
          ,{xtype:'checkboxfield', id: 'tabChk', boxLabel: '테이블단위', listeners:{afterrender:function(field) {field.focus();} , specialkey: 'searchBtn'}}          
         ,'->'
         ,{xtype:'button' , text:'조회' , handler:'selBtn' , iconCls: 'x-fa fa-gift'}
        ] 
      }
      
      //-------------------------------------------
      // grid
      //-------------------------------------------
      ,{
           xtype      : 'grid'
          ,plugins    : [{ptype:'gridexporter'}]              
          ,requires   : ['Ext.grid.selection.SpreadsheetModel' , 'Ext.grid.plugin.Clipboard']
          ,height     : 150 , frame: true , columnLines : true
          ,selModel   : {type:'spreadsheet' , columnSelect:true , checkboxSelect:true , pruneRemoved:false , extensible:'y'}         
          ,plugins    : ['clipboard' , 'selectionreplicator' , 'cellediting']  //{ptype:'cellediting',clicksToEdit:2}                
          ,viewConfig : {stripeRows:false} //,enableTextSelection: true,markDirty: false
          //,resizable  : true
          ,columns    : {
              defaults: {style:'text-align:center' , align:'left' , editor:{xtype:'textfield'}}             
             ,items:   
              [
                {text:'DB명'           , dataIndex:'DB_NM'          , width:80  , align:'center'}
               ,{text:'소유자'         , dataIndex:'OWNER'          , width:80  , align:'center'}
               ,{text:'테이블명'       , dataIndex:'TAB_NM'         , width:150}
               ,{text:'테이블한글명'   , dataIndex:'TAB_HNM'        , width:150}
               ,{text:'순번'           , dataIndex:'COL_ID'         , width:50  , align:'center'}
               ,{text:'컬럼명'         , dataIndex:'COL_NM'         , width:150}
               ,{text:'컬럼한글명'     , dataIndex:'COL_HNM'        , width:150}
               ,{text:'데이터타입설명' , dataIndex:'DATA_TYPE_DESC' }
               ,{text:'NULL'           , dataIndex:'NULLABLE'       , width:50 }
               ,{text:'PK'             , dataIndex:'PK'             , width:40 }
               ,{text:'데이터타입명'   , dataIndex:'DATA_TYPE_NM'   , hidden:true}
               ,{text:'길이'           , dataIndex:'LEN'            , hidden:true}
               ,{text:'소수점수'       , dataIndex:'DECIMAL_CNT'    , hidden:true}
               ,{text:'컬럼설명'       , dataIndex:'COL_DESC'       , width:400 }
               ,{text:'등록일시'       , dataIndex:'REG_DTM'        , hidden:true}
               ,{text:'등록자'         , dataIndex:'REG_USR_ID'     , hidden:true}
               ,{text:'변경일시'       , dataIndex:'UPD_DTM'        , hidden:true}
               ,{text:'변경자'         , dataIndex:'UPD_USR_ID'     , hidden:true}
              ]
          }   
         ,bind:{store:'{tabColList}'}
     }
    ]
});