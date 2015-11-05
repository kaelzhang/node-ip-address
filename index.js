'use strict';

module.exports = address;

var os = require('os');
var IPv4 = 'IPv4';
var IPv6 = 'IPv6';

var map = {
  'ipv4': IPv4,
  'ipv6': IPv6,
  'v4': IPv4,
  'v6': IPv6
};


function address (type) {
  type || (type = 'ipv4');
  type = map[String(type).toLowerCase()] || IPv4;

  var interfaces = os.networkInterfaces();
  var ip = '';
  var name;
  var found;

  for (name in interfaces) {
    found = interfaces[name].some(function (iface) {
      if (iface.family === type && !iface.internal) {
        ip = iface.address;
        return true;
      }
    });

    if (found) {
      return ip;
    }
  }

  return ip || "127.0.0.1";
}
