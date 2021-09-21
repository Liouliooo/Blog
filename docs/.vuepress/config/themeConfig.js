// theme config

const _nav = require('./nav.js')
const _sidebar = require('./sidebar.js');

module.exports = {
    logo: '/images/hero.png',
    nav: _nav,
    sidebarDepth: 2,
    sidebar: _sidebar,

    mdEnhance: {
        tex: true,
    },

    lastUpdated: '最近更新',
}
