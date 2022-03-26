// nav

module.exports = [
    { text: '主页', link: '/' },

    {
        text: '数学',
        link: '/math/',
        items: [
            { text: '线性代数', link: '/math/linear_algebra/' },
            { text: '最优化理论', link: '/math/optimization/' },
            { text: '数理统计学', link: '/math/probabilistic/' },
        ]
    },

    {
        text: '机器学习',
        link: '/machine_learning/',
        items: [
            { text: '无监督学习', link: '/machine_learning/unsupervised/'},
            { text: '频率派方法', link: '/machine_learning/frequentist/' },
            { text: '贝叶斯方法', link: '/machine_learning/bayesian/' },
            { text: '强化学习', link: '/machine_learning/reinforcement_learning/' },
            { text: '其他', link: '/machine_learning/others/' },
        ]
    },

    {
        text: '计算机知识',
        link: '/cs/',
        items: [
            { text: '数据结构和算法', link: '/cs/algorithm/' },
            { text: '数字图像处理', link: '/cs/digital_image_processing/' },
            { text: 'Linux', link: '/cs/linux/' },
            { text: '其他', link: '/cs/others/' },
        ]
    },

    {
        text: '并行计算',
        link: '/parallel_computing/',
    },

    {
        text: '自动驾驶',
        link: '/auto_driving/',
        items: [
            { text: '感 知', link: '/auto_driving/perception/' },
            { text: '预 测', link: '/auto_driving/prediction/' },
            { text: '规 划', link: '/auto_driving/planning/' },
            { text: '控 制', link: '/auto_driving/control/'},
        ]
    },

    {
        text: '杂记',
        link: '/zaji/',
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
