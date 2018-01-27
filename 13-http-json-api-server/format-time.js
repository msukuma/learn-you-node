module.exports = function formatTime(iso, unixtime=false) {
  const time = new Date(iso);

  if (unixtime) return { unixtime: time.getTime() };

  return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds(),
    };
};
