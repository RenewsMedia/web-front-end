define(function() {
    var _url = {
        parse: function(url) {
            return {
                origin: url,
                proto: _url.getProto(url),
                domain: _url.getDomain(url),
                controller: _url.getController(url),
                params: _url.getParams(url),
                hash: _url.getHash(url)
            };
        },

        getProto: function(url) {
            return url.split('://').shift();
        },

        getDomain: function(url) {
            return url.split('://').pop().replace(/(:(.*))?(\/(.*))/gi, '');
        },

        getController: function(url) {
            return this.getFullParams(url).shift();
        },

        getParams: function(url) {
            return this.getFullParams(url).splice(1);
        },

        getFullParams: function(url) {
            return url
                .replace(/^(http(s)?:\/\/([a-z0-9-\.:]*)\/)?/i, '')
                .replace(/(#(.*))?$/i, '')
                .split('/');
        },

        getHash: function(url) {
            var hashPos = url.indexOf('#');
            if (hashPos === -1) {
                return;
            }
            return url.substr(hashPos + 1);
        }
    };

    return _url;
});