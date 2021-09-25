// nav

module.exports = [
    { text: '主页', link: '/' },

    {
        text: '数学',
        link: '/math/',
        items: [
            { text: '线性代数', link: '/math/linear_algebra/' },
            { text: '最优化理论', link: '/math/optimization/' },
            { text: '概率论', link: '/math/probabilistic/'},
        ]
    },

    {
        text: '机器学习',
        link: '/machine_learning/',
    },

    {
        text: '强化学习',
        link: '/RL/',
    },

    {
        text: '计算机基础',
        link: '/CS/',
    },

    {
        text: '关于',
        link: '/about/',
        items: [
            { text: '作者介绍', link: '/about/resume.md' },
            { text: '联系方式', link: '/about/contact.md' },
        ]
    },

    { text: 'Github', link: 'https://github.com/Liouliooo/Blog' },
]
