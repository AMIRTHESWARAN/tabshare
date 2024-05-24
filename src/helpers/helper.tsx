export function removeUrlPrefix(url: string) {
    // Remove "http://" or "https://"
    if (url.startsWith('http://')) {
      url = url.substring(7); // Remove first 7 characters
    } else if (url.startsWith('https://')) {
      url = url.substring(8); // Remove first 8 characters
    }
    
    // Remove "www."
    if (url.startsWith('www.')) {
      url = url.substring(4); // Remove first 4 characters
    }
  
    return url;
  }