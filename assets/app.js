/* Guided training engine: APP LOGIC shared by every training.
   Content lives in content/<training>.js (window.MODULES); page settings in window.TRAINING. */
const T = window.TRAINING || {};
const MODULES = window.MODULES;
/* ============================== STATE ============================== */
const STORE_KEY = T.storageKey || "oab-training-v1";
let state = { seen:{}, quiz:{} };
try { const s = JSON.parse(localStorage.getItem(STORE_KEY) || "null"); if (s && s.seen && s.quiz) state = s; } catch(e){}
function save(){ try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch(e){} }

const byId = {};
MODULES.forEach((m, mi) => {
  byId[m.id] = { type:"intro", m, mi };
  m.qa.forEach(x => byId[x.id] = { type:"qa", m, mi, x });
  m.quiz.forEach((z, zi) => { z.id = m.id + "-quiz-" + zi; });
});
const totalItems = MODULES.reduce((n,m) => n + 1 + m.qa.length, 0);
const totalQuiz = MODULES.reduce((n,m) => n + m.quiz.length, 0);

/* ============================== RENDER ============================== */
const thread = document.getElementById("thread");
const log = document.getElementById("log");
const nav = document.getElementById("nav");
let activeModule = null;

function esc(s){ return s.replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }

function moduleStatus(m){
  const items = [m.id, ...m.qa.map(x => x.id)];
  const seen = items.filter(i => state.seen[i]).length;
  const quizDone = m.quiz.every(z => z.id in state.quiz);
  if (state.seen[m.id] && quizDone && seen >= Math.ceil(items.length/2)) return "done";
  return seen > 0 || m.quiz.some(z => z.id in state.quiz) ? "started" : "";
}

function renderNav(){
  let html = "", lastPart = "";
  MODULES.forEach((m, i) => {
    if (m.part !== lastPart){ html += `<div class="part">${m.part}</div>`; lastPart = m.part; }
    const st = moduleStatus(m);
    html += `<button class="mod ${st} ${activeModule===m.id?"active":""}" data-open="${m.id}" type="button"><span class="num">${st==="done"?"✓":i+1}</span><span class="t">${m.title}</span></button>`;
    if (m.id === "trials"){
      html += `<div class="sub">` + m.qa.map(x => `<button type="button" data-ask="${x.id}" class="${state.seen[x.id]?"seen":""}">${esc(x.tag || x.q)}</button>`).join("") + `</div>`;
    }
  });
  nav.innerHTML = html;
  const seenN = Object.keys(state.seen).filter(k => byId[k]).length;
  const pct = Math.round(100 * seenN / totalItems);
  document.getElementById("pctTxt").textContent = pct + "%";
  document.getElementById("topPct").textContent = pct + "%";
  document.getElementById("pctBar").style.width = pct + "%";
  const answered = Object.keys(state.quiz).length;
  const right = Object.values(state.quiz).filter(Boolean).length;
  document.getElementById("scoreTxt").textContent = `${right} / ${answered} correct · ${totalQuiz - answered} left`;
}

function addUser(text){
  const d = document.createElement("div");
  d.className = "msg user";
  d.innerHTML = `<div class="bubble">${esc(text)}</div>`;
  thread.appendChild(d);
}

function addTrainer(html, chips){
  const d = document.createElement("div");
  d.className = "msg";
  let chipHtml = "";
  if (chips && chips.length){
    chipHtml = `<div class="chips">` + chips.map(c => `<button type="button" class="chip ${c.cls||""}" ${c.attr}>${esc(c.label)}</button>`).join("") + `</div>`;
  }
  d.innerHTML = `<div class="avatar" aria-hidden="true">${esc(T.avatar || "OAB")}</div><div class="bubble">${html}${chipHtml}</div>`;
  thread.appendChild(d);
  return d;
}

function scrollTo(el){ requestAnimationFrame(() => { log.scrollTop = el.offsetTop - 12; }); }

function followChips(m, excludeId){
  const chips = [];
  m.qa.filter(x => x.id !== excludeId).forEach(x => chips.push({ label:x.q, attr:`data-ask="${x.id}"`, cls: state.seen[x.id] ? "used" : "" }));
  m.quiz.forEach((z, zi) => { if (!(z.id in state.quiz)) chips.push({ label:`Quick check ${zi+1}`, attr:`data-quiz="${z.id}"`, cls:"quiz" }); });
  const mi = MODULES.indexOf(m);
  if (mi < MODULES.length - 1) chips.push({ label:`Next: ${MODULES[mi+1].title} →`, attr:`data-open="${MODULES[mi+1].id}"`, cls:"next" });
  return chips;
}

