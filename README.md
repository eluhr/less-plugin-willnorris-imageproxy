# LESS Plugin for willnorris/imageproxy URLs

This package contains a less plugin for urls from [willnorris/imageproxy](https://github.com/willnorris/imageproxy)

## Example

```less
.example-selector {
  @url: imageUrl(@imageProxyUrl, @imageUrl, @secretKey);
  background-image: url(@url);
}
```