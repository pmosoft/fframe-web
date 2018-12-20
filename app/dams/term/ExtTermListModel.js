Ext.define('fframe.app.dams.term.ExtTermListModel', {
    extend: 'Ext.app.ViewModel'
   ,alias: 'viewmodel.extTermList'
   ,data : {
        DB_CONN_CD        : '00'
       ,DB_CONN_CD_NM     : 'ALL'        
       ,DB_USR_UCD        : '00'        
       ,DB_USR_UCD_NM     : 'ALL'        
       ,TAB_COL_UCD        : '06'        
       ,TAB_COL_UCD_NM     : ''        
   }
   ,stores : {
        extTermList : {
            fields : [
                      'COL_NM'        
                     ,'COL_HNM'        
                     ,'COL_DESC'      
                     ,'COL_ABBR_HNM'     
                     ,'DATA_TYPE_DESC'   
                     ,'COL_STS_CD'      
                     ,'REG_DTM'
                     ,'REG_USR_ID'
                     ,'UPD_DTM'
                     ,'UPD_USR_ID'
                     ]
           ,proxy : {
                type : 'ajax'
               ,url : ''
               ,reader : {
                    type : 'json' 
                   ,rootProperty : 'data'
                   ,totalProperty : 'total'    
                }
            }
        }
    }
});
