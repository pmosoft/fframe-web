Ext.define('fframe.app.dams.term.TermListController', {
     extend : 'Ext.app.ViewController'
    ,alias : 'controller.termList'
        
    /**********************************************************
     * Main Event
     *********************************************************/    

    ,comboLoad : function(obj){
        this.termSrchComboLoad(obj);
        this.colStsComboLoad(obj);
     }    
    
    /********************
     * 표준용어검색 코드로드
     ********************/    
    ,termSrchComboLoad : function(obj){
        var view = this.getView(); var viewModel = view.getViewModel(); var store = viewModel.getStore(view['xtype']);
        var combo = view.down("#TERM_SRCH_UCD");
        combo.store.getProxy().setExtraParam("CD_ID_NM",combo.itemId);
        combo.getStore().load({
            callback : function(data,result,success){
                if(success) {
                    result = Ext.JSON.decode(result._response.responseText);
                    data = result['data'];
                    for (var i = 0; i < data.length; i++) {
                        if(data[i].CD == combo.value) {
                            viewModel.set("TERM_SRCH_UCD"     ,data[i].CD);
                            viewModel.set("TERM_SRCH_UCD_NM"  ,data[i].CD_NM);
                        }
                    }                    
                }
            }
        })
     }﻿        

     /********************
      * 승인 코드로드
      ********************/    
     ,colStsComboLoad : function(obj){
         var view = this.getView(); var viewModel = view.getViewModel(); var store = viewModel.getStore(view['xtype']);
         var combo = view.down("#COL_STS_UCD");
         combo.store.getProxy().setExtraParam("CD_ID_NM",combo.itemId);
         combo.getStore().load({
             callback : function(data,result,success){
                 if(success) {
                     result = Ext.JSON.decode(result._response.responseText);
                     data = result['data'];
                     for (var i = 0; i < data.length; i++) {
                         if(data[i].CD == combo.value) {
                             viewModel.set("COL_STS_UCD"        ,data[i].CD);
                             viewModel.set("COL_STS_UCD_NM"     ,data[i].CD_NM);
                         }
                     }                    
                 }
             }
         })
      }﻿        
     
     
    /*********
     * 추출
     *********/    
    ,extBtn : function(btn) {
    	var view = this.getView(); var viewModel = view.getViewModel(); var store = viewModel.getStore(view['xtype']);
        console.log("view['xtype']="+view['xtype']);
        store.proxy.setUrl("/dams/term/selectExtTermList");
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
        store.proxy.setUrl("/dams/term/selectCmpTabColList");
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
        var grid = btn.up("termList").down("grid");
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
             url : '/dams/term/deleteTabCol'
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
//        var store = viewModel.getStore('termList');
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
            url : '/dams/term/insertCmpTabColList',
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

