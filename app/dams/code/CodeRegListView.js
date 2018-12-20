/*******************************************************************************
@title:코드 등록 목록 
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
Ext.define('fframe.app.dams.code.CodeRegListView', {
    extend     : 'Ext.form.Panel'
   ,xtype      : 'codeRegList'
   ,controller : 'codeRegList'
   ,viewModel  : 'codeRegList'
   ,listeners  : { resize : 'setGridHeight' }
   //-------------------------------------------
   // Title
   //-------------------------------------------
   ,title : '코드 등록 조회'
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
           {xtype:'commCombo', id:'CD_UCD', width:150}
//           {xtype:'combo' , name:'searchCondition' , width:150 , displayField:'key' , valueField:'value' 
//                          , editable:false , queryMode:'local'
//                          , bind:{value:'{searchKeyCombo}' , store:'{searchCombo}'}
//           }
          ,{xtype:'textfield' , name:'searchValue' , width:200 , emptyText:'검색어를 입력하세요'
                              , bind :{value:'{searchValue}'}  , enableKeyEvents: true 
                              , listeners:{afterrender:function(field) {field.focus();} , specialkey: 'searchBtn'}
           }
          ,{xtype:'component' , anchor:'100%' , html:['&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' , '상태' , '&nbsp;&nbsp;']}
//          ,{xtype:'commCombo', id:'CD_STS_CD'}
          ,{xtype:'combo' , name:'codeStatus' , width:90 , displayField:'key' , valueField:'value'
                          , editable:false , queryMode:'local'
                          , bind:{value:'{cdStsCd}' , store:'{codeStsCombo}'}
           }
          //,{text:'Rows'    , enableToggle:true , toggleHandler:'toggleRowSelect'    , pressed:false}
          //,{text:'Cells'   , enableToggle:true , toggleHandler:'toggleCellSelect'   , pressed:true}
          //,{text:'Columns' , enableToggle:true , toggleHandler:'toggleColumnSelect' , pressed:false}          
          ,'->'
          ,{xtype:'filefield' , buttonText:'업로드' , name:'uploadFile' , buttonOnly:false , allowBlank:false , buttonConfig:{iconCls:'fa-upload'}
                              , listeners:{afterrender:'multiple' , change:'excelUpload'}
           }
          ,{xtype:'button' , text:'신규' , handler:'initBtn', iconCls:'x-fa fa-plus-square'}
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
        ,plugins    : [{ptype:'gridexporter'}]              
        ,requires   : ['Ext.grid.selection.SpreadsheetModel' , 'Ext.grid.plugin.Clipboard']
        ,height     : 150 , frame: true , columnLines : true
        ,selModel   : {type:'spreadsheet' , columnSelect:true , checkboxSelect:true , pruneRemoved:false , extensible:'y'}         
        ,plugins    : ['clipboard' , 'selectionreplicator' , 'cellediting']  //{ptype:'cellediting',clicksToEdit:2}                
        ,viewConfig : {stripeRows:false} //,enableTextSelection: true,markDirty: false
        ,columns    :
         [
           {text:'코드ID명'     , dataIndex:'CD_ID_NM'     , style:'text-align:center' , align:'left' , width:120 , editor:{xtype:'textfield'}}
          ,{text:'코드ID한글명' , dataIndex:'CD_ID_HNM'    , style:'text-align:center' , align:'left' , width:140, editor:{xtype:'textfield'}}
          ,{text:'코드그룹'     , dataIndex:'CD_ID_GRP_NM' , style:'text-align:center' , align:'left' , width:100, editor:{xtype:'textfield'}}
          ,{text:'코드'         , dataIndex:'CD'           , style:'text-align:center' , align:'left' , width:60 , editor:{xtype:'textfield'}}
          ,{text:'코드명'       , dataIndex:'CD_NM'        , style:'text-align:center' , align:'left' , flex:1   , editor:{xtype:'textfield'}}
          ,{text:'코드한글명'   , dataIndex:'CD_HNM'       , style:'text-align:center' , align:'left' , flex:1   , editor:{xtype:'textfield'}}
          ,{text:'코드설명'     , dataIndex:'CD_DESC'      , style:'text-align:center' , align:'left' , flex:1   , editor:{xtype:'textfield'}}
          ,{text:'코드유형코드' , dataIndex:'CD_TY_CD'     , style:'text-align:center' , align:'center' , editor:{xtype:'textfield'}}
          ,{text:'코드상태코드' , dataIndex:'CD_STS_CD'    , style:'text-align:center' , align:'center' , editor:{xtype:'textfield'}}
          ,{text:'등록일시'     , dataIndex:'REG_DTM'      , style:'text-align:center' , align:'center', flex:1}
          ,{text:'등록자'       , dataIndex:'REG_USR_ID'   , style:'text-align:center' , align:'left', flex:1}
          ,{text:'변경일시'     , dataIndex:'UPD_DTM'      , style:'text-align:center' , align:'center', flex:1}
          ,{text:'변경자'       , dataIndex:'UPD_USR_ID'   , style:'text-align:center' , align:'left', flex:1}
         ]
        ,bind:{store:'{codeRegList}'}
     }
    ]
});