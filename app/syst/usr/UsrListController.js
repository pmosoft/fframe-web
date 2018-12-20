Ext.define('fframe.app.syst.usr.UsrListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.UsrList',
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
    
    
    setGridHeight : function(obj){ 
    	obj.down("grid").setHeight(Ext.Element.getViewportHeight()-180);
    },
    
    insBtn : function(btn) {

    	//console.log("data4="+btn.up("toolbar").down("combo").valueField);
    	var UsrReg = Ext.create("fframe.syst.usr.UsrRegView");
    	UsrReg.show();
    },
    
    delBtn : function(btn) {
		//Ext.Msg.alert("알림","삭제");
    	//click : this.insBtn
    },    
    
    selBtn : function(btn) {
    	console.log("store");
    	var view = this.getView(); var viewModel = view.getViewModel();
    	var store = viewModel.getStore(view['xtype']);

//    	console.log("data="+btn.up("toolbar").down("combo").value);
//    	console.log("data="+btn.up("toolbar").down("combo").name);    	
//    	console.log("data="+btn.up("toolbar").down("[name=searchValue]").getValue());
//    	console.log("data="+btn.up("toolbar").down("textfield").value);
//    	var values = btn.up("form").getForm().getValues();
//    	console.log("values",values);    	

    	var searchKeyCombo = viewModel.get("searchKeyCombo");
    	var searchValue = viewModel.get("searchValue");
    	
    	console.log("searchKeyCombo",searchKeyCombo);    	
    	console.log("searchValue",searchValue);    	
    	
    	store.getProxy().setExtraParam("searchKeyCombo",searchKeyCombo);
    	store.getProxy().setExtraParam("searchValue",searchValue);
    	store.load({
    		callback : function(data){
    			console.log(data);
    		}
    	});
    }    
});
