// script.js - reads data.js and renders content
function renderSchedule() {
  const el = document.getElementById('schedule-content');
  if(!Array.isArray(schedule) || schedule.length===0){ el.innerHTML = '<p>Chưa có lịch học.</p>'; return; }
  const ul = document.createElement('ul');
  schedule.forEach(s => {
    const li = document.createElement('li');
    li.textContent = `${s.day} — ${s.subject} (${s.time})`;
    ul.appendChild(li);
  });
  el.innerHTML = '';
  el.appendChild(ul);
}

function renderScores() {
  const tbody = document.querySelector('#scores-table tbody');
  tbody.innerHTML = '';
  if(!Array.isArray(students) || students.length===0){
    tbody.innerHTML = '<tr><td colspan="4">Chưa có dữ liệu điểm.</td></tr>'; return;
  }
  students.forEach(s => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${s.name}</td><td>${s.subject}</td><td>${s.score}</td><td>${s.note||''}</td>`;
    tbody.appendChild(tr);
  });
}

function renderRanking() {
  const container = document.getElementById('ranking-list');
  container.innerHTML = '';
  if(!Array.isArray(students) || students.length===0){ container.innerHTML = '<li>Chưa có dữ liệu</li>'; return; }
  // clone and sort by score desc
  const sorted = students.slice().sort((a,b)=> (b.score||0)-(a.score||0));
  sorted.forEach((s, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>#${idx+1} ${s.name}</strong> — ${s.score} điểm <span style="color:#666">(${s.subject})</span>`;
    container.appendChild(li);
  });
}

function renderNews(){
  const el = document.getElementById('news-list');
  el.innerHTML = '';
  if(!Array.isArray(news) || news.length===0){ el.innerHTML = '<p>Chưa có thông báo</p>'; return; }
  news.forEach(n => {
    const d = document.createElement('div');
    d.className = 'news-item';
    d.innerHTML = `<h4>${n.title}</h4><p>${n.content}</p>`;
    el.appendChild(d);
  });
}

document.addEventListener('DOMContentLoaded', function(){
  try {
    renderSchedule();
    renderScores();
    renderRanking();
    renderNews();
  } catch(e) {
    console.error('Lỗi khi hiển thị nội dung:', e);
  }
});
