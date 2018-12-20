Ext.define('fframe.app.gens.GenPgmByCopyModel', {
     extend : 'Ext.app.ViewModel'
    ,alias  : 'viewmodel.genPgmByCopy'
    ,data   : {
         srcPackNm     : 'fframe.app.etcl'
        ,srcPgmNm      : 'SamfileLod'
        ,tarPackNm     : 'fframe.app.etcl'
        ,tarPgmNm      : 'TabEtt'
        ,genResult     : ''
        ,CD            : '01'       
        ,CD_NM         : 'EXTJSP'       
        ,CD_HNM        : 'EXTJSP'       
        ,CD_DESC       : ''
        ,pgmPath       : ''            
     }
});


 