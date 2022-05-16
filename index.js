var crypto = require('crypto');
registerPlugin({
    install: function (less, pluginManager, functions) {
        function createSha256BinaryHmacKey (text, secret) {
            var hmac = crypto.createHmac('sha256', secret).update(text).digest().toString('base64');
            return ',s' + hmac.replace(new RegExp('\/', 'g'), '_').replace(new RegExp('\\+','g'), '-');
        }
        functions.add('imageUrl', function (imageProxyUrl, preset,imageUrl, secret) {
            var sha256Hash = createSha256BinaryHmacKey(imageUrl.value, secret.value)
            var _preset
            if (preset.value) {
                _preset = preset.value + sha256Hash
            } else {
                _preset = sha256Hash
            }
            return [imageProxyUrl.value, _preset, imageUrl.value].join('/')
        });
    }
})