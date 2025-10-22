// Konfigurasi WhatsApp
const WHATSAPP_NUMBER = "6289531741090";

// Data games
const games = [
    {
        title: "Mobile Legends",
        description: "Rank boost dari Warrior sampai Mythical Glory",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop",
        tags: ["MOBA", "Popular"],
        startingPrice: "15K"
    },
    {
        title: "PUBG Mobile",
        description: "Push rank Classic dan Arena mode",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop",
        tags: ["Battle Royale", "Trending"],
        startingPrice: "20K"
    },
    {
        title: "Free Fire",
        description: "Rank Heroic hingga Grandmaster",
        image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=300&h=200&fit=crop",
        tags: ["Battle Royale"],
        startingPrice: "12K"
    },
    {
        title: "Call of Duty Mobile",
        description: "Multiplayer dan Battle Royale rank",
        image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=300&h=200&fit=crop",
        tags: ["FPS", "Action"],
        startingPrice: "18K"
    },
    {
        title: "Genshin Impact",
        description: "Abyss clear, quest completion, farming",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
        tags: ["RPG", "Adventure"],
        startingPrice: "25K"
    },
    {
        title: "Valorant",
        description: "Competitive rank boost Iron to Radiant",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop",
        tags: ["FPS", "Tactical"],
        startingPrice: "30K"
    }
];

// Data paket harga
const packages = [
    {
        name: "Basic",
        price: "50K",
        duration: "1-3 hari",
        description: "Paket hemat untuk naik 1-2 tier",
        features: [
            "1-2 tier rank up",
            "Account safety guarantee",
            "24/7 progress update",
            "Basic support"
        ],
        popular: false
    },
    {
        name: "Premium",
        price: "120K",
        duration: "3-7 hari", 
        description: "Paket terpopuler untuk rank signifikan",
        features: [
            "3-5 tier rank up",
            "Account safety guarantee",
            "Real-time progress tracking",
            "Priority support",
            "Free coaching session"
        ],
        popular: true
    },
    {
        name: "Pro",
        price: "250K",
        duration: "7-14 hari",
        description: "Paket ultimate untuk target tinggi",
        features: [
            "5+ tier rank up",
            "Account safety guarantee", 
            "Dedicated pro player",
            "24/7 VIP support",
            "Free coaching sessions",
            "Achievement boost"
        ],
        popular: false
    }
];

