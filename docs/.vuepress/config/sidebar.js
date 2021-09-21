// sidebar

module.exports = {
    // 强化学习
    '/RL/': [
        {
            title: '强化学习',
            collapsable: false,
            children: [
                ['', '概述'],
                '第一章',
                'rdocs/第二章',
            ]
        },
    ],

    // 机器学习
    '/machine_learning/': [
        {
            title: '机器学习',
            collapsable: false,
            children: [
                ['', '概述'],
                '第一章',
                '期望最大化',
            ]
        }
    ],

    // 数学
    '/math/linear_algebra/': [
        {
            title: '线性代数',
            collapsable: false,
            children: [
                ['', '概述'],
                '第一章',
            ]
        }
    ],

    '/math/optimization/': [
        {
            title: '最优化理论',
            collapsable: false,
            children: [
                ['', '概述'],
                '第一章',
            ]
        }
    ],

    '/math/probabilistic/': [
        {
            title: '概率论',
            collapsable: false,
            children: [
                ['', '概述'],
                '第一章',
            ]
        }
    ],
}
