Ext.define('fframe.app.dams.code.CodeExtRegListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.codeExtRegList'
    ,data   : {
        CD_ID_NM   : 'CD_UCD'        
       ,CD         : '02'        
       ,CD_NM      : 'CD_ID_HNM'        
       ,searchKeyCombo : 'CD_ID_NM'
       ,searchValue    : ''
    }
   ,stores : {
       codeExtRegList : {
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
                     ,'CD_PARAM6_DESC'
                     ,'CD_PARAM6'     
                     ,'CD_PARAM7_DESC'
                     ,'CD_PARAM7'     
                     ,'CD_PARAM8_DESC'
                     ,'CD_PARAM8'     
                     ,'CD_PARAM9_DESC'
                     ,'CD_PARAM9'     
                     ,'REG_DTM'     
                     ,'REG_USR_ID'  
                     ,'UPD_DTM'     
                     ,'UPD_USR_ID'
                    ]
          ,proxy : {
               type : 'ajax'
              ,url : '/dams/code/selectCodeExtRegList'
              ,reader : {
                   type : 'json'
                  ,rootProperty : 'data'
                  ,totalProperty : 'total'    
              }
          }
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
