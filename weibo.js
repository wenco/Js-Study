/*原方法*/

var d = 'Mon Feb 18 18:49:29 +0800 2013';

d = new Date(d);

/*现在用replace替换 +0800*/

var d = 'Mon Feb 18 18:49:29 +0800 2013';

d = new Date(d.replace(" +0800", ""));
