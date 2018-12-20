/*******************************************************************************
@title:표준용어 추출 및 정합성 관리 
@description-start
 1. 메타테이블 정보 추출
   - 콤보박스에서 DB선택하면 DB접속정보를 코드 및 코드확장에서 가져온다
   - 추출버튼 클릭하면 그리드에 출력
 2. 비교기능
   - 추출된 테이블 정보와 현재 저장된 테이블 정보를 비교하여 변경내용을 표시
 3. 테이블정보삭제
   - 저장된 테이블 정보를 삭제한다
 4. 테이블정보 반영
   - 신규 및 변경 메타테이블정보를 저장한다
@description-end  
@developer:피승현
@progress-rate:100%
@update-history-start
-------------------------------------------------------------------------------
|   날짜   |수정자|내용
-------------------------------------------------------------------------------
|2017.11.30|피승현|최초개발
-------------------------------------------------------------------------------
@update-history-end
********************************************************************************/
Ext.define('fframe.app.dams.term.ExtTermListView', {
    extend     : 'Ext.form.Panel'
   ,xtype      : 'extTermList' 
   ,controller : 'extTermList'
   ,viewModel  : 'extTermList'
   ,listeners  : { resize : 'setGridHeight', boxready:'comboLoad'}
   //-------------------------------------------
   // titletoolbar
   //-------------------------------------------
   ,title : '표준용어 추출 및 정합성 관리'
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
         ,{xtype:'commCombo' , width:170 , itemId:'DB_CONN_CD' , bind :{value:'{DB_CONN_CD}'}, listeners:{select:'dbComboSel'}}
         ,{xtype:'component' , width:65  , html:['&nbsp;&nbsp;&nbsp;','DB유저']}             
         ,{xtype:'commCombo' , width:170 , itemId:'DB_USR_UCD' , bind :{value:'{DB_USR_UCD}'}, listeners:{select:'dbusrComboSel'}}
         ,{xtype:'commCombo' , width:170 , itemId:'TAB_COL_UCD' , bind :{value:'{TAB_COL_UCD}'} , listeners:{select:'tabComboSel'}}
         ,{xtype:'textfield' , name:'searchValue' , width:200 , emptyText:'검색어를 입력하세요'
              , bind :{value:'{searchValue}'}  , enableKeyEvents: true 
              , listeners:{afterrender:function(field) {field.focus();} , specialkey: 'searchBtn'}
          }
         ,'->'
         ,{xtype:'button' , text:'추출'           , handler:'extBtn' , iconCls:'x-fa fa-gift'}
         ,{xtype:'button' , text:'비교'           , handler:'cmpBtn' , iconCls:'x-fa fa-check-square'}
         ,{xtype:'button' , text:'삭제'           , handler:'tabDelBtn' , iconCls:'x-fa fa-remove'}
         ,{xtype:'button' , text:'반영'           , handler:'insBtn' , iconCls:'x-fa fa-sign-in'}
         ,{xtype:'button' , text:'조회'           , handler:'selBtn' , iconCls:'x-fa fa-sign-in'}
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
       ,columns    : {
           defaults: {style:'text-align:center' , align:'left' , editor:{xtype:'textfield'}}             
          ,items:   
           [
             {text:'컬럼명'         , dataIndex:'COL_NM'        }
            ,{text:'컬럼한글명'     , dataIndex:'COL_HNM'       }
            ,{text:'컬럼설명'       , dataIndex:'COL_DESC'      }
            ,{text:'컬럼약어한글명' , dataIndex:'COL_ABBR_HNM'  }
            ,{text:'데이터타입설명' , dataIndex:'DATA_TYPE_DESC'}
            ,{text:'컬럼상태코드'   , dataIndex:'COL_STS_CD'    }
            ,{text:'등록일시'       , dataIndex:'REG_DTM'       }
            ,{text:'등록자'         , dataIndex:'REG_USR_ID'    }
            ,{text:'변경일시'       , dataIndex:'UPD_DTM'       }
            ,{text:'변경자'         , dataIndex:'UPD_USR_ID'    }
           ]
       }
       
      ,bind:{store:'{extTermList}'}
    }
   ]
});
