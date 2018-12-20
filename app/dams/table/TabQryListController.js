Ext.define('fframe.app.dams.table.TabQryListController', {
    extend : 'Ext.app.ViewController'
   ,alias : 'controller.tabQryList'
       
   /**********************************************************
    * Main Event
    *********************************************************/    

   /***********************
    * DB접속콤보 로드
    ***********************/    
   ,dbConnCombo : function(obj){
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
   /**********************
    * DB접속콤보 변경
    *********************/     
   ,dbConnComboChg : function(obj) {
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

        viewModel.set("TAB_NM"   ,"");
        
        //console.log("commCombo.store.getAt(0).get('value')"+commCombo.store.getAt(0).get('value'));
    }

   /***************
    * 테이블 조회
    ***************/    
   ,tabSelBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();  
        var store = viewModel.getStore('tabGrid'); 
       
        store.proxy.setUrl("/dams/table/selectMetaTabList");
        
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
        store.getProxy().setExtraParam("TAB_NM"    ,viewModel.data.TAB_NM);         
        store.load({         
            callback : function(data){         
                console.log(data);         
            }         
        });         
    }    
   
    /*********************************************
     * 테이블 그리드 더블 클릭 - 그리드 컬럼 세팅
     *********************************************/    
   ,tabGridDblClick : function( obj, td, cellIndex, record, tr, rowIndex, e, eOpts) {     
        var view = this.getView(); var viewModel = view.getViewModel();
        var store = viewModel.getStore('qryGrid');         
        viewModel.set("qry"  ,"SELECT * FROM "+record.get("OWNER")+"."+record.get("TAB_NM"));
        
         var grid = view.down("#qryGrid");
         console.log("grid="+grid);
         
         store.proxy.setUrl("/dams/table/selectMetaTabColList");
         
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
         
         store.getProxy().setExtraParam("TAB_NM"   ,record.get("TAB_NM"));
         viewModel.set("TAB_NM"  , record.get("TAB_NM"));
             
         store.load({
             callback : function(data,result,success){
                 if(success) {
                     result = Ext.JSON.decode(result._response.responseText);
                     data = result['data'];
                     //combo.setValue(data[0].CD);
                     viewModel.set("colCnt"  , data.length);
                     viewModel.set("qryCnt"  , '0');
                     
                     var fields = [];
                     for (var i = 0; i < data.length; i++) {
                         fields.push({ text: data[i].COL_NM +"<br>"+ data[i].COL_HNM, dataIndex: data[i].COL_NM, align:'left', flex:1 } ); 
                     }
                     grid.reconfigure(fields);    
                     store.removeAll();
                 }
             }
         });         
    }    

   /**********************     
    * 쿼리 조회     
    **********************/         
   ,selectQryDataBtn : function( obj, td, cellIndex, record, tr, rowIndex, e, eOpts) {     
        var view = this.getView(); var viewModel = view.getViewModel();     
        var store = viewModel.getStore('qryGrid');     
        var grid = view.down("#qryGrid");     
        console.log("grid="+grid);     
             
        store.proxy.setUrl("/dams/table/selectQryData");     
             
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
        store.getProxy().setExtraParam("qry"       ,viewModel.data.qry);     
       
        store.load({
            callback : function(data,result,success){
                result = Ext.JSON.decode(result._response.responseText);
                data = result['data'];
                if(result['isSuccess']){
                    viewModel.set("qryCnt"  , data.length);
                    console.log(data);
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    console.log(result['errSysMsg']);
                    return;
                }                
            }
        });              }
   
    /***************
     * 엑셀다운로드
     ***************/    
    ,excelDownBtn : function(viewObj) {
        var view = this.getView(); var viewModel = view.getViewModel();  
        var store = viewModel.getStore('qryGrid');     
        var grid = view.down("#qryGrid");     
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
            ,params : { data:jsonDataEncode,fileNm:'tableData.xls'}
            ,success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    location.href = "/fframe/files/excel/tableData.xls";
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    return;
                }
            }
        })     
     }
    

    /***************
     * Insert추출
     ***************/    
    ,selectInsertDataBtn : function(viewObj) {
    
        var view = this.getView(); var viewModel = view.getViewModel();     
        var params = viewModel.getData();
        
        Ext.Ajax.request({
            url : '/dams/table/selectInsertData',
            method : 'post',
            params : params,
            success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    //Ext.toast({  html:result['usrMsg'],title:'알림',width: 200,align:'t',timeout: 500});
                    viewModel.set("info",result['data']);
                    
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    console.log("errSysMsg="+result['errSysMsg']);
                    return;
                }
            }
        })
     }
   
 });     
     
     