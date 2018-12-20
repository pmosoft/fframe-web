/**
 * 사용자 등록, 보기
 */
Ext.define('fframe.app.syst.usr.UsrRegView', {
    extend: 'Ext.window.Window',
    xtype: 'UsrReg',
    controller: 'UsrReg',
    viewModel: 'UsrReg',    
    title : '사용자 등록',
    frame: true,
    width: 400,
    bodyPadding: 10,
    layout: 'form',
    //자동으로 띄워주는옵션 
    autoShow : true, 
    //닫기버튼표출여부 
    closable : true, 
    //최대화면버튼표출여부 
    maximizable : true, 
    //모달창 옵션(true/false) 
    //false일경우 단순 레이어 팝 //true일 경우 뒷단에 있는 버튼등 적용 불
    modal:true, 
    //리사이즈 가능옵션(true/false) 
    resizable : true, 
    //타이틀 위치 정렬 : left,center,right 
    titleAlign : 'center', 
    buttonAlign:'center',
    listeners : {
    	boxready : 'initBtn'
	},  
    items: [ 
//     {xtype:'textfield'     , name:'USR_ID'    , fieldLabel:'아이디'        , bind:{value:'{USR_ID}'}}
//    ,{xtype:'textfield'     , name:'USR_EMAIL' , fieldLabel:'이메일'        , bind:{value:'{USR_EMAIL}'}}
//    ,{xtype:'textfield'     , name:'USR_PW'    , fieldLabel:'비밀번호'      , bind:{value:'{USR_PW}'} , inputType:'password'}
//    ,{xtype:'textfield'     , name:'USR_PW2'   , fieldLabel:'비밀번호 확인' , bind:{value:'{USR_PW2}'} , inputType:'password'}
//    ,{xtype:'textfield'     , name:'USR_NM'    , fieldLabel:'성명'          , bind:{value:'{USR_NM}'}}                            
//    ,{xtype:'numberfield'   , name:'USR_AGE'   , fieldLabel:'나이'          , bind:{value:'{USR_AGE}'} , minValue:0 , maxValue:100}
//    ,{xtype:'checkboxfield' , name:'USE_YN'     , fieldLabel:'사용여부'      , bind:{value:'{USE_YN}'}}
//    ,{xtype:'hiddenfield'   , name:'REG_DT'     , fieldLabel:'등록일시'      , bind:{value:'{REG_DT}'}}
//    ,{xtype:'hiddenfield'   , name:'REG_Usr'   , fieldLabel:'등록자'        , bind:{value:'{REG_Usr}'}}
//    ,{xtype:'displayfield'  , name:'UPD_DT'     , fieldLabel:'변경일시'      , bind:{value:'{UPD_DT}'}}
//    ,{xtype:'displayfield'  , name:'UPD_Usr'   , fieldLabel:'변경자'        , bind:{value:'{UPD_Usr}'}}

     {xtype:'textfield'     , name:'USR_ID'    , bind:{value:'{USR_ID}'}    , fieldLabel:'아이디'        }
    ,{xtype:'textfield'     , name:'USR_EMAIL' , bind:{value:'{USR_EMAIL}'} , fieldLabel:'이메일'        }
    ,{xtype:'textfield'     , name:'USR_PW'    , bind:{value:'{USR_PW}'}    , fieldLabel:'비밀번호'      , inputType:'password'}
    ,{xtype:'textfield'     , name:'USR_PW2'   , bind:{value:'{USR_PW2}'}   , fieldLabel:'비밀번호 확인' , inputType:'password'}
    ,{xtype:'textfield'     , name:'USR_NM'    , bind:{value:'{USR_NM}'}    , fieldLabel:'성명'          }                            
    ,{xtype:'numberfield'   , name:'USR_AGE'   , bind:{value:'{USR_AGE}'}   , fieldLabel:'나이'          , minValue:0 , maxValue:100}
    ,{xtype:'checkboxfield' , name:'USE_YN'     , bind:{value:'{USE_YN}'}     , fieldLabel:'사용여부'      }
    ,{xtype:'hiddenfield'   , name:'REG_DT'     , bind:{value:'{REG_DT}'}     , fieldLabel:'등록일시'      }
    ,{xtype:'hiddenfield'   , name:'REG_Usr'   , bind:{value:'{REG_Usr}'}   , fieldLabel:'등록자'        }
    ,{xtype:'displayfield'  , name:'UPD_DT'     , bind:{value:'{UPD_DT}'}     , fieldLabel:'변경일시'      }
    ,{xtype:'displayfield'  , name:'UPD_Usr'   , bind:{value:'{UPD_Usr}'}   , fieldLabel:'변경자'        }
    
    
//  	 {xtype:'textfield'     , name:'USR_ID'    , fieldLabel:'아이디'}
//	,{xtype:'textfield'     , name:'USR_EMAIL' , fieldLabel:'이메일'}
//	,{xtype:'textfield'     , name:'USR_PW'    , fieldLabel:'비밀번호' , inputType:'password'}
//	,{xtype:'textfield'     , name:'USR_PW2'   , fieldLabel:'비밀번호 확인' , inputType:'password'}
//	,{xtype:'textfield'     , name:'USR_NM'    , fieldLabel:'성명'}                            
//	,{xtype:'numberfield'   , name:'USR_AGE'   , fieldLabel:'나이' , minValue:0 , maxValue:100}
//	,{xtype:'checkboxfield' , name:'USE_YN'     , fieldLabel:'사용여부' , boxLabel:'',checked:true}
//	,{xtype:'hiddenfield'   , name:'REG_DT'     , fieldLabel:'등록일시' , value:'<span style="color:green;"></span>'}
//	,{xtype:'hiddenfield'   , name:'REG_Usr'   , fieldLabel:'등록자'  , value:'<span style="color:green;"></span>'}
//	,{xtype:'displayfield'  , name:'UPD_DT'     , fieldLabel:'변경일시' , value:'<span style="color:green;">2017.07.03 16:40:20</span>'}
//	,{xtype:'displayfield'  , name:'UPD_Usr'   , fieldLabel:'변경자', value:'<span style="color:green;">admin</span>'}
    
    ],
    buttons: [
      {name:'initBtn' , text:'초기화' , handler:'initBtn'}
     ,{name:'saveBtn' , text:'저장'  , handler:'saveBtn'}
     ,{name:'delBtn'  , text:'삭제'  , handler:'delBtn'}
     ,{name:'closeBtn', text:'닫기'  , handler:'closeBtn'}
    ]
});