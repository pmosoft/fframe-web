Ext.define('fframe.app.syst.usr.UsrListStore', {
    extend: 'Ext.data.BufferedStore',
    alias: 'store.UsrList',
    storedId : 'UsrList',
    autoLoad : false,   
    fields : ['USR_ID','USR_EMAIL','USR_PW','USR_NM','USR_AGE','USE_YN','REG_DT','REG_USR_ID','UPD_DT','UPD_USR_ID'],
	proxy : {
		type : 'ajax',    			
		url : '/usr/selectUsrList',
		reader : {
			type : 'json',
			rootProperty : 'data'	
		}
	} 
});
