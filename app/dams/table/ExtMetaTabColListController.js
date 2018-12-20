Ext.define('fframe.app.dams.table.ExtMetaTabColListController', {
     extend : 'Ext.app.ViewController'
    ,alias : 'controller.extMetaTabColList'
        
    /**********************************************************
     * Main Event
     *********************************************************/    

    /****************
     * 코드로드
     ****************/    
    ,comboLoad : function(obj){
        var view = this.getView(); var viewModel = view.getViewModel(); var store = viewModel.getStore(view['xtype']);
        var combo = view.down("#DB_CONN_CD");
        combo.store.getProxy().setExtraParam("CD_ID_NM",combo.itemId);
        combo.getStore().load({
            callback : function(data,result,success){
                if(success) {
                    result = Ext.JSON.decode(result._response.responseText);
                    data = result['data'];
                    //combo.setValue(data[0].CD);                    
                    for (var i = 0; i < data.length; i++) {
                        if(data[i].CD == combo.value) {
                            viewModel.set("CD_ID_NM"  ,data[i].CD_ID_NM);
                            viewModel.set("CD"        ,data[i].CD);
                            viewModel.set("dbInfo"    ,data[i].CD_DESC);
                            viewModel.set("datasource",data[i].CD_PARAM1);
                            viewModel.set("dbDriver"  ,data[i].CD_PARAM2);
                            viewModel.set("dbConn"    ,data[i].CD_PARAM3);
                            viewModel.set("dbUser"    ,data[i].CD_PARAM4);
                            viewModel.set("dbPassword",data[i].CD_PARAM5);
                            viewModel.set("dbType"    ,data[i].CD_PARAM6);
                            viewModel.set("dbOwner"   ,data[i].CD_PARAM7);
                        }
                    }                    
                }
            }
        })
     }﻿        
        
    /****************
     * 코드확장 조회
     ****************/    
    ,codeExt : function(obj) {
        var view = this.getView(); var viewModel = view.getViewModel();
        var store = viewModel.getStore(view['xtype']);
        var combo = view.down("#DB_CONN_CD");
        var records = combo.store.getRange(); 
        var j = 0;
        console.log("combo.value="+combo.value);
        for (var i = 0; i < records.length; i++) {
            if(records[i].data.CD == combo.value) {
                viewModel.set("CD_ID_NM"  ,records[i].data.CD_ID_NM);
                viewModel.set("CD"        ,records[i].data.CD);
                viewModel.set("dbInfo"    ,records[i].data.CD_DESC);
                viewModel.set("datasource",records[i].data.CD_PARAM1);
                viewModel.set("dbDriver"  ,records[i].data.CD_PARAM2);
                viewModel.set("dbConn"    ,records[i].data.CD_PARAM3);
                viewModel.set("dbUser"    ,records[i].data.CD_PARAM4);
                viewModel.set("dbPassword",records[i].data.CD_PARAM5);
                viewModel.set("dbType"    ,records[i].data.CD_PARAM6);
                viewModel.set("dbOwner"   ,records[i].data.CD_PARAM7);
                viewModel.set("searchKeyCombo" ,records[i].data.CD_NM);
                
            }
        }
        //console.log("commCombo.store.getAt(0).get('value')"+commCombo.store.getAt(0).get('value'));
     }
        
    /*********
     * 추출
     *********/    
    ,extBtn : function(btn) {
    	var view = this.getView(); var viewModel = view.getViewModel(); var store = viewModel.getStore(view['xtype']);
        console.log("view['xtype']="+view['xtype']);
        store.proxy.setUrl("/dams/table/selectExtractMetaTabColList");
        
    	store.getProxy().setExtraParam("CD_ID_NM"  ,viewModel.data.CD_ID_NM  );
        store.getProxy().setExtraParam("CD"        ,viewModel.data.CD        );
        store.getProxy().setExtraParam("dbInfo"    ,viewModel.data.dbInfo    );
        store.getProxy().setExtraParam("datasource",viewModel.data.datasource);
        store.getProxy().setExtraParam("dbDriver"  ,viewModel.data.dbDriver  );
        store.getProxy().setExtraParam("dbConn"    ,viewModel.data.dbConn    );
        store.getProxy().setExtraParam("dbUser"    ,viewModel.data.dbUser    );
        store.getProxy().setExtraParam("dbPassword",viewModel.data.dbPassword);
        store.getProxy().setExtraParam("dbType"    ,viewModel.data.dbType);
        store.getProxy().setExtraParam("dbOwner"   ,viewModel.data.dbOwner);
        store.getProxy().setExtraParam("TAB_NM"   ,viewModel.data.TAB_NM);
        store.load({
            callback : function(data){
                console.log(data);
            }
        });
     }

    /*********
     * 비교
     *********/    
    ,cmpBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel(); var store = viewModel.getStore(view['xtype']);
        store.proxy.setUrl("/dams/table/selectCmpTabColList");
        store.getProxy().setExtraParam("CD_ID_NM"  ,viewModel.data.CD_ID_NM  );
        store.getProxy().setExtraParam("CD"        ,viewModel.data.CD        );
        store.getProxy().setExtraParam("dbInfo"    ,viewModel.data.dbInfo    );
        store.getProxy().setExtraParam("datasource",viewModel.data.datasource);
        store.getProxy().setExtraParam("dbDriver"  ,viewModel.data.dbDriver  );
        store.getProxy().setExtraParam("dbConn"    ,viewModel.data.dbConn    );
        store.getProxy().setExtraParam("dbUser"    ,viewModel.data.dbUser    );
        store.getProxy().setExtraParam("dbPassword",viewModel.data.dbPassword);
        store.getProxy().setExtraParam("dbType"    ,viewModel.data.dbType);
        store.getProxy().setExtraParam("dbOwner"   ,viewModel.data.dbOwner);
        store.load();
     }

    /******************
     * 테이블정보삭제
     ******************/    
    ,tabDelBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();
        var params = viewModel.getData();
        var grid = btn.up("extMetaTabColList").down("grid");
        console.log("grid="+grid);
        
        //var record = grid.getSelectionModel().getSelected();        
        //console.log("record="+record);
        
        var sel = new Array();
        var records = grid.getSelectionModel().getSelection();
        console.log("records="+records.length);

        var datar = new Array();
        var jsonDataEncode = "";
        for (var i = 0; i < records.length; i++) {
            datar.push(records[i].data);
        }
        jsonDataEncode = Ext.util.JSON.encode(datar);

        console.log("jsonDataEncode="+jsonDataEncode);
        
        
        //console.log("records 1="+records[1].get('TAB_NM'));
        
        //for(int i = 0; i < records.length; i++){
        //  sel.push(records[i].data.id);
        //  console.log("i="+i);
        //}        
        
        var record = grid.getStore().getAt(1);     // 레코드의 Row를 가져온다.
        //var fieldName = grid.getColumnModel().getDataIndex(1);  // 컬럼의 필드명을 가져온다.
        //var data = record.get(fieldName);      // 컬럼의 데이터를 가져온다.
        console.log("record.data="+record.data);
        
        console.log("record.data.TAB_NM="+record.data.TAB_NM);
        console.log("record.get="+record.get('TAB_NM'));
        
        console.log("record.data="+record.data);
        
        //console.log("fieldName="+fieldName);
        //console.log("data="+data);
        //var colcnt = grid.getColumnModel().getColumnCount();
        //console.log("colcnt="+colcnt);
        
        //Ext.Ajax.request({
        //    url: 'YOUR_URL',
        //    params: { 
        //       gridData: Ext.util.JSON.encode(gridData)
        //    }
        //});        

        Ext.Ajax.request({
             url : '/dams/table/deleteTabCol'
            ,method : 'post'
            //,params : { data:"[{aa:11,bb:22},{aa:1,bb:22}]"}
            ,params : { data:jsonDataEncode}
            //,params : { aa:record.data,bb:"22"}                    
            ,success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    //Ext.Msg.alert("알림",result['usrMsg']);
                    Ext.toast({  html:result['usrMsg'],title:'알림',width: 200,align:'t',timeout: 500});
                    //this.cmpBtn();
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    //Ext.Msg.alert("알림",result['errSysMsg']);
                    return;
                }
                
            }
        })     

        
