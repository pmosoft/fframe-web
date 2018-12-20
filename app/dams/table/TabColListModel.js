Ext.define('fframe.app.dams.table.TabColListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.tabColList'
    ,data : {
        DB_CONN_CD        : '00'
       ,DB_CONN_CD_NM     : 'ALL'        
       ,DB_USR_UCD        : '00'        
       ,DB_USR_UCD_NM     : 'ALL'        
       ,TAB_COL_UCD        : '06'        
       ,TAB_COL_UCD_NM     : ''        
       ,searchKeyCombo : 'COL_HNM'
       ,searchValue : ''
       ,termStsCd : '99'
       ,tabChk : 'check'
     }
    ,stores : {
         tabColList : {
             fields : [
                        'DB_NM'
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
                 type   : 'ajax'
                ,url    : ''
                ,reader : {
                     type : 'json'
                    ,rootProperty : 'data'
                    ,totalProperty : 'total'    
                 }
             }
        }
     }
});
