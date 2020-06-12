!function(e) {
  'use strict'
  e('#calendar').length && e('#calendar').fullCalendar({
    header: { left: 'title', center: '', right: 'today' },
    defaultDate: '2019-03-12',
    defaultView: 'listWeek',
    navLinks: !0,
    editable: !0,
    eventLimit: !0,
    events: [{ title: 'CEO\'s Birthday', start: '2019-03-12T09:15', color: dangerColor }, {
      title: 'UI/UX Workshop',
      start: '2018-03-05',
      color: primaryColor
    }, { title: 'Meeting With Client', start: '2019-03-13T10:25', color: dangerColor }, {
      title: 'Meeting With Alisa',
      start: '2019-03-12T12:32',
      color: infoColor
    }, { title: 'Team Meetup', start: '2019-03-11T02:32', color: successColor }, {
      title: 'UI/UX Workshop',
      start: '2018-03-05',
      color: infoColor
    }, { title: 'Annual Team Meetup', start: '2018-03-27T12:30', color: primaryColor }, {
      title: 'Check Reports',
      start: '2019-03-12T10:45',
      color: infoColor
    }, { title: 'Annual Team Meetup', start: '2018-03-27T09:15', color: dangerColor }, {
      title: 'Check Reports',
      start: '2019-03-15T03:10',
      color: dangerColor
    }]
  }), e('#calendar_2').length && e('#calendar_2').fullCalendar({
    header: { left: 'title', center: '', right: 'today' },
    locale: 'en',
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['SUN', 'MON', 'TUE', 'WED', 'THUS', 'FRI', 'SAT'],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    defaultDate: '2019-03-12',
    navLinks: !0,
    editable: !0,
    eventLimit: !0,
    events: [{ title: 'CEO\'s Birthday', start: '2019-03-12T09:15', color: dangerColor }, {
      title: 'UI/UX Workshop',
      start: '2018-03-05',
      color: primaryColor
    }, { title: 'Meeting With Client', start: '2019-03-13T10:25', color: dangerColor }, {
      title: 'Meeting With Alisa',
      start: '2019-03-12T12:32',
      color: infoColor
    }, { title: 'Team Meetup', start: '2019-03-11T02:32', color: successColor }, {
      title: 'UI/UX Workshop',
      start: '2018-03-05',
      color: infoColor
    }, { title: 'Annual Team Meetup', start: '2018-03-27T12:30', color: primaryColor }, {
      title: 'Check Reports',
      start: '2019-03-12T10:45',
      color: infoColor
    }, { title: 'Annual Team Meetup', start: '2018-03-27T09:15', color: dangerColor }, {
      title: 'Check Reports',
      start: '2019-03-15T03:10',
      color: dangerColor
    }],
    eventRender: function(e, t) {
      e.color == dangerColor && t.addClass('event-invers-danger'), e.color == warningColor && t.addClass('event-invers-warning'), e.color == infoColor && t.addClass('event-invers-info'), e.color == successColor && t.addClass('event-invers-success'), e.color == primaryColor && t.addClass('event-invers-primary')
    }
  })
}(jQuery), $(function() {
  'use strict'
  if ($('#sales-revenue-charts').length) {
    var e = {
      labels: ['Jul', 'Aug', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        data: [100, 125, 135, 255, 190, 365, 285, 492, 375, 520],
        backgroundColor: [chartColors[5]],
        borderColor: [chartColors[5]],
        borderWidth: 1,
        fill: 'origin',
        label: 'Sales'
      }, {
        data: [100, 195, 195, 355, 290, 465, 385, 592, 475, 620],
        backgroundColor: [chartColors[1]],
        borderColor: [chartColors[1]],
        borderWidth: 1,
        fill: 'origin',
        label: 'Marketing'
      }]
    }, t = document.getElementById('sales-revenue-charts').getContext('2d'), a = new Chart(t, {
      type: 'line',
      data: e,
      options: {
        responsive: !0,
        maintainAspectRatio: !0,
        scales: {
          xAxes: [{ display: !1 }],
          yAxes: [{
            display: !0,
            ticks: {
              display: !1,
              stepSize: 100,
              min: 100,
              max: 700,
              padding: 0,
              beginAtZero: !0,
              fontSize: 12,
              fontFamily: '\'Roboto\', sans-serif',
              fontColor: '#929292',
              fontStyle: '500'
            },
            gridLines: { drawBorder: !1, color: 'rgb(93,93,93,0.2)' }
          }]
        },
        legend: {
          display: !1, legendCallback: function(e) {
            var t = []
            t.push('<ul class="legend-list">')
            for (var a = 0; a < e.data.datasets.length; a++) t.push('<li><span class="legend-dots" style="background:' + e.data.datasets[a].legendColor + '"></span>'), e.data.datasets[a].label && t.push(e.data.datasets[a].label), t.push('</li>')
            return t.push('</ul>'), t.join('')
          }
        },
        layout: { padding: { right: 0, top: 0, bottom: 0 } },
        elements: { point: { radius: 0 }, line: { tension: 0 } }
      }
    })
    $('#sales-revenue-chart-legend').html(a.generateLegend())
  }
  if ($('#current-circle-progress').length && $('#current-circle-progress').circleProgress({
    value: .73,
    size: 120,
    startAngle: -1.55,
    fill: chartColors[1]
  }).on('circle-animation-progress', function(e, t, a) {
    $(this).find('.circle-progress-value').text(a.toFixed(2).substr(2) + '%')
  }), $('#sales-conversion').length) {
    var r = {
      labels: ['2013', '2014', '2014', '2015', '2016', '2017'],
      datasets: [{ label: 'Profit', data: [10, 19, 3, 5, 12, 3], backgroundColor: chartColors[1] }, {
        label: 'Sales',
        data: [23, 12, 8, 13, 9, 17],
        backgroundColor: chartColors[5]
      }]
    }, l = $('#sales-conversion').get(0).getContext('2d')
    new Chart(l, {
      type: 'bar',
      data: r,
      options: {
        responsive: !0,
        maintainAspectRatio: !0,
        scales: { xAxes: [{ display: !1 }], yAxes: [{ display: !1 }] },
        legend: { display: !1 }
      }
    })
  }
}), $(function() {
  'use strict'
  $('#sample-data-table').length && $('#sample-data-table').DataTable({}), $('#json-sample-data-table').length && $('#json-sample-data-table').DataTable({
    ajax: '../../../assets/js/TABLE_DATA.json',
    columns: [{ data: 'name' }, { data: 'position' }, { data: 'office' }, { data: 'extn' }, { data: 'start_date' }, { data: 'salary' }]
  }), $('#complex-header-table').length && $('#complex-header-table').DataTable({ stateSave: !0 }), $('#horizontal-scroll-table').length && $('#horizontal-scroll-table').DataTable({
    stateSave: !0,
    scrollY: '50vh',
    scrollX: !0,
    scrollCollapse: !0
  })
}), function(e) {
  var t = 'object' == typeof window && window || 'object' == typeof self && self
  'undefined' != typeof exports ? e(exports) : t && (t.hljs = e({}), 'function' == typeof define && define.amd && define([], function() {
    return t.hljs
  }))
}(function(l) {
  function f(e) {
    return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }

  function h(e) {
    return e.nodeName.toLowerCase()
  }

  function y(e, t) {
    var a = e && e.exec(t)
    return a && 0 === a.index
  }

  function p(e) {
    return r.test(e)
  }

  function d(e) {
    var t, a = {}, r = Array.prototype.slice.call(arguments, 1)
    for (t in e) a[t] = e[t]
    return r.forEach(function(e) {
      for (t in e) a[t] = e[t]
    }), a
  }

  function g(e) {
    var l = []
    return function e(t, a) {
      for (var r = t.firstChild; r; r = r.nextSibling) 3 === r.nodeType ? a += r.nodeValue.length : 1 === r.nodeType && (l.push({
        event: 'start',
        offset: a,
        node: r
      }), a = e(r, a), h(r).match(/br|hr|img|input/) || l.push({ event: 'stop', offset: a, node: r }))
      return a
    }(e, 0), l
  }

  function w(n) {
    function i(e) {
      return e && e.source || e
    }

    function s(e, t) {
      return new RegExp(i(e), 'm' + (n.cI ? 'i' : '') + (t ? 'g' : ''))
    }

    !function t(a, e) {
      if (!a.compiled) {
        if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
          var r = {}, l = function(a, e) {
            n.cI && (e = e.toLowerCase()), e.split(' ').forEach(function(e) {
              var t = e.split('|')
              r[t[0]] = [a, t[1] ? Number(t[1]) : 1]
            })
          }
          'string' == typeof a.k ? l('keyword', a.k) : c(a.k).forEach(function(e) {
            l(e, a.k[e])
          }), a.k = r
        }
        a.lR = s(a.l || /\w+/, !0), e && (a.bK && (a.b = '\\b(' + a.bK.split(' ').join('|') + ')\\b'), a.b || (a.b = /\B|\b/), a.bR = s(a.b), a.endSameAsBegin && (a.e = a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = s(a.e)), a.tE = i(a.e) || '', a.eW && e.tE && (a.tE += (a.e ? '|' : '') + e.tE)), a.i && (a.iR = s(a.i)), null == a.r && (a.r = 1), a.c || (a.c = []), a.c = Array.prototype.concat.apply([], a.c.map(function(e) {
          return (t = 'self' === e ? a : e).v && !t.cached_variants && (t.cached_variants = t.v.map(function(e) {
            return d(t, { v: null }, e)
          })), t.cached_variants || t.eW && [d(t)] || [t]
          var t
        })), a.c.forEach(function(e) {
          t(e, a)
        }), a.starts && t(a.starts, e)
        var o = a.c.map(function(e) {
          return e.bK ? '\\.?(' + e.b + ')\\.?' : e.b
        }).concat([a.tE, a.i]).map(i).filter(Boolean)
        a.t = o.length ? s(o.join('|'), !0) : {
          exec: function() {
            return null
          }
        }
      }
    }(n)
  }

  function C(e, t, i, a) {
    function s(e, t, a, r) {
      var l = '<span class="' + (r ? '' : $.classPrefix)
      return (l += e + '">') + t + (a ? '' : A)
    }

    function d() {
      p += null != h.sL ? function() {
        var e = 'string' == typeof h.sL
        if (e && !S[h.sL]) return f(g)
        var t = e ? C(h.sL, g, !0, o[h.sL]) : x(g, h.sL.length ? h.sL : void 0)
        return 0 < h.r && (b += t.r), e && (o[h.sL] = t.top), s(t.language, t.value, !1, !0)
      }() : function() {
        var e, t, a, r, l, o, n
        if (!h.k) return f(g)
        for (r = '', t = 0, h.lR.lastIndex = 0, a = h.lR.exec(g); a;) r += f(g.substring(t, a.index)), l = h, o = a, n = u.cI ? o[0].toLowerCase() : o[0], (e = l.k.hasOwnProperty(n) && l.k[n]) ? (b += e[1], r += s(e[0], f(a[0]))) : r += f(a[0]), t = h.lR.lastIndex, a = h.lR.exec(g)
        return r + f(g.substr(t))
      }(), g = ''
    }

    function c(e) {
      p += e.cN ? s(e.cN, '', !0) : '', h = Object.create(e, { parent: { value: h } })
    }

    function r(e, t) {
      if (g += e, null == t) return d(), 0
      var a = function(e, t) {
        var a, r, l
        for (a = 0, r = t.c.length; a < r; a++) if (y(t.c[a].bR, e)) return t.c[a].endSameAsBegin && (t.c[a].eR = (l = t.c[a].bR.exec(e)[0], new RegExp(l.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm'))), t.c[a]
      }(t, h)
      if (a) return a.skip ? g += t : (a.eB && (g += t), d(), a.rB || a.eB || (g = t)), c(a), a.rB ? 0 : t.length
      var r, l, o = function e(t, a) {
        if (y(t.eR, a)) {
          for (; t.endsParent && t.parent;) t = t.parent
          return t
        }
        return t.eW ? e(t.parent, a) : void 0
      }(h, t)
      if (o) {
        var n = h
        for (n.skip ? g += t : (n.rE || n.eE || (g += t), d(), n.eE && (g = t)); h.cN && (p += A), h.skip || h.sL || (b += h.r), (h = h.parent) !== o.parent;)
        return o.starts && (o.endSameAsBegin && (o.starts.eR = o.eR), c(o.starts)), n.rE ? 0 : t.length
      }
      if (r = t, l = h, !i && y(l.iR, r)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (h.cN || '<unnamed>') + '"')
      return g += t, t.length || 1
    }

    var u = k(e)
    if (!u) throw new Error('Unknown language: "' + e + '"')
    w(u)
    var l, h = a || u, o = {}, p = ''
    for (l = h; l !== u; l = l.parent) l.cN && (p = s(l.cN, '', !0) + p)
    var g = '', b = 0
    try {
      for (var n, v, m = 0; h.t.lastIndex = m, n = h.t.exec(t);) v = r(t.substring(m, n.index), n[0]), m = n.index + v
      for (r(t.substr(m)), l = h; l.parent; l = l.parent) l.cN && (p += A)
      return { r: b, value: p, language: e, top: h }
    } catch (e) {
      if (e.message && -1 !== e.message.indexOf('Illegal')) return { r: 0, value: f(t) }
      throw e
    }
  }

  function x(a, e) {
    e = e || $.languages || c(S)
    var r = { r: 0, value: f(a) }, l = r
    return e.filter(k).filter(o).forEach(function(e) {
      var t = C(e, a, !1)
      t.language = e, t.r > l.r && (l = t), t.r > r.r && (l = r, r = t)
    }), l.language && (r.second_best = l), r
  }

  function b(e) {
    return $.tabReplace || $.useBR ? e.replace(n, function(e, t) {
      return $.useBR && '\n' === e ? '<br>' : $.tabReplace ? t.replace(/\t/g, $.tabReplace) : ''
    }) : e
  }

  function t(e) {
    var t, a, r, l, o, n, i, s, d, c, u = function(e) {
      var t, a, r, l, o = e.className + ' '
      if (o += e.parentNode ? e.parentNode.className : '', a = N.exec(o)) return k(a[1]) ? a[1] : 'no-highlight'
      for (t = 0, r = (o = o.split(/\s+/)).length; t < r; t++) if (p(l = o[t]) || k(l)) return l
    }(e)
    p(u) || ($.useBR ? (t = document.createElementNS('http://www.w3.org/1999/xhtml', 'div')).innerHTML = e.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n') : t = e, o = t.textContent, r = u ? C(u, o, !0) : x(o), (a = g(t)).length && ((l = document.createElementNS('http://www.w3.org/1999/xhtml', 'div')).innerHTML = r.value, r.value = function(e, t, a) {
      function r() {
        return e.length && t.length ? e[0].offset !== t[0].offset ? e[0].offset < t[0].offset ? e : t : 'start' === t[0].event ? e : t : e.length ? e : t
      }

      function l(e) {
        s += '<' + h(e) + v.map.call(e.attributes, function(e) {
          return ' ' + e.nodeName + '="' + f(e.value).replace('"', '&quot;') + '"'
        }).join('') + '>'
      }

      function o(e) {
        s += '</' + h(e) + '>'
      }

      function n(e) {
        ('start' === e.event ? l : o)(e.node)
      }

      for (var i = 0, s = '', d = []; e.length || t.length;) {
        var c = r()
        if (s += f(a.substring(i, c[0].offset)), i = c[0].offset, c === e) {
          for (d.reverse().forEach(o); n(c.splice(0, 1)[0]), (c = r()) === e && c.length && c[0].offset === i;)
          d.reverse().forEach(l)
        } else 'start' === c[0].event ? d.push(c[0].node) : d.pop(), n(c.splice(0, 1)[0])
      }
      return s + f(a.substr(i))
    }(a, g(l), o)), r.value = b(r.value), e.innerHTML = r.value, e.className = (n = e.className, i = u, s = r.language, d = i ? m[i] : s, c = [n.trim()], n.match(/\bhljs\b/) || c.push('hljs'), -1 === n.indexOf(d) && c.push(d), c.join(' ').trim()), e.result = {
      language: r.language,
      re: r.r
    }, r.second_best && (e.second_best = { language: r.second_best.language, re: r.second_best.r }))
  }

  function a() {
    if (!a.called) {
      a.called = !0
      var e = document.querySelectorAll('pre code')
      v.forEach.call(e, t)
    }
  }

  function k(e) {
    return e = (e || '').toLowerCase(), S[e] || S[m[e]]
  }

  function o(e) {
    var t = k(e)
    return t && !t.disableAutodetect
  }

  var v = [], c = Object.keys, S = {}, m = {}, r = /^(no-?highlight|plain|text)$/i, N = /\blang(?:uage)?-([\w-]+)\b/i,
    n = /((^(<[^>]+>|\t|)+|(?:\n)))/gm, A = '</span>',
    $ = { classPrefix: 'hljs-', tabReplace: null, useBR: !1, languages: void 0 }
  return l.highlight = C, l.highlightAuto = x, l.fixMarkup = b, l.highlightBlock = t, l.configure = function(e) {
    $ = d($, e)
  }, l.initHighlighting = a, l.initHighlightingOnLoad = function() {
    addEventListener('DOMContentLoaded', a, !1), addEventListener('load', a, !1)
  }, l.registerLanguage = function(t, e) {
    var a = S[t] = e(l)
    a.aliases && a.aliases.forEach(function(e) {
      m[e] = t
    })
  }, l.listLanguages = function() {
    return c(S)
  }, l.getLanguage = k, l.autoDetection = o, l.inherit = d, l.IR = '[a-zA-Z]\\w*', l.UIR = '[a-zA-Z_]\\w*', l.NR = '\\b\\d+(\\.\\d+)?', l.CNR = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)', l.BNR = '\\b(0b[01]+)', l.RSR = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~', l.BE = {
    b: '\\\\[\\s\\S]',
    r: 0
  }, l.ASM = { cN: 'string', b: '\'', e: '\'', i: '\\n', c: [l.BE] }, l.QSM = {
    cN: 'string',
    b: '"',
    e: '"',
    i: '\\n',
    c: [l.BE]
  }, l.PWM = { b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ }, l.C = function(e, t, a) {
    var r = l.inherit({ cN: 'comment', b: e, e: t, c: [] }, a || {})
    return r.c.push(l.PWM), r.c.push({ cN: 'doctag', b: '(?:TODO|FIXME|NOTE|BUG|XXX):', r: 0 }), r
  }, l.CLCM = l.C('//', '$'), l.CBCM = l.C('/\\*', '\\*/'), l.HCM = l.C('#', '$'), l.NM = {
    cN: 'number',
    b: l.NR,
    r: 0
  }, l.CNM = { cN: 'number', b: l.CNR, r: 0 }, l.BNM = { cN: 'number', b: l.BNR, r: 0 }, l.CSSNM = {
    cN: 'number',
    b: l.NR + '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
    r: 0
  }, l.RM = {
    cN: 'regexp',
    b: /\//,
    e: /\/[gimuy]*/,
    i: /\n/,
    c: [l.BE, { b: /\[/, e: /\]/, r: 0, c: [l.BE] }]
  }, l.TM = { cN: 'title', b: l.IR, r: 0 }, l.UTM = {
    cN: 'title',
    b: l.UIR,
    r: 0
  }, l.METHOD_GUARD = { b: '\\.\\s*' + l.UIR, r: 0 }, l
}), hljs.registerLanguage('bash', function(e) {
  var t = { cN: 'variable', v: [{ b: /\$[\w\d#@][\w\d_]*/ }, { b: /\$\{(.*?)}/ }] },
    a = { cN: 'string', b: /"/, e: /"/, c: [e.BE, t, { cN: 'variable', b: /\$\(/, e: /\)/, c: [e.BE] }] }
  return {
    aliases: ['sh', 'zsh'],
    l: /\b-?[a-z\._]+\b/,
    k: {
      keyword: 'if then else elif fi for while in do done case esac function',
      literal: 'true false',
      built_in: 'break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp',
      _: '-ne -eq -lt -gt -f -d -e -s -l -a'
    },
    c: [{ cN: 'meta', b: /^#![^\n]+sh\s*$/, r: 10 }, {
      cN: 'function',
      b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
      rB: !0,
      c: [e.inherit(e.TM, { b: /\w[\w\d_]*/ })],
      r: 0
    }, e.HCM, a, { cN: 'string', b: /'/, e: /'/ }, t]
  }
}), hljs.registerLanguage('java', function(e) {
  var t = 'false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do',
    a = {
      cN: 'number',
      b: '\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?',
      r: 0
    }
  return {
    aliases: ['jsp'],
    k: t,
    i: /<\/|#/,
    c: [e.C('/\\*\\*', '\\*/', {
      r: 0,
      c: [{ b: /\w+@/, r: 0 }, { cN: 'doctag', b: '@[A-Za-z]+' }]
    }), e.CLCM, e.CBCM, e.ASM, e.QSM, {
      cN: 'class',
      bK: 'class interface',
      e: /[{;=]/,
      eE: !0,
      k: 'class interface',
      i: /[:"\[\]]/,
      c: [{ bK: 'extends implements' }, e.UTM]
    }, { bK: 'new throw return else', r: 0 }, {
      cN: 'function',
      b: '([À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*)*>)?\\s+)+' + e.UIR + '\\s*\\(',
      rB: !0,
      e: /[{;=]/,
      eE: !0,
      k: t,
      c: [{ b: e.UIR + '\\s*\\(', rB: !0, r: 0, c: [e.UTM] }, {
        cN: 'params',
        b: /\(/,
        e: /\)/,
        k: t,
        r: 0,
        c: [e.ASM, e.QSM, e.CNM, e.CBCM]
      }, e.CLCM, e.CBCM]
    }, a, { cN: 'meta', b: '@[A-Za-z]+' }]
  }
}), hljs.registerLanguage('xml', function(e) {
  var t = {
    eW: !0,
    i: /</,
    r: 0,
    c: [{ cN: 'attr', b: '[A-Za-z0-9\\._:-]+', r: 0 }, {
      b: /=\s*/,
      r: 0,
      c: [{ cN: 'string', endsParent: !0, v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }, { b: /[^\s"'=<>`]+/ }] }]
    }]
  }
  return {
    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist'],
    cI: !0,
    c: [{
      cN: 'meta',
      b: '<!DOCTYPE',
      e: '>',
      r: 10,
      c: [{ b: '\\[', e: '\\]' }]
    }, e.C('\x3c!--', '--\x3e', { r: 10 }), { b: '<\\!\\[CDATA\\[', e: '\\]\\]>', r: 10 }, {
      cN: 'meta',
      b: /<\?xml/,
      e: /\?>/,
      r: 10
    }, {
      b: /<\?(php)?/,
      e: /\?>/,
      sL: 'php',
      c: [{ b: '/\\*', e: '\\*/', skip: !0 }, { b: 'b"', e: '"', skip: !0 }, {
        b: 'b\'',
        e: '\'',
        skip: !0
      }, e.inherit(e.ASM, { i: null, cN: null, c: null, skip: !0 }), e.inherit(e.QSM, {
        i: null,
        cN: null,
        c: null,
        skip: !0
      })]
    }, {
      cN: 'tag',
      b: '<style(?=\\s|>|$)',
      e: '>',
      k: { name: 'style' },
      c: [t],
      starts: { e: '</style>', rE: !0, sL: ['css', 'xml'] }
    }, {
      cN: 'tag',
      b: '<script(?=\\s|>|$)',
      e: '>',
      k: { name: 'script' },
      c: [t],
      starts: { e: '<\/script>', rE: !0, sL: ['actionscript', 'javascript', 'handlebars', 'xml'] }
    }, { cN: 'tag', b: '</?', e: '/?>', c: [{ cN: 'name', b: /[^\/><\s]+/, r: 0 }, t] }]
  }
}), hljs.registerLanguage('scss', function(e) {
  var t = { cN: 'variable', b: '(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b' }, a = { cN: 'number', b: '#[0-9A-Fa-f]+' }
  return e.CSSNM, e.QSM, e.ASM, e.CBCM, {
    cI: !0,
    i: '[=/|\']',
    c: [e.CLCM, e.CBCM, { cN: 'selector-id', b: '\\#[A-Za-z0-9_-]+', r: 0 }, {
      cN: 'selector-class',
      b: '\\.[A-Za-z0-9_-]+',
      r: 0
    }, { cN: 'selector-attr', b: '\\[', e: '\\]', i: '$' }, {
      cN: 'selector-tag',
      b: '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b',
      r: 0
    }, { b: ':(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)' }, { b: '::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)' }, t, {
      cN: 'attribute',
      b: '\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b',
      i: '[^\\s]'
    }, { b: '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b' }, {
      b: ':',
      e: ';',
      c: [t, a, e.CSSNM, e.QSM, e.ASM, { cN: 'meta', b: '!important' }]
    }, {
      b: '@',
      e: '[{;]',
      k: 'mixin include extend for if else each while charset import debug media page content font-face namespace warn',
      c: [t, e.QSM, e.ASM, a, e.CSSNM, { b: '\\s[A-Za-z0-9_.-]+', r: 0 }]
    }]
  }
}), hljs.registerLanguage('css', function(e) {
  var t = {
    b: /[A-Z\_\.\-]+\s*:/,
    rB: !0,
    e: ';',
    eW: !0,
    c: [{
      cN: 'attribute',
      b: /\S/,
      e: ':',
      eE: !0,
      starts: {
        eW: !0,
        eE: !0,
        c: [{
          b: /[\w-]+\(/,
          rB: !0,
          c: [{ cN: 'built_in', b: /[\w-]+/ }, { b: /\(/, e: /\)/, c: [e.ASM, e.QSM] }]
        }, e.CSSNM, e.QSM, e.ASM, e.CBCM, { cN: 'number', b: '#[0-9A-Fa-f]+' }, { cN: 'meta', b: '!important' }]
      }
    }]
  }
  return {
    cI: !0,
    i: /[=\/|'\$]/,
    c: [e.CBCM, { cN: 'selector-id', b: /#[A-Za-z0-9_-]+/ }, {
      cN: 'selector-class',
      b: /\.[A-Za-z0-9_-]+/
    }, { cN: 'selector-attr', b: /\[/, e: /\]/, i: '$' }, {
      cN: 'selector-pseudo',
      b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
    }, { b: '@(font-face|page)', l: '[a-z-]+', k: 'font-face page' }, {
      b: '@',
      e: '[{;]',
      i: /:/,
      c: [{ cN: 'keyword', b: /\w+/ }, { b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM] }]
    }, { cN: 'selector-tag', b: '[a-zA-Z-][a-zA-Z0-9_-]*', r: 0 }, { b: '{', e: '}', i: /\S/, c: [e.CBCM, t] }]
  }
}), hljs.registerLanguage('javascript', function(e) {
  var t = '[A-Za-z$_][0-9A-Za-z$_]*', a = {
      keyword: 'in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as',
      literal: 'true false null undefined NaN Infinity',
      built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise'
    }, r = { cN: 'number', v: [{ b: '\\b(0[bB][01]+)' }, { b: '\\b(0[oO][0-7]+)' }, { b: e.CNR }], r: 0 },
    l = { cN: 'subst', b: '\\$\\{', e: '\\}', k: a, c: [] }, o = { cN: 'string', b: '`', e: '`', c: [e.BE, l] }
  l.c = [e.ASM, e.QSM, o, r, e.RM]
  var n = l.c.concat([e.CBCM, e.CLCM])
  return {
    aliases: ['js', 'jsx'],
    k: a,
    c: [{ cN: 'meta', r: 10, b: /^\s*['"]use (strict|asm)['"]/ }, {
      cN: 'meta',
      b: /^#!/,
      e: /$/
    }, e.ASM, e.QSM, o, e.CLCM, e.CBCM, r, {
      b: /[{,]\s*/,
      r: 0,
      c: [{ b: t + '\\s*:', rB: !0, r: 0, c: [{ cN: 'attr', b: t, r: 0 }] }]
    }, {
      b: '(' + e.RSR + '|\\b(case|return|throw)\\b)\\s*',
      k: 'return throw case',
      c: [e.CLCM, e.CBCM, e.RM, {
        cN: 'function',
        b: '(\\(.*?\\)|' + t + ')\\s*=>',
        rB: !0,
        e: '\\s*=>',
        c: [{ cN: 'params', v: [{ b: t }, { b: /\(\s*\)/ }, { b: /\(/, e: /\)/, eB: !0, eE: !0, k: a, c: n }] }]
      }, {
        b: /</,
        e: /(\/\w+|\w+\/)>/,
        sL: 'xml',
        c: [{ b: /<\w+\s*\/>/, skip: !0 }, {
          b: /<\w+/,
          e: /(\/\w+|\w+\/)>/,
          skip: !0,
          c: [{ b: /<\w+\s*\/>/, skip: !0 }, 'self']
        }]
      }],
      r: 0
    }, {
      cN: 'function',
      bK: 'function',
      e: /\{/,
      eE: !0,
      c: [e.inherit(e.TM, { b: t }), { cN: 'params', b: /\(/, e: /\)/, eB: !0, eE: !0, c: n }],
      i: /\[|%/
    }, { b: /\$[(.]/ }, e.METHOD_GUARD, {
      cN: 'class',
      bK: 'class',
      e: /[{;=]/,
      eE: !0,
      i: /[:"\[\]]/,
      c: [{ bK: 'extends' }, e.UTM]
    }, { bK: 'constructor', e: /\{/, eE: !0 }],
    i: /#(?!!)/
  }
}), hljs.initHighlightingOnLoad(), $(function() {
  $('#board-category_1,#board-category_2,#board-category_3').sortable({
    connectWith: '#board-category_1,#board-category_2,#board-category_3',
    items: '.task-item'
  })
}), function(t) {
  t('.alert.dismissible-alert').append('<i class="alert-close mdi mdi-close"></i>'), t('.alert.dismissible-alert .alert-close').on('click', function() {
    t(this).parent().slideToggle()
  }), t('#alert-notification-toggler-top').click('on', function() {
    t('body').append('            <div class="alert-notification-wrapper top">                <div class="alert-notification dismissible-alert">                    <p><b>Welcome !&nbsp;</b>Bernice Ingram</p>                    <i class="alert-close mdi mdi-close"></i>                </div>            </div>        '), t('.alert-notification-wrapper .dismissible-alert .alert-close').on('click', function() {
      t(this).parentsUntil('.alert-notification-wrapper').slideToggle()
    })
  }), t('#alert-notification-toggler-bottom').click('on', function() {
    t('body').append('            <div class="alert-notification-wrapper bottom">                <div class="alert-notification dismissible-alert">                    <p><b>Welcome !&nbsp;</b>Bernice Ingram</p>                    <i class="alert-close mdi mdi-close"></i>                </div>            </div>        '), t('.alert-notification-wrapper .dismissible-alert .alert-close').on('click', function() {
      t(this).parentsUntil('.alert-notification-wrapper').slideToggle()
    })
  }), showInfoToast = function() {
    'use strict'
    resetToastPosition(), t.toast({
      text: 'Hi There, What\'s up!',
      icon: 'info',
      allowToastClose: !1,
      heading: 'Lou Watson',
      position: 'top-right',
      loader: !0,
      loaderBg: '#00e093'
    })
  }, showSuccessToast = function() {
    'use strict'
    resetToastPosition(), t.toast({
      text: 'Hi There, What\'s up!',
      icon: 'success',
      allowToastClose: !1,
      heading: 'Lou Watson',
      position: 'top-right',
      loader: !0,
      loaderBg: '#00ba7a'
    })
  }, showWarningToast = function() {
    'use strict'
    resetToastPosition(), t.toast({
      text: 'Hi There, What\'s up!',
      icon: 'warning',
      allowToastClose: !1,
      heading: 'Lou Watson',
      position: 'top-right',
      loader: !0,
      loaderBg: '#ed673c'
    })
  }, showErrorToast = function() {
    'use strict'
    resetToastPosition(), t.toast({
      text: 'Hi There, What\'s up!',
      icon: 'error',
      allowToastClose: !1,
      heading: 'Lou Watson',
      position: 'top-right',
      loader: !0,
      loaderBg: '#ff3941'
    })
  }, showToastPosition = function(e) {
    'use strict'
    resetToastPosition(), t.toast({
      text: 'Hi There, What\'s up!',
      icon: 'info',
      allowToastClose: !1,
      heading: 'Lou Watson',
      position: String(e),
      loader: !0,
      loaderBg: '#00e093'
    })
  }, showToastInCustomPosition = function() {
    'use strict'
    resetToastPosition(), t.toast({
      heading: 'Custom positioning',
      text: 'Specify the custom position object or use one of the predefined ones',
      icon: 'info',
      position: { left: 500, bottom: 20 },
      stack: !1,
      loaderBg: '#00e093'
    })
  }, resetToastPosition = function() {
    t('.jq-toast-wrap').removeClass('bottom-left bottom-right top-left top-right mid-center'), t('.jq-toast-wrap').css({
      top: '',
      left: '',
      bottom: '',
      right: ''
    })
  }
}(jQuery)
var style = getComputedStyle(document.body),
  chartColors = ['#4d8af0', '#2d92fe', '#05478f', '#00cccc', '#6CA5E0', '#1A76CA'],
  primaryColor = style.getPropertyValue('--primary'), secondaryColor = style.getPropertyValue('--secondary'),
  successColor = style.getPropertyValue('--success'), warningColor = style.getPropertyValue('--warning'),
  dangerColor = style.getPropertyValue('--danger'), infoColor = style.getPropertyValue('--info'),
  darkColor = style.getPropertyValue('--dark'), Body = $('body'), TemplateSidebar = $('.sidebar'),
  TemplateHeader = $('.t-header'), PageContentWrapper = $('.page-content-wrapper'),
  DesktopToggler = $('.t-header-desk-toggler'), MobileToggler = $('.t-header-mobile-toggler'), Chart = Chart
$(Chart).length && (Chart.defaults.global.tooltips.enabled = !1, Chart.defaults.global.tooltips.caretSize = 4, Chart.defaults.global.tooltips.intersect = !1, Chart.defaults.global.tooltips.custom = function(l) {
  var e = document.getElementById('chartjs-tooltip')
  if (e || ((e = document.createElement('div')).id = 'chartjs-tooltip', e.innerHTML = '<table></table>', document.body.appendChild(e)), 0 !== l.opacity) {
    if (e.classList.remove('above', 'below', 'no-transform'), l.yAlign ? e.classList.add(l.yAlign) : e.classList.add('no-transform'), l.body) {
      var t = l.title || [], a = l.body.map(function(e) {
        return e.lines
      }), o = '<thead>'
      t.forEach(function(e) {
        o += '<tr><th>' + e + '</th></tr>'
      }), o += '</thead><tbody>', a.forEach(function(e, t) {
        var a = l.labelColors[t], r = 'background:' + a.backgroundColor
        r += '; border-color:' + a.borderColor, o += '<tr><td>' + ('<span style="' + (r += '; border-width: 2px') + '"></span>') + e + '</td></tr>'
      }), o += '</tbody>', e.querySelector('table').innerHTML = o
    }
    var r = this._chart.canvas.getBoundingClientRect()
    e.style.opacity = 1, e.style.position = 'absolute', e.style.left = r.left + window.pageXOffset + l.caretX + 'px', e.style.top = r.top + window.pageYOffset + l.caretY + 'px', e.style.fontFamily = l._bodyFontFamily, e.style.fontSize = l.bodyFontSize + 'px', e.style.fontStyle = l._bodyFontStyle, e.style.padding = l.yPadding + 'px ' + l.xPadding + 'px', e.style.pointerEvents = 'none'
  } else e.style.opacity = 0
}), DesktopToggler.on('click', function() {
  $(Body).toggleClass('sidebar-minimized')
}), MobileToggler.on('click', function() {
  $('.page-body').toggleClass('sidebar-collpased')
})
var current = location.pathname.split('/').slice(-1)[0].replace(/^\/|\/$/g, '')
$('.navigation-menu li a', TemplateSidebar).each(function() {
  var e = $(this)
  '' === current ? -1 !== e.attr('href').indexOf('index.html') && ($(this).parents('li').last().addClass('active'), $(this).parents('.navigation-submenu').length && $(this).addClass('active')) : -1 !== e.attr('href').indexOf(current) && ($(this).parents('li').last().addClass('active'), $(this).parents('.navigation-submenu').length && $(this).addClass('active'), 'index.html' !== current && ($(this).parents('li').last().find('a').attr('aria-expanded', 'true'), $(this).parents('.navigation-submenu').length && $(this).closest('.collapse').addClass('show')))
}), $('.t-header-toggler').click(function() {
  $('.t-header-toggler').toggleClass('arrow')
}), $('.sidebar .navigation-menu > li > a[data-toggle=\'collapse\']').on('click', function() {
  $('.sidebar .navigation-menu > li').find('.collapse.show').collapse('hide'), $('.sidebar .sidebar_footer').removeClass('opened')
}), $('.email-header .email-aside-list-toggler').on('click', function() {
  $('.email-wrapper .email-aside-list').toggleClass('open')
}), $('.btn.btn-refresh').on('click', function() {
  $(this).addClass('clicked'), setTimeout(function() {
    $('.btn.btn-refresh').removeClass('clicked')
  }, 3e3)
}), $('.btn.btn-like').on('click', function() {
  $(this).toggleClass('clicked'), $(this).find('i').toggleClass('mdi-heart-outline clicked').toggleClass('mdi-heart')
}), $('.right-sidebar-toggler').on('click', function() {
  $('.right-sidebar').toggleClass('right-sidebar-opened')
}), $('.sidebar .sidebar_footer').on('click', function() {
  $('.sidebar .sidebar_footer').hasClass('opened') ? $('.sidebar .sidebar_footer').removeClass('opened') : $('.sidebar .sidebar_footer').addClass('opened')
}), $('.email-compose-toolbar .toolbar-menu .delete-draft').on('click', function() {
  $('.email-compose-wrapper').removeClass('open'), $('#email-compose')[0].reset()
}), $('.email-composer').on('click', function() {
  $('.email-compose-wrapper').addClass('open')
}), $('.email-compose-wrapper .email-compose-header .header-controls .compose-minimize').on('click', function() {
  $(this).addClass('minimized'), $('.email-compose-wrapper').addClass('compose-minimized'), $(this).parentsUntil('.email-compose-header').append('<div class="header-ovelay"></div>'), $('.email-compose-wrapper .header-ovelay').on('click', function() {
    $('.email-compose-wrapper').removeClass('compose-minimized'), this.remove('.header-ovelay'), $('.email-compose-wrapper .email-compose-header .header-controls .compose-minimize').removeClass('minimized')
  })
}), $('.animated-count').length && $('.animated-count').counterUp({ delay: 50, time: 800 }), function(e) {
  'use strict'
  var t = [['data1', 30, 200, 100, 400, 150, 250], ['data2', 130, 100, 140, 200, 150, 50]]
  if (e('#sample_c3-line-chart').length) c3.generate({
    bindto: '#sample_c3-line-chart',
    data: { columns: t, colors: { data1: chartColors[0], data2: chartColors[1] } }
  })
  if (e('#sample_c3-area-chart').length) c3.generate({
    bindto: '#sample_c3-area-chart',
    data: {
      columns: t,
      types: { data1: 'area-spline', data2: 'area-spline' },
      groups: [['data1', 'data2']],
      colors: { data1: chartColors[0], data2: chartColors[1] }
    }
  })
  if (e('#sample_c3-bar-chart').length) c3.generate({
    bindto: '#sample_c3-bar-chart',
    data: {
      columns: t,
      type: 'bar',
      bar: { width: { ratio: .5 } },
      colors: { data1: chartColors[0], data2: chartColors[1] }
    }
  })
  if (e('#sample_c3-stacked-bar-chart').length) c3.generate({
    bindto: '#sample_c3-stacked-bar-chart',
    data: {
      columns: t,
      type: 'bar',
      groups: [['data1', 'data2']],
      colors: { data1: chartColors[0], data2: chartColors[1] }
    },
    grid: { y: { lines: [{ value: 0 }] } }
  })
  if (e('#sample_c3-step-chart').length) c3.generate({
    bindto: '#sample_c3-step-chart',
    data: {
      columns: t,
      types: { data1: 'step', data2: 'area-step' },
      colors: { data1: chartColors[0], data2: chartColors[1] }
    }
  })
  if (e('#sample_c3-scattered-plot-chart').length) c3.generate({
    bindto: '#sample_c3-scattered-plot-chart',
    data: {
      xs: { setosa: 'setosa_x', versicolor: 'versicolor_x' },
      columns: [['setosa_x', 3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8, 3.2, 3.7, 3.3], ['versicolor_x', 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8], ['setosa', .2, .2, .2, .2, .2, .4, .3, .2, .2, .1, .2, .2, .1, .1, .2, .4, .4, .3, .3, .3, .2, .4, .2, .5, .2, .2, .4, .2, .2, .2, .2, .4, .1, .2, .2, .2, .2, .1, .2, .2, .3, .3, .2, .6, .4, .3, .2, .2, .2, .2], ['versicolor', 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1, 1.3, 1.4, 1, 1.5, 1, 1.4, 1.3, 1.4, 1.5, 1, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1, 1.1, 1, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3]],
      type: 'scatter',
      colors: { data1: chartColors[0], data2: chartColors[1] }
    },
    axis: { x: { label: 'Sepal.Width', tick: { fit: !1 } }, y: { label: 'Petal.Width' } }
  })
  if (e('#sample_c3-donut-chart').length) c3.generate({
    bindto: '#sample_c3-donut-chart',
    data: {
      columns: [['data1', 30], ['data2', 120]], type: 'donut', onclick: function(e, t) {
        console.log('onclick', e, t)
      }, onmouseover: function(e, t) {
        console.log('onmouseover', e, t)
      }, onmouseout: function(e, t) {
        console.log('onmouseout', e, t)
      }, colors: { data1: chartColors[0], data2: chartColors[1] }
    },
    donut: { title: 'Iris Petal Width' }
  })
  if (e('#sample_c3-pie-chart').length) c3.generate({
    bindto: '#sample_c3-pie-chart',
    data: {
      columns: [['data1', 30], ['data2', 120]],
      colors: { data1: chartColors[0], data2: chartColors[1] },
      type: 'pie',
      onclick: function(e, t) {
        console.log('onclick', e, t)
      },
      onmouseover: function(e, t) {
        console.log('onmouseover', e, t)
      },
      onmouseout: function(e, t) {
        console.log('onmouseout', e, t)
      }
    }
  })
  if (e('#sample_c3-guage-chart').length) c3.generate({
    bindto: '#sample_c3-guage-chart',
    data: { columns: [['data', 65]], colors: { data1: chartColors[0], data2: chartColors[1] }, type: 'gauge' },
    gauge: {},
    color: { pattern: chartColors, threshold: { values: [30, 60, 90, 100] } },
    size: { height: 180 }
  })
}(jQuery), $(function() {
  'use strict'
  if ($('#chartist-line-chart').length && new Chartist.Line('#chartist-line-chart', {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [[12, 9, 7, 8, 5], [2, 1, 3.5, 7, 3], [1, 3, 4, 5, 6]]
  }, {
    fullWidth: !0,
    chartPadding: { right: 40 }
  }), $('#chartist-holes-in-data').length) new Chartist.Line('#chartist-holes-in-data', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    series: [[5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9], [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null], [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null], [{
      x: 3,
      y: 3
    }, { x: 4, y: 3 }, { x: 5, y: void 0 }, { x: 6, y: 4 }, { x: 7, y: null }, { x: 8, y: 4 }, { x: 9, y: 4 }]]
  }, { fullWidth: !0, chartPadding: { right: 10 }, low: 0 })
  if ($('#chartist-filled-holes-in-data').length) new Chartist.Line('#chartist-filled-holes-in-data', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    series: [[5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9], [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null], [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null], [{
      x: 3,
      y: 3
    }, { x: 4, y: 3 }, { x: 5, y: void 0 }, { x: 6, y: 4 }, { x: 7, y: null }, { x: 8, y: 4 }, { x: 9, y: 4 }]]
  }, {
    fullWidth: !0,
    chartPadding: { right: 10 },
    lineSmooth: Chartist.Interpolation.cardinal({ fillHoles: !0 }),
    low: 0
  })
  if ($('#chartist-scatter-diagram').length) {
    var e = function(e) {
      return Array.apply(null, new Array(e))
    }, t = e(52).map(Math.random).reduce(function(e, t, a) {
      return e.labels.push(a + 1), e.series.forEach(function(e) {
        e.push(100 * Math.random())
      }), e
    }, {
      labels: [], series: e(4).map(function() {
        return new Array
      })
    }), a = {
      showLine: !1, axisX: {
        labelInterpolationFnc: function(e, t) {
          return t % 13 == 0 ? 'W' + e : null
        }
      }
    }, r = [['screen and (min-width: 640px)', {
      axisX: {
        labelInterpolationFnc: function(e, t) {
          return t % 4 == 0 ? 'W' + e : null
        }
      }
    }]]
    new Chartist.Line('#chartist-scatter-diagram', t, a, r)
  }
  if ($('#chartist-line-with-area').length && new Chartist.Line('#chartist-line-with-area', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [[5, 9, 7, 8, 5, 3, 5, 4]]
  }, {
    low: 0,
    showArea: !0
  }), $('#chartist-bi-polar').length && new Chartist.Line('#chartist-bi-polar', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [[1, 2, 3, 1, -2, 0, 1, 0], [-2, -1, -2, -1, -2.5, -1, -2, -1], [0, 0, 0, 1, 2, 2.5, 2, 1], [2.5, 2, 1, .5, 1, .5, -1, -2.5]]
  }, {
    high: 3,
    low: -3,
    showArea: !0,
    showLine: !1,
    showPoint: !1,
    fullWidth: !0,
    axisX: { showLabel: !1, showGrid: !1 }
  }), $('#chartist-bi-polar-bar').length) {
    t = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]]
    }, a = {
      high: 10, low: -10, axisX: {
        labelInterpolationFnc: function(e, t) {
          return t % 2 == 0 ? e : null
        }
      }
    }
    new Chartist.Bar('#chartist-bi-polar-bar', t, a)
  }
  if ($('#chartist-bi-polar-bar').length) {
    t = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]]
    }, a = {
      high: 10, low: -10, axisX: {
        labelInterpolationFnc: function(e, t) {
          return t % 2 == 0 ? e : null
        }
      }
    }
    new Chartist.Bar('#chartist-bi-polar-bar', t, a)
  }
  if ($('#chartist-bar-chart').length) {
    t = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [[1, 2, 4, 8, 6, 2, 1, 4, 6, 2]]
    }, a = {
      high: 10, low: 0, axisX: {
        labelInterpolationFnc: function(e, t) {
          return t % 2 == 0 ? e : null
        }
      }
    }
    new Chartist.Bar('#chartist-bar-chart', t, a)
  }
  if ($('#chartist-overlapping-bar-chart').length) {
    t = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [[5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8], [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]]
    }, a = { seriesBarDistance: 10 }, r = [['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function(e) {
          return e[0]
        }
      }
    }]]
    new Chartist.Bar('#chartist-overlapping-bar-chart', t, a, r)
  }
  if ($('#chartist-stacked-bar-chart').length && new Chartist.Bar('#chartist-stacked-bar-chart', {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [[8e5, 12e5, 14e5, 13e5], [2e5, 4e5, 5e5, 3e5], [1e5, 2e5, 4e5, 6e5]]
  }, {
    stackBars: !0, axisY: {
      labelInterpolationFnc: function(e) {
        return e / 1e3 + 'k'
      }
    }
  }).on('draw', function(e) {
    'bar' === e.type && e.element.attr({ style: 'stroke-width: 30px' })
  }), $('#chartist-simple-pie-chart').length) {
    t = { series: [5, 3, 4] }
    var l = function(e, t) {
      return e + t
    }
    new Chartist.Pie('#chartist-simple-pie-chart', t, {
      labelInterpolationFnc: function(e) {
        return Math.round(e / t.series.reduce(l) * 100) + '%'
      }
    })
  }
  if ($('#chartist-pie-chart-custom-label').length) {
    t = { labels: ['Bananas', 'Apples', 'Grapes'], series: [20, 15, 40] }, a = {
      labelInterpolationFnc: function(e) {
        return e[0]
      }
    }, r = [['screen and (min-width: 640px)', {
      chartPadding: 30,
      labelOffset: 100,
      labelDirection: 'explode',
      labelInterpolationFnc: function(e) {
        return e
      }
    }], ['screen and (min-width: 1024px)', { labelOffset: 80, chartPadding: 20 }]]
    new Chartist.Pie('#chartist-pie-chart-custom-label', t, a, r)
  }
  $('#chartist-gauge-chart').length && new Chartist.Pie('#chartist-gauge-chart', { series: [20, 10, 30, 40] }, {
    donut: !0,
    donutWidth: 60,
    startAngle: 270,
    total: 200,
    showLabel: !1
  }), $('#chartist-donut-chart').length && new Chartist.Pie('#chartist-donut-chart', { series: [20, 10, 30, 40] }, {
    donut: !0,
    donutWidth: 60,
    donutSolid: !0,
    startAngle: 270,
    showLabel: !0
  })
}), $(function() {
  'use strict'
  if ($('#chartjs-staked-area-chart').length) {
    var e = {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          backgroundColor: chartColors[0]
        }, { label: '# of Points', data: [7, 11, 5, 8, 3, 7], borderWidth: 1, backgroundColor: chartColors[1] }]
      },
      options: { scales: { yAxes: [{ ticks: { reverse: !1 } }] }, legend: !1 }
    }, t = document.getElementById('chartjs-staked-area-chart').getContext('2d')
    new Chart(t, e)
  }
  if ($('#chartjs-staked-line-chart').length) {
    e = {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 2,
          fill: !1,
          backgroundColor: chartColors[0],
          borderColor: chartColors[0]
        }, {
          label: '# of Points',
          data: [7, 11, 5, 8, 3, 7],
          borderWidth: 2,
          fill: !1,
          backgroundColor: chartColors[1],
          borderColor: chartColors[1]
        }]
      },
      options: { scales: { yAxes: [{ ticks: { reverse: !1 } }] }, fill: !1, legend: !1 }
    }, t = document.getElementById('chartjs-staked-line-chart').getContext('2d')
    new Chart(t, e)
  }
  if ($('#chartjs-bar-chart').length) {
    var a = {
      labels: ['2013', '2014', '2014', '2015', '2016', '2017'],
      datasets: [{
        label: '# of Votes',
        data: [10, 19, 3, 5, 12, 3],
        backgroundColor: [chartColors[0], chartColors[1], chartColors[2], chartColors[3], chartColors[4], chartColors[5]]
      }]
    }, r = $('#chartjs-bar-chart').get(0).getContext('2d')
    new Chart(r, { type: 'bar', data: a, options: { legend: !1 } })
  }
  if ($('#chartjs-staked-bar-chart').length) a = {
    labels: ['2013', '2014', '2014', '2015', '2016', '2017'],
    datasets: [{ label: 'Profit', data: [10, 19, 3, 5, 12, 3], backgroundColor: chartColors[0] }, {
      label: 'Sales',
      data: [23, 12, 8, 13, 9, 17],
      backgroundColor: chartColors[1]
    }]
  }, r = $('#chartjs-staked-bar-chart').get(0).getContext('2d'), new Chart(r, {
    type: 'bar',
    data: a,
    options: {
      tooltips: { mode: 'index', intersect: !1 },
      responsive: !0,
      scales: { xAxes: [{ stacked: !0 }], yAxes: [{ stacked: !0 }] },
      legend: !1
    }
  })
  if ($('#chartjs-radar-chart').length) {
    var l = document.getElementById('chartjs-radar-chart'), o = {
      labels: ['English', 'Maths', 'Physics', 'Chemistry', 'Biology', 'History'],
      datasets: [{
        label: 'Student A',
        data: [24, 55, 30, 56, 60, 68],
        backgroundColor: chartColors[0]
      }, { label: 'Student B', data: [54, 65, 60, 70, 70, 75], backgroundColor: chartColors[1] }, {
        label: 'Student c',
        data: [43, 13, 33, 57, 50, 75],
        backgroundColor: chartColors[2]
      }]
    }
    new Chart(l, { type: 'radar', data: o })
  }
  if ($('#chartjs-doughnut-chart').length) {
    var n = {
      datasets: [{ data: [30, 40, 30], backgroundColor: [chartColors[0], chartColors[1], chartColors[2]] }],
      labels: ['Data 1', 'Data 2', 'Data 3']
    }, i = $('#chartjs-doughnut-chart').get(0).getContext('2d')
    new Chart(i, {
      type: 'doughnut',
      data: n,
      options: { responsive: !0, animation: { animateScale: !0, animateRotate: !0 } }
    })
  }
  if ($('#chartjs-pie-chart').length) {
    var s = {
      datasets: [{ data: [30, 40, 30], backgroundColor: [chartColors[0], chartColors[1], chartColors[2]] }],
      labels: ['Data 1', 'Data 2', 'Data 3']
    }, d = $('#chartjs-pie-chart').get(0).getContext('2d')
    new Chart(d, {
      type: 'pie',
      data: s,
      options: { responsive: !0, animation: { animateScale: !0, animateRotate: !0 } }
    })
  }
}), $(function() {
  'use strict'
  $('#morris-line-chart').length && Morris.Line({
    element: 'morris-line-chart',
    data: [{ y: '2006', a: 100, b: 90 }, { y: '2007', a: 75, b: 65 }, { y: '2008', a: 50, b: 40 }, {
      y: '2009',
      a: 75,
      b: 65
    }, { y: '2010', a: 50, b: 40 }, { y: '2011', a: 75, b: 65 }, { y: '2012', a: 100, b: 90 }],
    xkey: 'y',
    ykeys: ['a', 'b'],
    lineColors: chartColors,
    labels: ['Series A', 'Series B']
  }), $('#morris-area-chart').length && Morris.Area({
    element: 'morris-area-chart',
    data: [{ y: '2006', a: 100, b: 90 }, { y: '2007', a: 75, b: 65 }, { y: '2008', a: 50, b: 40 }, {
      y: '2009',
      a: 75,
      b: 65
    }, { y: '2010', a: 50, b: 40 }, { y: '2011', a: 75, b: 65 }, { y: '2012', a: 100, b: 90 }],
    xkey: 'y',
    ykeys: ['a', 'b'],
    lineColors: chartColors,
    labels: ['Series A', 'Series B']
  }), $('#morris-bar-chart').length && Morris.Bar({
    element: 'morris-bar-chart',
    data: [{ y: '2006', a: 100, b: 90 }, { y: '2007', a: 75, b: 65 }, { y: '2008', a: 50, b: 40 }, {
      y: '2009',
      a: 75,
      b: 65
    }, { y: '2010', a: 50, b: 40 }, { y: '2011', a: 75, b: 65 }, { y: '2012', a: 100, b: 90 }],
    xkey: 'y',
    ykeys: ['a', 'b'],
    barColors: chartColors,
    labels: ['Series A', 'Series B']
  }), $('#morris-donut-chart').length && Morris.Donut({
    element: 'morris-donut-chart',
    data: [{ label: 'Download Sales', value: 12 }, { label: 'In-Store Sales', value: 30 }, {
      label: 'Mail-Order Sales',
      value: 20
    }],
    colors: chartColors
  })
}), function(e) {
  'use strict'
  if (e('#summernoteExample').length && e('#summernoteExample').summernote({
    height: 300,
    tabsize: 2
  }), e('#tinyMceExample').length && tinymce.init({
    selector: '#tinyMceExample',
    height: 500,
    theme: 'modern',
    plugins: ['advlist autolink lists link image charmap print preview hr anchor pagebreak', 'searchreplace wordcount visualblocks visualchars code fullscreen', 'insertdatetime media nonbreaking save table contextmenu directionality', 'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc help'],
    toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
    toolbar2: 'print preview media | forecolor backcolor emoticons | codesample help',
    image_advtab: !0,
    templates: [{ title: 'Test template 1', content: 'Test 1' }, { title: 'Test template 2', content: 'Test 2' }],
    content_css: []
  }), e('#simpleMde').length) new SimpleMDE({ element: e('#simpleMde')[0] })
}(jQuery), $(function() {
  'use strict'
  var e = require('switchery')
  if ($('#js-select-example').length && $('#js-select-example').select2(), $('#switchery-primary').length) new e(document.querySelector('#switchery-primary'), {
    className: 'switchery switch-primary',
    color: '#f3f5f6'
  })
  if ($('#switchery-success').length) new e(document.querySelector('#switchery-success'), {
    className: 'switchery switch-success',
    color: '#f3f5f6'
  })
  if ($('#switchery-warning').length) new e(document.querySelector('#switchery-warning'), {
    className: 'switchery switch-warning',
    color: '#f3f5f6'
  })
  if ($('#switchery-danger').length) new e(document.querySelector('#switchery-danger'), {
    className: 'switchery switch-danger',
    color: '#f3f5f6'
  })
  if ($('#switchery-info').length) new e(document.querySelector('#switchery-info'), {
    className: 'switchery switch-info',
    color: '#f3f5f6'
  })
  if ($('#ul-slider-1').length) {
    var t = document.getElementById('ul-slider-1')
    noUiSlider.create(t, { start: [72], connect: [!0, !1], range: { min: [0], max: [100] } })
  }
  if ($('#ul-slider-2').length) {
    t = document.getElementById('ul-slider-2')
    noUiSlider.create(t, { start: [92], connect: [!0, !1], range: { min: [0], max: [100] } })
  }
  if ($('#ul-slider-3').length) {
    t = document.getElementById('ul-slider-3')
    noUiSlider.create(t, { start: [43], connect: [!0, !1], range: { min: [0], max: [100] } })
  }
  if ($('#ul-slider-4').length) {
    t = document.getElementById('ul-slider-4')
    noUiSlider.create(t, { start: [20], connect: [!0, !1], range: { min: [0], max: [100] } })
  }
  if ($('#ul-slider-5').length) {
    t = document.getElementById('ul-slider-5')
    noUiSlider.create(t, { start: [75], connect: [!0, !1], range: { min: [0], max: [100] } })
  }
  if ($('#ul-slider-6').length) {
    t = document.getElementById('ul-slider-6')
    noUiSlider.create(t, { start: [72], connect: [!0, !1], orientation: 'vertical', range: { min: [0], max: [100] } })
  }
  if ($('#ul-slider-7').length) {
    t = document.getElementById('ul-slider-7')
    noUiSlider.create(t, { start: [92], connect: [!0, !1], orientation: 'vertical', range: { min: [0], max: [100] } })
  }
  if ($('#ul-slider-8').length) {
    t = document.getElementById('ul-slider-8')
    noUiSlider.create(t, { start: [43], connect: [!0, !1], orientation: 'vertical', range: { min: [0], max: [100] } })
  }
  if ($('#ul-slider-9').length) {
    t = document.getElementById('ul-slider-9')
    noUiSlider.create(t, { start: [20], connect: [!0, !1], orientation: 'vertical', range: { min: [0], max: [100] } })
  }
  if ($('#ul-slider-10').length) {
    t = document.getElementById('ul-slider-10')
    noUiSlider.create(t, { start: [75], connect: [!0, !1], orientation: 'vertical', range: { min: [0], max: [100] } })
  }
  $('#skipstep-connect').length && $(function() {
    var e = document.getElementById('skipstep-connect')
    noUiSlider.create(e, {
      connect: !0,
      range: { min: 0, '10%': 10, '20%': 20, '30%': 30, '50%': 50, '60%': 60, '70%': 70, '90%': 90, max: 100 },
      snap: !0,
      start: [20, 90]
    })
    var a = [document.getElementById('skip-value-lower-3'), document.getElementById('skip-value-upper-3')]
    e.noUiSlider.on('update', function(e, t) {
      a[t].innerHTML = e[t]
    })
  }), $('#datepicker-popup').length && $('#datepicker-popup').datepicker({
    enableOnReadonly: !0,
    todayHighlight: !0,
    templates: {
      leftArrow: '<i class="mdi mdi-chevron-left"></i>',
      rightArrow: '<i class="mdi mdi-chevron-right"></i>'
    }
  })
}), function(e) {
  'use strict'
  e('.enable-mask.date-mask').mask('00/00/0000'), e('.enable-mask.time-mask').mask('00:00:00'), e('.enable-mask.phone-mask').mask('(00) 0000-0000'), e('.enable-mask.ip_address-mask').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
    translation: {
      Z: {
        pattern: /[0-9]/,
        optional: !0
      }
    }
  }), e('#defaultconfig').maxlength({
    warningClass: 'badge mt-1 badge-success',
    limitReachedClass: 'badge mt-1 badge-danger'
  }), e('#defaultconfig-2').maxlength({
    alwaysShow: !0,
    threshold: 20,
    warningClass: 'badge mt-1 badge-success',
    limitReachedClass: 'badge mt-1 badge-danger'
  }), e('#defaultconfig-3').maxlength({
    alwaysShow: !0,
    threshold: 10,
    warningClass: 'badge mt-1 badge-success',
    limitReachedClass: 'badge mt-1 badge-danger',
    separator: ' of ',
    preText: 'You have ',
    postText: ' chars remaining.',
    validate: !0
  }), e('#maxlength-textarea').maxlength({
    alwaysShow: !0,
    warningClass: 'badge mt-1 badge-success',
    limitReachedClass: 'badge mt-1 badge-danger'
  })
}(jQuery), $(function() {
  $('#smartwizard-default').length && $('#smartwizard-default').smartWizard({
    selected: 0,
    keyNavigation: !0,
    autoAdjustHeight: !0,
    cycleSteps: !1,
    BACKBUTTONSUPPORT: !0,
    useURLhash: !0,
    lang: { next: 'Next', previous: 'Previous' },
    toolbarSettings: {
      toolbarPosition: 'bottom',
      toolbarButtonPosition: 'right',
      showNextButton: !0,
      showPreviousButton: !0
    },
    anchorSettings: { anchorClickable: !1, enableAllAnchors: !1, markDoneStep: !0, enableAnchorOnDoneStep: !0 },
    contentURL: null,
    disabledSteps: [],
    errorSteps: [],
    theme: 'default',
    transitionEffect: 'fade',
    transitionSpeed: '0'
  }), $('#smartwizard-arrows').length && $('#smartwizard-arrows').smartWizard({
    selected: 0,
    keyNavigation: !0,
    autoAdjustHeight: !0,
    cycleSteps: !1,
    backButtonSupport: !0,
    useURLhash: !0,
    lang: { next: 'Next', previous: 'Previous' },
    toolbarSettings: {
      toolbarPosition: 'bottom',
      toolbarButtonPosition: 'right',
      showNextButton: !0,
      showPreviousButton: !0
    },
    anchorSettings: { anchorClickable: !1, enableAllAnchors: !1, markDoneStep: !0, enableAnchorOnDoneStep: !0 },
    contentURL: null,
    disabledSteps: [],
    errorSteps: [],
    theme: 'arrows',
    transitionEffect: 'fade',
    transitionSpeed: '0'
  })
}), $(function(e) {
  'use strict'
  var t = '#apex-area-spinal', a = '#apex-time-series', r = '#apex-line-chart', l = '#apex-line-chart-multiple',
    o = '#apex-grouped-bar-chart', n = '#apex-stacked-bar-chart', i = '#apex-pie-chart', s = '#apex-donut-chart'
  if (e(t).length) {
    var d = {
      chart: { height: 380, type: 'area', toolbar: { show: !1 } },
      dataLabels: { enabled: !1 },
      stroke: { curve: 'smooth', width: 3 },
      colors: chartColors,
      series: [{ name: 'series1', data: [31, 40, 28, 51, 42, 109, 100] }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], show: !0, axisBorder: { show: !1 } },
      yaxis: { show: !1 },
      legend: { position: 'bottom', verticalAlign: 'top', offsetX: 0, offsetY: -15 },
      tooltip: { fixed: { enabled: !1, position: 'topRight' } }
    }
    new ApexCharts(document.querySelector(t), d).render()
  }
  if (e(a).length) {
    for (var c = 13885344e5, u = 13886208e5, h = 13890528e5, p = [[], [], []], g = 0; g < 12; g++) {
      var b = [c += 864e5, dataSeries[2][g].value]
      p[0].push(b)
    }
    for (g = 0; g < 18; g++) {
      b = [u += 864e5, dataSeries[1][g].value]
      p[1].push(b)
    }
    for (g = 0; g < 12; g++) {
      b = [h += 864e5, dataSeries[0][g].value]
      p[2].push(b)
    }
    d = {
      chart: { type: 'area', stacked: !1, height: 380, zoom: { enabled: !1 }, toolbar: { show: !1 } },
      plotOptions: { line: { curve: 'smooth' } },
      dataLabels: { enabled: !1 },
      colors: chartColors,
      series: [{ name: 'PRODUCT A', data: p[0] }, { name: 'PRODUCT B', data: p[1] }, { name: 'PRODUCT C', data: p[2] }],
      markers: { size: 0, style: 'full' },
      fill: {
        gradient: {
          enabled: !0,
          shadeIntensity: 1,
          inverseColors: !1,
          opacityFrom: .45,
          opacityTo: .05,
          stops: [20, 100, 100, 100]
        }
      },
      xaxis: { type: 'datetime', show: !0, axisBorder: { show: !1 } },
      yaxis: {
        show: !1, labels: {
          style: { color: '#8e8da4' }, offsetX: 0, formatter: function(e) {
            return (e / 1e6).toFixed(0)
          }
        }, axisBorder: { show: !1 }, axisTicks: { show: !1 }
      },
      legend: { position: 'bottom', verticalAlign: 'top', offsetX: 0, offsetY: -15 },
      tooltip: {
        shared: !0, y: {
          formatter: function(e) {
            return (e / 1e6).toFixed(0) + ' points'
          }
        }
      }
    }
    new ApexCharts(document.querySelector(a), d).render()
  }
  if (e(r).length) {
    d = {
      chart: { height: 380, type: 'line', zoom: { enabled: !1 }, toolbar: { show: !1 } },
      dataLabels: { enabled: !1 },
      stroke: { curve: 'smooth', width: 3 },
      colors: chartColors,
      series: [{ name: 'Mobile', data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320] }, {
        name: 'Desktops',
        data: [233, 423, 352, 272, 432, 224, 107, 133, 458, 229]
      }],
      grid: { row: { colors: ['#f3f3f3', 'transparent'], opacity: .5 } },
      labels: series.monthDataSeries1.dates,
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'] },
      yaxis: { show: !1 },
      legend: { position: 'bottom', verticalAlign: 'top', offsetX: 0, offsetY: -15 }
    }
    new ApexCharts(document.querySelector(r), d).render()
  }
  if (e(l).length) {
    d = {
      chart: {
        height: 380,
        type: 'line',
        zoom: { enabled: !1 },
        animations: { enabled: !1 },
        toolbar: { show: !1 }
      },
      stroke: { width: [5, 5, 4], curve: 'straight' },
      legend: { position: 'bottom', verticalAlign: 'top', offsetX: 0, offsetY: -15 },
      colors: chartColors,
      series: [{ name: 'Peter', data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9] }, {
        name: 'Johnny',
        data: [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null]
      }, { name: 'David', data: [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null] }],
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      yaxis: { show: !1 }
    }
    new ApexCharts(document.querySelector(l), d).render()
  }
  if (e(o).length) {
    d = {
      chart: { height: 380, type: 'bar', toolbar: { show: !1 } },
      plotOptions: { bar: { horizontal: !1, endingShape: 'rounded', columnWidth: '55%' } },
      dataLabels: { enabled: !1 },
      stroke: { show: !0, width: 2, colors: ['transparent'] },
      colors: chartColors,
      series: [{ name: 'Net Profit', data: [44, 55, 57, 56, 61, 58] }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105]
      }, { name: 'Free Cash Flow', data: [35, 41, 36, 26, 45, 48] }],
      xaxis: { categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
      yaxis: { show: !1 },
      fill: { opacity: 1 },
      legend: { position: 'bottom', verticalAlign: 'top', offsetX: 0, offsetY: -15 },
      tooltip: {
        y: {
          formatter: function(e) {
            return '$ ' + e + ' thousands'
          }
        }
      }
    }
    new ApexCharts(document.querySelector(o), d).render()
  }
  if (e(n).length) {
    d = {
      chart: { height: 380, type: 'bar', stacked: !0, toolbar: { show: !1 } },
      plotOptions: { bar: { horizontal: !1 } },
      colors: chartColors,
      series: [{ name: 'PRODUCT A', data: [44, 55, 41, 67, 22, 43, 21] }, {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27, 33]
      }, { name: 'PRODUCT C', data: [11, 17, 15, 15, 21, 14, 15] }],
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], show: !0, axisBorder: { show: !1 } },
      yaxis: { show: !1 },
      legend: { position: 'bottom', verticalAlign: 'top', offsetX: 0, offsetY: -15 },
      fill: { opacity: 1 }
    }
    new ApexCharts(document.querySelector(n), d).render()
  }
  if (e(i).length) {
    d = {
      chart: { width: 380, type: 'pie', toolbar: { show: !1 } },
      legend: { position: 'bottom', verticalAlign: 'top', offsetX: 0, offsetY: -15 },
      colors: chartColors,
      series: [44, 25, 46]
    }
    new ApexCharts(document.querySelector(i), d).render()
  }
  if (e(s).length) {
    d = {
      chart: { width: 380, type: 'donut', toolbar: { show: !1 } },
      legend: { position: 'bottom', verticalAlign: 'top', offsetX: 0, offsetY: -15 },
      colors: chartColors,
      series: [44, 67, 11]
    }
    new ApexCharts(document.querySelector(s), d).render()
  }
})
var dataSeries = [[{ date: '2014-01-01', value: 2e7 }, { date: '2014-01-02', value: 10379978 }, {
  date: '2014-01-03',
  value: 30493749
}, { date: '2014-01-04', value: 10785250 }, { date: '2014-01-05', value: 33901904 }, {
  date: '2014-01-06',
  value: 11576838
}, { date: '2014-01-07', value: 14413854 }, { date: '2014-01-08', value: 15177211 }, {
  date: '2014-01-09',
  value: 16622100
}, { date: '2014-01-10', value: 17381072 }, { date: '2014-01-11', value: 18802310 }, {
  date: '2014-01-12',
  value: 15531790
}, { date: '2014-01-13', value: 15748881 }, { date: '2014-01-14', value: 18706437 }, {
  date: '2014-01-15',
  value: 19752685
}, { date: '2014-01-16', value: 21016418 }, { date: '2014-01-17', value: 25622924 }, {
  date: '2014-01-18',
  value: 25337480
}, { date: '2014-01-19', value: 22258882 }, { date: '2014-01-20', value: 23829538 }, {
  date: '2014-01-21',
  value: 24245689
}, { date: '2014-01-22', value: 26429711 }, { date: '2014-01-23', value: 26259017 }, {
  date: '2014-01-24',
  value: 25396183
}, { date: '2014-01-25', value: 23107346 }, { date: '2014-01-26', value: 28659852 }, {
  date: '2014-01-27',
  value: 25270783
}, { date: '2014-01-28', value: 26270783 }, { date: '2014-01-29', value: 27270783 }, {
  date: '2014-01-30',
  value: 28270783
}, { date: '2014-01-31', value: 29270783 }, { date: '2014-02-01', value: 30270783 }, {
  date: '2014-02-02',
  value: 31270783
}, { date: '2014-02-03', value: 32270783 }, { date: '2014-02-04', value: 33270783 }, {
  date: '2014-02-05',
  value: 28270783
}, { date: '2014-02-06', value: 27270783 }, { date: '2014-02-07', value: 35270783 }, {
  date: '2014-02-08',
  value: 34270783
}, { date: '2014-02-09', value: 28270783 }, { date: '2014-02-10', value: 35270783 }, {
  date: '2014-02-11',
  value: 36270783
}, { date: '2014-02-12', value: 34127078 }, { date: '2014-02-13', value: 33124078 }, {
  date: '2014-02-14',
  value: 36227078
}, { date: '2014-02-15', value: 37827078 }, { date: '2014-02-16', value: 36427073 }, {
  date: '2014-02-17',
  value: 37570783
}, { date: '2014-02-18', value: 38627073 }, { date: '2014-02-19', value: 37727078 }, {
  date: '2014-02-20',
  value: 38827073
}, { date: '2014-02-21', value: 40927078 }, { date: '2014-02-22', value: 41027078 }, {
  date: '2014-02-23',
  value: 42127073
}, { date: '2014-02-24', value: 43220783 }, { date: '2014-02-25', value: 44327078 }, {
  date: '2014-02-26',
  value: 40427078
}, { date: '2014-02-27', value: 41027078 }, { date: '2014-02-28', value: 45627078 }, {
  date: '2014-03-01',
  value: 44727078
}, { date: '2014-03-02', value: 44227078 }, { date: '2014-03-03', value: 45227078 }, {
  date: '2014-03-04',
  value: 46027078
}, { date: '2014-03-05', value: 46927078 }, { date: '2014-03-06', value: 47027078 }, {
  date: '2014-03-07',
  value: 46227078
}, { date: '2014-03-08', value: 47027078 }, { date: '2014-03-09', value: 48027078 }, {
  date: '2014-03-10',
  value: 47027078
}, { date: '2014-03-11', value: 47027078 }, { date: '2014-03-12', value: 48017078 }, {
  date: '2014-03-13',
  value: 48077078
}, { date: '2014-03-14', value: 48087078 }, { date: '2014-03-15', value: 48017078 }, {
  date: '2014-03-16',
  value: 48047078
}, { date: '2014-03-17', value: 48067078 }, { date: '2014-03-18', value: 48077078 }, {
  date: '2014-03-19',
  value: 48027074
}, { date: '2014-03-20', value: 48927079 }, { date: '2014-03-21', value: 48727071 }, {
  date: '2014-03-22',
  value: 48127072
}, { date: '2014-03-23', value: 48527072 }, { date: '2014-03-24', value: 48627027 }, {
  date: '2014-03-25',
  value: 48027040
}, { date: '2014-03-26', value: 48027043 }, { date: '2014-03-27', value: 48057022 }, {
  date: '2014-03-28',
  value: 49057022
}, { date: '2014-03-29', value: 50057022 }, { date: '2014-03-30', value: 51057022 }, {
  date: '2014-03-31',
  value: 52057022
}, { date: '2014-04-01', value: 53057022 }, { date: '2014-04-02', value: 54057022 }, {
  date: '2014-04-03',
  value: 52057022
}, { date: '2014-04-04', value: 55057022 }, { date: '2014-04-05', value: 58270783 }, {
  date: '2014-04-06',
  value: 56270783
}, { date: '2014-04-07', value: 55270783 }, { date: '2014-04-08', value: 58270783 }, {
  date: '2014-04-09',
  value: 59270783
}, { date: '2014-04-10', value: 60270783 }, { date: '2014-04-11', value: 61270783 }, {
  date: '2014-04-12',
  value: 62270783
}, { date: '2014-04-13', value: 63270783 }, { date: '2014-04-14', value: 64270783 }, {
  date: '2014-04-15',
  value: 65270783
}, { date: '2014-04-16', value: 66270783 }, { date: '2014-04-17', value: 67270783 }, {
  date: '2014-04-18',
  value: 68270783
}, { date: '2014-04-19', value: 69270783 }, { date: '2014-04-20', value: 70270783 }, {
  date: '2014-04-21',
  value: 71270783
}, { date: '2014-04-22', value: 72270783 }, { date: '2014-04-23', value: 73270783 }, {
  date: '2014-04-24',
  value: 74270783
}, { date: '2014-04-25', value: 75270783 }, { date: '2014-04-26', value: 76660783 }, {
  date: '2014-04-27',
  value: 77270783
}, { date: '2014-04-28', value: 78370783 }, { date: '2014-04-29', value: 79470783 }, {
  date: '2014-04-30',
  value: 80170783
}], [{ date: '2014-01-01', value: 15e7 }, { date: '2014-01-02', value: 160379978 }, {
  date: '2014-01-03',
  value: 170493749
}, { date: '2014-01-04', value: 160785250 }, { date: '2014-01-05', value: 167391904 }, {
  date: '2014-01-06',
  value: 161576838
}, { date: '2014-01-07', value: 161413854 }, { date: '2014-01-08', value: 152177211 }, {
  date: '2014-01-09',
  value: 143762210
}, { date: '2014-01-10', value: 144381072 }, { date: '2014-01-11', value: 154352310 }, {
  date: '2014-01-12',
  value: 165531790
}, { date: '2014-01-13', value: 175748881 }, { date: '2014-01-14', value: 187064037 }, {
  date: '2014-01-15',
  value: 197520685
}, { date: '2014-01-16', value: 210176418 }, { date: '2014-01-17', value: 196122924 }, {
  date: '2014-01-18',
  value: 207337480
}, { date: '2014-01-19', value: 200258882 }, { date: '2014-01-20', value: 186829538 }, {
  date: '2014-01-21',
  value: 192456897
}, { date: '2014-01-22', value: 204299711 }, { date: '2014-01-23', value: 192759017 }, {
  date: '2014-01-24',
  value: 203596183
}, { date: '2014-01-25', value: 208107346 }, { date: '2014-01-26', value: 196359852 }, {
  date: '2014-01-27',
  value: 192570783
}, { date: '2014-01-28', value: 177967768 }, { date: '2014-01-29', value: 190632803 }, {
  date: '2014-01-30',
  value: 203725316
}, { date: '2014-01-31', value: 218226177 }, { date: '2014-02-01', value: 210698669 }, {
  date: '2014-02-02',
  value: 217640656
}, { date: '2014-02-03', value: 216142362 }, { date: '2014-02-04', value: 201410971 }, {
  date: '2014-02-05',
  value: 196704289
}, { date: '2014-02-06', value: 190436945 }, { date: '2014-02-07', value: 178891686 }, {
  date: '2014-02-08',
  value: 171613962
}, { date: '2014-02-09', value: 157579773 }, { date: '2014-02-10', value: 158677098 }, {
  date: '2014-02-11',
  value: 147129977
}, { date: '2014-02-12', value: 151561876 }, { date: '2014-02-13', value: 151627421 }, {
  date: '2014-02-14',
  value: 143543872
}, { date: '2014-02-15', value: 136581057 }, { date: '2014-02-16', value: 135560715 }, {
  date: '2014-02-17',
  value: 122625263
}, { date: '2014-02-18', value: 112091484 }, { date: '2014-02-19', value: 98810329 }, {
  date: '2014-02-20',
  value: 99882912
}, { date: '2014-02-21', value: 94943095 }, { date: '2014-02-22', value: 104875743 }, {
  date: '2014-02-23',
  value: 116383678
}, { date: '2014-02-24', value: 125028841 }, { date: '2014-02-25', value: 123967310 }, {
  date: '2014-02-26',
  value: 133167029
}, { date: '2014-02-27', value: 128577263 }, { date: '2014-02-28', value: 115836969 }, {
  date: '2014-03-01',
  value: 119264529
}, { date: '2014-03-02', value: 109363374 }, { date: '2014-03-03', value: 113985628 }, {
  date: '2014-03-04',
  value: 114650999
}, { date: '2014-03-05', value: 110866108 }, { date: '2014-03-06', value: 96473454 }, {
  date: '2014-03-07',
  value: 104075886
}, { date: '2014-03-08', value: 103568384 }, { date: '2014-03-09', value: 101534883 }, {
  date: '2014-03-10',
  value: 115825447
}, { date: '2014-03-11', value: 126133916 }, { date: '2014-03-12', value: 116502109 }, {
  date: '2014-03-13',
  value: 130169411
}, { date: '2014-03-14', value: 124296886 }, { date: '2014-03-15', value: 126347399 }, {
  date: '2014-03-16',
  value: 131483669
}, { date: '2014-03-17', value: 142811333 }, { date: '2014-03-18', value: 129675396 }, {
  date: '2014-03-19',
  value: 115514483
}, { date: '2014-03-20', value: 117630630 }, { date: '2014-03-21', value: 122340239 }, {
  date: '2014-03-22',
  value: 132349091
}, { date: '2014-03-23', value: 125613305 }, { date: '2014-03-24', value: 135592466 }, {
  date: '2014-03-25',
  value: 123408762
}, { date: '2014-03-26', value: 111991454 }, { date: '2014-03-27', value: 116123955 }, {
  date: '2014-03-28',
  value: 112817214
}, { date: '2014-03-29', value: 113029590 }, { date: '2014-03-30', value: 108753398 }, {
  date: '2014-03-31',
  value: 99383763
}, { date: '2014-04-01', value: 100151737 }, { date: '2014-04-02', value: 94985209 }, {
  date: '2014-04-03',
  value: 82913669
}, { date: '2014-04-04', value: 78748268 }, { date: '2014-04-05', value: 63829135 }, {
  date: '2014-04-06',
  value: 78694727
}, { date: '2014-04-07', value: 80868994 }, { date: '2014-04-08', value: 93799013 }, {
  date: '2014-04-09',
  value: 99042416
}, { date: '2014-04-10', value: 97298692 }, { date: '2014-04-11', value: 83353499 }, {
  date: '2014-04-12',
  value: 71248129
}, { date: '2014-04-13', value: 75253744 }, { date: '2014-04-14', value: 68976648 }, {
  date: '2014-04-15',
  value: 71002284
}, { date: '2014-04-16', value: 75052401 }, { date: '2014-04-17', value: 83894030 }, {
  date: '2014-04-18',
  value: 90236528
}, { date: '2014-04-19', value: 99739114 }, { date: '2014-04-20', value: 96407136 }, {
  date: '2014-04-21',
  value: 108323177
}, { date: '2014-04-22', value: 101578914 }, { date: '2014-04-23', value: 115877608 }, {
  date: '2014-04-24',
  value: 112088857
}, { date: '2014-04-25', value: 112071353 }, { date: '2014-04-26', value: 101790062 }, {
  date: '2014-04-27',
  value: 115003761
}, { date: '2014-04-28', value: 120457727 }, { date: '2014-04-29', value: 118253926 }, {
  date: '2014-04-30',
  value: 117956992
}], [{ date: '2014-01-01', value: 5e7 }, { date: '2014-01-02', value: 60379978 }, {
  date: '2014-01-03',
  value: 40493749
}, { date: '2014-01-04', value: 60785250 }, { date: '2014-01-05', value: 67391904 }, {
  date: '2014-01-06',
  value: 61576838
}, { date: '2014-01-07', value: 61413854 }, { date: '2014-01-08', value: 82177211 }, {
  date: '2014-01-09',
  value: 103762210
}, { date: '2014-01-10', value: 84381072 }, { date: '2014-01-11', value: 54352310 }, {
  date: '2014-01-12',
  value: 65531790
}, { date: '2014-01-13', value: 75748881 }, { date: '2014-01-14', value: 47064037 }, {
  date: '2014-01-15',
  value: 67520685
}, { date: '2014-01-16', value: 60176418 }, { date: '2014-01-17', value: 66122924 }, {
  date: '2014-01-18',
  value: 57337480
}, { date: '2014-01-19', value: 100258882 }, { date: '2014-01-20', value: 46829538 }, {
  date: '2014-01-21',
  value: 92456897
}, { date: '2014-01-22', value: 94299711 }, { date: '2014-01-23', value: 62759017 }, {
  date: '2014-01-24',
  value: 103596183
}, { date: '2014-01-25', value: 108107346 }, { date: '2014-01-26', value: 66359852 }, {
  date: '2014-01-27',
  value: 62570783
}, { date: '2014-01-28', value: 77967768 }, { date: '2014-01-29', value: 60632803 }, {
  date: '2014-01-30',
  value: 103725316
}, { date: '2014-01-31', value: 98226177 }, { date: '2014-02-01', value: 60698669 }, {
  date: '2014-02-02',
  value: 67640656
}, { date: '2014-02-03', value: 66142362 }, { date: '2014-02-04', value: 101410971 }, {
  date: '2014-02-05',
  value: 66704289
}, { date: '2014-02-06', value: 60436945 }, { date: '2014-02-07', value: 78891686 }, {
  date: '2014-02-08',
  value: 71613962
}, { date: '2014-02-09', value: 107579773 }, { date: '2014-02-10', value: 58677098 }, {
  date: '2014-02-11',
  value: 87129977
}, { date: '2014-02-12', value: 51561876 }, { date: '2014-02-13', value: 51627421 }, {
  date: '2014-02-14',
  value: 83543872
}, { date: '2014-02-15', value: 66581057 }, { date: '2014-02-16', value: 65560715 }, {
  date: '2014-02-17',
  value: 62625263
}, { date: '2014-02-18', value: 92091484 }, { date: '2014-02-19', value: 48810329 }, {
  date: '2014-02-20',
  value: 49882912
}, { date: '2014-02-21', value: 44943095 }, { date: '2014-02-22', value: 104875743 }, {
  date: '2014-02-23',
  value: 96383678
}, { date: '2014-02-24', value: 105028841 }, { date: '2014-02-25', value: 63967310 }, {
  date: '2014-02-26',
  value: 63167029
}, { date: '2014-02-27', value: 68577263 }, { date: '2014-02-28', value: 95836969 }, {
  date: '2014-03-01',
  value: 99264529
}, { date: '2014-03-02', value: 109363374 }, { date: '2014-03-03', value: 93985628 }, {
  date: '2014-03-04',
  value: 94650999
}, { date: '2014-03-05', value: 90866108 }, { date: '2014-03-06', value: 46473454 }, {
  date: '2014-03-07',
  value: 84075886
}, { date: '2014-03-08', value: 103568384 }, { date: '2014-03-09', value: 101534883 }, {
  date: '2014-03-10',
  value: 95825447
}, { date: '2014-03-11', value: 66133916 }, { date: '2014-03-12', value: 96502109 }, {
  date: '2014-03-13',
  value: 80169411
}, { date: '2014-03-14', value: 84296886 }, { date: '2014-03-15', value: 86347399 }, {
  date: '2014-03-16',
  value: 31483669
}, { date: '2014-03-17', value: 82811333 }, { date: '2014-03-18', value: 89675396 }, {
  date: '2014-03-19',
  value: 95514483
}, { date: '2014-03-20', value: 97630630 }, { date: '2014-03-21', value: 62340239 }, {
  date: '2014-03-22',
  value: 62349091
}, { date: '2014-03-23', value: 65613305 }, { date: '2014-03-24', value: 65592466 }, {
  date: '2014-03-25',
  value: 63408762
}, { date: '2014-03-26', value: 91991454 }, { date: '2014-03-27', value: 96123955 }, {
  date: '2014-03-28',
  value: 92817214
}, { date: '2014-03-29', value: 93029590 }, { date: '2014-03-30', value: 108753398 }, {
  date: '2014-03-31',
  value: 49383763
}, { date: '2014-04-01', value: 100151737 }, { date: '2014-04-02', value: 44985209 }, {
  date: '2014-04-03',
  value: 52913669
}, { date: '2014-04-04', value: 48748268 }, { date: '2014-04-05', value: 23829135 }, {
  date: '2014-04-06',
  value: 58694727
}, { date: '2014-04-07', value: 50868994 }, { date: '2014-04-08', value: 43799013 }, {
  date: '2014-04-09',
  value: 4042416
}, { date: '2014-04-10', value: 47298692 }, { date: '2014-04-11', value: 53353499 }, {
  date: '2014-04-12',
  value: 71248129
}, { date: '2014-04-13', value: 75253744 }, { date: '2014-04-14', value: 68976648 }, {
  date: '2014-04-15',
  value: 71002284
}, { date: '2014-04-16', value: 75052401 }, { date: '2014-04-17', value: 83894030 }, {
  date: '2014-04-18',
  value: 50236528
}, { date: '2014-04-19', value: 59739114 }, { date: '2014-04-20', value: 56407136 }, {
  date: '2014-04-21',
  value: 108323177
}, { date: '2014-04-22', value: 101578914 }, { date: '2014-04-23', value: 95877608 }, {
  date: '2014-04-24',
  value: 62088857
}, { date: '2014-04-25', value: 92071353 }, { date: '2014-04-26', value: 81790062 }, {
  date: '2014-04-27',
  value: 105003761
}, { date: '2014-04-28', value: 100457727 }, { date: '2014-04-29', value: 98253926 }, {
  date: '2014-04-30',
  value: 67956992
}]], series = {
  monthDataSeries1: {
    prices: [8107.85, 8128, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25, 8600.65, 8881.1, 9340.85],
    dates: ['13 Nov 2017', '14 Nov 2017', '15 Nov 2017', '16 Nov 2017', '17 Nov 2017', '20 Nov 2017', '21 Nov 2017', '22 Nov 2017', '23 Nov 2017', '24 Nov 2017', '27 Nov 2017', '28 Nov 2017', '29 Nov 2017', '30 Nov 2017', '01 Dec 2017', '04 Dec 2017', '05 Dec 2017', '06 Dec 2017', '07 Dec 2017', '08 Dec 2017']
  },
  monthDataSeries2: {
    prices: [8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25, 8600.65, 8881.1, 9040.85, 8340.7, 8165.5, 8122.9, 8107.85, 8128],
    dates: ['13 Nov 2017', '14 Nov 2017', '15 Nov 2017', '16 Nov 2017', '17 Nov 2017', '20 Nov 2017', '21 Nov 2017', '22 Nov 2017', '23 Nov 2017', '24 Nov 2017', '27 Nov 2017', '28 Nov 2017', '29 Nov 2017', '30 Nov 2017', '01 Dec 2017', '04 Dec 2017', '05 Dec 2017', '06 Dec 2017', '07 Dec 2017', '08 Dec 2017']
  },
  monthDataSeries3: {
    prices: [7114.25, 7126.6, 7116.95, 7203.7, 7233.75, 7451, 7381.15, 7348.95, 7347.75, 7311.25, 7266.4, 7253.25, 7215.45, 7266.35, 7315.25, 7237.2, 7191.4, 7238.95, 7222.6, 7217.9, 7359.3, 7371.55, 7371.15, 7469.2, 7429.25, 7434.65, 7451.1, 7475.25, 7566.25, 7556.8, 7525.55, 7555.45, 7560.9, 7490.7, 7527.6, 7551.9, 7514.85, 7577.95, 7592.3, 7621.95, 7707.95, 7859.1, 7815.7, 7739, 7778.7, 7839.45, 7756.45, 7669.2, 7580.45, 7452.85, 7617.25, 7701.6, 7606.8, 7620.05, 7513.85, 7498.45, 7575.45, 7601.95, 7589.1, 7525.85, 7569.5, 7702.5, 7812.7, 7803.75, 7816.3, 7851.15, 7912.2, 7972.8, 8145, 8161.1, 8121.05, 8071.25, 8088.2, 8154.45, 8148.3, 8122.05, 8132.65, 8074.55, 7952.8, 7885.55, 7733.9, 7897.15, 7973.15, 7888.5, 7842.8, 7838.4, 7909.85, 7892.75, 7897.75, 7820.05, 7904.4, 7872.2, 7847.5, 7849.55, 7789.6, 7736.35, 7819.4, 7875.35, 7871.8, 8076.5, 8114.8, 8193.55, 8217.1, 8235.05, 8215.3, 8216.4, 8301.55, 8235.25, 8229.75, 8201.95, 8164.95, 8107.85, 8128, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2],
    dates: ['02 Jun 2017', '05 Jun 2017', '06 Jun 2017', '07 Jun 2017', '08 Jun 2017', '09 Jun 2017', '12 Jun 2017', '13 Jun 2017', '14 Jun 2017', '15 Jun 2017', '16 Jun 2017', '19 Jun 2017', '20 Jun 2017', '21 Jun 2017', '22 Jun 2017', '23 Jun 2017', '27 Jun 2017', '28 Jun 2017', '29 Jun 2017', '30 Jun 2017', '03 Jul 2017', '04 Jul 2017', '05 Jul 2017', '06 Jul 2017', '07 Jul 2017', '10 Jul 2017', '11 Jul 2017', '12 Jul 2017', '13 Jul 2017', '14 Jul 2017', '17 Jul 2017', '18 Jul 2017', '19 Jul 2017', '20 Jul 2017', '21 Jul 2017', '24 Jul 2017', '25 Jul 2017', '26 Jul 2017', '27 Jul 2017', '28 Jul 2017', '31 Jul 2017', '01 Aug 2017', '02 Aug 2017', '03 Aug 2017', '04 Aug 2017', '07 Aug 2017', '08 Aug 2017', '09 Aug 2017', '10 Aug 2017', '11 Aug 2017', '14 Aug 2017', '16 Aug 2017', '17 Aug 2017', '18 Aug 2017', '21 Aug 2017', '22 Aug 2017', '23 Aug 2017', '24 Aug 2017', '28 Aug 2017', '29 Aug 2017', '30 Aug 2017', '31 Aug 2017', '01 Sep 2017', '04 Sep 2017', '05 Sep 2017', '06 Sep 2017', '07 Sep 2017', '08 Sep 2017', '11 Sep 2017', '12 Sep 2017', '13 Sep 2017', '14 Sep 2017', '15 Sep 2017', '18 Sep 2017', '19 Sep 2017', '20 Sep 2017', '21 Sep 2017', '22 Sep 2017', '25 Sep 2017', '26 Sep 2017', '27 Sep 2017', '28 Sep 2017', '29 Sep 2017', '03 Oct 2017', '04 Oct 2017', '05 Oct 2017', '06 Oct 2017', '09 Oct 2017', '10 Oct 2017', '11 Oct 2017', '12 Oct 2017', '13 Oct 2017', '16 Oct 2017', '17 Oct 2017', '18 Oct 2017', '19 Oct 2017', '23 Oct 2017', '24 Oct 2017', '25 Oct 2017', '26 Oct 2017', '27 Oct 2017', '30 Oct 2017', '31 Oct 2017', '01 Nov 2017', '02 Nov 2017', '03 Nov 2017', '06 Nov 2017', '07 Nov 2017', '08 Nov 2017', '09 Nov 2017', '10 Nov 2017', '13 Nov 2017', '14 Nov 2017', '15 Nov 2017', '16 Nov 2017', '17 Nov 2017', '20 Nov 2017', '21 Nov 2017', '22 Nov 2017', '23 Nov 2017', '24 Nov 2017', '27 Nov 2017', '28 Nov 2017']
  }
}
