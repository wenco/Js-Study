

/*原方法*/

var d = 'Mon Feb 18 18:49:29 +0800 2013';

d = new Date(d);

/*后用replace替换" +0800"为空*/

var d = 'Mon Feb 18 18:49:29 +0800 2013';

d = new Date(d.replace(" +0800", ""));
