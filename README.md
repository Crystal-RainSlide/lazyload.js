LazyLoad
========

**Note:** LazyLoad is not re-maintained. I just made it into a simple function which creates element, set attributes and insert it to `<head>`. Check the source code for more infomation.

Callback? Set `onload` `onabort` `onerror` or `onloadend` yourselves! Maybe you can warp them and make a `callback`, maybe you can add `EventListener` support to make this better.

No callback, no argument.

I'm not sure how to add `context` support back into my version. If anyone got this, just explain it in the issues or make a PR.

Usage
-----

Using LazyLoad is still simple. Just call the appropriate method -- `css()` to load
CSS, `js()` to load JavaScript -- and pass in a URL or array of URLs to load.
You can also provide a callback function if you'd like to be notified when the
resources have finished loading, as well as an argument to pass to the callback
and a context in which to execute the callback.

```js
// Load a single JavaScript file and execute a callback when it finishes.
LazyLoad.js('http://example.com/foo.js', {
  onload: function () {
    alert('foo.js has been loaded');
  }
});

// Load multiple JS files and execute a callback when they've all finished.
['foo.js', 'bar.js', 'baz.js'].forEach(function (url) {
  LazyLoad.js(url, {
    onload: function () {
      alert('all files have been loaded');
    }
  })
});
```

Supported Browsers
------------------

Not sure

License
-------

Copyright (c) 2011 Ryan Grove (ryan@wonko.com).
All rights reserved.
 
Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### Not satisfied?

https://github.com/tuupola/lazyload
https://github.com/verlok/lazyload
