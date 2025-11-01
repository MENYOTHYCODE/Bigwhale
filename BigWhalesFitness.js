// ==================== DROPDOWN NAV ====================
function initDropdownNav() { 
    const dropdownContainer = document.getElementById('dropdownContainer');
    const navButtons = document.querySelectorAll('#nav-menu button[data-menu]');
    let activeMenu = null;
    let isDropdownVisible = false;

    const dropdownData = {
        cardio: `
        <div class='bg-[#3d5a80] shadow-2xl rounded-xl p-6 grid grid-cols-3 gap-6 w-[1200px]'>
            <div class ='space-y-1'>
              <div class='grid grid-cols-2 gap-2'>
                <img src='Assets/bigwhale treadmill.jpg' class='rounded-lg h-40 w-full object-cover'>
                <img src='Assets/bigwhales treadmill2.jpg' class='rounded-lg h-40 w-full object-cover'>
              </div>
              <p class="text-xl font-semibold text-white p-6 ">Cross Training Treads+</p>
              <p class='text-sm text-gray-100'>Train smarter with every stride. Our shock-absorbing decks reduce impact while live performance metrics keep you pushing your limits, stride after stride.</p>
              <div class='mt-2 flex items-center'>
                <button class="bg-white rounded-xl  text-gray-500 py-2 px-8 text-md font-semibold hover:bg-gray-900">Explore </button>
                <p class="text-xl py-2 px-8 text-white font-semibold underline decoration-solid hover:text-gray-500"><a href="#">Shop Tread+</a></p>
              </div>

            </div>
            
            <div>
                <div class='grid grid-cols-2 gap-2'>
                    <img src='Assets/bigwhales rowing.avif' class='rounded-lg h-40 w-full object-cover'>
                    <img src='Assets/bigwhales rowing2.avif' class='rounded-lg h-40 w-full object-cover'>
                </div>
                <h3 class='font-semibold text-xl text-white p-6'>Cross Training Row+</h3>
                <p class='text-sm text-gray-100'>Experience the ultimate full-body workout with every stroke. Our rowing machines combine power, endurance, and precision tracking to push your performance and sculpt strength from head to toe.</p>
                <div class='mt-2 flex items-center'>
                    <button class="bg-white rounded-xl  text-gray-500 py-2 px-8 text-md font-semibold hover:bg-gray-900">Explore </button>
                    <p class="text-xl py-2 px-8 text-white font-semibold underline decoration-solid hover:text-gray-500"><a href="#">Shop Row+</a></p>
              </div>
            </div>

            <div>
                <div class='grid grid-cols-2 gap-2'>
                    <img src='Assets/bigwhales bike.jpg' class='rounded-lg h-40 w-full object-cover'>
                    <img src='Assets/big whales bike2.webp' class='rounded-lg h-40 w-full object-cover'>
                </div>
                <h3 class='font-semibold text-white text-xl p-6'>Exercise Bikes+</h3>
                <p class='text-sm text-gray-100'>Ride into strength and unleash your energy. Our premium indoor bikes combine smooth resistance, live metrics, and a studio-quality feel that keeps every session intense and rewarding</p>
                <div class='mt-2 flex items-center'>
                    <button class="bg-white rounded-xl  text-gray-500 py-2 px-8 text-md font-semibold hover:bg-gray-900">Explore </button>
                    <p class="text-xl py-2 px-8 text-white font-semibold underline decoration-solid hover:text-gray-500"><a href="#">Shop Bikes+</a></p>
              </div>
            </div>
        </div>
        `,

        membership: `
        <div class='bg-[#3d5a80] shadow-2xl rounded-xl p-6 grid grid-cols-2 gap-6 w-[650px]'>
            <div>
                  <h3 class='font-semibold text-lg mb-2'>Basic Plan</h3>
                  <p class='text-gray-100 text-sm'>24/7 gym access and community sessions.</p>
            </div>
            <div>
                  <h3 class='font-semibold text-lg mb-2'>Premium Plan</h3>
                  <p class='text-gray-100 text-sm'>Includes personal trainer, classes, and app integration.</p>
             </div>
        </div>
        `,

        programs: `
        <div class='bg-[#3d5a80] shadow-2xl rounded-xl p-6 grid grid-cols-3 gap-6 w-[850px]'>

                <div>
                    <img src='assets/strenght training.avif' class='rounded-lg h-40 w-full object-cover'>
                    <h3 class='font-semibold mt-3'>Strength Training</h3>
                    <p class='text-sm text-gray-100'>Build muscle with coach-led power sessions.</p>
                </div>
                <div>
                    <img src='assets/HIIT.avif' class='rounded-lg h-40 w-full object-cover'>
                    <h3 class='font-semibold mt-3'>HIIT</h3>
                    <p class='text-sm text-gray-100'>High-intensity bursts to torch calories fast.</p>
                </div>
                <div>
                    <img src='assets/yoga and recovery.avif' class='rounded-lg h-40 w-full object-cover'>
                    <h3 class='font-semibold mt-3'>Yoga & Recovery</h3>
                    <p class='text-sm text-gray-100'>Flexibility, balance, and peace of mind.</p>
                </div>
        </div>
        `,

        apps: `
        <div class='bg-[#3d5a80] shadow-2xl rounded-xl p-6 grid grid-cols-2 gap-6 w-[650px]'>
           <div>
                <img src='https://images.unsplash.com/photo-1598103445813-50f12ac84b20?auto=format&fit=crop&w=500&q=80' class='rounded-lg h-40 w-full object-cover'>
                <h3 class='font-semibold mt-3'>BigWhale App</h3>
                <p class='text-sm text-gray-100'>Track workouts, book sessions, and stay motivated anywhere.</p>
           </div>
           <div>
                <img src='https://images.unsplash.com/photo-1587825140708-dfaf72ae4b02?auto=format&fit=crop&w=500&q=80' class='rounded-lg h-40 w-full object-cover'>
                <h3 class='font-semibold mt-3'>Wearables</h3>
                <p class='text-sm text-gray-100'>Seamless sync with your smartwatch for live performance data.</p>
           </div>
        </div>
        `,

        accessories: `
        <div class='bg-[#3d5a80] shadow-2xl rounded-xl p-6 grid grid-cols-3 gap-6 w-[850px]'>
           <div>
                <img src='assets/bands.avif' class='rounded-lg h-40 w-full object-cover'>
                <h3 class='font-semibold mt-3'>Resistance Bands</h3>
                <p class='text-sm text-gray-100'>Compact tools for toning anytime, anywhere.</p>
           </div>
           <div>
                <img src='assets/dumbell.png' class='rounded-lg h-40 w-full object-cover'>
                <h3 class='font-semibold mt-3'>Dumbbells</h3>
                <p class='text-sm text-gray-100'>Perfect weights for any level of training.</p>
           </div>
           <div>
                <img src='assets/gym gloves.jpg' class='rounded-lg h-40 w-full object-cover'>
                <h3 class='font-semibold mt-3'>Gym Gloves</h3>
                <p class='text-sm text-gray-100'>Grip better and protect your hands during lifts.</p>
           </div>
        </div>
        `,
    };

    navButtons.forEach(btn => {
        btn.addEventListener('click', e => {
            const menuKey = btn.getAttribute('data-menu');

            // If clicking same button -> toggle off 
            if (activeMenu === menuKey && isDropdownVisible) {
                dropdownContainer.classList.replace('opacity-100', 'opacity-0');
                setTimeout(() => {
                    dropdownContainer.classList.add('hidden');
                }, 300);
                activeMenu = null;
                isDropdownVisible = false;
                return;
            }

            // otherwise, update and Show dropdown
            dropdownContainer.innerHTML = dropdownData[menuKey] || '<p class="text-white p-6">Content coming soon!</p>';
            dropdownContainer.classList.remove('hidden', 'opacity-0', '-translate-y-3');
            dropdownContainer.classList.add('opacity-100', 'translate-y-0');
            activeMenu = menuKey;
            isDropdownVisible = true;
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', e => {
        const isClickInside = dropdownContainer.contains(e.target) || Array.from(navButtons).some(btn => btn.contains(e.target));
        if (!isClickInside && isDropdownVisible.classList.contains("hidden") === false) {
            dropdownContainer.classList.replace('opacity-100', 'opacity-0');
            setTimeout(() => {
                dropdownContainer.classList.add('hidden');
            }, 300);
            activeMenu = null;
            isDropdownVisible = false;
        }

    });

}
// ==================== MOBILE MENU ====================
function initMobileMenu() {
    const mobileBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!mobileBtn || !mobileMenu) return;

    mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isVisible = mobileMenu.classList.contains('translate-x-0');
        if (isVisible) {
            mobileMenu.classList.remove('translate-x-0', 'opacity-100');
            mobileMenu.classList.add('translate-x-full', 'opacity-0');
        } else {
            mobileMenu.classList.remove('translate-x-full', 'opacity-0');
            mobileMenu.classList.add('translate-x-0', 'opacity-100');
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
            mobileMenu.classList.remove('translate-x-0', 'opacity-100');
            mobileMenu.classList.add('translate-x-full', 'opacity-0');
        }
    });
    
};

