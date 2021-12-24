/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2021-08-31 10:56:45
 * @LastEditors: 张鹏
 * @LastEditTime: 2021-12-24 16:26:35
 */
/*
 * @Author: your name
 * @Date: 2021-06-28 10:52:02
 * @LastEditTime: 2021-08-31 10:56:01
 * @LastEditors: 张鹏
 * @Description: In User Settings Edit
 * @FilePath: \sgup-web-front\docs\.vuepress\config.js
 */
module.exports = {
   base: '/interviewSummary/',
   title: '面试宝典',
   description: '面试整理',
   themeConfig: {
      logo: '	https://cn.vuejs.org/images/logo.svg      ',
      nav: [
         {
            text: '小新指南', link: '/guide/'
         },
         {
            text: '开发技巧', link: '/dev/',
            items: [
               { text: '初级篇', link: '/dev/zero/' },
               { text: '进阶篇', link: '/dev/high/' },
            ]
         },
         {
            text: '工具箱',
            items: [
               {
                  text: '在线编辑',
                  items: [
                     { text: '图片压缩', link: 'https://tinypng.com/' }
                  ]
               },
               {
                  text: '在线服务',
                  items: [
                     { text: '阿里云', link: 'https://www.aliyun.com/' },
                     { text: '腾讯云', link: 'https://cloud.tencent.com/' }
                  ]
               },
               {
                  text: '博客指南',
                  items: [
                     { text: '掘金', link: 'https://juejin.im/' },
                     { text: 'CSDN', link: 'https://blog.csdn.net/' }
                  ]
               }
            ]
         }
      ],
      sidebar: [
         {
            title: '知识点记录',
            path: '/',
            collapsable: false,
         },
         {
            title: 'css相关',
         },
         {
            title: 'js相关',
            children: [
               { title: '工作流', path: '/components/shzl-bpmn' },
               { title: '颜色选择器', path: '/components/shzl-color-picker' },
               { title: '自定义表单', path: '/components/shzl-genrator-form' },
            ],
         },
         {
            title: 'vue相关',
            children: [
               { title: '工作流', path: '/components/shzl-bpmn' },
               { title: '颜色选择器', path: '/components/shzl-color-picker' },
               { title: '自定义表单', path: '/components/shzl-genrator-form' },
            ],
         },
         {
            title: 'webpack相关',
            children: [
               { title: '工作流', path: '/components/shzl-bpmn' },
               { title: '颜色选择器', path: '/components/shzl-color-picker' },
               { title: '自定义表单', path: '/components/shzl-genrator-form' },
            ],
         },
         {
            title: 'node相关',
            children: [

            ],
         }, {
            title: '网络相关',
            children: [
               { title: 'ip udp tcp 传输', path: '/components/shzl-bpmn' },
               { title: 'http发展史', path: '/components/shzl-bpmn' },
               { title: 'http各个版本区别', path: '/components/shzl-color-picker' },
               { title: 'https和http的区别', path: '/components/shzl-genrator-form' },
               { title: '垃圾回收机制', path: '/components/shzl-genrator-form' },
               { title: '进程和线程', path: '/components/shzl-genrator-form' },
               { title: '输入url发生了什么', path: '/components/shzl-genrator-form' },
               { title: 'js的执行机制', path: '/components/shzl-genrator-form' },
               { title: '页面是如何渲染出来', path: '/components/shzl-genrator-form' },
            ],
         }, {
            title: '微前端',
         },

      ],

      docsDir: 'docs',
      docsBranch: 'gh-pages',
      repoLabel: '查看源码',
      editLinks: true,
      editLinkText: '帮助我们改善此页面！',
      lastUpdated: '上次更新', // string | boolean
   },
   configureWebpack: {
      resolve: {
         alias: {
            assets: 'assets',
         },
      },
   },
};
