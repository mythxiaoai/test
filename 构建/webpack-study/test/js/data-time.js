(function ($) {
  $.fn.myDate = function (options) {
    var opts = $.extend($.fn.myDate.default, options, $.fn.myDate.methods);
    options.defaulMonth = options.defaulMonth < 10 ? '0' + options.defaulMonth : options.defaulMonth;
    options.defaulDay = options.defaulDay < 10 ? '0' + options.defaulDay : options.defaulDay;
    var newOpt = $.extend({}, $.fn.myDate.default, options);
    opts.init(newOpt);
  };
  $.fn.myDate.methods = {
    init(opts) {
      this.dayDom = $(opts.dayId); 
      this.template(opts);
      this._methods(opts);
      this._setDay(opts);
      $(opts.dayId).val(opts.defaulDay);
    },
    template(opts) {
      for (let i = opts.minYear; i <= opts.maxYear; i++) {
        var yearHTML = `<option value="${i}">${i}</option>`;
        $(opts.yearId).append(yearHTML);
      };
      for (let j = 1; j <= 12; j++) {
        if (j < 10) {
          j = '0' + j;
        }
        var monthHTML = `<option value="${j}">${j}</option>`;
        $(opts.monthId).append(monthHTML);
      };
      $(opts.yearId).val(opts.defaulYear);
      $(opts.monthId).val(opts.defaulMonth);
    },
    _methods(opts) {
      var $this = this;
      $(opts.yearId).on('change', function () {
        $this._setDay(opts);
      });
      $(opts.monthId).on('change', function () {
        $this._setDay(opts);
      });
      $(opts.dayId).on('change', function () {
        $this._setDay(opts);
      });
    },
    _setDay(e) {
      var $this = this;
      var selYear = parseInt($(e.yearId).val());
      var selMonth = parseInt($(e.monthId).val());
      var dayCount = 0;
      switch (selMonth) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          dayCount = 31;
          break;
        case 4:
        case 6:
        case 9:
        case 11:
          dayCount = 30;
          break;
        case 2:
          dayCount = 28;
          if ($this._isLeapYear(selYear)) {
            dayCount = 29;
          }
          break;
        default:
        break;
      }
      $(e.dayId).children().remove();
      for (let i = 1; i <= dayCount; i++) {
        if (i < 10) {
          i = '0' + i;
        }
        var dayHTML = `<option value="${i}">${i}</option>`;
        $(e.dayId).append(dayHTML);
      };
    },
    _isLeapYear(year) {
      return (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0));
    }
  };
  $.fn.myDate.default = {
    yearId: '#selYear',  //年ID或者class
    monthId: '#monthId', //月ID或者class
    dayId: '#dayId',   //日ID或者class
    firstText: "--",  //
    firstValue: 0,    
    defaulYear: '2018', //默认年
    defaulMonth: '01', //默认月
    defaulDay: '01',   //默认日
    minYear: '2000',  //最小年
    maxYear: new Date().getFullYear() + 1  //最大年 默认为当前年加1
  }
})(jQuery)