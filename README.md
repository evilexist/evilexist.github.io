# eLong for iPad

> 此repo仅为elong iPad站点第一版原型代码；将不再对此repo进行更新。
> 2013-11-13


[艺龙旅行网](http://www.elong.com/)针对iPad制作的站点原型。

- 针对iPad设计了更便于操作的全新UI；
- 通过响应式优化横竖屏适配；
- 设计了for Retina的icon。

# 页面预览

- [首页](http://evilexist.github.io/eLong-iPad/)
- [酒店列表页](http://evilexist.github.io/eLong-iPad/hotellist.html)
- [酒店详情页](http://evilexist.github.io/eLong-iPad/hoteldetail.html)
- [酒店完成页](http://evilexist.github.io/eLong-iPad/hotelsuccess.html)
- [公共样式库](http://evilexist.github.io/eLong-iPad/padcommon.html)

# 目录结构
|__elong iPad （elong.com for iPad页面原型）
    |__common （公共样式）
          |__css
          |__js
          |__pic
          
    |__home （首页）
          |__css
          |__js
          |__pic
                
    |__hotels （国内酒店）
          |__css
          |__js
          |__pic
                
    |__html （HTML原型）


# 目前遇到的问题
- iPad不同版本性能各异，如何更好的兼容
- CSS3 Transition 使用过程中经常导致页面闪动（及性能问题），如何解决
- 初涉HTML5站点，目前使用桌面版jQuery不太合适，日后尝试切为Zepto.js或其他框架
