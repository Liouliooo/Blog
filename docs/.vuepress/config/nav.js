// nav

module.exports = [
    { text: '主页', link: '/' },

    {
        text: '数学',
        link: '/math/',
        items: [
            { text: '线性代数', link: '/math/linear_algebra/' },
            { text: '最优化理论', link: '/math/optimization/' },
            { text: '概率论', link: '/math/probabilistic/' },
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
        text: '计算机知识',
        link: '/CS/',
    },

    {
        text: '并行计算',
        link: '/parallel_computing/',
    },

    {
        text: '自动驾驶',
        link: '/auto_driving/',
        items: [
            { text: '感知', link: '/auto_driving/perception/' },
            { text: '预测', link: '/auto_driving/prediction/' },
            { text: '规划', link: '/auto_driving/planning/' },
            { text: '控制', link: '/auto_driving/control/'},
        ]
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
