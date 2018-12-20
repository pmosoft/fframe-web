Ext.define('fframe.app.dams.code.CodeExtRegListController', {
     extend : 'Ext.app.ViewController'
    ,alias : 'controller.codeExtRegList'
        
    /**********************************************************
     * Main Event
     *********************************************************/

    /****************
     * 코드로드
     ****************/    
    ,comboLoad : function(obj){
        var view = this.getView(); var viewModel = view.getViewModel(); var store = viewModel.getStore(view['xtype']);
        var combo = view.down("#CD_UCD");
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
        var view = this.getView(); var viewModel = view.getViewModel(); var store = viewModel.getStore(view['xtype']);
        var combo = view.down("#CD_UCD");
        var records = combo.store.getRange(); 
        var j = 0;
        for (var i = 0; i < records.length; i++) {
            if(records[i].data.CD == combo.value) {
                viewModel.set("CD_ID_NM"  ,records[i].data.CD_ID_NM);
                viewModel.set("CD"        ,records[i].data.CD);
            }
        }
     }
        
    /***************
     * 신규
     ***************/    
    ,initBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();  var store = viewModel.getStore(view['xtype']);
        
        console.log(view['xtype']);
        Ext.toast({  html:"200라인 생성됩니다.",title:'알림',width: 200,align:'t',timeout: 500});

        store.removeAll();
        
        for(var i=0;i<=200;i++){
            newRecord = Ext.data.Record.create
            (
             [
              {name:'CD_ID_NM'        ,type:'string'}
             ,{name:'CD'              ,type:'string'}
             ,{name:'CD_PARAM1_DESC'  ,type:'string'}
             ,{name:'CD_PARAM1'       ,type:'string'}
             ,{name:'CD_PARAM2_DESC'  ,type:'string'}
             ,{name:'CD_PARAM2'       ,type:'string'}
             ,{name:'CD_PARAM3_DESC'  ,type:'string'}
             ,{name:'CD_PARAM3'       ,type:'string'}
             ,{name:'CD_PARAM4_DESC'  ,type:'string'}
             ,{name:'CD_PARAM4'       ,type:'string'}
             ,{name:'CD_PARAM5_DESC'  ,type:'string'}
             ,{name:'CD_PARAM5'       ,type:'string'}
             ,{name:'CD_PARAM6_DESC'  ,type:'string'}
             ,{name:'CD_PARAM6'       ,type:'string'}
             ,{name:'CD_PARAM7_DESC'  ,type:'string'}
             ,{name:'CD_PARAM7'       ,type:'string'}
             ,{name:'CD_PARAM8_DESC'  ,type:'string'}
             ,{name:'CD_PARAM8'       ,type:'string'}
             ,{name:'CD_PARAM9_DESC'  ,type:'string'}
             ,{name:'CD_PARAM9'       ,type:'string'}
             ,{name:'REG_DTM'         ,type:'string'}
             ,{name:'REG_USR_ID'      ,type:'string'}
             ,{name:'UPD_DTM'         ,type:'string'}
             ,{name:'UPD_USR_ID'      ,type:'string'}
             ]
            ); 
            store.insert(i,newRecord);
            //store.add(newRecord);
            //Ext.Msg.alert("알림","200라인 생성되었습니다.");
        }    
     }

    /***************
     * 저장
     ***************/    
    ,saveBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();  var store = viewModel.getStore(view['xtype']);
        var grid = btn.up(view['xtype']).down("grid");        
        var records = grid.getSelectionModel().getSelection();
        var datar = new Array(); var jsonDataEncode = "";
        for (var i = 0; i < records.length; i++) {
            datar.push(records[i].data);
        }
        jsonDataEncode = Ext.util.JSON.encode(datar);

        Ext.Ajax.request({
             url : '/dams/code/saveCodeExt'
            ,method : 'post'
            ,params : { data:jsonDataEncode}
            ,success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    Ext.toast({  html:result['usrMsg'],title:'알림',width: 200,align:'t',timeout: 500});
                    
                    store.getProxy().setExtraParam("searchKeyCombo",viewModel.get("searchKeyCombo"));
                    store.getProxy().setExtraParam("searchValue",viewModel.get("searchValue"));
                    store.load();
                    
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    console.log("errSysMsg="+result['errSysMsg']);
                    return;
                }
            }
            ,failure: function(res) {
                var result = Ext.decode(res.responseText);
                Ext.Msg.alert('알림', result['errUsrMsg']);
                console.log("errSysMsg="+result['errSysMsg']);
            }            
        })     
     }
    
    /***************
     * 삭제
     ***************/    
    ,delBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel(); var store = viewModel.getStore(view['xtype']);
        var grid = btn.up(view['xtype']).down("grid");        
        var records = grid.getSelectionModel().getSelection();
        var datar = new Array(); var jsonDataEncode = "";
        for (var i = 0; i < records.length; i++) {
            datar.push(records[i].data);
        }
        jsonDataEncode = Ext.util.JSON.encode(datar);

        Ext.Ajax.request({
             url : '/dams/code/deleteCodeExt'
            ,method : 'post'
            ,params : { data:jsonDataEncode}
            ,success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    Ext.toast({  html:result['usrMsg'],title:'알림',width: 200,align:'t',timeout: 500});
                    
                    store.getProxy().setExtraParam("searchKeyCombo",viewModel.get("searchKeyCombo"));
                    store.getProxy().setExtraParam("searchValue",viewModel.get("searchValue"));
                    store.load();
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
    
    /***************
     * 조회
     ***************/    
    ,selBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();  var store = viewModel.getStore(view['xtype']);
        store.getProxy().setExtraParam("searchKeyCombo",viewModel.get("searchKeyCombo"));
        store.getProxy().setExtraParam("searchValue",viewModel.get("searchValue"));
        store.load();
     }
    ,searchBtn : function(f,e,op) {
        if (e.getKey() == e.ENTER) {
            this.selBtn();
        }
    }

    /***************
     * 엑셀다운로드
     ***************/    
    ,excelDownBtn : function(viewObj) {
        var view = this.getView(); var viewModel = view.getViewModel();  var store = viewModel.getStore(view['xtype']);
        
        var records = store.getRange();
        var datar = new Array(); var jsonDataEncode = "";
        for (var i = 0; i < records.length; i++) {
            datar.push(records[i].data);
        }
        jsonDataEncode = Ext.util.JSON.encode(datar);
        console.log(jsonDataEncode);

        Ext.Ajax.request({
             url : '/comm/excel/downloadExcel'
            ,method : 'post'
            ,params : { data:jsonDataEncode,fileNm:'codeExt.xls'}
            ,success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    location.href = "/fframe/files/excel/codeExt.xls";
                } else {
                    Ext.Msg.alert("알림","aaa"+result['errUsrMsg']);
                    return;
                }
            }
        })     
     }
    ,excelUpload : function(obj) {
        var grid = this.lookupReference('codeExtRegListGrid');
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
                               {name:'CD_ID_NM'        ,type:'string'}
                              ,{name:'CD'              ,type:'string'}
                              ,{name:'CD_PARAM1_DESC'  ,type:'string'}
                              ,{name:'CD_PARAM1'       ,type:'string'}
                              ,{name:'CD_PARAM2_DESC'  ,type:'string'}
                              ,{name:'CD_PARAM2'       ,type:'string'}
                              ,{name:'CD_PARAM3_DESC'  ,type:'string'}
                              ,{name:'CD_PARAM3'       ,type:'string'}
                              ,{name:'CD_PARAM4_DESC'  ,type:'string'}
                              ,{name:'CD_PARAM4'       ,type:'string'}
                              ,{name:'CD_PARAM5_DESC'  ,type:'string'}
                              ,{name:'CD_PARAM5'       ,type:'string'}
                              ,{name:'CD_PARAM6_DESC'  ,type:'string'}
                              ,{name:'CD_PARAM6'       ,type:'string'}
                              ,{name:'CD_PARAM7_DESC'  ,type:'string'}
                              ,{name:'CD_PARAM7'       ,type:'string'}
                              ,{name:'CD_PARAM8_DESC'  ,type:'string'}
                              ,{name:'CD_PARAM8'       ,type:'string'}
                              ,{name:'CD_PARAM9_DESC'  ,type:'string'}
                              ,{name:'CD_PARAM9'       ,type:'string'}
                              ,{name:'REG_DTM'         ,type:'string'}
                              ,{name:'REG_USR_ID'      ,type:'string'}
                              ,{name:'UPD_DTM'         ,type:'string'}
                              ,{name:'UPD_USR_ID'      ,type:'string'}
                             ]
                            );
                            newRecord.set('CD_ID_NM'      , result.data[i].CD_ID_NM      );
                            newRecord.set('CD'            , result.data[i].CD            );
                            newRecord.set('CD_PARAM1_DESC', result.data[i].CD_PARAM1_DESC);
                            newRecord.set('CD_PARAM1'     , result.data[i].CD_PARAM1     );
                            newRecord.set('CD_PARAM2_DESC', result.data[i].CD_PARAM2_DESC);
                            newRecord.set('CD_PARAM2'     , result.data[i].CD_PARAM2     );
                            newRecord.set('CD_PARAM3_DESC', result.data[i].CD_PARAM3_DESC);
                            newRecord.set('CD_PARAM3'     , result.data[i].CD_PARAM3     );
                            newRecord.set('CD_PARAM4_DESC', result.data[i].CD_PARAM4_DESC);
                            newRecord.set('CD_PARAM4'     , result.data[i].CD_PARAM4     );
                            newRecord.set('CD_PARAM5_DESC', result.data[i].CD_PARAM5_DESC);
                            newRecord.set('CD_PARAM5'     , result.data[i].CD_PARAM5     );
                            newRecord.set('CD_PARAM6_DESC', result.data[i].CD_PARAM6_DESC);
                            newRecord.set('CD_PARAM6'     , result.data[i].CD_PARAM6     );
                            newRecord.set('CD_PARAM7_DESC', result.data[i].CD_PARAM7_DESC);
                            newRecord.set('CD_PARAM7'     , result.data[i].CD_PARAM7     );
                            newRecord.set('CD_PARAM8_DESC', result.data[i].CD_PARAM8_DESC);
                            newRecord.set('CD_PARAM8'     , result.data[i].CD_PARAM8     );
                            newRecord.set('CD_PARAM9_DESC', result.data[i].CD_PARAM9_DESC);
                            newRecord.set('CD_PARAM9'     , result.data[i].CD_PARAM9     );
                            newRecord.set('REG_DTM'       , ''     );
                            newRecord.set('REG_USR_ID'    , result.data[i].REG_USR_ID  );
                            newRecord.set('UPD_DTM'       , ''     );
                            newRecord.set('UPD_USR_ID'    , result.data[i].UPD_USR_ID  );
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
//            var grid = this.getView().down("grid");
//            return this.getView().down("grid").getSelectionModel();
//         }
 //   ,onRefresh: function () {
//            this.extBtn(this.getView().down("button"));
//         }
 //   ,toggleRowSelect: function(button, pressed) {
//            var sel = this.getSelectionModel();
//            sel.setRowSelect(pressed);
//         }
 //   ,toggleCellSelect: function(button, pressed) {
//            var sel = this.getSelectionModel();
//            sel.setCellSelect(pressed);
//         }
 //   ,toggleColumnSelect: function(button, pressed) {
//            var sel = this.getSelectionModel();
//            sel.setColumnSelect(pressed);
//         }    
     
 });

