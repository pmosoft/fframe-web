Ext.define('fframe.app.dams.pack.PackRegController', {
     extend:'Ext.app.ViewController' 
    ,alias:'controller.PackReg'
    ,onLoadData : function(obj){
         var view = this.getView(); var viewModel = view.getViewModel();
         var store = viewModel.getStore(view['xtype']);
         store.load({
             callback : function(data){
                 console.log(data);
             }
         });
     }
    ,initBtn : function(btn) {
         var view = this.getView(); var viewModel = view.getViewModel();
         viewModel.set("PKG_FUL_NM" ,"");
         viewModel.set("PKG2_NM"    ,"");
         viewModel.set("PKG3_NM"    ,"");
         viewModel.set("PKG4_NM"    ,"");
         viewModel.set("PKG_HNM"    ,"");
         viewModel.set("PKG_DESC"   ,"");
         viewModel.set("USE_YN"     ,true);
         viewModel.set("REG_DT"     ,"");
         viewModel.set("REG_USR_ID" ,"");
         viewModel.set("UPD_DT"     ,"");
         viewModel.set("UPD_USR_ID" ,"");
     }
    ,selBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();
        var store = viewModel.getStore(view['xtype']);
        store.load({
            callback : function(data){
                console.log(data);
            }
        });
     }
    ,saveBtn : function(btn) {
         var view = this.getView(); var viewModel = view.getViewModel();
         var params = viewModel.getData();

         Ext.Ajax.request({
             url : '/dams/pack/savePack',
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
    ,delBtn : function(btn) {
        var params = this.getView().getViewModel().getData();

        Ext.Ajax.request({
            url : '/dams/pack/deletePack',
            method : 'post',
            params : params,
            success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    //Ext.Msg.alert("알림",result['usrMsg']);
                    Ext.toast({  html:result['usrMsg'],title:'알림',width: 200,align:'t',timeout: 500});

                    this.getView().close();
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    //Ext.Msg.alert("알림",result['errSysMsg']);
                    return;
                }

            }
        })
     }
    ,closeBtn : function(btn) {
        this.getView().close();
     }
});