// Data testimoni
const testimonials = [
    {
        name: "Ahmad S.",
        game: "Mobile Legends",
        rating: 5,
        review: "Pelayanan sangat memuaskan! Dari Epic ke Legend cuma 2 hari. Pro playernya skill nya gila banget!",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
        name: "Sari M.",
        game: "PUBG Mobile",
        rating: 5,
        review: "Udah langganan di sini 3 bulan. Selalu puas dengan hasilnya. Rank Crown ke Ace gak pernah gagal.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
    },
    {
        name: "Rio P.",
        game: "Free Fire",
        rating: 5,
        review: "Fast response, hasil memuaskan. Dari Gold ke Diamond cuma butuh 1 hari. Recommended banget!",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face"
    },
    {
        name: "Maya K.", 
        game: "Valorant",
        rating: 5,
        review: "Pro player nya bener-bener pro! Iron ke Gold dalam seminggu. Komunikasi juga bagus banget.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    },
    {
        name: "Dedi A.",
        game: "Call of Duty Mobile",
        rating: 5,
        review: "Harga terjangkau, kualitas premium. Akun aman, rank naik sesuai target. Top markotop!",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
        name: "Lisa T.",
        game: "Genshin Impact",
        rating: 5,
        review: "Abyss floor 12 akhirnya 36 stars! Team building nya juga dikasih tips. Thank you!",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face"
    }
];

// Data FAQ
const faqs = [
    {
        question: "Apakah akun saya aman?",
        answer: "Ya, keamanan akun adalah prioritas utama kami. Kami menggunakan VPN premium, tidak menggunakan cheat/hack, dan bermain secara manual. Tim kami sudah berpengalaman lebih dari 3 tahun tanpa ada kasus akun banned."
    },
    {
        question: "Berapa lama proses joki selesai?",
        answer: "Waktu pengerjaan bervariasi tergantung game dan target rank. Umumnya 1-14 hari kerja. Kami akan memberikan estimasi waktu yang akurat setelah konsultasi awal."
    },
    {
        question: "Bagaimana cara pembayaran?",
        answer: "Kami menerima pembayaran melalui transfer bank (BCA, Mandiri, BRI, BNI), e-wallet (Dana, OVO, GoPay), dan pulsa. Pembayaran bisa dilakukan secara bertahap (50% DP, 50% setelah selesai)."
    },
    {
        question: "Apakah ada garansi?",
        answer: "Ya, kami memberikan garansi 100% uang kembali jika target tidak tercapai dalam waktu yang disepakati. Kami juga memberikan garansi rank tidak turun selama 7 hari setelah pengerjaan selesai."
    },
    {
        question: "Bisakah saya memantau progress?",
        answer: "Tentu! Kami akan memberikan update progress harian melalui WhatsApp, termasuk screenshot rank dan statistik. Untuk paket premium, Anda bisa memantau secara real-time."
    },
    {
        question: "Apakah data pribadi saya aman?",
        answer: "Sangat aman. Kami tidak menyimpan data login pelanggan setelah pengerjaan selesai. Semua komunikasi menggunakan enkripsi dan tim kami terikat kontrak kerahasiaan."
    },
    {
        question: "Game apa saja yang dilayani?",
        answer: "Kami melayani Mobile Legends, PUBG Mobile, Free Fire, Call of Duty Mobile, Valorant, Genshin Impact, dan game populer lainnya. Hubungi kami untuk game yang tidak ada di list."
    },
    {
        question: "Apakah bisa cancel di tengah jalan?",
        answer: "Bisa, tetapi ada ketentuan khusus. Jika pembatalan dilakukan sebelum pengerjaan dimulai, refund 100%. Jika sudah dimulai, refund disesuaikan dengan progress yang telah dicapai."
    }
];

// Variabel untuk tracking validasi form
let formValidation = {
    nama: false,
    whatsapp: false,
    game: false
};

// Navbar functionality
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const backToTop = document.getElementById('back-to-top');

// Fungsi utility
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        if (mobileMenu.classList.contains('show')) {
            toggleMobileMenu();
        }
    }
}

