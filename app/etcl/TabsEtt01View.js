Ext.define('fframe.app.etcl.TabsEtt01View', {
    extend     : 'Ext.form.Panel'
   ,xtype      : 'tabsEtt01'
   //,controller : 'tabEtt'
   //,viewModel  : 'tabEtt'
     //-------------------------------------------
     // 1단계 : 소스-타겟 테이블 검색 패널
     //-------------------------------------------
   ,flex: 1     
   ,margin: '0 10 0 0'              
   ,layout: { type: 'hbox', align: 'stretch'}         
   ,items :     
    [
     //-------------------------------------------
     // 1-1단계 : 소스 테이블 검색 패널
     //-------------------------------------------
     {
         flex: 1     
        ,margin: '0 10 0 0'              
        ,items :     
         [     
          //-------------------------------------------     
          // toolbar     
          //-------------------------------------------     
          {     
              xtype : 'toolbar'     
             //,height : 50     
             ,layout: { type: 'vbox', align: 'stretch'}
             ,items :      
              [     
                {
                    xtype : 'toolbar'     
                   //,height : 50     
                   ,items :      
                    [     
                       {xtype:'component' , html:['&nbsp;','DB','&nbsp;']}             
                      ,{xtype:'component' , html:['&nbsp;','DB','&nbsp;']}             
                      ,{xtype:'component' , html:['&nbsp;','DB','&nbsp;']}             
                      ,{xtype:'component' , html:['&nbsp;','DB','&nbsp;']}             
                      ,{xtype:'component' , html:['&nbsp;','DB','&nbsp;']}             
                      ,{xtype:'component' , html:['&nbsp;','DB','&nbsp;']}             
                    ]  
                }
               ,{
                    xtype : 'toolbar'     
                   //,height : 50     
                   ,items :      
                    [     
                       {xtype:'component' , html:['&nbsp;','DB','&nbsp;']}             
                      ,{xtype:'component' , html:['&nbsp;','DB','&nbsp;']}             
                      ,{xtype:'component' , html:['&nbsp;','DB','&nbsp;']}             
                      ,{xtype:'component' , html:['&nbsp;','DB','&nbsp;']}             
                      ,{xtype:'component' , html:['&nbsp;','DB','&nbsp;']}             
                      ,{xtype:'component' , html:['&nbsp;','DB','&nbsp;']}             
                    ]  
                }

                
                
                
              ]     
          }     
        ]  
     }          
    ]    
 });
