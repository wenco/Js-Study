学习新浪weibo开放api时，有个返回时间"Mon Feb 18 18:49:29 +0800 2013"，现系统要计算weibo注册时间跟现在相差多久，使用 new Date("'Mon Feb 18 18:49:29 +0800 2013'")时在IE下报NAN，google一下，说IE参数不正确，于是用了比较傻子的方法来解决


/*原方法*/

var d = 'Mon Feb 18 18:49:29 +0800 2013';

d = new Date(d);

/*后用replace替换" +0800"为空*/

var d = 'Mon Feb 18 18:49:29 +0800 2013';

d = new Date(d.replace(" +0800", ""));
