Ext.define('fframe.app.etcl.TabEttModel', {
    extend: 'Ext.app.ViewModel'
   ,alias: 'viewmodel.tabEtt'
   ,data : {
 
       //----------------------------------
       // src 정보    
       //----------------------------------
        srcDbConn_CD_ID_NM : 'FFRAME'
       ,srcDbConn_CD : '01'
       ,srcDbInfo     : ''
       ,srcDatasource : ''
       ,srcDbDriver   : ''
       ,srcDbConn     : ''
       ,srcDbUser     : ''
       ,srcDbPassword : ''
       ,srcDbType     : ''
       ,srcDbOwner    : ''
       ,srcTabNm      : ''        
       //----------------------------------
       // tar 정보    
       //----------------------------------
       ,tarDbConn_CD_ID_NM : 'FFRAME'
       ,tarDbConn_CD : '01'
       ,tarDbInfo     : ''
       ,tarDatasource : ''
       ,tarDbDriver   : ''
       ,tarDbConn     : ''
       ,tarDbUser     : ''
       ,tarDbPassword : ''
       ,tarDbType     : ''
       ,tarDbOwner    : ''
       ,tarTabNm      : ''        
       // 정합성 변수    
       ,colCnt     : ''        
       ,delimeterCnt : ''        
           
    }
   ,stores : {
       srcTabList : {
            fields : [
                      'STS_NM'
                     ,'DB_NM'
                     ,'OWNER'
                     ,'TAB_NM'
                     ,'COL_ID'
                     ,'COL_NM'
                     ,'COL_HNM'
                     ,'DATA_TYPE_DESC'
                     ,'NULLABLE'
                     ,'PK'
                     ,'DATA_TYPE_NM'
                     ,'LEN'
                     ,'DECIMAL_CNT'
                     ,'COL_DESC'
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
      ,tarTabList : {
            fields : [   
                      'STS_NM'   
                     ,'DB_NM'   
                     ,'OWNER'   
                     ,'TAB_NM'   
                     ,'COL_ID'   
                     ,'COL_NM'   
                     ,'COL_HNM'   
                     ,'DATA_TYPE_DESC'   
                     ,'NULLABLE'   
                     ,'PK'   
                     ,'DATA_TYPE_NM'   
                     ,'LEN'   
                     ,'DECIMAL_CNT'   
                     ,'COL_DESC'   
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
      ,tabLod : {
          proxy : {      
              type : 'ajax'      
             ,url : ''      
             ,reader : {      
                  type : 'json'       
                 ,rootProperty : 'data'      
              }      
          }      
       }      
      ,srcTabList2 : {
          proxy : {
              type : 'ajax'
             ,url : ''
             ,reader : {
                  type : 'json' 
                 ,rootProperty : 'data'
              }
          }
       }

    }
});
