Ext.define('fframe.app.dams.code.CodeExtListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.codeExtList'
    ,data   : {
        searchKeyCombo : 'CD_ID_NM'
       ,searchValue    : ''
    }
   ,stores : {
       codeExtList : {
           fields : [
                      'CD_ID_NM'      
                     ,'CD'            
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
                     ,'REG_DTM'     
                     ,'REG_USR_ID'  
                     ,'UPD_DTM'     
                     ,'UPD_USR_ID'
                    ]
          ,proxy : {
               type : 'ajax'
              ,url : '/dams/code/selectCodeExtList'
              ,reader : {
                   type : 'json'
                  ,rootProperty : 'data'
                  ,totalProperty : 'total'    
              }
          }
      }
     ,searchCombo : {
          fields : ['key','value'] 
         ,data : 
          [
            {key : '코드ID명'     , value : 'CD_ID_NM'    }
           ,{key : '코드'         , value : 'CD'          }
           ,{key : '코드명'       , value : 'CD_NM'       }
          ]
       }
     ,codeStsCombo : {
          fields : ['key','value'] 
         ,data : 
          [
            {key : '전체'     , value : '99'}
           ,{key : '요청'     , value : '01'}
           ,{key : '반려'     , value : '02'}
           ,{key : '승인'     , value : '03'}
           ,{key : '승인취소' , value : '04'}
          ]
      }
   }
});
