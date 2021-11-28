// sidebar

module.exports = {
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

    // 机器学习
    '/machine_learning/': [
        {
            title: '机器学习',
            collapsable: false,
            children: [
                ['', '概述'],
                '期望最大化',
                '变分推断',
                '调参',
                '数据增广',
            ]
        }
    ],

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

    // 计算机基础
    '/CS/': [
        {
            title: '计算机知识',
            collapsable: true,
            children: [
                ['', '概述'],
                '调试九法',
            ]
        },
    ],

    // 并行计算
    '/parallel_computing/': [
        {
            title: '并行计算',
            collapsable: true,
            children: [
                ['', '概述'],
                '第一章',
            ]
        },
    ],
}
