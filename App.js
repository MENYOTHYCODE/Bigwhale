// Save this as app.js in the same folder as the HTML pages.
// Lightweight shared interactions and demo "backend" using localStorage.

document.getElementById && (function(){
  // set year
  const yEl = document.getElementById('year');
  if (yEl) yEl.textContent = new Date().getFullYear();

  // mobile menu toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileBtn && mobileMenu) mobileBtn.addEventListener('click', ()=> mobileMenu.classList.toggle('hidden'));

  // CTA hooks
  const trialEls = document.querySelectorAll('#trialBtn, #ctaTrial');
  trialEls.forEach(el => el && el.addEventListener('click', ()=> {
    // simple modal-like flow (demo)
    const name = prompt('Start free trial — Enter your name:');
    if (!name) return;
    const email = prompt('Enter your email:');
    const booking = { title: 'Trial Signup', name, email, at: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem('bw_bookings') || '[]');
    existing.push(booking);
    localStorage.setItem('bw_bookings', JSON.stringify(existing));
    alert('Thanks! Trial request saved (demo). We recommend hooking this to your backend to send confirmation emails.');
  }));

  // contact form handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(contactForm);
    const obj = { name: fd.get('name'), email: fd.get('email'), message: fd.get('message'), at: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem('bw_contacts') || '[]');
    existing.push(obj);
    localStorage.setItem('bw_contacts', JSON.stringify(existing));
    alert('Message saved (demo). Hook to backend to send email/CRM.');
    contactForm.reset();
  });

  // Checkout demo (no payment) used by pricing.html
  window.startCheckout = function(plan){
    const ok = confirm('Demo checkout — create a local record for plan: ' + plan + ' ?');
    if (!ok) return;
    const purchases = JSON.parse(localStorage.getItem('bw_purchases') || '[]');
    purchases.push({ plan, at: new Date().toISOString() });
    localStorage.setItem('bw_purchases', JSON.stringify(purchases));
    alert('Demo checkout saved locally. Replace this with a secure payment flow using Stripe or Paystack on your backend.');
  };

  // Booking modal / flow (simple)
  window.openBooking = function(title){
    const name = prompt('Booking — enter your name for: ' + title);
    if (!name) return;
    const email = prompt('Enter your email:');
    const bookings = JSON.parse(localStorage.getItem('bw_bookings') || '[]');
    bookings.push({ title, name, email, at: new Date().toISOString() });
    localStorage.setItem('bw_bookings', JSON.stringify(bookings));
    alert('Booking saved (demo). Implement backend + confirmations for production.');
  };

  // Add to calendar: creates an .ics file and triggers download
  window.addToCalendar = function(title, timeText){
    const start = new Date();
    start.setDate(start.getDate() + 1);
    const end = new Date(start.getTime() + 60*60*1000);
    function pad(n){ return String(n).padStart(2,'0'); }
    const fmt = d => d.getUTCFullYear()+pad(d.getUTCMonth()+1)+pad(d.getUTCDate())+'T'+pad(d.getUTCHours())+pad(d.getUTCMinutes())+pad(d.getUTCSeconds())+'Z';
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      'SUMMARY:'+title,
      'DTSTART:'+fmt(start),
      'DTEND:'+fmt(end),
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\\n');
    const blob = new Blob([ics], {type: 'text/calendar'});
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = title + '.ics'; a.click();
  };

  // Trainer booking
  window.bookTrainer = function(name){
    const user = prompt('Book 1:1 with ' + name + ' — Enter your name:');
    if (!user) return;
    const email = prompt('Enter your email:');
    const bookings = JSON.parse(localStorage.getItem('bw_bookings') || '[]');
    bookings.push({ title: '1:1 with ' + name, name: user, email, at: new Date().toISOString() });
    localStorage.setItem('bw_bookings', JSON.stringify(bookings));
    alert('Trainer booking saved (demo).');
  };

  window.viewProfile = function(name){ alert('Open profile for ' + name + ' — expand to a profile page with availability & booking.'); };

  window.addToCart = function(item){
    const cart = JSON.parse(localStorage.getItem('bw_cart') || '[]');
    cart.push({ item, at: new Date().toISOString() });
    localStorage.setItem('bw_cart', JSON.stringify(cart));
    alert(item + ' added to cart (demo).');
  };

  // newsletter subscription helper (if you add a subscription form)
  window.subscribeNewsletter = function(email){
    const list = JSON.parse(localStorage.getItem('bw_newsletter') || '[]');
    list.push({ email, at: new Date().toISOString() });
    localStorage.setItem('bw_newsletter', JSON.stringify(list));
    alert('Subscribed (demo). Use Mailchimp/Klaviyo for production.');
  };

})();
