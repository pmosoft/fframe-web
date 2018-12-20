Ext.define('fframe.app.main.LeftMenu', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.leftMenu',
    requires: [
        'fframe.app.main.LeftMenuViewModel',
        'Ext.tree.View'
    ],
    viewModel: {
        type: 'mainleftmenu'
    },
    defaultListenerScope: true,
    width: 150,
    title: 'My Tree Panel',
            align:'center',
//    layout: {            
//            align:'center'
//        },    
    
    columns: [{
        xtype: 'treecolumn',
        dataIndex: 'text',
        flex: 1,
        align: 'end'
    }],            
    root : {
        expanded : true,
        children : [ {
            text : '유저',
            //iconCls : 'x-fa fa-gift',
            expanded : false,
            children : [ {
                text : '유저목록',
                leaf : true,
                pgmClass: 'fframe.app.syst.usr.UsrListView',
                pgmAlias: 'UsrList'
            } ]
        }, {
            text : '메타',
            //iconCls : 'x-fa fa-gift',
            expanded : false,
            children : [ 
            {
                text : '표준용어',
                pgmClass: 'fframe.app.dams.term.TermListView',
                pgmAlias: 'termList',
                leaf : true
            },{
                text : '표준용어추출',
                pgmClass: 'fframe.app.dams.term.ExtTermListView',
                pgmAlias: 'extTermList',
                leaf : true
            },{
                text : '약어',
                pgmClass: 'fframe.app.dams.abbr.AbbrListView',
                pgmAlias: 'abbrList',
                leaf : true
            },{
                text : '인포타입',
                pgmClass: 'fframe.app.dams.info.InfoListView',
                pgmAlias: 'infoList',
                leaf : true
            },{
                text : '패키지',
                pgmClass: 'fframe.app.dams.pack.PackListView',
                pgmAlias: 'packList',
                leaf : true
            }]
        }, {
            text : '테이블',
            //iconCls : 'x-fa fa-gift',
            expanded : true,
            children : [ 
            {
                text : '테이블컬럼목록',
                pgmClass: 'fframe.app.dams.table.TabColListView',
                pgmAlias: 'tabColList',
                leaf : true
            },{
                text : '테이블목록',
                pgmClass: 'fframe.app.dams.table.TabListView',
                pgmAlias: 'tabList',
                leaf : true
            },{
                text : '테이블조회',
                pgmClass: 'fframe.app.dams.table.TabQryListView',
                pgmAlias: 'tabQryList',
                leaf : true
            },{
                text : '테이블정보추출',
                pgmClass: 'fframe.app.dams.table.ExtMetaTabColListView',
                pgmAlias: 'extMetaTabColList',
                leaf : true
            } ]
        }, {
            text : '코드',
            //iconCls : 'x-fa fa-gift',
            expanded : false,
            children : [ 
            {
                text : '코드목록',
                pgmClass: 'fframe.app.dams.code.CodeListView',
                pgmAlias: 'codeList',
                leaf : true
            },{
                text : '코드등록',
                pgmClass: 'fframe.app.dams.code.CodeRegListView',
                pgmAlias: 'codeRegList',
                leaf : true 
            },{
                text : '코드확장목록',
                pgmClass: 'fframe.app.dams.code.CodeExtListView',
                pgmAlias: 'codeExtList',
                leaf : true
            },{
                text : '코드확장등록',
                pgmClass: 'fframe.app.dams.code.CodeExtRegListView',
                pgmAlias: 'codeExtRegList',
                leaf : true
            }
            ]
        }, {
            text : 'ETCL',
            //iconCls : 'x-fa fa-shopping-cart',
            expanded : false,
            selectable : false,
            children : [ 
            {
                text : 'CSV로딩',
                pgmClass: 'fframe.app.etcl.SamfileLodView',
                pgmAlias: 'samfileLod',
                leaf : true
            },{
                text : '단일테이블ETT',
                pgmClass: 'fframe.app.etcl.TabEttView',
                pgmAlias: 'tabEtt',
                leaf : true
            },{
                text : '복수테이블ETT',
                pgmClass: 'fframe.app.etcl.TabsEttiew',
                pgmAlias: 'tabsEtt',
                leaf : true
            },{
                text : '쿼리ETT',
                pgmClass: 'fframe.app.dams.info.InfoListView',
                pgmAlias: 'sqlEtt',
                leaf : true
            },{
                text : '엑셀로딩',
                pgmClass: 'fframe.app.dams.info.InfoListView',
                pgmAlias: 'excelLod',
                leaf : true
            }
            ]
        }, {
            text : '거버넌스',
            //iconCls : 'x-fa fa-shopping-cart',
            expanded : false,
            selectable : false,
            children : [ 
            {
                text : '화면목록정합성',
                pgmClass: 'fframe.app.dams.info.InfoListView',
                pgmAlias: 'samfileLod',
                leaf : true
            },{
                text : '화면주석정합성',
                pgmClass: 'fframe.app.dams.info.InfoListView',
                pgmAlias: 'sqlEtt',
                leaf : true
            },{
                text : '화면소스표준화',
                pgmClass: 'fframe.app.dams.info.InfoListView',
                pgmAlias: 'sqlEtt',
                leaf : true
            },{
                text : '배치목록정합성',
                pgmClass: 'fframe.app.dams.info.InfoListView',
                pgmAlias: 'sqlEtt',
                leaf : true
            },{
                text : '배치주석정합성',
                pgmClass: 'fframe.app.dams.info.InfoListView',
                pgmAlias: 'sqlEtt',
                leaf : true
            },{
                text : '배치소스표준화',
                pgmClass: 'fframe.app.dams.info.InfoListView',
                pgmAlias: 'sqlEtt',
                leaf : true
            }    
            ]
        }, {
            text : '소스생성',
            //iconCls : 'x-fa fa-shopping-cart',
            expanded : false,
            selectable : false,
            children : [ 
            {
                text : '소스복사',
                pgmClass: 'fframe.app.gens.GenPgmByCopyView',
                pgmAlias: 'genPgmByCopy',
                leaf : true
            },{
                text : '탬플릿이용',
                pgmClass: 'fframe.app.gens.GenPgmByTmplView',
                pgmAlias: 'genPgmByTmpl',
                leaf : true
            }]
        }, {
            text : '메뉴',
            //iconCls : 'x-fa fa-shopping-cart',
            expanded : false,
            selectable : false,
            children : [ {
                text : '메뉴목록',
                pgmClass: 'fframe.app.dams.info.InfoListView',
                pgmAlias: 'UserRegView',
                leaf : true
            } ]
        }, {
            text : '로그',
             //iconCls : 'x-fa  fa-users',
            expanded : false,
            selectable : false,
            children : [ {
                text : '로그목록',
                pgmClass: 'fframe.app.dams.info.InfoListView',
                pgmAlias: 'Test01',
                leaf : true
            } ]
        }, {
            text : '유틸',
             //iconCls : 'x-fa  fa-users',
            expanded : false,
            selectable : false,
            children : [ {
                text : '자막합성',
                pgmClass: 'fframe.app.util.SynSubtitleView',
                pgmAlias: 'synSubtitleView',
                leaf : true
            } ]
        } ]
    },
    rootVisible: false,

    listeners: {
        itemclick: 'onTreepanelItemClick'
    },

    onTreepanelItemClick: function(dataview, record, item, index, e, eOpts) {
        console.log("111111");
        if (record.get('leaf') === true) {
            var mainTabObj = Ext.ComponentQuery.query('#maintab');
            // var centerpanel = this.AccountMain().down('maintab');
            var pgm = {
                pgmClass: 'Ext.panel.Panel',
                pgmAlias: 'panel'
            };
            
            if (record.get('pgmClass')) {
                pgm = {
                    pgmClass: record.get('pgmClass'),
                    pgmAlias: record.get('pgmAlias')
                };
            }

            var tab = mainTabObj[0].down('[itemId=' + pgm.pgmClass + ']');

            
        console.log("2");
            
            if(!tab){
                Ext.require(pgm.pgmClass, function () {
                    var className = Ext.ClassManager.getNameByAlias('widget.' + pgm.pgmAlias);
                    var ViewClass = Ext.ClassManager.get(pgm.pgmClass);
        console.log("3");
                    
                    tab = new ViewClass();
        console.log("4");
                    if (Ext.isEmpty(record.get('pgmClass'))) {
                        tab.add({
                            xtype: 'TemplateA'
                        });
                    }
                    tab.title = record.get('text');
                    tab.itemId = pgm.pgmClass;
                    tab.closable = true;
        console.log("5");                    
                    mainTabObj[0].add(tab);
        console.log("6");
                    mainTabObj[0].setActiveItem(tab);
                });
            }
        console.log("7");            
            mainTabObj[0].setActiveItem(tab);
        console.log("8");            

        }
    }

});