// ==================== CTA BUTTONS ====================
function initCTAs() {
    ["trialBtn", "ctaTrial", "mobileTrial"].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
          btn.addEventListener('click', () => {
            alert("Starting your free trial! Please fill in your details on the next page.");
          });
        }
    
    });
    
    // schedule filtering
    const classFilter = document.getElementById('classFilter');
        classFilter.addEventListener('change', ()=>{
          const val = classFilter.value;
          document.querySelectorAll('#schedule article').forEach(card=>{
            if(val === 'all' || card.dataset.type === val) card.style.display = '';
            else card.style.display = 'none';
        });
    });
}
    

// ==================== BOOKING MODAL ====================
function initBookingModal() { 
    const bookingModal = document.getElementById('bookingModal');
  const bookingTitle = document.getElementById('bookingTitle');
  let bookingFor = null;
  function openBooking(title){ bookingFor = title; bookingTitle.textContent = title; bookingModal.classList.remove('hidden'); }
  function closeBooking(){ bookingFor = null; bookingModal.classList.add('hidden'); }
  window.openBooking = openBooking; window.closeBooking = closeBooking;

  document.getElementById('bookingForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    const form = e.target; const name = form.name.value; const email = form.email.value;
    // mock saving booking — in production, send to backend / booking engine
    const bookings = JSON.parse(localStorage.getItem('bw_bookings') || '[]');
    bookings.push({title: bookingFor, name, email, at: new Date().toISOString()});
    localStorage.setItem('bw_bookings', JSON.stringify(bookings));
    alert('Booking confirmed — we saved it locally (demo). Implement backend to store and send confirmation.');
    closeBooking(); form.reset();
  });

  // contact form demo
  document.getElementById('contactForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Message sent (demo). Hook this to your email/CRM (e.g., HubSpot, Mailchimp or backend).');
    e.target.reset();
  });

  // newsletter demo
  document.getElementById('newsletterForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Subscribed to newsletter (demo). Integrate with Mailchimp/Klaviyo for production.');
  });

  // simple program actions
  window.learnMore = (name)=> alert(name + ' — open program page or modal with details.');
  window.viewProfile = (name)=> alert('Open profile for ' + name + '.');
  window.bookTrainer = (name)=> alert('Open 1:1 booking flow for ' + name + '.');

  // join plan demo
  window.joinPlan = (plan)=> alert('Selected plan: ' + plan + '. Integrate payment provider for signup.');

  // add to calendar (very simple ICS file creation and download)
  window.addToCalendar = (title)=>{
    const start = new Date(); start.setDate(start.getDate()+1); // demo next-day
    const end = new Date(start.getTime()+60*60*1000);
    const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${title}\nDTSTART:${formatICS(start)}\nDTEND:${formatICS(end)}\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([ics], {type: 'text/calendar'});
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = title + '.ics'; a.click();
  };
  function formatICS(d){
    const pad=(n)=>String(n).padStart(2,'0');
    return d.getUTCFullYear()+pad(d.getUTCMonth()+1)+pad(d.getUTCDate())+'T'+pad(d.getUTCHours())+pad(d.getUTCMinutes())+pad(d.getUTCSeconds())+'Z';
  }
 };

// Initialize all
document.addEventListener('DOMContentLoaded', () => {
  initDropdownNav();
  initMobileMenu();
  initCTAs();
  initBookingModal();
});

// ==================== FOOTER YEAR ====================
document.getElementById('year').textContent = new Date().getFullYear();
