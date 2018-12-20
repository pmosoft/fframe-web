Ext.define('fframe.app.dams.table.TabQryListModel', {
    extend: 'Ext.app.ViewModel'
   ,alias: 'viewmodel.tabQryList'
   ,data : {
        CD_ID_NM   : ''        
       ,CD         : '01'        
       ,CD_NM      : 'FFRAME'
       ,dbInfo     : ''
       ,datasource : ''
       ,dbDriver   : ''
       ,dbConn     : ''
       ,dbUser     : ''
       ,dbPassword : ''
       ,dbType     : ''
       ,dbOwner    : ''
       ,TAB_NM     : '%'
       ,qry        : ''
       ,qryCnt     : '0'
       ,info       : ''
    }
   ,stores : { 
        tabGrid : {   
            fields : [   
                       'DB_NM'   
                      ,'OWNER'   
                      ,'TAB_NM'   
                      ,'TAB_HNM'   
                      ,'ROW_CNT'
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
       ,qryGrid : {
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
