Ext.define('fframe.app.syst.usr.UsrListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.UsrList',
    data : {
    	 searchKeyCombo : 'USR_NM'
    	,searchValue : ''
    },
    stores : {
    	UsrList : {
    		type : 'UsrList'
    	}
    } 
});
