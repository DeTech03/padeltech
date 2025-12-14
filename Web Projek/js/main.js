document.addEventListener('DOMContentLoaded', () => {
  
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({behavior:'smooth', block:'center'});
    });
  });
  document.querySelectorAll('.card, .char-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-6px) rotateX(${ -y * 2 }deg) rotateY(${ x * 4 }deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform .25s ease';
      setTimeout(()=> card.style.transition = '', 260);
    });
  });
});
/* =========================================================
   FEEDBACK MODAL
========================================================= */
const openBtn = document.getElementById('openFeedback');
const closeBtn = document.getElementById('closeFeedback');
const modal = document.getElementById('feedbackModal');
const form = document.getElementById('feedbackForm');

if(openBtn){
  openBtn.onclick = () => modal.style.display = 'flex';
}
if(closeBtn){
  closeBtn.onclick = () => modal.style.display = 'none';
}

if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Terima kasih atas feedback Anda!');
    modal.style.display = 'none';
    form.reset();
  });
}