function openWhatsApp() {
    const message = "Halo, saya tertarik dengan layanan joki game. Mohon info lengkapnya.";
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function orderNow() {
    const message = "Halo! Saya tertarik dengan layanan joki game. Mohon info paket dan harganya. Terima kasih! 🎮";
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function orderGame(gameTitle, startingPrice) {
    const message = `🎮 *PEMESANAN JOKI GAME* 🎮

Halo! Saya tertarik dengan layanan joki untuk:
🎯 *Game:* ${gameTitle}
💰 *Harga mulai:* ${startingPrice}

Mohon informasi lebih lanjut mengenai:
- Paket yang tersedia
- Estimasi waktu pengerjaan  
- Proses pemesanan

Terima kasih! 🙏`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function orderPackage(packageData) {
    const featuresText = packageData.features.map(feature => `✅ ${feature}`).join('\n');
    
    const message = `🎮 *PEMESANAN PAKET JOKI GAME* 🎮

Saya tertarik dengan paket:
📦 *Paket:* ${packageData.name}
💰 *Harga:* ${packageData.price}
⏱️ *Estimasi:* ${packageData.duration}

📋 *Fitur yang didapat:*
${featuresText}

Mohon informasi lebih lanjut mengenai:
- Game yang ingin di-joki
- Proses pemesanan
- Metode pembayaran

Terima kasih! 🙏`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Mobile menu toggle
function toggleMobileMenu() {
    mobileMenu.classList.toggle('show');
    mobileMenuBtn.classList.toggle('active');
}

// Navbar scroll behavior
function handleNavbarScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
}

// Back to top functionality
function handleBackToTop() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Active section highlighting
function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    let current = 'home';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
}

// Fungsi validasi
function validateNama(nama) {
    const hasNumbers = /\d/.test(nama);
    const isLongEnough = nama.trim().length >= 2;
    const isNotEmpty = nama.trim().length > 0;
    
    const namaError = document.getElementById('nama-error');
    const namaInput = document.getElementById('nama');
    const statusNama = document.getElementById('status-nama');
    
    if (!isNotEmpty) {
        showError('nama-error', 'Nama lengkap harus diisi');
        namaInput.classList.add('error');
        namaInput.classList.remove('success');
        formValidation.nama = false;
        statusNama.classList.remove('valid');
    } else if (hasNumbers) {
        showError('nama-error', 'Nama tidak boleh mengandung angka');
        namaInput.classList.add('error');
        namaInput.classList.remove('success');
        formValidation.nama = false;
        statusNama.classList.remove('valid');
    } else if (!isLongEnough) {
        showError('nama-error', 'Nama terlalu pendek (minimal 2 karakter)');
        namaInput.classList.add('error');
        namaInput.classList.remove('success');
        formValidation.nama = false;
        statusNama.classList.remove('valid');
    } else {
        hideError('nama-error');
        namaInput.classList.remove('error');
        namaInput.classList.add('success');
        formValidation.nama = true;
        statusNama.classList.add('valid');
    }
    
    updateSubmitButton();
    return formValidation.nama;
}

function validateWhatsApp(whatsapp) {
    const cleanNumber = whatsapp.replace(/\D/g, '');
    const whatsappError = document.getElementById('whatsapp-error');
    const whatsappSuccess = document.getElementById('whatsapp-success');
    const whatsappInput = document.getElementById('whatsapp');
    const whatsappIcon = document.getElementById('whatsapp-icon');
    const statusWhatsapp = document.getElementById('status-whatsapp');
    
    if (!whatsapp.trim()) {
        showError('whatsapp-error', 'Nomor WhatsApp harus diisi');
        hideSuccess('whatsapp-success');
        whatsappInput.classList.add('error');
        whatsappInput.classList.remove('success');
        whatsappIcon.classList.add('hidden');
        formValidation.whatsapp = false;
        statusWhatsapp.classList.remove('valid');
    } else if (cleanNumber.length < 12) {
        showError('whatsapp-error', `Nomor terlalu pendek. Minimal 12 digit (saat ini ${cleanNumber.length} digit)`);
        hideSuccess('whatsapp-success');
        whatsappInput.classList.add('error');
        whatsappInput.classList.remove('success');
        whatsappIcon.classList.add('hidden');
        formValidation.whatsapp = false;
        statusWhatsapp.classList.remove('valid');
    } else {
        const isValidFormat = 
            /^08\d{10,11}$/.test(cleanNumber) ||
            /^628\d{9,12}$/.test(cleanNumber);
        
        const isValidLength = cleanNumber.length >= 12 && cleanNumber.length <= 15;
        
        if (isValidFormat && isValidLength) {
            hideError('whatsapp-error');
            showSuccess('whatsapp-success');
            whatsappInput.classList.remove('error');
            whatsappInput.classList.add('success');
            whatsappIcon.classList.remove('hidden');
            formValidation.whatsapp = true;
            statusWhatsapp.classList.add('valid');
        } else {
            showError('whatsapp-error', 'Format nomor tidak valid. Gunakan format: 08xxxxxxxxxx atau 628xxxxxxxxxx');
            hideSuccess('whatsapp-success');
            whatsappInput.classList.add('error');
            whatsappInput.classList.remove('success');
            whatsappIcon.classList.add('hidden');
            formValidation.whatsapp = false;
            statusWhatsapp.classList.remove('valid');
        }
    }
    
    updateSubmitButton();
    return formValidation.whatsapp;
}

function validateGame(game) {
    const gameError = document.getElementById('game-error');
    const gameInput = document.getElementById('game');
    const statusGame = document.getElementById('status-game');
    
    if (!game) {
        showError('game-error', 'Pilih game terlebih dahulu');
        gameInput.classList.add('error');
        gameInput.classList.remove('success');
        formValidation.game = false;
        statusGame.classList.remove('valid');
    } else {
        hideError('game-error');
        gameInput.classList.remove('error');
        gameInput.classList.add('success');
        formValidation.game = true;
        statusGame.classList.add('valid');
    }
    
    updateSubmitButton();
    return formValidation.game;
}

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    const span = element.querySelector('span');
    span.textContent = message;
    element.classList.remove('hidden');
}

function hideError(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showSuccess(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function hideSuccess(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function updateSubmitButton() {
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');
    
    const isFormValid = formValidation.nama && formValidation.whatsapp && formValidation.game;
    
    if (isFormValid) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('bg-gray-400', 'cursor-not-allowed');
        submitBtn.classList.add('bg-green-600', 'hover:bg-green-700');
        submitText.textContent = 'Kirim ke WhatsApp';
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.add('bg-gray-400', 'cursor-not-allowed');
        submitBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
        submitText.textContent = 'Lengkapi Form';
    }
}

function submitForm() {
    const nama = document.getElementById('nama').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const game = document.getElementById('game').value;
    const rankSekarang = document.getElementById('rank-sekarang').value;
    const targetRank = document.getElementById('target-rank').value;
    const catatan = document.getElementById('catatan').value;

    // Validasi final
    if (!validateNama(nama) || !validateWhatsApp(whatsapp) || !validateGame(game)) {
        return;
    }

    // Format WhatsApp number untuk display
    const cleanWhatsApp = whatsapp.replace(/\D/g, '');
    let formattedWhatsApp = cleanWhatsApp;
    if (cleanWhatsApp.startsWith('08')) {
        formattedWhatsApp = '62' + cleanWhatsApp.slice(1);
    }

    // Format pesan WhatsApp
    const message = `🎮 *PEMESANAN JOKI GAME* 🎮

👤 *Nama:* ${nama}
📱 *WhatsApp:* ${formattedWhatsApp}
🎯 *Game:* ${game}
📊 *Rank Sekarang:* ${rankSekarang || "Belum diisi"}
🚀 *Target Rank:* ${targetRank || "Belum diisi"}
📝 *Catatan:* ${catatan || "Tidak ada"}

---
Mohon berikan informasi lengkap mengenai paket dan harga untuk permintaan di atas. Terima kasih! 🙏`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function toggleFAQ(index) {
    const content = document.getElementById(`faq-content-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    
    if (content.classList.contains('show')) {
        content.classList.remove('show');
        icon.classList.remove('rotate');
    } else {
        content.classList.add('show');
        icon.classList.add('rotate');
    }
}

// Fungsi render
function renderGames() {
    const gamesGrid = document.getElementById('games-grid');
    gamesGrid.innerHTML = '';

    games.forEach((game, index) => {
        const tagsHTML = game.tags.map(tag => 
            `<span class="badge">${tag}</span>`
        ).join(' ');

        const gameCard = `
            <div class="game-card">
                <div class="relative">
                    <img src="${game.image}" alt="${game.title}" class="w-full h-48 object-cover">
                    <div class="absolute top-4 left-4 flex gap-2">
                        ${tagsHTML}
                    </div>
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="text-xl font-semibold">${game.title}</h3>
                        <span class="text-purple-600 font-semibold">Mulai ${game.startingPrice}</span>
                    </div>
                    <p class="text-gray-600 mb-4">${game.description}</p>
                    <button onclick="orderGame('${game.title}', '${game.startingPrice}')" 
                            class="w-full btn-primary">
                        <i class="fab fa-whatsapp"></i>
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        `;
        gamesGrid.innerHTML += gameCard;
    });
}

function renderPricing() {
    const pricingGrid = document.getElementById('pricing-grid');
    pricingGrid.innerHTML = '';

    packages.forEach((pkg, index) => {
        const featuresHTML = pkg.features.map(feature => 
            `<li class="flex items-center gap-3">
                <i class="fas fa-check text-green-500"></i>
                <span>${feature}</span>
            </li>`
        ).join('');

        const popularBadge = pkg.popular ? 
            `<span class="absolute -top-3 left-1/2 transform -translate-x-1/2 badge-primary">
                Terpopuler
            </span>` : '';

        const packageCard = `
            <div class="pricing-card ${pkg.popular ? 'popular' : ''} relative">
                ${popularBadge}
                
                <div class="text-center mb-6">
                    <h3 class="text-2xl font-semibold mb-2">${pkg.name}</h3>
                    <p class="text-gray-600 mb-4">${pkg.description}</p>
                    <div class="mb-4">
                        <span class="text-4xl font-bold text-purple-600">${pkg.price}</span>
                        <p class="text-gray-600 mt-2">Estimasi: ${pkg.duration}</p>
                    </div>
                </div>
                
                <ul class="space-y-3 mb-6">
                    ${featuresHTML}
                </ul>
                
                <button onclick='orderPackage(${JSON.stringify(pkg).replace(/'/g, "&#39;")})' 
                        class="w-full btn-primary">
                    <i class="fab fa-whatsapp"></i>
                    Pilih Paket
                </button>
            </div>
        `;
        pricingGrid.innerHTML += packageCard;
    });
}

function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonials-grid');
    testimonialsGrid.innerHTML = '';

    testimonials.forEach((testimonial, index) => {
        const starsHTML = Array(testimonial.rating).fill().map(() => 
            '<i class="fas fa-star star"></i>'
        ).join('');

        const testimonialCard = `
            <div class="card">
                <div class="card-content">
                    <div class="flex items-center gap-4 mb-4">
                        <img src="${testimonial.avatar}" alt="${testimonial.name}" 
                             class="w-12 h-12 rounded-full object-cover">
                        <div>
                            <h4 class="font-semibold">${testimonial.name}</h4>
                            <p class="text-sm text-gray-600">${testimonial.game}</p>
                        </div>
                    </div>
                    
                    <div class="stars mb-4">
                        ${starsHTML}
                    </div>
                    
                    <p class="text-gray-700 italic">"${testimonial.review}"</p>
                </div>
            </div>
        `;
        testimonialsGrid.innerHTML += testimonialCard;
    });
}

function renderFAQ() {
    const faqContainer = document.getElementById('faq-container');
    faqContainer.innerHTML = '';

    faqs.forEach((faq, index) => {
        const faqItem = `
            <div class="faq-item">
                <div class="faq-header" onclick="toggleFAQ(${index})">
                    <h3 class="font-medium">${faq.question}</h3>
                    <i id="faq-icon-${index}" class="fas fa-chevron-down faq-icon"></i>
                </div>
                <div id="faq-content-${index}" class="faq-content">
                    ${faq.answer}
                </div>
            </div>
        `;
        faqContainer.innerHTML += faqItem;
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Render semua komponen
    renderGames();
    renderPricing();
    renderTestimonials();
    renderFAQ();
    
    // Setup navbar functionality
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    if (backToTop) {
        backToTop.addEventListener('click', scrollToTop);
    }
    
    // Setup scroll listeners
    window.addEventListener('scroll', function() {
        handleNavbarScroll();
        handleBackToTop();
        updateActiveSection();
    });
    
    // Setup form validation
    const namaInput = document.getElementById('nama');
    const whatsappInput = document.getElementById('whatsapp');
    const gameSelect = document.getElementById('game');
    
    if (namaInput) {
        namaInput.addEventListener('input', function(e) {
            // Remove numbers dari input nama
            this.value = this.value.replace(/[0-9]/g, '');
            validateNama(this.value);
        });
    }
    
    if (whatsappInput) {
        whatsappInput.addEventListener('input', function(e) {
            // Hanya allow angka, spasi, dash, dan plus
            this.value = this.value.replace(/[^0-9\s\-\+]/g, '');
            validateWhatsApp(this.value);
        });
    }
    
    if (gameSelect) {
        gameSelect.addEventListener('change', function(e) {
            validateGame(this.value);
        });
    }
    
    // Setup smooth scroll untuk navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navbar.contains(event.target);
        const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnMenuBtn && mobileMenu.classList.contains('show')) {
            toggleMobileMenu();
        }
    });
    
    // Setup intersection observer untuk animasi
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe semua card dan section
    document.querySelectorAll('.card, .game-card, .pricing-card, section').forEach(el => {
        observer.observe(el);
    });
    
    // Initialize active section
    updateActiveSection();
});

// Handle resize window
window.addEventListener('resize', function() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 768 && mobileMenu.classList.contains('show')) {
        toggleMobileMenu();
    }
});

// Error handling untuk image loading
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.log('Image failed to load:', e.target.src);
        // Set fallback image
        e.target.src = 'https://via.placeholder.com/300x200?text=Game+Image';
    }
}, true);

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
});

// Performance monitoring
window.addEventListener('load', function() {
    console.log('Page fully loaded');
    // Initialize active section after load
    setTimeout(updateActiveSection, 100);
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape' && mobileMenu.classList.contains('show')) {
        toggleMobileMenu();
    }
    
    // Enter key to submit form
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn && !submitBtn.disabled && e.target.closest('#contact-form')) {
            e.preventDefault();
            submitForm();
        }
    }
});