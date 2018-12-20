Ext.define('fframe.app.dams.term.TermListModel', {
    extend: 'Ext.app.ViewModel'
   ,alias: 'viewmodel.termList'
   ,data : {
        TERM_SRCH_UCD : '02'
       ,TERM_SRCH_UCD_NM : ''
       ,COL_STS_UCD   : '03'        
       ,COL_STS_UCD_NM  : ''        
   }
   ,stores : {
        termList : {
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
