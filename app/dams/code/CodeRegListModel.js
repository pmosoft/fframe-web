Ext.define('fframe.app.dams.code.CodeRegListModel', {
    extend : 'Ext.app.ViewModel'
   ,alias  : 'viewmodel.codeRegList'
   ,data   : {
        searchKeyCombo : 'CD_ID_HNM'
       ,searchValue    : ''
       ,cdStsCd        : '99'    
    }
   ,stores : {
       codeRegList : {
           fields : [
                      'CD_ID_NM'    
                     ,'CD_ID_HNM'   
                     ,'CD_ID_GRP_NM'
                     ,'CD'          
                     ,'CD_NM'       
                     ,'CD_HNM'      
                     ,'CD_DESC'     
                     ,'CD_TY_CD'
                     ,'CD_STS_CD'   
                     ,'REG_DTM'     
                     ,'REG_USR_ID'  
                     ,'UPD_DTM'     
                     ,'UPD_USR_ID'
                    ]
          ,proxy : {
               type : 'ajax'
              ,url : '/dams/code/selectCodeRegList'
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
           ,{key : '코드ID한글명' , value : 'CD_ID_HNM'   }
           ,{key : '코드ID그룹명' , value : 'CD_ID_GRP_NM'}
           ,{key : '코드'         , value : 'CD'          }
           ,{key : '코드명'       , value : 'CD_NM'       }
           ,{key : '코드한글명'   , value : 'CD_HNM'      }
           ,{key : '코드설명'     , value : 'CD_DESC'     }
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
