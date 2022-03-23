// sidebar

module.exports = {
    // 数学-线性代数
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

    // 数学-最优化理论
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

    // 数学-概率与数理统计
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

    // 机器学习-频率派
    '/machine_learning/frequentist/': [
        {
            title: '机器学习',
            collapsable: false,
            children: [
                ['', '概述'],
            ]
        }
    ],

    // 机器学习-贝叶斯派
    '/machine_learning/bayesian/': [
        {
            title: '机器学习',
            collapsable: false,
            children: [
                ['', '概述'],
                '期望最大化',
                '变分推断',
            ]
        }
    ],

    // 机器学习-强化学习
    '/machine_learning/reinforcement_learning/': [
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

    // 机器学习-其他
    '/machine_learning/others/': [
        {
            title: '强化学习',
            collapsable: false,
            children: [
                ['', '概述'],
                '调参',
                '数据增广',
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
                '第二章',
                '第三章',
                '第四章_上',
                '第四章_下',
                '第五章_上',
            ]
        },
    ],

    // 自动驾驶-感知
    '/auto_driving/perception/': [
        {
            title: 'Camera',
            children: [
                ['','概述'],
                'camera/第一章'
            ],
        },
        {
            title: 'Lidar',
            children: [
                ['', '概述'],
                'lidar/第一章'
            ],
        },
        {
            title: 'Radar',
            children: [
                ['', '概述'],
                'radar/第一章',
            ]
        },
        {
            title: 'Tracking',
            children: [
                ['', '概述'],
                'tracking/第一章',
            ]
        },
        {
            title: 'Fusion',
            children: [
                ['', '概述'],
                'fusion/第一章',
            ]
        },
        {
            title: 'Calibration',
            children: [
                ['', '概述'],
                'calibration/第一章'
            ]
        },
    ],

    // 自动驾驶-预测
    '/auto_driving/prediction/': [
        {
            title: '预测',
            collapsable: true,
            children: [
                ['', '概述'],
            ]
        },
    ],

    // 自动驾驶-规划
    '/auto_driving/planning/': [
        {
            title: '规划',
            collapsable: true,
            children: [
                ['', '概述'],
            ]
        },
    ],

    // 自动驾驶-控制
    '/auto_driving/control/': [
        {
            title: '控制',
            collapsable: true,
            children: [
                ['', '概述'],
            ]
        },
    ],

    // 杂记
    '/zaji/': [
        {
            title: '杂记',
            collapsable: true,
            children: [
                ['', '啥'],
            ]
        }
    ],
}
