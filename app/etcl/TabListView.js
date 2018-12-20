/*******************************************************************************
@title:테이블 목록 
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
Ext.define('fframe.app.dams.table.TabListView', {
    extend     : 'Ext.form.Panel'
//   ,xtype      : 'tabList'
   ,alias: 'widget.tabList'   
   ,controller : 'tabList'
   ,viewModel  : 'tabList'
   ,listeners  : { resize : 'setGridHeight', boxready:'comboLoad'}
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
         {xtype:'commCombo' , itemId:'TAB_COL_UCD' , bind :{value:'{CD}'} , listeners:{select:'codeExt'}}
        ,{xtype:'textfield' , name:'searchValue' , width:200 , emptyText:'검색어를 입력하세요'
             , bind :{value:'{searchValue}'}  , enableKeyEvents: true 
             , listeners:{afterrender:function(field) {field.focus();} , specialkey: 'searchBtn'}
         }
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
         ,forceFit: true
         ,columns    : {
             defaults: {style:'text-align:center' , align:'left' , editor:{xtype:'textfield'}}             
            ,items:   
             [
              {xtype:'rownumberer'}
             ,{text:'DB명'           , dataIndex:'DB_NM'      }
             ,{text:'소유자'         , dataIndex:'OWNER'      }
             ,{text:'테이블명'       , dataIndex:'TAB_NM'     }
             ,{text:'테이블한글명'   , dataIndex:'TAB_HNM'    }
             ,{text:'테이블설명'     , dataIndex:'TABL_DESC'  }
             ,{text:'등록일시'       , dataIndex:'REG_DTM'    }
             ,{text:'등록자'         , dataIndex:'REG_USR_ID' }
             ,{text:'변경일시'       , dataIndex:'UPD_DTM'    }
             ,{text:'변경자'         , dataIndex:'UPD_USR_ID' }
             ]
         }   
        ,bind:{store:'{tabList}'}
     }
   ]
});