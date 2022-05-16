var crypto = require('crypto');
registerPlugin({
    install: function (less, pluginManager, functions) {
        function createSha256BinaryHmacKey (text, secret) {
            var hmac = crypto.createHmac('sha256', secret).update(text).digest().toString('base64');
            return ',s' + hmac.replace(new RegExp('\/', 'g'), '_').replace(new RegExp('\\+','g'), '-');
        }
        functions.add('imageUrl', function (imageProxyUrl, imageUrl, secret) {
            var sha256Hash = createSha256BinaryHmacKey(imageUrl.value, secret.value)
            return [imageProxyUrl.value, sha256Hash, imageUrl.value].join('/')
        });
    }
})