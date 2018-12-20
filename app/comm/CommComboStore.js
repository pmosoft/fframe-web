Ext.define('fframe.app.comm.CommComboStore', {
    extend : 'Ext.data.Store'
   ,alias  : 'store.commCombo'
   ,storeId  : 'commCombo'
   ,autoload : true    
    ,fields: [
     'CD_ID_NM'    
    ,'CD_ID_HNM'   
    ,'CD_ID_GRP_NM'
    ,'CD'
    ,'CD_NM'       
    ,'CD_HNM'      
    ,'CD_DESC'      
    ,'CD_TY_CD'
    ,'CD_STS_CD'
    ,'CD_PARAM1_DESC'
    ,'CD_PARAM1'     
    ,'CD_PARAM2_DESC'
    ,'CD_PARAM2'     
    ,'CD_PARAM3_DESC'
    ,'CD_PARAM3'     
    ,'CD_PARAM4_DESC'
    ,'CD_PARAM4'     
    ,'CD_PARAM5_DESC'
    ,'CD_PARAM5'     
    ]

   ,proxy: {
        type: 'ajax'
        ,url : '/dams/code/selectCodeCombo'
        ,reader: {
            type : 'json'
           ,rootProperty: 'data'
        }
    }
});
