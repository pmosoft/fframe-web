Ext.define('fframe.app.dams.pack.PackListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.packList'
    ,data : {
    	searchValue : ''
     }
    ,stores : {
        PackList : {
             fields : ['PKG_FUL_NM','PKG2_NM','PKG3_NM','PKG4_NM','PKG_HNM','PKG_DESC','USE_YN','REG_DTM','REG_USR_ID','UPD_DTM','UPD_USR_ID']
            ,proxy : {
                 type : 'ajax'              
                ,url : '/dams/pack/selectPackList'
                ,reader : {
                     type : 'json'
                    ,rootProperty : 'data'  
                }
            } 

        }
     } 
});
