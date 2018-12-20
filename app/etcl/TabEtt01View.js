Ext.define('fframe.app.etcl.TabEtt01View', {
    extend     : 'Ext.form.Panel'
   ,xtype      : 'tabEtt01'
   ,controller : 'tabEtt'
   ,viewModel  : 'tabEtt'
   //-------------------------------------------
   // 1단계 : 소스-타겟 테이블 검색 패널
   //-------------------------------------------
   ,title : '1단계 : 소스-타겟 테이블 검색 패널'   
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
                      ,{xtype:'commCombo' , itemId:'SRC_DB_CONN_CD' , flex : 1, bind :{value:'{srcDbConn_CD}'} , listeners:{select:'srcDbConnComboChg'}}
                      ,{xtype:'component' , html:['&nbsp;&nbsp;&nbsp;','DB설명','&nbsp;']}
                      ,{xtype:'textfield' , name:'srcDbInfo' , flex : 1, bind :{value:'{srcDbInfo}'}}
                    ]  
                }
               ,{
                    xtype : 'toolbar'     
                   //,height : 50     
                   ,items :      
                    [     
                        {xtype:'component' , html:['&nbsp;','테이블검색','&nbsp;']}             
                       ,{xtype:'textfield' , name:'srcTabNm' , flex : 1, bind :{value:'{srcTabNm}'}
                            , emptyText:'테이블한글명을 입력하세요' , enableKeyEvents: true 
                            ,listeners:{afterrender:function(field) {field.focus();} , specialkey: 'srcTabListGridBtn'}
                        }                                             
                       ,{xtype:'button' , text:'검색' , handler:'srcTabListGridBtn' , iconCls:'x-fa fa-gift'}
                    ]  
                }             
                
              ]     
          }     
          //-------------------------------------------     
          // grid     
          //-------------------------------------------     
          ,{     
               xtype      : 'grid'     
              ,itemId     : 'srcTabListGrid'     
              ,height     : 250 , frame: true , columnLines : true     
              ,viewConfig : {stripeRows:false} //,enableTextSelection: true,markDirty: false
              ,listeners : {
                  celldblclick : 'tabGrid'
               }
              ,columns    : {
                  defaults: {style:'text-align:center' , align:'center'}             
                 ,items:   
                  [
                    {text:'SRC소유자'         , dataIndex:'OWNER'    , width:100  }
                   ,{text:'SRC테이블명'       , dataIndex:'TAB_NM'   , width:120      }
                   ,{text:'SRC테이블한글명'   , dataIndex:'TAB_HNM'  , flex : 1  , align:'left'  }
                  ]
               }
              ,bind:{store:'{srcTabList}'}     

           }     
          ]     
     }
     //-------------------------------------------
     // 1-2단계 : 소스 테이블 검색 패널          
     //-------------------------------------------          
    ,{          
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
                     ,{xtype:'commCombo' , itemId:'TAR_DB_CONN_CD' , flex : 1, bind :{value:'{tarDbConn_CD}'} , listeners:{select:'tarDbConnComboChg'}}
                     ,{xtype:'component' , html:['&nbsp;&nbsp;&nbsp;','DB설명','&nbsp;']}
                     ,{xtype:'textfield' , name:'tarDbInfo' , flex : 1, bind :{value:'{tarDbInfo}'}}
                   ]  
               }
              ,{
                   xtype : 'toolbar'     
                  //,height : 50     
                  ,items :      
                   [     
                       {xtype:'component' , html:['&nbsp;','테이블검색','&nbsp;']}             
                      ,{xtype:'textfield' , name:'tarTabNm' , flex : 1, bind :{value:'{tarTabNm}'}
                           , emptyText:'테이블한글명을 입력하세요' , enableKeyEvents: true 
                           ,listeners:{afterrender:function(field) {field.focus();} , specialkey: 'tarTabListGridBtn'}
                       }                                             
                      ,{xtype:'button' , text:'검색' , handler:'tarTabListGridBtn' , iconCls:'x-fa fa-gift'}
                   ]  
               }             
               
             ]     
         }     
         //-------------------------------------------     
         // grid     
         //-------------------------------------------     
         ,{     
              xtype      : 'grid'     
             ,itemId     : 'tarTabListGrid'     
             ,height     : 250 , frame: true , columnLines : true     
             ,viewConfig : {stripeRows:false} //,enableTextSelection: true,markDirty: false
             ,listeners : {
                 celldblclick : 'tabGrid'
              }
             ,columns    : {
                 defaults: {style:'text-align:center' , align:'center'}             
                ,items:   
                 [
                   {text:'TAR소유자'         , dataIndex:'OWNER'    , width:100  }
                  ,{text:'TAR테이블명'       , dataIndex:'TAB_NM'   , width:120      }
                  ,{text:'TAR테이블한글명'   , dataIndex:'TAB_HNM'  , flex : 1  , align:'left'  }
                 ]
              }
            ,bind:{store:'{tarTabList}'}     

          }     
        ]  
     }          
    ]    
 });
