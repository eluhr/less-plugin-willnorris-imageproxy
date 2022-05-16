# LESS Plugin for willnorris/imageproxy URLs

This package contains a less plugin for urls from [willnorris/imageproxy](https://github.com/willnorris/imageproxy)

## Installation

```bash
npm i less-plugin-willnorris-imageproxy
```

## Example

```less
@plugin "/node_modules/less-plugin-willnorris-imageproxy/index";

.example-selector {
  @url: imageUrl(@imageProxyUrl, @preset, @imageUrl, @secretKey);
  background-image: url(@url);
}
```

Visit this package on [npmjs.com](https://www.npmjs.com/package/less-plugin-willnorris-imageproxy)
