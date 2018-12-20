Ext.define('fframe.app.util.SynSubtitleController', {
     extend : 'Ext.app.ViewController'
    ,alias : 'controller.synSubtitle'
        
    /**********************************************************
     * Main Event
     *********************************************************/    

    /***************
     * 엑셀다운로드
     ***************/    
    ,excelDownBtn : function(viewObj) {
        var view = this.getView(); var viewModel = view.getViewModel();  var store = viewModel.getStore(view['xtype']);
        var records = store.getRange();
        
        var datar = new Array(); var jsonDataEncode = "";
        var jsonDataEncode = "";
        for (var i = 0; i < records.length; i++) {
            datar.push(records[i].data);
        }
        
        jsonDataEncode = Ext.util.JSON.encode(datar);
        
        //var jsonData = Ext.encode(Ext.pluck(store.data.items, 'data'));
        //console.log("jsonData======="+jsonData);

        Ext.Ajax.request({
             url : '/comm/excel/downloadExcel'
            ,method : 'post'
            ,params : { data:jsonDataEncode,fileNm:'tableMeta.xls'}
            ,success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    location.href = "/fframe/files/excel/tableMeta.xls";
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    return;
                }
            }
        })     
     }
    
    /***************
     * 엑셀업로드
     ***************/    
    ,excelUpload : function(obj) {
        var grid = this.lookupReference('synSubtitleGrid');
        var store = grid.getStore();
        
        var frm = obj.up("form").getForm();
        //console.log("frm.getValues()="+frm.getValues());
        if(frm.isValid()) {
            frm.submit({
                 url: '/comm/excel/uploadExcel'
                ,success : function(fp, res) {
                    var result = Ext.JSON.decode(res.response.responseText);
                    console.log("result)="+result);
                    if(result['isSuccess']){
                        store.removeAll();
                        for(var i=0;i<result.data.length;i++){
                            newRecord = Ext.data.Record.create
                            (
                             [
                              {name:'STS_NM'           ,type:'string'}
                             ,{name:'DB_NM'            ,type:'string'}
                             ,{name:'OWNER'            ,type:'string'}
                             ,{name:'TAB_NM'           ,type:'string'}
                             ,{name:'TAB_HNM'          ,type:'string'}
                             ,{name:'COL_ID'           ,type:'string'}
                             ,{name:'COL_NM'           ,type:'string'}
                             ,{name:'COL_HNM'          ,type:'string'}
                             ,{name:'DATA_TYPE_DESC'   ,type:'string'}
                             ,{name:'NULLABLE'         ,type:'string'}
                             ,{name:'PK'               ,type:'string'}
                             ,{name:'DATA_TYPE_NM'     ,type:'string'}
                             ,{name:'LEN'              ,type:'string'}
                             ,{name:'DECIMAL_CNT'      ,type:'string'}
                             ,{name:'COL_DESC'         ,type:'string'}
                             ,{name:'REG_DTM'          ,type:'string'}
                             ,{name:'REG_USR_ID'       ,type:'string'}
                             ,{name:'UPD_DTM'          ,type:'string'}
                             ,{name:'UPD_USR_ID'       ,type:'string'}
                             ]
                            );
                            newRecord.set('STS_NM'           , result.data[i].STS_NM        );
                            newRecord.set('DB_NM'            , result.data[i].DB_NM         );
                            newRecord.set('OWNER'            , result.data[i].OWNER         );
                            newRecord.set('TAB_NM'           , result.data[i].TAB_NM        );
                            newRecord.set('TAB_HNM'          , result.data[i].TAB_HNM       );
                            newRecord.set('COL_ID'           , result.data[i].COL_ID        );
                            newRecord.set('COL_NM'           , result.data[i].COL_NM        );
                            newRecord.set('COL_HNM'          , result.data[i].COL_HNM       );
                            newRecord.set('DATA_TYPE_DESC'   , result.data[i].DATA_TYPE_DESC);
                            newRecord.set('NULLABLE'         , result.data[i].NULLABLE      );
                            newRecord.set('PK'               , result.data[i].PK            );
                            newRecord.set('DATA_TYPE_NM'     , result.data[i].DATA_TYPE_NM  );
                            newRecord.set('LEN'              , result.data[i].LEN           );
                            newRecord.set('DECIMAL_CNT'      , result.data[i].DECIMAL_CNT   );
                            newRecord.set('COL_DESC'         , result.data[i].COL_DESC      );
                            newRecord.set('REG_DTM'     , ''     );
                            newRecord.set('REG_USR_ID'  , result.data[i].REG_USR_ID  );
                            newRecord.set('UPD_DTM'     , ''     );
                            newRecord.set('UPD_USR_ID'  , result.data[i].UPD_USR_ID  );
                            store.add(newRecord);
                        }    
                    } else {
                        Ext.Msg.alert("알림",result['errUsrMsg']);
                        return;
                    }
                    this.multiple;
                }
               ,failure: function(form, res) {
                    var result = Ext.JSON.decode(res.response.responseText);
                    Ext.Msg.alert('알림', result['errSysrMsg']);
                }
            });
        }
     }
    ,multiple : function(fileObj){ fileObj.fileInputEl.set({multiple:'multiple'});}        

    
    /******************
     * 업로드 저장
     *****************/    
    ,uploadInsBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();  var store = viewModel.getStore(view['xtype']);
        var grid = this.lookupReference('synSubtitleGrid');
        var records = grid.getSelectionModel().getSelection();
        var datar = new Array(); var jsonDataEncode = "";
        for (var i = 0; i < records.length; i++) {
            datar.push(records[i].data);
        }
        jsonDataEncode = Ext.util.JSON.encode(datar);
        
        Ext.Ajax.request({
             url : '/dams/table/insertExcelTabColList'
            ,method : 'post'        
            ,params : { data:jsonDataEncode}        
            ,success : function(res){        
                var result = Ext.decode(res.responseText);        
                if(result['isSuccess']){        
                    Ext.toast({  html:result['usrMsg'],title:'알림',width: 200,align:'t',timeout: 500});        
                } else {        
                    Ext.Msg.alert("알림",result['errUsrMsg']);        
                    console.log("errSysMsg="+result['errSysMsg']);        
                    return;        
                }        
            }        
            ,failure: function(form, res) {        
                var result = Ext.decode(res.responseText);        
                Ext.Msg.alert('알림', result['errUsrMsg']);        
                console.log("errSysMsg="+result['errSysMsg']);        
            }                    
        })             
        
     }    
    
     
 });

