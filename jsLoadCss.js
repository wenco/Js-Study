(function() {
	var b = '';
	b = b ? b : document.scripts[document.scripts.length - 1].src.match(/[\s\S]*\//)[0];
	var c = document;
	document.head.appendChild(function() {
		var a = c.createElement('link');
		return a.href = b + 'css/demo.css',
		a.type = 'text/css',
		a.rel = 'styleSheet',
		a.id = 'democss',
		a;
	}());
})();
