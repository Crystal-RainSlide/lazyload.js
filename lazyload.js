if (
	!(
		globalThis || (function () {
			try {
				return Function("return this");
			} catch (e) {
				return false;
			}
		})() || window || global || self || this
	).lazyLoad
) {

	var lazyLoad = function (tagName, attrs) {

		var elem = document.createElement(tagName),
		    attr;

		switch ( Object.prototype.toString.call(attrs).slice(8, -1) ) {
			case "Map":
				for (attr of attrs) {
					Element.prototype.setAttribute.apply(elem, attr);
				}
				break;
			case "Object":
				for (attr in attrs) {
					if (attrs.hasOwnProperty(attr)) {
						elem.setAttribute(attr, attrs[attr]);
					}
				}
				break;
			default:
				console.warn("attrs should be a Map or Object!");
				return false;
		}

		(
			document.head ||
			document.getElementsByTagName("head")[0]
		).appendChild(elem);

		this.css = function (url, attrs) {
			attrs.href = url;
			this("link", attrs);
		},
		this.js = function (url, attrs) {
			attrs.src = url;
			this("script", attrs);
		}

	return elem;

	};

	lazyLoad.css = function (url, attrs) {
		attrs.href = url;
		this("link", attrs)
	};
	lazyLoad.js = function (url, attrs) {
		attrs.src = url;
		this("script", attrs)
	};

	(
		globalThis || (function () {
			try {
				return Function("return this");
			} catch (e) {
				return false;
			}
		})() || window || global || self || this
	).lazyLoad = lazyLoad;

}
