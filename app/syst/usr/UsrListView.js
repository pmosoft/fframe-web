Ext.define('fframe.app.syst.usr.UsrListView', {
     extend : 'Ext.form.Panel' 
    ,xtype:'UsrList'  
    ,controller: 'UsrList' 
    ,viewModel: 'UsrList'    
    ,listeners : {
        // boxready : 'onLoadData',
        resize : 'setGridHeight'
//      ,
//        keypress : function(textfield,eo){
//            if (eo.getCharCode() == Ext.EventObject.ENTER) {
//                //enter is pressed call the next buttons handler function here.
//                this.up('panel').down('button').handler
//            }
//        }     
     }
    //-------------------------------------------
    // titletoolbar
    //-------------------------------------------
    ,title : '사용자 조회'

    ,items : 
     [
       //-------------------------------------------
       // toolbar
       //-------------------------------------------
       {
          xtype : 'toolbar'
         ,height : 50           
         ,items : 
          [
            {
                xtype : 'combo'
               ,name : 'searchCondition'
               ,editable : false
               ,displayField : 'key'
               ,valueField : 'value'
               ,queryMode : 'local'
               // value : 'USR_NM'
               ,bind : { value : '{searchKeyCombo}'}
               ,store : {
                    fields : ['key','value'] 
                   ,data : 
                    [
                      {key : '이름'   , value : 'USR_NM'}
                     ,{key : '아이디' , value : 'USR_ID'}
                    ]
                }
            }
           ,{
                xtype : 'textfield'
               ,name : 'searchValue'
               ,emptyText : '검색어를 입력하세요'
               // ,value : 'aaaa'
               ,bind : { value : '{searchValue}' }
               ,listeners: {
                    specialkey: function(f,e) {
                        if (e.getKey() == e.ENTER) {
                        //this.getController('Usr.UsrListController').selBtn(e);
                        //fframe.app.getController('view.syst.Usr.UsrListController').selBtn(this);
                        //var ctrl = new fframe.syst.usr.UsrListController();
                        //controller.selBtn();

                        //f.up('form').getForm().submit();
                        //var selBtn = f.up('toolbar').down('button#selBtn');
                        //selBtn.fireEvent('click', selBtn, event, options);
                            
                        }
                    }
                }
          
            }
          ,'->'
          ,{xtype:'button' , text:'신규' , handler:'insBtn'}
          ,{xtype:'button' , text:'삭제' , handler:'delBtn'}
          ,{xtype:'button' , text:'조회' , handler:'selBtn'}
         ] 
       }
       //-------------------------------------------
       // grid
       //-------------------------------------------
      ,{     
            xtype : 'grid'
           ,height : 150
           ,border : true
           ,columnLines : true
           ,listeners : {
                celldblclick : function( obj, td, cellIndex, record, tr, rowIndex, e, eOpts) {
                     
                    var UsrReg = Ext.create("fframe.syst.usr.UsrRegView");
                    var viewModel = UsrReg.getViewModel();
                     
                    var USE_YN = record.get("USE_YN");
                    (USE_YN="Y")?USE_YN=true:USE_YN=false;
     
                    viewModel.set("USR_ID",record.get("USR_ID"));
                    viewModel.set("USR_EMAIL",record.get("USR_EMAIL"));
                    viewModel.set("USR_NM",record.get("USR_NM"));
                    viewModel.set("USR_AGE",record.get("USR_AGE"));
                    viewModel.set("USE_YN",USE_YN);
                    viewModel.set("REG_DT",record.get("REG_DT"));
                    viewModel.set("REG_USR_ID",record.get("REG_USR_ID"));
                    viewModel.set("UPD_DT",record.get("UPD_DT"));
                    viewModel.set("UPD_USR_ID",record.get("UPD_USR_ID"));
                     
                    UsrReg.show();
                    //console.log(record.getData());
                    //console.log(record.get("USR_ID"));                
                }
               ,itemcontextmenu : function( obj, record, item, index, e, eOpts) {
                    console.log(record.get("USR_NM"));
                }
            }
           ,columns : 
            [
              {xtype : 'rownumberer'}
              ,{dataIndex:'USR_ID'     , text:'아이디'   , style:'text-align:center' , flex:1, align:'left'}
              ,{dataIndex:'USR_EMAIL'  , text:'이메일'   , style:'text-align:center' , flex:1, align:'left'}
              ,{dataIndex:'USR_PW'     , text:'암호'     , style:'text-align:center' , flex:1, align:'left', hidden:true}
              ,{dataIndex:'USR_NM'     , text:'이름'     , style:'text-align:center' , flex:1, align:'left'}
              ,{dataIndex:'USR_AGE'    , text:'나이'     , style:'text-align:center' , flex:1, align:'left'}
              ,{dataIndex:'USE_YN'     , text:'사용여부' , style:'text-align:center' , flex:1, align:'left'}
              ,{dataIndex:'UPD_DT'     , text:'변경일시' , style:'text-align:center' , flex:1, align:'left', hidden:true}
              ,{dataIndex:'UPD_USR_ID' , text:'변경자'   , style:'text-align:center' , flex:1, align:'left', hidden:true}
            ]
           ,bind : { store : '{UsrList}'}
           ,bbar : {
                xtype : 'pagingtoolbar'
               ,plugins : 'ux-progressbarpager'
               // ,plugins : 'ux-slidingpager'
               ,display : true
            }    

       }
    ]
});
