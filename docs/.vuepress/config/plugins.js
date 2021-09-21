// plugins

module.exports = [
    [
        '@vuepress/last-updated',
        {
          dateOptions:{
            hour12: false
          },
        }
    ],

    ["@diogotc/vuepress-plugin-katex", { delimiters: "dollars" }],
]
