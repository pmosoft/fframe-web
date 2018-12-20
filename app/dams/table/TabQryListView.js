/*******************************************************************************
@title:테이블 데이터 조회 
@description-start
 1. 테이블목록 조회
 2. 쿼리 데이터 조회
@description-end  
@developer:피승현
@progress-rate:50%
@update-history-start
-------------------------------------------------------------------------------
|   날짜   |수정자|내용
-------------------------------------------------------------------------------
|2018.01.06|피승현|최초개발
-------------------------------------------------------------------------------
@update-history-end
********************************************************************************/
Ext.define('fframe.app.dams.table.TabQryListView', {
    extend     : 'Ext.form.Panel'
   ,xtype      : 'tabQryList'
   ,alias: 'widget.tabQryList'   
   ,controller : 'tabQryList'
   ,viewModel  : 'tabQryList'
   ,listeners  : { boxready:'dbConnCombo'}
   //-------------------------------------------
   // titletoolbar
   //-------------------------------------------
   ,title : '테이블 데이터 조회'
   //,defaults: {
   //     bodyPadding: 10
   //     //,scrollable: true
   // } 
   //,margin: {top:0, left:10, right: 10, bottom:0}
   ,items :
    [
     {
        //------------------------------------------------------------------------
        //                              테이블 조회
        //------------------------------------------------------------------------
         xtype  : 'panel'
        ,title: '테이블명 조회'
        ,margin: {top:10, left:10, right: 10, bottom:10}
        ,border : true
        ,items  :
         [
          //--------------------------
          // toolbar
          //--------------------------
          {
              xtype  : 'toolbar'
             ,title: 'Panel 1'         
             ,height : 50
             ,margin: {top:0, left:10, right: 10, bottom:0}
             ,items  :
              [
                {xtype:'component' , html:['&nbsp;','DB선택','&nbsp;&nbsp;']}
               ,{xtype:'commCombo' , itemId:'DB_CONN_CD' , bind :{value:'{CD}'} , listeners:{select:'dbConnComboChg'}}
               ,{xtype:'textfield' , name:'DB_INFO' , width:250, bind :{value:'{dbInfo}'}}
               ,{xtype:'component' , html:['&nbsp;','테이블검색','&nbsp;&nbsp;']}             
               ,{xtype:'textfield' , name:'DB_INFO' , width:250, bind :{value:'{TAB_NM}'}
                   , emptyText:'검색어를 입력하세요' , enableKeyEvents: true 
                   , listeners:{afterrender:function(field) {field.focus();} , specialkey: 'tabSelBtn'}
                }
               ,'->'
               ,{xtype:'button' , text:'조회' , handler:'tabSelBtn' , iconCls:'x-fa fa-gift'}
              ]
          },{
              //--------------------------
              // grid
              //--------------------------
                  xtype      : 'grid'
                 ,reference  : 'tabGridRef'        
                 ,height     : 200 , frame: true , columnLines : true
                 ,viewConfig : {stripeRows:false} //,enableTextSelection: true,markDirty: false
                 ,margin: {top:0, left:10, right: 10, bottom:10}
                 ,listeners  : {
                      celldblclick : 'tabGridDblClick'
                  }
                 ,columns    : {
                      defaults: {style:'text-align:center' , align:'left'}             
                     ,items:   
                      [ 
                        {text:'DB명'         , dataIndex:'DB_NM'     , flex : 1}
                       ,{text:'소유자'       , dataIndex:'OWNER'     , flex : 1}             
                       ,{text:'테이블명'     , dataIndex:'TAB_NM'    , flex : 2}             
                       ,{text:'테이블한글명' , dataIndex:'TAB_HNM'   , flex : 3}             
                       ,{text:'건수'         , dataIndex:'ROW_CNT'   , flex : 1}
                       ,{text:'테이블설명'   , dataIndex:'TABL_DESC' , flex : 4}
                      ]
                 }
                ,bind:{store:'{tabGrid}'}
          }
         ]
     },{
      //------------------------------------------------------------------------
      //                          테이블 데이터 조회
      //------------------------------------------------------------------------
         xtype  : 'panel'
        ,title: '테이블 데이터 조회'
        ,margin: {top:10, left:10, right: 10, bottom:10}
        ,border : true
        ,items  :
         [
          {     
              xtype : 'panel'
             ,height : 100
             ,margin: {top:10, left:10, right: 10, bottom:10}
             ,layout: { type: 'vbox', align: 'stretch'}
             ,items : 
              [
                {xtype:'component' , html:['&nbsp;','쿼리','&nbsp;&nbsp;']}             
               ,{xtype:'textareafield' , name:'qry' ,flex :1 , bind :{value:'{qry}'}}
              ]
          },{
              xtype : 'toolbar'
             ,height : 50
             ,margin: {top:10, left:10, right: 10, bottom:10}
             ,items : 
              [
                {xtype:'component' ,bind : '조회건수:{qryCnt}'}
               ,'->'
               ,{xtype:'button' , text:'Insert추출' , handler:'selectInsertDataBtn' , iconCls:'x-fa fa-gift'}
               ,{xtype:'button' , text:'CSV추출' , handler:'csvExtBtn' , iconCls:'x-fa fa-gift'}
               ,{xtype:'button' , text:'엑셀다운' , handler:'excelDownBtn' , iconCls:'x-fa fa-download'}
               ,{xtype:'button' , text:'저장' , handler:'saveTabDataBtn' , iconCls:'x-fa fa-gift'}
               ,{xtype:'button' , text:'삭제' , handler:'deleteTabDataBtn' , iconCls:'x-fa fa-gift'}
               ,{xtype:'button' , text:'조회' , handler:'selectQryDataBtn' , iconCls:'x-fa fa-gift'}
              ]
             
          },{     
          //-------------------------------------------  
          // grid  
          //-------------------------------------------  
           
              xtype      : 'grid'  
             ,itemId     : 'qryGrid'           
             ,margin: {top:0, left:10, right: 10, bottom:10}
             ,plugins    : [{ptype:'gridexporter'}]                
             ,requires   : ['Ext.grid.selection.SpreadsheetModel' , 'Ext.grid.plugin.Clipboard']  
             ,height     : 350 , frame: true , columnLines : false  
             ,selModel   : {type:'spreadsheet' , columnSelect:true , checkboxSelect:true , pruneRemoved:false , extensible:'y'}           
             ,plugins    : ['clipboard' , 'selectionreplicator' , 'cellediting']  //{ptype:'cellediting',clicksToEdit:2}                  
             ,viewConfig : {stripeRows:true} //,enableTextSelection: true,markDirty: false  
             //,resizable  : true  
             ,bind:{store:'{qryGrid}'}  
          },{     
              xtype : 'panel'
             ,height : 100
             ,margin: {top:10, left:10, right: 10, bottom:10}
             ,layout: { type: 'vbox', align: 'stretch'}
             ,items : 
              [
                {xtype:'component' , html:['&nbsp;','정보','&nbsp;&nbsp;']}             
               ,{xtype:'textareafield' , name:'info' ,flex :1 , bind :{value:'{info}'}}
              ]
          }
         ]
     }    
   ]
});
