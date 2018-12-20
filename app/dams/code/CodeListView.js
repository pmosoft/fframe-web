Ext.define('fframe.app.dams.code.CodeListView', {
     extend     : 'Ext.form.Panel' 
    ,xtype      : 'codeList' 
    ,controller : 'codeList' 
    ,viewModel  : 'codeList'
    ,listeners  : {resize : 'setGridHeight'}
    //-------------------------------------------
    // Title
    //-------------------------------------------
    ,title : '코드 조회'
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
             {xtype:'combo' , name:'searchCondition' , width:150 , displayField:'key' , valueField:'value' 
                            , editable:false , queryMode:'local'
                            , bind:{value:'{searchKeyCombo}' , store:'{searchCombo}'}
             }
            ,{xtype:'textfield' , name:'searchValue' , width:200 , emptyText:'검색어를 입력하세요'
                                , bind :{value:'{searchValue}'}  , enableKeyEvents: true 
                                , listeners:{afterrender:function(field) {field.focus();} , specialkey: 'searchBtn'}
             }
            ,{xtype:'component' , anchor:'100%' , html:['&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' , '상태' , '&nbsp;&nbsp;']}
            ,{xtype:'combo' , name:'codeStatus' , width:90 , displayField:'key' , valueField:'value'
                            , editable:false , queryMode:'local'
                            , bind:{value:'{cdStsCd}' , store:'{codeStsCombo}'}
             }
            //,{text:'Rows'    , enableToggle:true , toggleHandler:'toggleRowSelect'    , pressed:false}
            //,{text:'Cells'   , enableToggle:true , toggleHandler:'toggleCellSelect'   , pressed:true}
            //,{text:'Columns' , enableToggle:true , toggleHandler:'toggleColumnSelect' , pressed:false}          
            ,'->'
            ,{xtype:'button' , text:'엑셀' , handler:'excelBtn' , iconCls:'x-fa fa-gift'}
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
            {text:'코드그룹'     , dataIndex:'CD_ID_GRP_NM' , style:'text-align:center' , align:'center' , width:100}
           ,{text:'코드ID명'     , dataIndex:'CD_ID_NM'     , style:'text-align:center' , align:'center' , width:120}
           ,{text:'코드ID한글명' , dataIndex:'CD_ID_HNM'    , style:'text-align:center' , align:'center' , width:140}
           ,{text:'코드'         , dataIndex:'CD'           , style:'text-align:center' , align:'center' , width:60 }
           ,{text:'코드한글명'   , dataIndex:'CD_HNM'       , style:'text-align:center' , align:'left'   , width:140}
           ,{text:'코드설명'     , dataIndex:'CD_DESC'      , style:'text-align:center' , align:'left'   , width:200}
           ,{text:'코드명'       , dataIndex:'CD_NM'        , style:'text-align:center' , align:'left'   , width:100}
           ,{text:'코드상태코드' , dataIndex:'CD_STS_CD'    , style:'text-align:center' , align:'left'   , hidden:true}
           ,{text:'코드상태'     , dataIndex:'CD_STS_CD_NM' , style:'text-align:center' , align:'center' , width:100}
           ,{text:'코드유형코드' , dataIndex:'CD_TY_CD'     , style:'text-align:center' , align:'left'   , hidden:true}
           ,{text:'코드유형'     , dataIndex:'CD_TY_CD_NM'  , style:'text-align:center' , align:'center' , width:100}
           ,{text:'등록일시'     , dataIndex:'REG_DTM'      , style:'text-align:center' , flex:1, hidden:true}
           ,{text:'등록자'       , dataIndex:'REG_USR_ID'   , style:'text-align:center' , flex:1, hidden:true}
           ,{text:'변경일시'     , dataIndex:'UPD_DTM'      , style:'text-align:center' , flex:1, hidden:true}
           ,{text:'변경자'       , dataIndex:'UPD_USR_ID'   , style:'text-align:center' , flex:1, hidden:true}
          ]
         //,forceFit: true           
         ,bind:{store:'{codeList}'}
       }
     ]
});