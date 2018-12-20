Ext.define('fframe.app.dams.pack.PackRegView', {
     extend:'Ext.window.Window' 
    ,xtype:'PackReg' 
    ,controller:'PackReg' 
    ,viewModel:'PackReg'    
    ,layout : 'form'
    ,modal : true 
    ,frame : true
    ,width : 400
    ,bodyPadding : 10
    ,autoShow : true 
    ,closable : true 
    ,maximizable : true 
    ,resizable : true 
    ,titleAlign : 'center' 
    ,buttonAlign:'center'
    ,listeners : { 
    	//boxready : 'initBtn'
	}
    ,title : '패키지 정보 등록'
    ,items: [ 
      {xtype:'textfield'     , name:'패키지풀명'      , bind:{value:'{PKG_FUL_NM}'} , fieldLabel:'패키지풀명'     }
     ,{xtype:'textfield'     , name:'패키지2자리명'   , bind:{value:'{PKG2_NM}'}    , fieldLabel:'패키지2자리명'  }
     ,{xtype:'textfield'     , name:'패키지3자리명'   , bind:{value:'{PKG3_NM}'}    , fieldLabel:'패키지3자리명'  }
     ,{xtype:'textfield'     , name:'패키지4자리명'   , bind:{value:'{PKG4_NM}'}    , fieldLabel:'패키지4자리명'  }
     ,{xtype:'textfield'     , name:'패키지한글명'    , bind:{value:'{PKG_HNM}'}    , fieldLabel:'패키지한글명'   }
     ,{xtype:'textfield'     , name:'패키지설명'      , bind:{value:'{PKG_DESC}'}   , fieldLabel:'패키지설명'     }
     ,{xtype:'checkboxfield' , name:'사용유무'        , bind:{value:'{USE_YN}'}     , fieldLabel:'사용유무'       }
     ,{xtype:'hiddenfield'   , name:'등록일시'        , bind:{value:'{REG_DT}'}     , fieldLabel:'등록일시'       }
     ,{xtype:'hiddenfield'   , name:'등록자'          , bind:{value:'{REG_USR_ID}'} , fieldLabel:'등록자'         }
     ,{xtype:'displayfield'  , name:'변경일시'        , bind:{value:'{UPD_DT}'}     , fieldLabel:'변경일시'       }
     ,{xtype:'displayfield'  , name:'변경자'          , bind:{value:'{UPD_USR_ID}'} , fieldLabel:'변경자'         }
     ]
    ,buttons: [
      {name:'initBtn' , text:'초기화' , handler:'initBtn'}
     ,{name:'saveBtn' , text:'저장'  , handler:'saveBtn'}
     ,{name:'delBtn'  , text:'삭제'  , handler:'delBtn'}
     ,{name:'closeBtn', text:'닫기'  , handler:'closeBtn'}
     ]
});