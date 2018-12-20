Ext.define('fframe.app.dams.table.TabColListController', {
     extend : 'Ext.app.ViewController'
    ,alias : 'controller.tabColList'
    /**********************************************************
     * Main Event
     *********************************************************/    

    ,comboLoad : function(obj){
         this.dbComboLoad(obj);
         this.dbusrComboLoad(obj);
         this.tabComboLoad(obj);
     }﻿
    /****************
     * DB명 코드 로드
     ****************/    
    ,dbComboLoad : function(obj){
        var view = this.getView(); var viewModel = view.getViewModel(); var store = viewModel.getStore(view['xtype']);
        var combo = view.down("#DB_CONN_CD");
        combo.store.getProxy().setExtraParam("CD_ID_NM",combo.itemId);
        combo.getStore().load({
            callback : function(data,result,success){
                if(success) {
                    result = Ext.JSON.decode(result._response.responseText);
                    data = result['data'];
                    console.log("combo.display="+combo.display);
                    
                    for (var i = 0; i < data.length; i++) {
                        if(data[i].CD == combo.value) {
                            viewModel.set("DB_CONN_CD"    , data[i].CD   );
                            viewModel.set("DB_CONN_CD_NM" , data[i].CD_NM);
                        }
                    }                    
                }
            }
        })
     }﻿        
     /****************
      * DB명 코드 선택
      ****************/    
     ,dbComboSel : function(obj) {
         var view = this.getView(); var viewModel = view.getViewModel();
         var store = viewModel.getStore(view['xtype']);
         var combo = view.down("#DB_CONN_CD");
         var records = combo.store.getRange(); 
         var j = 0;
         for (var i = 0; i < records.length; i++) {
             if(records[i].data.CD == combo.value) {
                 viewModel.set("DB_CONN_CD"     ,records[i].data.CD);
                 viewModel.set("DB_CONN_CD_NM"  ,records[i].data.CD_NM);
             }
         }
         //console.log("commCombo.store.getAt(0).get('value')"+commCombo.store.getAt(0).get('value'));
      }
     
     /*******************
      * DB유저 코드 로드
      *******************/    
     ,dbusrComboLoad : function(obj){
         var view = this.getView(); var viewModel = view.getViewModel(); var store = viewModel.getStore(view['xtype']);
         var combo = view.down("#DB_USR_UCD");
         combo.store.getProxy().setExtraParam("CD_ID_NM",combo.itemId);
         combo.getStore().load({
             callback : function(data,result,success){
                 if(success) {
                     result = Ext.JSON.decode(result._response.responseText);
                     data = result['data'];
                     //combo.setValue(data[0].CD);                    
                     for (var i = 0; i < data.length; i++) {
                         if(data[i].CD == combo.value) {
                             viewModel.set("DB_USR_UCD"    ,data[i].CD);
                             viewModel.set("DB_USR_UCD_NM" , data[i].CD_NM);
                         }
                     }                    
                 }
             }
         })
      }﻿        
     
      /*******************
       * DB유저 코드 선택
       *******************/    
      ,dbusrComboSel : function(obj) {
          var view = this.getView(); var viewModel = view.getViewModel();
          var store = viewModel.getStore(view['xtype']);
          var combo = view.down("#DB_USR_UCD");
          var records = combo.store.getRange(); 
          var j = 0;
          for (var i = 0; i < records.length; i++) {
              if(records[i].data.CD == combo.value) {
                  viewModel.set("DB_USR_UCD"     ,records[i].data.CD);
                  viewModel.set("DB_USR_UCD_NM"  ,records[i].data.CD_NM);
              }
          }
          //console.log("commCombo.store.getAt(0).get('value')"+commCombo.store.getAt(0).get('value'));
       }      
     
      /****************
       * 테이블 코드 로드
       ****************/    
      ,tabComboLoad : function(obj){
          var view = this.getView(); var viewModel = view.getViewModel(); var store = viewModel.getStore(view['xtype']);
          var combo = view.down("#TAB_COL_UCD");
          combo.store.getProxy().setExtraParam("CD_ID_NM",combo.itemId);
          combo.getStore().load({
              callback : function(data,result,success){
                  if(success) {
                      result = Ext.JSON.decode(result._response.responseText);
                      data = result['data'];
                      //combo.setValue(data[0].CD);                    
                      for (var i = 0; i < data.length; i++) {
                          if(data[i].CD == combo.value) {
                              viewModel.set("TAB_COL_UCD"     ,data[i].CD);
                              viewModel.set("TAB_COL_UCD_NM"  ,data[i].CD_ID_NM);
                              
                          }
                      }                    
                  }
              }
          })
       }﻿        
          
      /*********************
       * 테이블 코드 선택
       *********************/    
      ,tabComboSel : function(obj) {
          var view = this.getView(); var viewModel = view.getViewModel();
          var store = viewModel.getStore(view['xtype']);
          var combo = view.down("#TAB_COL_UCD");
          var records = combo.store.getRange(); 
          var j = 0;
          console.log("combo.value="+combo.value);
          for (var i = 0; i < records.length; i++) {
              if(records[i].data.CD == combo.value) {
                  viewModel.set("TAB_COL_UCD_NM" ,records[i].data.CD_NM);
                  viewModel.set("TAB_COL_UCD"    ,records[i].data.CD);
                  viewModel.set("searchKeyCombo" ,records[i].data.CD_NM);
              }
          }
          //console.log("commCombo.store.getAt(0).get('value')"+commCombo.store.getAt(0).get('value'));
       }
      
        
    /***************
     * 조회
     ***************/    
    ,selBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();  var store = viewModel.getStore(view['xtype']);
        
        console.log('value ' + Ext.getCmp('tabChk').getValue());        
        store.proxy.setUrl("/dams/table/selectTabColList");
        store.getProxy().setExtraParam("DB_CONN_CD_NM",viewModel.get("DB_CONN_CD_NM"));
        store.getProxy().setExtraParam("DB_USR_UCD_NM",viewModel.get("DB_USR_UCD_NM"));
        store.getProxy().setExtraParam("searchKeyCombo",viewModel.get("searchKeyCombo"));
        store.getProxy().setExtraParam("searchValue",viewModel.get("searchValue"));
        store.getProxy().setExtraParam("tabChk",Ext.getCmp('tabChk').getValue());
        store.load({
            callback : function(data){
                console.log(data);
            }
        });

     }
    ,searchBtn : function(f,e,op) {
        if (e.getKey() == e.ENTER) {
            this.selBtn();
        }
     }
    ,insBtn : function(btn) {
    	var userReg = Ext.create("fframe.dams.table.TabColRegView");
    	userReg.show();
     }

    /**********************************************************
     * Grid
     *********************************************************/    
    ,setGridHeight : function(obj){
        obj.down("grid").setHeight(Ext.Element.getViewportHeight()-180);
     }
    
    /**********************************************************
     * Clipboard
     *********************************************************/    
 //   ,getSelectionModel: function () {
//        var grid = this.getView().down("grid");
//        return this.getView().down("grid").getSelectionModel();
//     }
 //   ,onRefresh: function () {
//        this.extBtn(this.getView().down("button"));
//     }
 //   ,toggleRowSelect: function(button, pressed) {
//        var sel = this.getSelectionModel();
//        sel.setRowSelect(pressed);
//     }
 //   ,toggleCellSelect: function(button, pressed) {
//        var sel = this.getSelectionModel();
//        sel.setCellSelect(pressed);
//     }
 //   ,toggleColumnSelect: function(button, pressed) {
//        var sel = this.getSelectionModel();
//        sel.setColumnSelect(pressed);
//     }    
     
 });

