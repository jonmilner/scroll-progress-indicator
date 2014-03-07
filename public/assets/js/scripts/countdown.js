(function() {

  var $radialProgress = $('.progress'),
      documentHeight,
      windowHeight,
      scrollPosition;

  function calcPercentageRemain() {
    return (Math.round((scrollPosition / (documentHeight - windowHeight)) * 100));
  }

  function checkMinMax(val, max, min) {
    if (val > max) {
      return max;
    } else if (val < min) {
      return min;
    }
    return val;
  }

  function updateDom() {
    $radialProgress.attr('data-progress', checkMinMax(calcPercentageRemain(100), 100, 0));
  }

  function main() {
    documentHeight = $(document).height();
    windowHeight = $(window).height();
    scrollPosition = $(window).scrollTop();
    updateDom();
  }

  main();

  $(window).scroll(function() {
    main();
  })

  $('#top').click(function(){
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  })

})();