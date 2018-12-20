Ext.define('fframe.app.syst.usr.UsrRegModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.UsrReg',
    data : {
		USR_ID    : "" 
	   ,USR_EMAIL : ""
	   ,USR_PW    : "" 
	   ,USR_PW2   : ""
	   ,USR_NM    : "" 
	   ,USR_AGE   : "40"
	   ,USE_YN     : true  
	   ,REG_DT     : ""  
	   ,REG_Usr   : ""
	   ,UPD_DT     : ""  
	   ,UPD_Usr   : ""
    },    
    stores : {
    	UsrRegView : {
    	}
    }
});


