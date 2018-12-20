Ext.define('fframe.app.etcl.SamfileLodModel', {
    extend: 'Ext.app.ViewModel'
   ,alias: 'viewmodel.samfileLod'
   ,data : {
       // 콤보 변수    
        CD_ID_NM   : ''        
       ,CD         : '01'        
       ,CD_NM      : 'FFRAME'
       // DB_CONN_CD 변수    
       ,dbInfo     : ''
       ,datasource : ''
       ,dbDriver   : ''
       ,dbConn     : ''
       ,dbUser     : ''
       ,dbPassword : ''
       ,dbType     : ''
       ,dbOwner    : ''
       // 테이블검색 변수    
       ,TAB_NM     : ''        
       // 정합성 변수    
       ,colCnt     : ''        
       ,delimeterCnt : ''        
           
           
    }
   ,stores : {
        tabGrid : {   
            fields : [   
                       'DB_NM'   
                      ,'OWNER'   
                      ,'TAB_NM'   
                      ,'TAB_HNM'   
                      ,'TAB_DESC'   
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
       ,tabDataGrid : {
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
