Ext.define('fframe.app.syst.usr.UsrRegController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.UsrReg',
    onLoadData : function(obj){
    	console.log("store");
    	var view = this.getView();
    	var viewModel = view.getViewModel();
    	var store = viewModel.getStore(view['xtype']);
    	store.load({
    		callback : function(data){
    			console.log(data);
    		}
    	});
    },	

    initBtn : function(btn) {
    	var view = this.getView(); var viewModel = view.getViewModel();
    	viewModel.set("USR_ID"   ,"");
    	viewModel.set("USR_EMAIL","");
    	viewModel.set("USR_PW"   ,"");
    	viewModel.set("USR_PW2"  ,"");
    	viewModel.set("USR_NM"   ,"");
    	viewModel.set("USR_AGE"  ,"40");
    	viewModel.set("USE_YN"    ,true);
    	viewModel.set("UPD_DT"    ,"<span style='color:green;'>2017.07.03 16:40:20</span>");
    	viewModel.set("UPD_Usr"  ,"<span style='color:green;'>admin</span>");
    },
    
    
    saveBtn : function(btn) {
    	var view = this.getView(); var viewModel = view.getViewModel();
    	var params = viewModel.getData();
    	console.log(params);
    	
    	Ext.Ajax.request({
    		url : '/usr/saveUsr',
    		method : 'post',
    		params : params,
    		success : function(res){
    			var result = Ext.decode(res.responseText);
    			console.log(res.responseText);
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
    },
    
    delBtn : function(btn) {

    	var params = this.getView().getViewModel().getData();
    	//console.log(params);
    	
    	Ext.Ajax.request({
    		url : '/usr/deleteUsr',
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
    	
		
    },    

    closeBtn : function(btn) {
		this.getView().close();
    },    
    
    
    selBtn : function(btn) {
    	console.log("store");
    	var view = this.getView();
    	var viewModel = view.getViewModel();
    	var store = viewModel.getStore(view['xtype']);
    	console.log("store");
    	store.load({
    		callback : function(data){
    			console.log(data);
    		}
    	});
    }    
});
