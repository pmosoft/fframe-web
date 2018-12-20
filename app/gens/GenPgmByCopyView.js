/*******************************************************************************
@title:코드생성 및 코드복사 
@description-start
@description-end  
@developer:피승현
@progress-rate:100%
@update-history-start
-------------------------------------------------------------------------------
|   날짜   |수정자|내용
-------------------------------------------------------------------------------
|2017.10.01|피승현|최초개발
|2017.10.10|피승현|주석정비
-------------------------------------------------------------------------------
@update-history-end
********************************************************************************/
Ext.define('fframe.app.gens.GenPgmByCopyView', {
     extend      : 'Ext.form.Panel'
    ,xtype       : 'genPgmByCopy'
    ,controller  : 'genPgmByCopy'
    ,viewModel   : 'genPgmByCopy'    
    ,title       : '복사로 프로그램 생성'
    ,titleAlign  : 'center' 
    ,buttonAlign : 'center'
    ,bodyPadding : 10
    ,defaults    : {anchor:'100%' , labelWidth:100}    
    ,listeners  : { boxready:'comboLoad'}
    ,items:
     [ 
      //-------------------------------------------
      // toolbar
      //-------------------------------------------
      ,{xtype : 'fieldcontainer' , layout: 'hbox' , height : 10}    
      ,{
          xtype : 'fieldcontainer'
         ,layout: 'hbox'             
         ,height : 50
         ,items : 
          [
            {xtype:'displayfield' , value:'프로그램 종류  ', width:100}
           ,{xtype:'commCombo' , itemId:'SRC_COPY_TY_CD' , bind :{value:'{CD}'} , listeners:{select:'codeExt'} , width:150}
           ,{xtype:'displayfield' , value:'  ' , width:10}
           ,{xtype:'textfield' , name:'SRC_COPY_TY_DESC' , bind :{value:'{CD_DESC}'} , width:480}
         ] 
        }      
      ,{
         xtype : 'fieldcontainer'
        ,layout: 'hbox'             
        ,height : 50
        ,items : 
         [
           {xtype:'displayfield' , value:'복사 패키지명  ', width:100}
          ,{xtype:'textfield'    , name:'srcPackNm' , bind:{value:'{srcPackNm}'} , width:250 , emptyText:'패키지명을 입력하세요(예:net.pmosoft.fframe.dams.code)'}
          ,{xtype:'displayfield' , value:'  ' , width:20}
          ,{xtype:'displayfield' , value:'복사 프로그램명', width:120}
          ,{xtype:'textfield'    , name:'srcPgmNm' , bind:{value:'{srcPgmNm}'} , width:250 , emptyText:'프로그램명을 입력하세요(예:CodeList)'}
        ] 
       }      
      ,{
           xtype : 'fieldcontainer'
          ,layout: 'hbox'             
          ,height : 50
          ,items : 
           [
            ,{xtype:'displayfield' , value:'생성 패키지명  ' , width:100}
            ,{xtype:'textfield'    , name:'tarPackNm' , bind:{value:'{tarPackNm}'} , width:250 , emptyText:'패키지명을 입력하세요(예:net.pmosoft.fframe.dams.code)'}
            ,{xtype:'displayfield' , value:'  ' , width:20}
            ,{xtype:'displayfield' , value:'생성 프로그램명', width:120}
            ,{xtype:'textfield'    , name:'tarPgmNm' , bind:{value:'{tarPgmNm}'} , width:250 , emptyText:'프로그램명을 입력하세요(예:CodeList)'}
          ] 
       }
      ,{
          xtype      : 'textareafield'
         ,fieldLabel : '생성내역'             
         ,name       : 'genResult'
         ,height     : 400    
         ,bind       : {value:'{genResult}'}
      }]
    ,buttons:[
               {name:'copyBtn' , text:'생성'  , handler:'copyBtn'}
             ]
    
});