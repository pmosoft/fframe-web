Ext.define('fframe.app.main.MainFrameView', {  
    extend : 'Ext.container.Viewport'
   ,xtype  : 'mainFrame'
   ,layout : 'border'
//    ,defaults: {
//        //collapsible: true
//        ,split: false
//        ,bodyPadding: 10
//    }
   ,items :
    [
     {
     //----------------------------- 
     // top 메뉴   
     //----------------------------- 
         xtype : 'topMenu'
     },{
     //----------------------------- 
     // left 메뉴  
     //----------------------------- 

         xtype : 'leftMenu'
         //margin: '5 0 0 5'
        ,collapsible: true
        ,title: 'Menu' 
        ,region: 'west'
        ,header : false
        ,height: Ext.Element.getViewportHeight()-80     
        ,defaults: {
            scrollable: true
         }      
        ,width : 220
         //,layout : 'border'        
        ,split: true
     },{
     //----------------------------- 
     // center 메뉴    
     //----------------------------- 
         xtype: 'tabpanel'
        ,region: 'center'
        ,itemId: 'maintab'
        ,margin: '5 5 0 0'        
        ,split : false
        ,bodyBorder: false                
        ,height: Ext.Element.getViewportHeight()-80
        ,defaults: {
           scrollable: true
         }      
        ,flex : 1
        ,items: 
         [
          {
              title: '테이블조회'
             ,closable : true
             ,xtype : 'tabQryList'
             //,itemId : 'fframe.app.dams.table.TabQryListView'
             
          }
         ]        
     }
    ]
});
