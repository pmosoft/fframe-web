Ext.define('fframe.app.dams.abbr.AbbrListModel', {
    extend: 'Ext.app.ViewModel'
   ,alias: 'viewmodel.abbrList'
   ,data : {
        ABBR_NM   : ''        
    }
   ,stores : {
        abbrList : {
            fields : [
                      'ABBR_NM'    
                     ,'ABBR_FUL_NM' 
                     ,'ABBR_HNM'     
                     ,'ABBR_DESC'   
                     ,'ABBR_APR_CD'   
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
