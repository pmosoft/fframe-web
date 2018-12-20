Ext.define('fframe.app.etcl.SamfileLodController', {
    extend : 'Ext.app.ViewController'
   ,alias : 'controller.samfileLod'
        
   /**********************************************************
    *                        Main Event
    *********************************************************/    
   /***********************
    * DB접속콤보 로드
    ***********************/    
   ,dbConnCombo : function(obj){
        var view = this.getView(); var viewModel = view.getViewModel(); var store = viewModel.getStore(view['xtype']);
        var combo = view.down("#DB_CONN_CD");
        combo.store.getProxy().setExtraParam("CD_ID_NM",combo.itemId);
        combo.getStore().load({
            callback : function(data,result,success){
                if(success) {
                    result = Ext.JSON.decode(result._response.responseText);
                    data = result['data'];
                    //combo.setValue(data[0].CD);                    
                    for (var i = 0; i < data.length; i++) {
                        if(data[i].CD == combo.value) {
                            viewModel.set("CD_ID_NM"  ,data[i].CD_ID_NM);
                            viewModel.set("CD"        ,data[i].CD);
                            viewModel.set("dbInfo"    ,data[i].CD_DESC);
                            viewModel.set("datasource",data[i].CD_PARAM1);
                            viewModel.set("dbDriver"  ,data[i].CD_PARAM2);
                            viewModel.set("dbConn"    ,data[i].CD_PARAM3);
                            viewModel.set("dbUser"    ,data[i].CD_PARAM4);
                            viewModel.set("dbPassword",data[i].CD_PARAM5);
                            viewModel.set("dbType"    ,data[i].CD_PARAM6);
                            viewModel.set("dbOwner"   ,data[i].CD_PARAM7);
                        }
                    }                    
                }
            }
        })
    }﻿        
        
   /**********************
    * DB접속콤보 변경
    *********************/     
   ,dbConnComboChg : function(obj) {
        var view = this.getView(); var viewModel = view.getViewModel();
        var store = viewModel.getStore(view['xtype']);
        var combo = view.down("#DB_CONN_CD");
        var records = combo.store.getRange(); 
        var j = 0;
        console.log("combo.value="+combo.value);
        for (var i = 0; i < records.length; i++) {
            if(records[i].data.CD == combo.value) {
                viewModel.set("CD_ID_NM"  ,records[i].data.CD_ID_NM);
                viewModel.set("CD"        ,records[i].data.CD);
                viewModel.set("dbInfo"    ,records[i].data.CD_DESC);
                viewModel.set("datasource",records[i].data.CD_PARAM1);
                viewModel.set("dbDriver"  ,records[i].data.CD_PARAM2);
                viewModel.set("dbConn"    ,records[i].data.CD_PARAM3);
                viewModel.set("dbUser"    ,records[i].data.CD_PARAM4);
                viewModel.set("dbPassword",records[i].data.CD_PARAM5);
                viewModel.set("dbType"    ,records[i].data.CD_PARAM6);
                viewModel.set("dbOwner"   ,records[i].data.CD_PARAM7);
                viewModel.set("searchKeyCombo" ,records[i].data.CD_NM);
                
            }
        }
        //console.log("commCombo.store.getAt(0).get('value')"+commCombo.store.getAt(0).get('value'));
    }

    /**************
     * 테이블 검색
     **************/    
    ,tabSelBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel(); 
        var store = viewModel.getStore('tabGrid');
        store.proxy.setUrl("/dams/table/selectMetaTabList");

        store.getProxy().setExtraParam("CD_ID_NM"  ,viewModel.data.CD_ID_NM  );
        store.getProxy().setExtraParam("CD"        ,viewModel.data.CD        );
        store.getProxy().setExtraParam("dbInfo"    ,viewModel.data.dbInfo    );
        store.getProxy().setExtraParam("datasource",viewModel.data.datasource);
        store.getProxy().setExtraParam("dbDriver"  ,viewModel.data.dbDriver  );
        store.getProxy().setExtraParam("dbConn"    ,viewModel.data.dbConn    );
        store.getProxy().setExtraParam("dbUser"    ,viewModel.data.dbUser    );
        store.getProxy().setExtraParam("dbPassword",viewModel.data.dbPassword);
        store.getProxy().setExtraParam("dbType"    ,viewModel.data.dbType);
        store.getProxy().setExtraParam("dbOwner"   ,viewModel.data.dbOwner);
        store.getProxy().setExtraParam("TAB_NM"    ,viewModel.data.TAB_NM);

        store.load({
            callback : function(data){
                console.log(data);
            }
        });
     }     
     
     /*********************************************
      * 테이블 그리드 더블 클릭 - 그리드 컬럼 세팅
      *********************************************/    
     ,tabGridDblClick : function( obj, td, cellIndex, record, tr, rowIndex, e, eOpts) {
          var view = this.getView(); var viewModel = view.getViewModel();
          var store = viewModel.getStore('tabDataGrid');
          var grid = view.down("#tabDataGrid");
          console.log("grid="+grid);
          
          store.proxy.setUrl("/dams/table/selectMetaTabColList");
          
          store.getProxy().setExtraParam("CD_ID_NM"  ,viewModel.data.CD_ID_NM  );
          store.getProxy().setExtraParam("CD"        ,viewModel.data.CD        );
          store.getProxy().setExtraParam("dbInfo"    ,viewModel.data.dbInfo    );
          store.getProxy().setExtraParam("datasource",viewModel.data.datasource);
          store.getProxy().setExtraParam("dbDriver"  ,viewModel.data.dbDriver  );
          store.getProxy().setExtraParam("dbConn"    ,viewModel.data.dbConn    );
          store.getProxy().setExtraParam("dbUser"    ,viewModel.data.dbUser    );
          store.getProxy().setExtraParam("dbPassword",viewModel.data.dbPassword);
          store.getProxy().setExtraParam("dbType"    ,viewModel.data.dbType);
          store.getProxy().setExtraParam("dbOwner"   ,viewModel.data.dbOwner);
          
          store.getProxy().setExtraParam("TAB_NM"   ,record.get("TAB_NM"));
          viewModel.set("TAB_NM"  , record.get("TAB_NM"));
              
          store.load({
              callback : function(data,result,success){
                  if(success) {
                      result = Ext.JSON.decode(result._response.responseText);
                      data = result['data'];
                      //combo.setValue(data[0].CD);
                      viewModel.set("colCnt"  , data.length);
                      
                      var fields = [];
                      for (var i = 0; i < data.length; i++) {
                          fields.push({ text: data[i].COL_HNM, dataIndex: data[i].COL_NM, align:'left' } ); 
                      }
                      grid.reconfigure(fields);   
                      store.removeAll();
                  }
              }
          });
      }

    /**********************************
     * 샘플테이블데이터  검색
     **********************************/    
   ,samSelBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel(); 
        var store = viewModel.getStore('tabDataGrid');
        var grid = view.down("#tabDataGrid");
        var gridStore = grid.getStore();
        
        store.proxy.setUrl("/dams/table/selectTabData");
        
        //console.log("viewModel.data.datasource="+viewModel.data.datasource);
        
        store.getProxy().setExtraParam("CD_ID_NM"  ,viewModel.data.CD_ID_NM  );
        store.getProxy().setExtraParam("CD"        ,viewModel.data.CD        );
        store.getProxy().setExtraParam("dbInfo"    ,viewModel.data.dbInfo    );
        store.getProxy().setExtraParam("datasource",viewModel.data.datasource);
        store.getProxy().setExtraParam("dbDriver"  ,viewModel.data.dbDriver  );
        store.getProxy().setExtraParam("dbConn"    ,viewModel.data.dbConn    );
        store.getProxy().setExtraParam("dbUser"    ,viewModel.data.dbUser    );
        store.getProxy().setExtraParam("dbPassword",viewModel.data.dbPassword);
        store.getProxy().setExtraParam("dbType"    ,viewModel.data.dbType);
        store.getProxy().setExtraParam("dbOwner"   ,viewModel.data.dbOwner);
        store.getProxy().setExtraParam("TAB_NM"    ,viewModel.data.TAB_NM);
        
        store.load({
            callback : function(data,result,success){
                result = Ext.JSON.decode(result._response.responseText);
                data = result['data'];
                console.log(data);
            }
        });
    }
   
   ,searchBtn : function(f,e,op) {
       if (e.getKey() == e.ENTER) {
           this.tabBtn();
       }
    }

    
    /**********************************************************
     * Grid
     *********************************************************/    
    ,setGridHeight : function(obj){
        obj.down("grid").setHeight(Ext.Element.getViewportHeight()-180);
     }
     
 });

