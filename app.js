async function init() {
  const root = document.getElementById('app');
  const db = await fetch('./data/jison-db.json').then((r) => r.json());

  root.innerHTML = `
    <section class="panel left">
      <div>
        <div class="brand">${db.title}</div>
        <div class="small">${db.brand}</div>
      </div>
      <div class="menu">${db.leftMenu.map((m, i) => `<button class="${i===0?'active':''}">${m}</button>`).join('')}</div>
      <div class="area-list">${db.areas.map((a, i) => `<button>${a} <span class="small" style="float:right;color:#3ce897">● 在线</span></button>`).join('')}</div>
    </section>
    <header class="panel header">
      <h1>${db.title}</h1><div class="time">${db.clock}</div>
    </header>
    <section class="panel main">
      <div class="small">设备总数 ${db.overview.totalDevices} 台 ｜ 在线率 ${db.overview.onlineRate}</div>
      <div class="map-wrap">
        <img src="${db.mapImage}" alt="map" />
        ${db.zones.map(z=>`<div class="zone" style="left:${z.x}%;top:${z.y}%;width:${z.w}%;height:${z.h}%;background:${z.color}">${z.name}</div>`).join('')}
      </div>
    </section>
    <section class="panel right">
      <h3>设备详情</h3>
      <div class="stat-grid">${db.rightStats.map(s=>`<div class="stat"><div class="small">${s.label}</div><div class="v">${s.value}</div></div>`).join('')}</div>
      <div class="metric"><b>灯光系统</b> <span style="float:right;color:#37e5bb">98.4%</span></div>
      <div class="metric"><b>音响系统</b> <span style="float:right;color:#37e5bb">98.7%</span></div>
      <div class="metric"><b>屏显系统</b> <span style="float:right;color:#37e5bb">100%</span></div>
    </section>
    <section class="panel route">
      <h3>参观动线监控</h3>
      <div class="route-line">${db.route.map(s=>`<div class="stop"><div class="dot"></div>${s}</div>`).join('')}</div>
    </section>
    <section class="panel actions">
      ${db.actions.map(a=>`<div class="action-btn ${a.warn?'warn':''}"><b>${a.title}</b><div class="small">${a.desc}</div></div>`).join('')}
    </section>`;
}

init();
