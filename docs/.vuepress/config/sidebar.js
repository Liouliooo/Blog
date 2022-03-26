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

    // 机器学习-无监督学习
    '/machine_learning/unsupervised/': [
        {
            title: '无监督学习',
            collapsable: false,
            children: [
                ['', '概述'],
            ]
        }
    ],

    // 机器学习-频率派
    '/machine_learning/frequentist/': [
        {
            title: '频率派方法',
            collapsable: false,
            children: [
                ['', '概述'],
            ]
        }
    ],

    // 机器学习-贝叶斯派
    '/machine_learning/bayesian/': [
        {
            title: '贝叶斯方法',
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
            title: '其他',
            collapsable: false,
            children: [
                ['', '概述'],
                '调参',
                '数据增广',
                '特征工程',
                '人工智能落地',
                '模型选择',
                '机器学习评价指标',
                '超参数调整',
            ]
        },
    ],

    // 计算机基础-数据结构和算法
    '/cs/algorithm/': [
        {
            title: '数据结构和算法',
            collapsable: true,
            children: [
                ['', '总览'],
            ]
        },
    ],

    // 计算机基础-数字图像处理
    '/cs/digital_image_processing/': [
        {
            title: '数字图像处理',
            collapsable: true,
            children: [
                ['', '概述'],
            ]
        },
    ],

    // 计算机基础-Linux
    '/cs/linux/': [
        {
            title: 'Linux',
            collapsable: true,
            children: [
                ['', '概述'],
            ]
        },
    ],

    // 计算机基础-其他
    '/cs/others/': [
        {
            title: '其他',
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
