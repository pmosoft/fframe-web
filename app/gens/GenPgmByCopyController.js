Ext.define('fframe.app.gens.GenPgmByCopyController', {
     extend: 'Ext.app.ViewController'
    ,alias: 'controller.genPgmByCopy'
        
    /****************
     * 코드로드
     ****************/    
    ,comboLoad : function(obj){
        var view = this.getView(); var viewModel = view.getViewModel(); var store = viewModel.getStore(view['xtype']);
        var combo = view.down("#SRC_COPY_TY_CD");
        combo.store.getProxy().setExtraParam("CD_ID_NM",combo.itemId);
        combo.getStore().load({
            callback : function(data,result,success){
                if(success) {
                    result = Ext.JSON.decode(result._response.responseText);
                    data = result['data'];
                    for (var i = 0; i < data.length; i++) {
                        if(data[i].CD == combo.value) {
                            viewModel.set("CD"        ,data[i].CD);
                            viewModel.set("CD_NM"     ,data[i].CD_NM);
                            viewModel.set("CD_HNM"    ,data[i].CD_HNM);
                            viewModel.set("CD_DESC"   ,data[i].CD_DESC);
                            viewModel.set("pgmPath"   ,data[i].CD_PARAM1);
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
         var combo = view.down("#SRC_COPY_TY_CD");
         var records = combo.store.getRange(); 
         var j = 0;
         console.log("combo.value="+combo.value);
         for (var i = 0; i < records.length; i++) {
             if(records[i].data.CD == combo.value) {
                 viewModel.set("CD"        ,records[i].data.CD);
                 viewModel.set("CD_NM"     ,records[i].data.CD_NM);
                 viewModel.set("CD_HNM"    ,records[i].data.CD_HNM);
                 viewModel.set("CD_DESC"   ,records[i].data.CD_DESC);
                 viewModel.set("pgmPath"   ,records[i].data.CD_PARAM1);
                 
             }
         }
         
         viewModel.set("genResult","");
         //console.log("commCombo.store.getAt(0).get('value')"+commCombo.store.getAt(0).get('value'));
      }
              
     
    /*********
     * 복사
     ********/    
    ,copyBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();
        var params = viewModel.getData();
        console.log(params);
        
        Ext.Ajax.request({
            url : '/gens/pgm/genPgmByCopy',
            method : 'post',
            params : params,
            success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    Ext.toast({  html:result['usrMsg'],title:'알림',width: 200,align:'t',timeout: 500});
                    viewModel.set("genResult"   ,result['retMsg']);
                    
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    console.log("errSysMsg="+result['errSysMsg']);
                    return;
                }
            }
        })
     }    
});
