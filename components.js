(function () {
  const NAV_PAGES = [
    {
      href: 'index.html', label: 'Visão Geral', badge: 227,
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>'
    },
    {
      href: 'auth.html', label: 'Autenticação', badge: 16,
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
    },
    {
      href: 'pessoas.html', label: 'Pessoas', badge: 18,
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
    },
    {
      href: 'produtos.html', label: 'Produtos &amp; Serviços', badge: 46,
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>'
    },
    {
      href: 'vendas.html', label: 'Vendas', badge: 30,
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>'
    },
    {
      href: 'financeiro.html', label: 'Financeiro', badge: 53,
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'
    },
    {
      href: 'compras.html', label: 'Compras', badge: 19,
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>'
    },
    {
      href: 'nfe.html', label: 'Notas Fiscais', badge: 21,
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>'
    },
    {
      href: 'config.html', label: 'Configurações', badge: 24,
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'
    }
  ]

  function currentFile() {
    var p = location.pathname.split('/').pop()
    return p || 'index.html'
  }

  function buildHeader() {
    return [
      '<div class="header">',
        '<div class="header-inner">',
          '<div class="logo-area">',
            '<div class="logo-icon">M</div>',
            '<div class="logo-text">',
              '<h1>ERP Mirante</h1>',
              '<p>Relatório de Testes — Sistema Completo &nbsp;·&nbsp; POP-QA-001</p>',
            '</div>',
          '</div>',
          '<div class="header-meta">',
            '<div><strong>Executor:</strong> ByStartup / Mirante</div>',
            '<div><strong>Data:</strong> 20/06/2026</div>',
            '<div><strong>Escopo:</strong> Módulos principais do ERP (fluxos críticos)</div>',
          '</div>',
        '</div>',
      '</div>'
    ].join('')
  }

  function buildNav(active) {
    var links = NAV_PAGES.map(function (p) {
      var cls = p.href === active ? 'nav-btn active' : 'nav-btn'
      return '<a href="' + p.href + '" class="' + cls + '">' +
        p.icon + ' ' + p.label +
        ' <span class="nav-badge">' + p.badge + '</span>' +
        '</a>'
    }).join('')
    return '<nav class="nav-bar"><div class="nav-inner">' + links + '</div></nav>'
  }

  document.addEventListener('DOMContentLoaded', function () {
    var main = document.querySelector('main')
    if (!main) return
    var html = buildHeader() + buildNav(currentFile())
    main.insertAdjacentHTML('beforebegin', html)
  })
})()