function openModule(id, silent){
  const m = MODULES.find(x => x.id === id); if (!m) return;
  activeModule = id;
  if (!silent) addUser(`Open: ${m.title}`);
  state.seen[m.id] = true; save();
  const el = addTrainer(m.intro + `<div class="src">Sources: ${m.src}</div>`, followChips(m));
  renderNav(); if (!silent) scrollTo(el);
  try { if (location.hash !== "#" + id) history.replaceState(null, "", "#" + id); } catch(e){}
  closeRail();
}

function askQA(id){
  const ref = byId[id]; if (!ref || ref.type !== "qa") return;
  activeModule = ref.m.id;
  addUser(ref.x.q);
  state.seen[id] = true; save();
  const el = addTrainer(ref.x.a, followChips(ref.m, id));
  renderNav(); scrollTo(el);
  closeRail();
}

function findQuiz(qid){
  for (const m of MODULES) for (const z of m.quiz) if (z.id === qid) return { m, z };
  return null;
}

function askQuiz(qid){
  const r = findQuiz(qid); if (!r) return;
  const { m, z } = r;
  addUser(`Quick check: ${m.title}`);
  const opts = z.o.map((t, i) => `<button type="button" class="opt" data-ans="${qid}|${i}">${String.fromCharCode(65+i)}. ${esc(t)}</button>`).join("");
  const el = addTrainer(`<div class="eyebrow">Quick check · ${esc(m.title)}</div><h3>${esc(z.q)}</h3><div class="opts">${opts}</div><div class="fb"></div>`);
  scrollTo(el);
}

function answer(qid, idx, btn){
  const r = findQuiz(qid); if (!r) return;
  const { m, z } = r;
  const box = btn.closest(".bubble");
  box.querySelectorAll(".opt").forEach((b, i) => { b.disabled = true; if (i === z.c) b.classList.add("right"); else if (i === idx) b.classList.add("wrong"); });
  const ok = idx === z.c;
  if (!(qid in state.quiz)) { state.quiz[qid] = ok; save(); }
  box.querySelector(".fb").innerHTML = `<div class="verdict ${ok?"ok":"no"}">${ok?"Correct.":"Not quite."}</div><p>${esc(z.e)}</p>`;
  const chips = followChips(m);
  box.insertAdjacentHTML("beforeend", `<div class="chips">` + chips.map(c => `<button type="button" class="chip ${c.cls||""}" ${c.attr}>${esc(c.label)}</button>`).join("") + `</div>`);
  renderNav();
}

/* Free-text matching against module content */
const STOP = new Set("the a an of and or to in on for is are what how does do with about tell me show which who when why can i my it its be by vs versus".split(" "));
function tokens(s){ return s.toLowerCase().replace(/[^a-z0-9β\s-]/g," ").split(/\s+/).filter(w => w && !STOP.has(w)); }
const INDEX = [];
MODULES.forEach(m => {
  INDEX.push({ id:m.id, type:"intro", label:`Open: ${m.title}`, text: tokens(m.title + " " + m.id).join(" ") });
  m.qa.forEach(x => INDEX.push({ id:x.id, type:"qa", label:x.q, text: tokens(x.q + " " + x.keys + " " + (x.tag||"")).join(" ") }));
});
function search(qs){
  const t = tokens(qs); if (!t.length) return [];
  return INDEX.map(e => {
    let s = 0; const words = e.text.split(" ");
    t.forEach(w => { if (words.includes(w)) s += 3; else if (w.length > 3 && words.some(x => x.startsWith(w) || w.startsWith(x) && x.length > 3)) s += 1; });
    if (e.type === "qa") s += 0.1;
    return { e, s };
  }).filter(r => r.s >= 2).sort((a,b) => b.s - a.s).slice(0, 4);
}

/* Keyword topic search (offline fallback) */
function keywordAnswer(v, showUser){
  const res = search(v);
  if (!res.length){
    if (showUser) addUser(v);
    const el = addTrainer(`<p>I couldn't match that to the training content. Try a topic name such as a trial (SCORPIO, BEYOND), “dose”, “blood pressure”, “bladder diary” or “EAU”, or pick a module:</p>`, MODULES.map(m => ({ label:m.title, attr:`data-open="${m.id}"` })));
    scrollTo(el); return;
  }
  const top = res[0].e;
  if (top.type === "qa") askQA(top.id); else openModule(top.id);
  if (res.length > 1){
    const el = addTrainer(`<p>Related topics:</p>`, res.slice(1).map(r => ({ label:r.e.label, attr: r.e.type==="qa" ? `data-ask="${r.e.id}"` : `data-open="${r.e.id}"` })));
    scrollTo(el.previousElementSibling || el);
  }
}

