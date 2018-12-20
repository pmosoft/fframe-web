/*******************************************************************************
@title:메타 테이블 정보 추출 
@description-start
 1. 메타테이블 정보 추출
   - 콤보박스에서 DB선택하면 DB접속정보를 코드 및 코드확장에서 가져온다
   - 추출버튼 클릭하면 그리드에 출력
 2. 비교기능
   - 추출된 테이블 정보와 현재 저장된 테이블 정보를 비교하여 변경내용을 표시
 3. 테이블정보삭제
   - 저장된 테이블 정보를 삭제한다
 4. 테이블정보 반영
   - 신규 및 변경 메타테이블정보를 저장한다
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
Ext.define('fframe.app.util.SynSubtitleView', {
    extend     : 'Ext.form.Panel'
   ,xtype      : 'synSubtitle'
   ,alias: 'widget.synSubtitle'
   ,controller : 'synSubtitle'
   ,viewModel  : 'synSubtitle'
   //,listeners  : { resize : 'setGridHeight'}
   //-------------------------------------------
   // titletoolbar
   //-------------------------------------------
   ,title : '메타 테이블 정보 추출'
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
         ,{xtype:'filefield' , buttonText:'자국어자막' , name:'motherSubtileFile' , buttonOnly:false , allowBlank:false , buttonConfig:{iconCls:'fa-upload'} 
                             , listeners:{afterrender:'multiple' , change:'excelUpload'}
          }                             
         ,{xtype:'filefield' , buttonText:'외국어자막' , name:'forienSubtileFile' , buttonOnly:false , allowBlank:false , buttonConfig:{iconCls:'fa-upload'} 
                             , listeners:{afterrender:'multiple' , change:'excelUpload'}
          }                             
        ]
     }
   ]
});