//        var view = this.getView(); 
//        var viewModel = view.getViewModel();
//        //var store = viewModel.getStore('DelTabColList');
//        var store = viewModel.getStore('extMetaTabColList');
//        //store.load();
//        store.sync();        
     
     }
    
    /*********
     * 반영
     ********/    
    ,insBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();
        var params = viewModel.getData();
        
        Ext.Ajax.request({
            url : '/dams/table/insertCmpTabColList',
            method : 'post',
            params : params,
            success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    //Ext.Msg.alert("알림",result['usrMsg']);
                    Ext.toast({  html:result['usrMsg'],title:'알림',width: 200,align:'t',timeout: 500});
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    //Ext.Msg.alert("알림",result['errSysMsg']);
                    return;
                }
                
            }
        })     
     }

    /***************
     * 엑셀다운로드
     ***************/    
    ,excelDownBtn : function(viewObj) {
        var view = this.getView(); var viewModel = view.getViewModel();  var store = viewModel.getStore(view['xtype']);
        var records = store.getRange();
        
        var datar = new Array(); var jsonDataEncode = "";
        var jsonDataEncode = "";
        for (var i = 0; i < records.length; i++) {
            datar.push(records[i].data);
        }
        
        jsonDataEncode = Ext.util.JSON.encode(datar);
        
        //var jsonData = Ext.encode(Ext.pluck(store.data.items, 'data'));
        //console.log("jsonData======="+jsonData);

        Ext.Ajax.request({
             url : '/comm/excel/downloadExcel'
            ,method : 'post'
            ,params : { data:jsonDataEncode,fileNm:'tableMeta.xls'}
            ,success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    location.href = "/fframe/files/excel/tableMeta.xls";
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    return;
                }
            }
        })     
     }
    
    /***************
     * 엑셀업로드
     ***************/    
    ,excelUpload : function(obj) {
        var grid = this.lookupReference('extMetaTabColListGrid');
        var store = grid.getStore();
        
        var frm = obj.up("form").getForm();
        //console.log("frm.getValues()="+frm.getValues());
        if(frm.isValid()) {
            frm.submit({
                 url: '/comm/excel/uploadExcel'
                ,success : function(fp, res) {
                    var result = Ext.JSON.decode(res.response.responseText);
                    console.log("result)="+result);
                    if(result['isSuccess']){
                        store.removeAll();
                        for(var i=0;i<result.data.length;i++){
                            newRecord = Ext.data.Record.create
                            (
                             [
                              {name:'STS_NM'           ,type:'string'}
                             ,{name:'DB_NM'            ,type:'string'}
                             ,{name:'OWNER'            ,type:'string'}
                             ,{name:'TAB_NM'           ,type:'string'}
                             ,{name:'TAB_HNM'          ,type:'string'}
                             ,{name:'COL_ID'           ,type:'string'}
                             ,{name:'COL_NM'           ,type:'string'}
                             ,{name:'COL_HNM'          ,type:'string'}
                             ,{name:'DATA_TYPE_DESC'   ,type:'string'}
                             ,{name:'NULLABLE'         ,type:'string'}
                             ,{name:'PK'               ,type:'string'}
                             ,{name:'DATA_TYPE_NM'     ,type:'string'}
                             ,{name:'LEN'              ,type:'string'}
                             ,{name:'DECIMAL_CNT'      ,type:'string'}
                             ,{name:'COL_DESC'         ,type:'string'}
                             ,{name:'REG_DTM'          ,type:'string'}
                             ,{name:'REG_USR_ID'       ,type:'string'}
                             ,{name:'UPD_DTM'          ,type:'string'}
                             ,{name:'UPD_USR_ID'       ,type:'string'}
                             ]
                            );
                            newRecord.set('STS_NM'           , result.data[i].STS_NM        );
                            newRecord.set('DB_NM'            , result.data[i].DB_NM         );
                            newRecord.set('OWNER'            , result.data[i].OWNER         );
                            newRecord.set('TAB_NM'           , result.data[i].TAB_NM        );
                            newRecord.set('TAB_HNM'          , result.data[i].TAB_HNM       );
                            newRecord.set('COL_ID'           , result.data[i].COL_ID        );
                            newRecord.set('COL_NM'           , result.data[i].COL_NM        );
                            newRecord.set('COL_HNM'          , result.data[i].COL_HNM       );
                            newRecord.set('DATA_TYPE_DESC'   , result.data[i].DATA_TYPE_DESC);
                            newRecord.set('NULLABLE'         , result.data[i].NULLABLE      );
                            newRecord.set('PK'               , result.data[i].PK            );
                            newRecord.set('DATA_TYPE_NM'     , result.data[i].DATA_TYPE_NM  );
                            newRecord.set('LEN'              , result.data[i].LEN           );
                            newRecord.set('DECIMAL_CNT'      , result.data[i].DECIMAL_CNT   );
                            newRecord.set('COL_DESC'         , result.data[i].COL_DESC      );
                            newRecord.set('REG_DTM'     , ''     );
                            newRecord.set('REG_USR_ID'  , result.data[i].REG_USR_ID  );
                            newRecord.set('UPD_DTM'     , ''     );
                            newRecord.set('UPD_USR_ID'  , result.data[i].UPD_USR_ID  );
                            store.add(newRecord);
                        }    
                    } else {
                        Ext.Msg.alert("알림",result['errUsrMsg']);
                        return;
                    }
                    this.multiple;
                }
               ,failure: function(form, res) {
                    var result = Ext.JSON.decode(res.response.responseText);
                    Ext.Msg.alert('알림', result['errSysrMsg']);
                }
            });
        }
     }
    ,multiple : function(fileObj){ fileObj.fileInputEl.set({multiple:'multiple'});}        

    
    /******************
     * 업로드 저장
     *****************/    
    ,uploadInsBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();  var store = viewModel.getStore(view['xtype']);
        var grid = this.lookupReference('extMetaTabColListGrid');
        var records = grid.getSelectionModel().getSelection();
        var datar = new Array(); var jsonDataEncode = "";
        for (var i = 0; i < records.length; i++) {
            datar.push(records[i].data);
        }
        jsonDataEncode = Ext.util.JSON.encode(datar);
        
        Ext.Ajax.request({
             url : '/dams/table/insertExcelTabColList'
            ,method : 'post'        
            ,params : { data:jsonDataEncode}        
            ,success : function(res){        
                var result = Ext.decode(res.responseText);        
                if(result['isSuccess']){        
                    Ext.toast({  html:result['usrMsg'],title:'알림',width: 200,align:'t',timeout: 500});        
                } else {        
                    Ext.Msg.alert("알림",result['errUsrMsg']);        
                    console.log("errSysMsg="+result['errSysMsg']);        
                    return;        
                }        
            }        
            ,failure: function(form, res) {        
                var result = Ext.decode(res.responseText);        
                Ext.Msg.alert('알림', result['errUsrMsg']);        
                console.log("errSysMsg="+result['errSysMsg']);        
            }                    
        })             
        
     }    
    
    /**********************************************************
     * Grid
     *********************************************************/    
    ,setGridHeight : function(obj){
        obj.down("grid").setHeight(Ext.Element.getViewportHeight()-180);
     }
    
    /**********************************************************
     * Clipboard
     *********************************************************/    
 //   ,getSelectionModel: function () {
//        var grid = this.getView().down("grid");
//        return this.getView().down("grid").getSelectionModel();
//     }
 //   ,onRefresh: function () {
//        this.extBtn(this.getView().down("button"));
//     }
 //   ,toggleRowSelect: function(button, pressed) {
//        var sel = this.getSelectionModel();
//        sel.setRowSelect(pressed);
//     }
 //   ,toggleCellSelect: function(button, pressed) {
//        var sel = this.getSelectionModel();
//        sel.setCellSelect(pressed);
//     }
 //   ,toggleColumnSelect: function(button, pressed) {
//        var sel = this.getSelectionModel();
//        sel.setColumnSelect(pressed);
//     }    
     
 });