/* Light, safe formatting for AI answers: escape, then **bold** and "- " bullets */
function formatAnswer(t){
  const lines = esc(String(t)).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").split(/\n+/);
  let html = "", inList = false;
  lines.forEach(l => {
    const m = l.match(/^\s*(?:[-•*]|\d+[.)])\s+(.*)$/);
    if (m){ if (!inList){ html += "<ul>"; inList = true; } html += `<li>${m[1]}</li>`; }
    else { if (inList){ html += "</ul>"; inList = false; } if (l.trim()) html += `<p>${l}</p>`; }
  });
  if (inList) html += "</ul>";
  return html;
}

function sourceChips(ids){
  return ids.map(id => byId[id]).filter(Boolean).map(r => r.type === "qa"
    ? { label:`Source: ${r.x.tag ? r.x.tag : r.x.q}`, attr:`data-ask="${r.x.id}"` }
    : { label:`Source: ${r.m.title}`, attr:`data-open="${r.m.id}"` });
}

let asking = false;
document.getElementById("ask").addEventListener("submit", async ev => {
  ev.preventDefault();
  const inp = document.getElementById("q"); const v = inp.value.trim(); if (!v || asking) return;
  inp.value = "";
  addUser(v);
  const wait = addTrainer(`<p class="thinking">Checking the training content…</p>`);
  scrollTo(wait);
  asking = true;
  let data = null;
  try {
    if (location.protocol === "http:" || location.protocol === "https:"){
      const ctrl = new AbortController(); const timer = setTimeout(() => ctrl.abort(), 30000);
      const r = await fetch("/api/ask", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({ question:v, training: T.id || "oab" }), signal: ctrl.signal });
      clearTimeout(timer);
      if (r.ok) data = await r.json();
    }
  } catch(e){ data = null; }
  asking = false;
  wait.remove();
  if (!data || typeof data.answer !== "string"){
    keywordAnswer(v, false);
    return;
  }
  (data.sources || []).forEach(id => { if (byId[id]) state.seen[id] = true; });
  save(); renderNav();
  const chips = sourceChips(data.sources || []);
  if (!data.found){
    search(v).slice(0, 3).forEach(r => chips.push({ label:r.e.label, attr: r.e.type==="qa" ? `data-ask="${r.e.id}"` : `data-open="${r.e.id}"` }));
  }
  const el = addTrainer(`<div class="eyebrow">Answer built from the training content</div><div class="ai" dir="auto">${formatAnswer(data.answer)}</div><div class="src">Generated by AI from this module only. Check key figures in the linked source sections.</div>`, chips);
  scrollTo(el);
});

document.addEventListener("click", ev => {
  const b = ev.target.closest("button"); if (!b) return;
  if (b.dataset.open) { openModule(b.dataset.open); }
  else if (b.dataset.ask) { askQA(b.dataset.ask); }
  else if (b.dataset.quiz) { askQuiz(b.dataset.quiz); }
  else if (b.dataset.ans) { const [q, i] = b.dataset.ans.split("|"); answer(q, +i, b); }
});

/* Mobile drawer */
const rail = document.getElementById("rail"), menuBtn = document.getElementById("menuBtn");
function closeRail(){ rail.classList.remove("open"); menuBtn.setAttribute("aria-expanded","false"); }
menuBtn.addEventListener("click", () => { const o = rail.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", String(o)); });

document.getElementById("resetBtn").addEventListener("click", () => {
  state = { seen:{}, quiz:{} }; save(); thread.innerHTML = ""; welcome(); openModule(MODULES[0].id, true);
});

function welcome(){
  const road = MODULES.map((m,i) => `<button type="button" data-open="${m.id}"><span class="n">${String(i+1).padStart(2,"0")}</span><span>${m.title}</span></button>`).join("");
  addTrainer(`<div class="eyebrow">Welcome</div><h2>${T.welcomeTitle || "Guided training"}</h2><p>${T.welcomeText || ""} Open a section, read the summary, then use the follow-up chips to go deeper. Quick checks at the end of each section test what you've learned.</p><div class="roadmap">${road}</div>`);
}

/* Boot */
welcome();
const start = (location.hash || "").slice(1);
if (byId[start] && byId[start].type === "intro") openModule(start, true);
else if (byId[start] && byId[start].type === "qa") { openModule(byId[start].m.id, true); askQA(start); }
else openModule(MODULES[0].id, true);
log.scrollTop = 0;
window.addEventListener("hashchange", () => { const h = location.hash.slice(1); if (byId[h] && h !== activeModule){ byId[h].type==="qa" ? askQA(h) : openModule(h); } });
