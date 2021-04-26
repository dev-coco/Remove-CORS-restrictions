const settings = {
  'enabled': true,
  'methods': 'GET, POST',
  'allow-origin-value': '*'
};

const cors = {};


cors.onHeadersReceived = d => {
  const {originUrl, responseHeaders} = d;
    responseHeaders.push({
      'name': 'Access-Control-Allow-Origin',
      'value': '' || settings['allow-origin-value']
    });


  return {responseHeaders};
};

 
  const extra = ['blocking', 'responseHeaders'];
  extra.push('extraHeaders');
  chrome.webRequest.onHeadersReceived.addListener(cors.onHeadersReceived, {
    urls: ['<all_urls>']
  }, extra);




