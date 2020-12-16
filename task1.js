self.addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'average':
      var result = calculateAverage(data); // Функция, вычисляющая среднее значение числового массива
      self.postMessage(result);
      break;
    default:
      self.postMessage('Unknown command');
  }
}, false);