/*******************************************************************************
@title:표준용어 관리 
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
|2017.10.01|피승현|최초개발
|2017.10.10|피승현|주석정비
-------------------------------------------------------------------------------
@update-history-end
********************************************************************************/
Ext.define('fframe.app.dams.term.TermListView', {
    extend     : 'Ext.form.Panel'
   ,xtype      : 'termList'
   ,controller : 'termList'
   ,viewModel  : 'termList'
   ,listeners  : { resize : 'setGridHeight', boxready:'comboLoad'}
   //-------------------------------------------
   // titletoolbar
   //-------------------------------------------
   ,title : '표준용어 관리'
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
          {xtype:'component' , width:70 , html:['&nbsp;','검색조건','&nbsp;&nbsp;']}             
         ,{xtype:'commCombo' , width:200 , itemId:'TERM_SRCH_UCD' , bind :{value:'{TERM_SRCH_UCD}'}}
         ,{xtype:'textfield' , name:'searchValue' , width:200 , emptyText:'검색어를 입력하세요'
                , bind :{value:'{searchValue}'}  , enableKeyEvents: true 
                , listeners:{afterrender:function(field) {field.focus();} , specialkey: 'searchBtn'}
          }
         ,{xtype:'component' , width:80, html:['&nbsp;&nbsp;&nbsp;&nbsp;','승인상태','&nbsp;&nbsp;']}             
         ,{xtype:'commCombo' , width:200, itemId:'COL_STS_UCD' , bind :{value:'{COL_STS_UCD}'}}
         ,'->'
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
       
      ,bind:{store:'{termList}'}
    }
   ]
});
