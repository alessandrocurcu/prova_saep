function isMobile() {
  return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
function getBrowser() {
  let e;
  const t = navigator.userAgent;
  let n =
    t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) ||
    [];

  return /trident/i.test(n[1])
    ? ((e = /\brv[ :]+(\d+)/g.exec(t) || []),
      {
        name: 'IE',
        version: e[1] || '',
      })
    : n[1] === 'Chrome' && (e = t.match(/\bOPR|Edge\/(\d+)/)) != null
      ? {
          name: 'Opera',
          version: e[1],
        }
      : ((n = n[2]
          ? [n[1], n[2]]
          : [navigator.appName, navigator.appVersion, '-?']),
        (e = t.match(/version\/(\d+)/i)) != null && n.splice(1, 1, e[1]),
        {
          name: n[0],
          version: n[1],
        });
}
