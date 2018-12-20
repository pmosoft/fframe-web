Ext.define('fframe.app.main.TopMenu', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.topMenu',
    region : 'north',
    title : 'FFRAME',
    //split: true,
    //collapsible: true,        
    bodyBorder: false,
    //height : 80,
    header : false,
    items : [{
        xtype : 'toolbar',
        style:'border-color:#99BBE8;background-color:#D3E1F1 !important;',
        items : [
        {
            xtype : 'label',
            html : '<h2>FFRAME</h2>'
        },'->',
        {
            xtype : 'button',
            text : 'xxx님',
            menu : [{
                text : '비밀번호변경'
            },{
                text : '로그아웃'
            }]
        }]
    }]
});