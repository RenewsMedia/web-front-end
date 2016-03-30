define(function() {
    var urlUtil = {
        parse: function(url) {
            return {
                origin: url,
                proto: urlUtil.getProto(url),
                domain: urlUtil.getDomain(url),
                controller: urlUtil.getController(url),
                params: urlUtil.getParams(url),
                hash: urlUtil.getHash(url)
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

    return urlUtil;
});