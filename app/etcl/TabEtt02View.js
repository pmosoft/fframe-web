Ext.define('fframe.app.etcl.TabEtt02View', {
    extend     : 'Ext.form.Panel'
   ,xtype      : 'tabEtt02'
   ,controller : 'tabEtt'
   ,viewModel  : 'tabEtt'
   //-------------------------------------------
   // 2단계 : 소스 테이블 데이터 출력
   //-------------------------------------------
   ,title : '2단계 : 소스 테이블 데이터 출력'   
   ,flex: 1     
   ,margin: '0 10 0 0'              
   //,layout: { type: 'hbox', align: 'stretch'}         
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
           {xtype:'button' , text:'정합성체크' ,  handler:'samChkBtn' , iconCls:'x-fa fa-gift'}
          ,{xtype:'button' , text:'테이블샘플반영' , handler:'samChk2Btn' , iconCls:'x-fa fa-gift'}
          ,{xtype:'button' , text:'테이블샘플추출' , handler:'samChk21Btn' , iconCls:'x-fa fa-gift'}
          ,{xtype:'component' , html:['&nbsp;','컬럼갯수','&nbsp;&nbsp;']}
          ,{xtype:'textfield' , name:'colCnt' , width:50, bind :{value:'{colCnt}'}}
          ,{xtype:'component' , html:['&nbsp;','구분자갯수','&nbsp;&nbsp;']}
          ,{xtype:'textfield' , name:'delimeterCnt' , width:50, bind :{value:'{delimeterCnt}'}}
          ,'->'
          ,{xtype:'button' , text:'로딩' , handler:'samSelBtn' , iconCls:'x-fa fa-gift'}
          ,{xtype:'button' , text:'로딩후샘플링조회' , handler:'samSelBtn' , iconCls:'x-fa fa-gift'}
         ]
     }
     //-------------------------------------------
     // grid
     //-------------------------------------------
     ,{
          xtype      : 'grid'
         ,itemId     : 'tabGrid'
         ,height     : 550 , frame: true , columnLines : true
         ,viewConfig : {stripeRows:false} //,enableTextSelection: true,markDirty: false
         ,bind:{store:'{tabLod}'}
     
      }
    ]    
 });
