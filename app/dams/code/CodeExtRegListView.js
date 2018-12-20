/*******************************************************************************
@title:코드확장 등록 목록 이벤트처리 
@description-start
 1. 저장기능
   - 코드를 엑셀을 통해서 업로드후 저장
   - 신규버튼 클릭후 그리드 입력후 저장
 2. 수정기능
   - 그리드상에서 직접수정후 저장
   - 엑셀 붙여넣기후 저장
 3. 엑셀다운로드 
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
Ext.define('fframe.app.dams.code.CodeExtRegListView', {
     extend     : 'Ext.form.Panel'
    ,xtype      : 'codeExtRegList'
    ,controller : 'codeExtRegList'
    ,viewModel  : 'codeExtRegList'
    ,listeners  : { resize : 'setGridHeight' , boxready:'comboLoad'}
    //-------------------------------------------
    // Title
    //-------------------------------------------
    ,title : '코드확장 등록 조회'
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
            {xtype:'commCombo' , itemId:'CD_UCD' , bind :{value:'{CD}'} , listeners:{select:'codeExt'}} 
           ,{xtype:'textfield' , name:'searchValue' , width:200 , emptyText:'검색어를 입력하세요'
                               , bind :{value:'{searchValue}'}  , enableKeyEvents: true 
                               , listeners:{afterrender:function(field) {field.focus();} , specialkey: 'searchBtn'}
            }
           ,{xtype:'component' , anchor:'100%' , html:['&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' , '상태' , '&nbsp;&nbsp;']}
           ,{xtype:'combo' , name:'codeStatus' , width:90 , displayField:'key' , valueField:'value'
                           , editable:false , queryMode:'local'
                           , bind:{value:'{cdStsCd}' , store:'{codeStsCombo}'}
            }
           ,'->'
           ,{xtype:'filefield' , buttonText:'업로드' , name:'uploadFile' , buttonOnly:false , allowBlank:false , buttonConfig:{iconCls:'fa-upload'}
                               , listeners:{afterrender:'multiple' , change:'excelUpload'}
            }                   
           ,{xtype:'button' , text:'신규' , handler:'initBtn', iconCls:'x-fa fa-save'}
           ,{xtype:'button' , text:'저장' , handler:'saveBtn', iconCls:'x-fa fa-save'}
           ,{xtype:'button' , text:'삭제' , handler:'delBtn', iconCls:'x-fa fa-remove'}
           ,{xtype:'button' , text:'다운' , handler:'excelDownBtn' , iconCls:'x-fa fa-download'}
           ,{xtype:'button' , text:'조회' , handler:'selBtn' , iconCls:'x-fa fa-gift'}
          ] 
      }
      //-------------------------------------------
      // Grid
      //-------------------------------------------
      ,{
          xtype      : 'grid'
         ,reference  : 'codeExtRegListGrid'
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
               {text:'코드ID'    , dataIndex:'CD_ID_NM'      }
              ,{text:'코드'      , dataIndex:'CD'            }
              ,{text:'인자1설명' , dataIndex:'CD_PARAM1_DESC'}
              ,{text:'인자1'     , dataIndex:'CD_PARAM1'     }
              ,{text:'인자2설명' , dataIndex:'CD_PARAM2_DESC'}
              ,{text:'인자2'     , dataIndex:'CD_PARAM2'     }
              ,{text:'인자3설명' , dataIndex:'CD_PARAM3_DESC'}
              ,{text:'인자3'     , dataIndex:'CD_PARAM3'     }
              ,{text:'인자4설명' , dataIndex:'CD_PARAM4_DESC'}
              ,{text:'인자4'     , dataIndex:'CD_PARAM4'     }
              ,{text:'인자5설명' , dataIndex:'CD_PARAM5_DESC'}
              ,{text:'인자5'     , dataIndex:'CD_PARAM5'     }
              ,{text:'인자6설명' , dataIndex:'CD_PARAM6_DESC'}
              ,{text:'인자6'     , dataIndex:'CD_PARAM6'     }
              ,{text:'인자7설명' , dataIndex:'CD_PARAM7_DESC'}
              ,{text:'인자7'     , dataIndex:'CD_PARAM7'     }
              ,{text:'인자8설명' , dataIndex:'CD_PARAM8_DESC'}
              ,{text:'인자8'     , dataIndex:'CD_PARAM8'     }
              ,{text:'인자9설명' , dataIndex:'CD_PARAM9_DESC'}
              ,{text:'인자9'     , dataIndex:'CD_PARAM9'     }
              ,{text:'등록일시'  , dataIndex:'REG_DTM'       }
              ,{text:'등록자'    , dataIndex:'REG_USR_ID'    }
              ,{text:'변경일시'  , dataIndex:'UPD_DTM'       }
              ,{text:'변경자'    , dataIndex:'UPD_USR_ID'    }
             ]
         }
         ,bind:{store:'{codeExtRegList}'}
      }
     ]
});