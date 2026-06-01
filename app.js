/* ==========================================================================
   COURTIX - DYNAMIC ENGINE & STATE MANAGEMENT (STREAMLINED BOOKING ONLY)
   High-Fidelity Interaction, Filtering, Slot Selection & LocalStorage Sync
   ========================================================================== */

// 1. MOCK DATABASE - AUTHENTIC UDAIPUR SPORTS FACILITIES
const VENUES_DB = [
    {
        id: "v1",
        name: "Extra Innings Turf & Cafe",
        location: "1-A New, near Wakal Mata Road, Mali Colony, Gayariawas, Udaipur",
        region: "central",
        sport: ["football", "cricket"],
        sportLabel: "Cricket & Football",
        pricePerHour: 1000,
        rating: 4.9,
        reviewsCount: 184,
        amenities: ["floodlights", "parking", "locker", "cafe"],
        amenitiesLabels: ["Night Floodlights", "Valet Parking", "Change Rooms", "In-house Cafe"],
        photos: [
            "extra_innings_logo.jpg",
            "extra_innings_turf.jpg"
        ],
        description: "Udaipur's premier cricket and football destination in Mali Colony. High-performance synthetic turf, professional net cages, and powerful night floodlights. Complete with an in-house cafe for drinks and snacks post-game.",
        openHours: { start: 6, end: 24 },
        mapsLink: "https://maps.google.com/?q=Extra+Innings+Turf+and+Cafe+Udaipur"
    },
    {
        id: "v2",
        name: "Dugout Turf",
        location: "Archi Peace Park, near Ranawat Poultry Farm Choraha, Sector 3, Udaipur, Rajasthan 313002",
        region: "hiranmagri",
        sport: ["football", "cricket"],
        sportLabel: "Cricket & Football",
        pricePerHour: 1200,
        rating: 4.8,
        reviewsCount: 145,
        amenities: ["floodlights", "parking", "locker", "cafe"],
        amenitiesLabels: ["Night Floodlights", "Valet Parking", "Change Rooms", "Visitor Lounge"],
        photos: [
            "dugout_turf_1.png",
            "dugout_turf_2.png",
            "dugout_turf_3.png"
        ],
        description: "A premier multi-sport box arena located in Hiran Magri Sector 3. Spacious artificial grass turf designed for continuous box cricket matches, futsal scrimmages, and volleyball sets. Fully equipped with night floodlights, toilets, and visitor galleries.",
        openHours: { start: 6, end: 24 },
        mapsLink: "https://maps.google.com/?q=Dugout+Turf+Udaipur"
    },
    {
        id: "v3",
        name: "The Sports Villa",
        location: "Near 28, Kheda Savina Rd, Basant Vatika, Savina, Udaipur, Rajasthan 313002",
        region: "hiranmagri",
        sport: ["football", "cricket"],
        sportLabel: "Cricket & Football",
        pricePerHour: 900,
        rating: 4.7,
        reviewsCount: 98,
        amenities: ["floodlights", "parking", "cafe"],
        amenitiesLabels: ["Night Floodlights", "Valet Parking", "Food & Snacks"],
        photos: [
            "sports_villa_1.png",
            "sports_villa_2.png",
            "sports_villa_3.png"
        ],
        description: "A premium and spacious caged sports turf located on Savina Road. Designed for fast-paced box cricket matches and futsal scrimmages under bright, energy-efficient night floodlights. Features a cozy cafe area for players.",
        openHours: { start: 6, end: 24 },
        mapsLink: "https://maps.google.com/?q=The+Sports+Villa+Savina+Udaipur"
    },
    {
        id: "v4",
        name: "The Pavilion Park",
        location: "Near DPS School Road, Shobhagpura, Udaipur, Rajasthan 313001",
        region: "shobhagpura",
        sport: ["football", "cricket"],
        sportLabel: "Cricket & Football",
        pricePerHour: 1000,
        rating: 4.8,
        reviewsCount: 116,
        amenities: ["floodlights", "parking", "locker", "cafe"],
        amenitiesLabels: ["Night Floodlights", "Valet Parking", "Change Rooms", "In-house Cafe"],
        photos: [
            "pavilion_park_1.png",
            "pavilion_park_2.png",
            "pavilion_park_3.png"
        ],
        description: "A high-performance sports turf facility located near DPS School Road in Shobhagpura. Designed for premium futsal and high-intensity box cricket sets. Features powerful night floodlights, ample parking, change rooms, and an in-house cafe area.",
        openHours: { start: 6, end: 24 },
        mapsLink: "https://maps.google.com/?q=The+Pavilion+Park+Turf+Shobhagpura+Udaipur"
    },
    {
        id: "v5",
        name: "Virat Sports Arena",
        location: "Sector 8, near Main Road, Hiran Magri, Udaipur, Rajasthan 313002",
        region: "hiranmagri",
        sport: ["football", "cricket"],
        sportLabel: "Cricket & Football",
        pricePerHour: 1100,
        rating: 4.8,
        reviewsCount: 132,
        amenities: ["floodlights", "parking", "locker", "cafe"],
        amenitiesLabels: ["Night Floodlights", "Valet Parking", "Change Rooms", "In-house Cafe"],
        photos: [
            "virat_sports_1.png",
            "virat_sports_2.png",
            "virat_sports_3.png"
        ],
        description: "A high-performance sports turf facility located in Sector 8, Hiran Magri. Perfect for continuous box cricket and competitive futsal scrimmages under bright night floodlights. Fully outfitted with player changing rooms and cafe.",
        openHours: { start: 6, end: 24 },
        mapsLink: "https://maps.google.com/?q=Virat+Sports+Turf+Hiran+Magri+Udaipur"
    },
    {
        id: "v6",
        name: "The Power Turf",
        location: "4, Hemraj Marg, Lake Palace Road, Kalaji Goraji, Udaipur, Rajasthan 313001",
        region: "central",
        sport: ["football", "cricket"],
        sportLabel: "Cricket & Football",
        pricePerHour: 1100,
        rating: 4.9,
        reviewsCount: 156,
        amenities: ["floodlights", "parking", "locker", "cafe"],
        amenitiesLabels: ["Night Floodlights", "Valet Parking", "Locker Facilities", "In-house Cafe"],
        photos: [
            "power_turf_1.png",
            "power_turf_2.png",
            "power_turf_3.png"
        ],
        description: "A high-octane sports facility situated right on Lake Palace Road in central Udaipur. Premium synthetic artificial grass optimized for top-tier box cricket matches and futsal scrimmages under bright night floodlights. Complete with lockers, toilets, and cafe.",
        openHours: { start: 6, end: 24 },
        mapsLink: "https://maps.google.com/?q=The+Power+Turf+Udaipur"
    },
    {
        id: "v7",
        name: "SS Sports Turf",
        location: "DPS Road, Shobhagpura, Udaipur, Rajasthan 313001",
        region: "shobhagpura",
        sport: ["football", "cricket"],
        sportLabel: "Cricket & Football",
        pricePerHour: 1000,
        rating: 4.8,
        reviewsCount: 112,
        amenities: ["floodlights", "parking", "locker", "cafe"],
        amenitiesLabels: ["Night Floodlights", "Valet Parking", "Change Rooms", "In-house Cafe"],
        photos: [
            "ss_sports_1.png",
            "ss_sports_2.png",
            "ss_sports_3.png"
        ],
        description: "A premier cricket and football turf facility located on DPS Road in Shobhagpura. Designed with high-durability synthetic grass, robust boundary cages, and powerful night floodlights.",
        openHours: { start: 6, end: 24 },
        mapsLink: "https://maps.google.com/?q=SS+Sports+Turf+Udaipur"
    },
    {
        id: "v8",
        name: "The Velocity Turf",
        location: "Behind Vatsalya Academy School, Tagore Nagar, Sector 4, Pooja Nagar, Hiran Magri, Udaipur, Rajasthan 313002",
        region: "hiranmagri",
        sport: ["football", "cricket"],
        sportLabel: "Cricket & Football",
        pricePerHour: 1000,
        rating: 4.9,
        reviewsCount: 138,
        amenities: ["floodlights", "parking", "locker", "cafe"],
        amenitiesLabels: ["Night Floodlights", "Valet Parking", "Change Rooms", "Beverage Bar"],
        photos: [
            "velocity_turf_1.png",
            "velocity_turf_2.png",
            "velocity_turf_3.png"
        ],
        description: "A high-performance sports turf facility located in Sector 4, Hiran Magri. Built with elite-grade artificial turf, reliable security boundary cages, and optimal overhead floodlights for premium night sessions. Features a cozy player lounge and refreshment bar.",
        openHours: { start: 6, end: 24 },
        mapsLink: "https://maps.google.com/?q=The+Velocity+Turf+Udaipur"
    },
    {
        id: "v9",
        name: "Sport X Turf",
        location: "Kharakua Road, near Pani Ki Tanki, opposite St. Gregorios School, New Bhupalpura, Udaipur, Rajasthan 313001",
        region: "bhuwana",
        sport: ["football", "cricket"],
        sportLabel: "Cricket & Football",
        pricePerHour: 1100,
        rating: 4.8,
        reviewsCount: 94,
        amenities: ["floodlights", "parking", "locker", "cafe"],
        amenitiesLabels: ["Night Floodlights", "Valet Parking", "Change Rooms", "In-house Cafe"],
        photos: [
            "sports_x_1.png",
            "sports_x_2.png"
        ],
        description: "A premium cricket and football sports arena situated in New Bhupalpura. Outfitted with high-durability synthetic grass, heavy-duty nets, brilliant night floodlights, and professional coaching facilities.",
        openHours: { start: 6, end: 24 },
        mapsLink: "https://maps.google.com/?q=Sports+X+Turf+Udaipur"
    },
    {
        id: "v10",
        name: "Foocket Sports Arena",
        location: "Urban Square Mall, Sukher, Udaipur, Rajasthan 313001",
        region: "bhuwana",
        sport: ["football", "cricket"],
        sportLabel: "Cricket & Football",
        pricePerHour: 1200,
        rating: 4.8,
        reviewsCount: 146,
        amenities: ["floodlights", "parking", "locker", "cafe"],
        amenitiesLabels: ["Night Floodlights", "Mall Parking", "Change Rooms", "Mall Food Court"],
        photos: [
            "foocket_sports_1.png",
            "foocket_sports_2.png",
            "foocket_sports_3.png"
        ],
        description: "One of Udaipur's largest and most premium sports turf complexes, situated at Urban Square Mall. Features professional-grade synthetic turf for football, cricket, and pickleball. Highly accessible with mall amenities, massive parking, and surrounding dining areas.",
        openHours: { start: 6, end: 24 },
        mapsLink: "https://maps.google.com/?q=Foocket+Sports+Arena+Urban+Square+Mall+Udaipur"
    },
    {
        id: "v11",
        name: "PickleX",
        location: "Indralok, near Sanjay Gandhi Park, Central Udaipur, Rajasthan 313001",
        region: "central",
        sport: ["pickleball"],
        sportLabel: "Pickleball Court",
        pricePerHour: 800,
        rating: 4.9,
        reviewsCount: 86,
        amenities: ["floodlights", "parking", "locker", "cafe"],
        amenitiesLabels: ["Night Floodlights", "Valet Parking", "Change Rooms", "Pro Shop & Cafe"],
        photos: [
            "picklex_1.png",
            "picklex_2.png",
            "picklex_3.png"
        ],
        description: "Udaipur's premier dedicated pickleball facility, PickleX offers state-of-the-art cushioned acrylic outdoor courts. Equipped with professional-grade LED lighting, pro shop rentals for paddles/balls, change rooms, and an adjacent player cafe.",
        openHours: { start: 6, end: 24 },
        mapsLink: "https://maps.google.com/?q=Pickleball+Udaipur"
    },
    {
        id: "v12",
        name: "Pickora",
        location: "Sector 11, Main Road, Hiran Magri, Udaipur, Rajasthan 313002",
        region: "hiranmagri",
        sport: ["pickleball"],
        sportLabel: "Pickleball Court",
        pricePerHour: 800,
        rating: 4.9,
        reviewsCount: 110,
        amenities: ["floodlights", "parking", "locker", "cafe"],
        amenitiesLabels: ["Night Floodlights", "Valet Parking", "Change Rooms", "In-house Pickle Cafe"],
        photos: [
            "pickora_1.png",
            "pickora_2.png",
            "pickora_3.png"
        ],
        description: "Pickora is Hiran Magri's premium dedicated pickleball court and player social cafe. Features Olympic-grade acrylic cushioned courts, bright night floodlights, equipment rentals, and a cozy cafe space to unwind.",
        openHours: { start: 6, end: 24 },
        mapsLink: "https://maps.google.com/?q=Pickora+Pickleball+Udaipur"
    },
    {
        id: "v13",
        name: "Sports Fusion",
        location: "Opposite Honda Service Centre, New Flora Complex, Pulla Bhuwana, Udaipur, Rajasthan 313001",
        region: "bhuwana",
        sport: ["pickleball"],
        sportLabel: "Pickleball Court",
        pricePerHour: 800,
        rating: 4.9,
        reviewsCount: 124,
        amenities: ["floodlights", "parking", "locker", "cafe"],
        amenitiesLabels: ["Night Floodlights", "Valet Parking", "Locker Rooms", "Player Lounge & Cafe"],
        photos: [
            "sports_fusion_1.png",
            "sports_fusion_2.png",
            "sports_fusion_3.png"
        ],
        description: "Sports Fusion is a state-of-the-art sports complex in Pulla Bhuwana. Features international-standard cushion acrylic pickleball courts, professional floodlights, player change rooms, and an attached cafe and viewing lounge.",
        openHours: { start: 6, end: 24 },
        mapsLink: "https://maps.google.com/?q=Sports+Fusion+Pulla+Bhuwana+Udaipur"
    },
    {
        id: "v14",
        name: "Pulse Badminton Academy",
        location: "Kharakua Extension, near CPS School Road, Ashok Nagar, Udaipur, Rajasthan 313001",
        region: "central",
        sport: ["badminton"],
        sportLabel: "Badminton Court",
        pricePerHour: 600,
        rating: 4.8,
        reviewsCount: 88,
        amenities: ["floodlights", "parking", "locker", "cafe"],
        amenitiesLabels: ["Bright LED Lighting", "Secure Parking", "Locker & Shower Rooms", "Spectator Gallery"],
        photos: [
            "pulse_badminton_1.png",
            "pulse_badminton_2.png",
            "pulse_badminton_3.png"
        ],
        description: "Pulse Badminton Academy is a premium indoor badminton facility in Ashok Nagar. Features tournament-grade synthetic court mats laid over a shock-absorbing wooden base, professional non-glare LED lighting, showers, and dedicated coaching clinics.",
        openHours: { start: 6, end: 24 },
        mapsLink: "https://maps.google.com/?q=Pulse+Badminton+Academy+Udaipur"
    },
    {
        id: "v15",
        name: "Chawat Sports Academy",
        location: "New Navratan Rd, opposite Kidney Care Hospital, Mahaveer Colony Park, Udaipur, Rajasthan 313001",
        region: "shobhagpura",
        sport: ["badminton"],
        sportLabel: "Badminton Court",
        pricePerHour: 600,
        rating: 4.8,
        reviewsCount: 96,
        amenities: ["floodlights", "parking", "locker", "cafe"],
        amenitiesLabels: ["Bright LED Lighting", "Ample Parking", "Locker & Shower Rooms", "In-house Fitness Gym"],
        photos: [
            "chawat_badminton_1.png",
            "chawat_badminton_2.png",
            "chawat_badminton_3.png"
        ],
        description: "Chawat Sports Academy is a premier sports hub in Shobhagpura. Outfitted with international-standard indoor badminton courts, high-grade shock absorption wooden floors with synthetic mats, a fully equipped fitness gym, and professional change rooms.",
        openHours: { start: 6, end: 24 },
        mapsLink: "https://maps.google.com/?q=Chawat+Sports+Academy+Udaipur"
    },
    {
        id: "v16",
        name: "Dyumani Sports Academy",
        location: "Pahada Main Road, near Surajpole, Udaipur, Rajasthan 313001",
        region: "bhuwana",
        sport: ["badminton"],
        sportLabel: "Badminton Court",
        pricePerHour: 600,
        rating: 4.8,
        reviewsCount: 84,
        amenities: ["floodlights", "parking", "locker", "cafe"],
        amenitiesLabels: ["Bright LED Lighting", "Secure Parking", "Locker Rooms", "Fitness Lounge"],
        photos: [
            "dyumani_badminton_1.png",
            "dyumani_badminton_2.png",
            "dyumani_badminton_3.png"
        ],
        description: "Dyumani Sports Academy is a top-tier sports complex in Pahada. Outfitted with international-standard indoor badminton courts, high-performance wooden subfloors with professional synthetic mats, and a dynamic fitness and strength training lounge.",
        openHours: { start: 6, end: 24 },
        mapsLink: "https://maps.google.com/?q=Dyumani+Sports+Academy+Udaipur"
    }
];

// 2. GLOBAL STATE CONTROLLER
let appState = {
    activeTab: "home",
    selectedVenue: null,
    selectedDate: null,
    selectedSlots: [],
    
    // Core dynamics synced with LocalStorage
    myBookings: [],
    currentUser: null,
    appliedCoupon: null,
    discountAmount: 0,
    finalTotal: 0
};

// 3. APPLICATION INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    // Set default search date in HTML input to today's date
    const dateInput = document.getElementById("searchDate");
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    if (dateInput) dateInput.value = `${yyyy}-${mm}-${dd}`;
    appState.selectedDate = `${yyyy}-${mm}-${dd}`;

    // Seed default users if none registered
    seedDefaultUsers();

    // Load LocalStorage data
    loadStateFromStorage();

    // Bind Navigation & UI DOM Events
    bindNavigationEvents();
    bindSearchFilterEvents();
    bindBookingModalEvents();
    bindPaymentCheckoutEvents();
    bindAuthEvents();

    // Render lists in HTML
    renderFeaturedVenues();
    renderMainVenues();
    renderMyBookings();
    
    // Sync current logged in user details
    updateUserUIState();
});

// 4. STORAGE SYNCING
function loadStateFromStorage() {
    try {
        const bookings = localStorage.getItem("courtix_direct_bookings");
        appState.myBookings = bookings ? JSON.parse(bookings) : [];
        
        const currentUserStr = localStorage.getItem("courtix_current_user");
        appState.currentUser = currentUserStr ? JSON.parse(currentUserStr) : null;
    } catch (e) {
        console.error("LocalStorage load failed", e);
        appState.myBookings = [];
        appState.currentUser = null;
    }
}

function saveStateToStorage() {
    try {
        localStorage.setItem("courtix_direct_bookings", JSON.stringify(appState.myBookings));
    } catch (e) {
        console.error("LocalStorage save failed", e);
    }
}

// 5. ROUTING & TAB NAVIGATION CONTROLLER
function bindNavigationEvents() {
    const tabs = document.querySelectorAll(".sidebar-nav .nav-item, .mobile-nav .mobile-nav-item");
    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();
            const tabName = tab.getAttribute("data-tab");
            switchTab(tabName);
        });
    });

    // Sidebar Toggle for Mobile Screens
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("appSidebar");
    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", () => {
            sidebar.classList.toggle("active");
            sidebar.style.display = sidebar.classList.contains("active") ? "flex" : "none";
        });
    }

    // Logo click defaults to home
    const logo = document.querySelector(".sidebar-logo");
    if (logo) {
        logo.addEventListener("click", () => switchTab("home"));
    }

    // View All buttons
    const viewAllBtn = document.getElementById("viewAllVenuesBtn");
    if (viewAllBtn) {
        viewAllBtn.addEventListener("click", () => switchTab("explore"));
    }
}

function switchTab(tabName) {
    appState.activeTab = tabName;

    // Update active tab buttons styling
    const tabSelectors = document.querySelectorAll(".sidebar-nav .nav-item, .mobile-nav .mobile-nav-item");
    tabSelectors.forEach(el => {
        if (el.getAttribute("data-tab") === tabName) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });

    // Reveal the targeted section panel
    const panels = document.querySelectorAll(".view-panel");
    panels.forEach(panel => {
        panel.classList.remove("active");
        if (panel.id === `view-${tabName}`) {
            panel.classList.add("active");
        }
    });

    // Smooth scroll page back to top
    document.querySelector(".main-content").scrollTop = 0;

    // Mobile sidebar close on click
    const sidebar = document.getElementById("appSidebar");
    if (sidebar && sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
        if (window.innerWidth <= 1024) sidebar.style.display = "none";
    }
}

// 6. DATA RENDERING ENGINES
// Populate Trending Section on Home Page
function renderFeaturedVenues() {
    const listContainer = document.getElementById("featuredVenuesList");
    if (!listContainer) return;

    listContainer.innerHTML = "";
    // Grab top 3 rated venues from database
    const sorted = [...VENUES_DB].sort((a, b) => b.rating - a.rating).slice(0, 3);

    sorted.forEach(venue => {
        const card = createVenueCardHTML(venue);
        listContainer.appendChild(card);
    });
}

// Populate Explore Page listings using Search & Filters in real-time
function renderMainVenues() {
    const listContainer = document.getElementById("mainVenuesList");
    if (!listContainer) return;

    listContainer.innerHTML = "";

    // Grab values from filter inputs
    const searchSportVal = document.getElementById("searchSport") ? document.getElementById("searchSport").value : "all";
    const searchRegionVal = document.getElementById("searchRegion") ? document.getElementById("searchRegion").value : "all";
    
    // Sidebar filter values
    let activeSportPill = "all";
    const activePill = document.querySelector("#filterSportOptions .filter-pill.active");
    if (activePill) activeSportPill = activePill.getAttribute("data-sport");

    const filterRegionVal = document.getElementById("filterRegion") ? document.getElementById("filterRegion").value : "all";
    const priceMaxVal = document.getElementById("filterPriceRange") ? parseInt(document.getElementById("filterPriceRange").value) : 1500;

    // Filter Logic
    let filtered = VENUES_DB.filter(venue => {
        // Sport match
        const sportFilter = activeSportPill !== "all" ? activeSportPill : searchSportVal;
        if (sportFilter !== "all") {
            if (Array.isArray(venue.sport)) {
                if (!venue.sport.includes(sportFilter)) return false;
            } else {
                if (venue.sport !== sportFilter) return false;
            }
        }

        // Region match
        const regionFilter = filterRegionVal !== "all" ? filterRegionVal : searchRegionVal;
        if (regionFilter !== "all" && venue.region !== regionFilter) return false;

        // Price check
        if (venue.pricePerHour > priceMaxVal) return false;

        return true;
    });

    // Sorting Logic
    const sortVal = document.getElementById("sortSelector") ? document.getElementById("sortSelector").value : "featured";
    if (sortVal === "price-low") {
        filtered.sort((a, b) => a.pricePerHour - b.pricePerHour);
    } else if (sortVal === "price-high") {
        filtered.sort((a, b) => b.pricePerHour - a.pricePerHour);
    } else if (sortVal === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    // Results Counter
    const resultsCountEl = document.getElementById("resultsCount");
    if (resultsCountEl) {
        resultsCountEl.innerText = `Showing ${filtered.length} sports arenas in Udaipur`;
    }

    if (filtered.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i class="fa-solid fa-face-frown"></i>
                <h3>No venues match your criteria</h3>
                <p>Try resetting filters or adjusting pricing scales to view more courts.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(venue => {
        const card = createVenueCardHTML(venue);
        listContainer.appendChild(card);
    });
}

// Generate HTML elements for venue lists with interactive picture gallery
function createVenueCardHTML(venue) {
    const cardEl = document.createElement("div");
    cardEl.className = "venue-card";

    const amenityBullets = venue.amenitiesLabels.slice(0, 3).map(lbl => `<span class="amenity-bullet">${lbl}</span>`).join("");
    
    // Generate slideshow slides
    const slidesHTML = venue.photos.map(p => `<div class="venue-slide-img" style="background-image: url('${p}');"></div>`).join("");
    // Generate dot indicators
    const dotsHTML = venue.photos.map((_, i) => `<span class="card-gallery-dot ${i === 0 ? 'active' : ''}" data-idx="${i}"></span>`).join("");

    cardEl.innerHTML = `
        <div class="venue-thumb">
            <div class="venue-slideshow-track">
                ${slidesHTML}
            </div>
            <button class="card-gallery-btn btn-prev"><i class="fa-solid fa-chevron-left"></i></button>
            <button class="card-gallery-btn btn-next"><i class="fa-solid fa-chevron-right"></i></button>
            <div class="card-gallery-dots">
                ${dotsHTML}
            </div>
            <span class="sport-tag">${venue.sportLabel}</span>
            <span class="rating-tag"><i class="fa-solid fa-star"></i> ${venue.rating}</span>
        </div>
        <div class="venue-details">
            <h3>${venue.name}</h3>
            <span class="venue-loc">
                <i class="fa-solid fa-location-dot"></i> ${venue.location}
                ${venue.mapsLink ? `<a href="${venue.mapsLink}" target="_blank" class="maps-direct-link" title="Open in Google Maps" onclick="event.stopPropagation();" style="margin-left:0.5rem;"><i class="fa-solid fa-map-location-dot gold-glow-text" style="font-size:1.1rem; vertical-align:middle;"></i></a>` : ''}
            </span>
            <div class="venue-amenities">
                ${amenityBullets}
            </div>
            <div class="venue-footer">
                <div class="price-tag">
                    <span>Hourly Rate</span>
                    <strong>₹${venue.pricePerHour}/hr</strong>
                </div>
                <button class="btn btn-gold book-venue-btn" data-id="${venue.id}">
                    <span>Book Court</span>
                </button>
            </div>
        </div>
    `;

    // Interactive slider mechanisms (Card level)
    let activeSlide = 0;
    const track = cardEl.querySelector(".venue-slideshow-track");
    const dots = cardEl.querySelectorAll(".card-gallery-dot");
    const prevBtn = cardEl.querySelector(".card-gallery-btn.btn-prev");
    const nextBtn = cardEl.querySelector(".card-gallery-btn.btn-next");

    const updateSlider = () => {
        track.style.transform = `translateX(-${activeSlide * 100}%)`;
        dots.forEach((d, idx) => {
            if (idx === activeSlide) d.classList.add("active");
            else d.classList.remove("active");
        });
    };

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // prevent modal opening
            activeSlide = activeSlide > 0 ? activeSlide - 1 : venue.photos.length - 1;
            updateSlider();
        });
        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // prevent modal opening
            activeSlide = activeSlide < venue.photos.length - 1 ? activeSlide + 1 : 0;
            updateSlider();
        });
    }

    dots.forEach((dot, dotIdx) => {
        dot.addEventListener("click", (e) => {
            e.stopPropagation();
            activeSlide = dotIdx;
            updateSlider();
        });
    });

    // Connect booking button click
    const bookBtn = cardEl.querySelector(".book-venue-btn");
    bookBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openBookingModal(venue.id);
    });

    // Make clicking the rest of the card also open the modal
    cardEl.addEventListener("click", () => {
        openBookingModal(venue.id);
    });

    return cardEl;
}

// Populate Personal Dashboard List
function renderMyBookings() {
    const upcomingList = document.getElementById("upcomingMatchesList");
    const pastList = document.getElementById("pastMatchesList");

    if (!upcomingList || !pastList) return;

    upcomingList.innerHTML = "";
    pastList.innerHTML = "";

    // Stats calculations
    document.getElementById("statBookedCount").innerText = appState.myBookings.length;
    // Set some completed bookings simulation to look organic
    document.getElementById("statPastCount").innerText = appState.myBookings.length > 0 ? "1" : "0";

    // 1. Render Booked Matches
    if (appState.myBookings.length === 0) {
        upcomingList.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-calendar-xmark"></i>
                <h3>No upcoming court sessions booked</h3>
                <p>Browse local facilities on the Explore tab to reserve your favorite timing slot.</p>
            </div>
        `;
    } else {
        appState.myBookings.forEach(b => {
            const item = document.createElement("div");
            item.className = "booking-item-card";

            const slotsDisplay = b.slots.map(s => `${String(s).padStart(2, '0')}:00`).join(", ");
            const advancePaid = b.advancePaid || Math.round(b.totalCost * 0.1);
            const remainingBalance = b.remainingBalance || (b.totalCost - advancePaid);

            item.innerHTML = `
                <div class="booking-item-icon flex-center"><i class="fa-solid fa-ticket-simple"></i></div>
                <div class="booking-item-details" style="grid-template-columns: repeat(4, 1fr);">
                    <div class="booking-det-block">
                        <span>Sports Complex Venue</span>
                        <strong>${b.venueName}</strong>
                    </div>
                    <div class="booking-det-block">
                        <span>Date & Time Slots</span>
                        <strong>${b.date} | ${slotsDisplay}</strong>
                    </div>
                    <div class="booking-det-block">
                        <span>Paid Advance (10%)</span>
                        <strong class="gold-text">₹${advancePaid}</strong>
                    </div>
                    <div class="booking-det-block">
                        <span>Pay at Venue (90%)</span>
                        <strong style="color: #00F0FF;">₹${remainingBalance}</strong>
                    </div>
                </div>
                <div class="booking-ticket-action">
                    <button class="btn btn-outline view-ticket-btn" data-id="${b.id}">Digital Ticket</button>
                </div>
            `;

            item.querySelector(".view-ticket-btn").addEventListener("click", () => {
                showDigitalTicket(b);
            });

            upcomingList.appendChild(item);
        });
    }

    // 2. Render Completed Matches (Simulate 1 previous match if bookings exist to look authentic)
    if (appState.myBookings.length === 0) {
        pastList.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-clock-rotate-left"></i>
                <h3>No history of past slots played</h3>
            </div>
        `;
    } else {
        const item = document.createElement("div");
        item.className = "booking-item-card";
        item.style.opacity = "0.7";

        item.innerHTML = `
            <div class="booking-item-icon flex-center" style="color:var(--color-text-muted); border-color:var(--border-color);"><i class="fa-solid fa-check-double"></i></div>
            <div class="booking-item-details">
                <div class="booking-det-block">
                    <span>Sports Complex Venue</span>
                    <strong>Udaipur Turf Club</strong>
                </div>
                <div class="booking-det-block">
                    <span>Played Date & Timings</span>
                    <strong>20th May 2026 | 06:00 PM - 07:00 PM</strong>
                </div>
                <div class="booking-det-block">
                    <span>Completed Invoice</span>
                    <strong>₹1,000</strong>
                </div>
            </div>
            <div class="booking-ticket-action">
                <span class="badge btn-outline" style="border-color:rgba(255,255,255,0.05); color:var(--color-text-muted);">Played</span>
            </div>
        `;
        pastList.appendChild(item);
    }
}

// 7. SEARCH BAR & DYNAMIC FILTER CONTROLS
function bindSearchFilterEvents() {
    const heroSearchBtn = document.getElementById("heroSearchBtn");
    if (heroSearchBtn) {
        heroSearchBtn.addEventListener("click", () => {
            switchTab("explore");
            renderMainVenues();
        });
    }

    // Subcategories click logic
    const categoryCards = document.querySelectorAll(".sport-card");
    categoryCards.forEach(card => {
        card.addEventListener("click", () => {
            const sport = card.getAttribute("data-sport");
            
            // Highlight matching filter pill
            const explorePills = document.querySelectorAll("#filterSportOptions .filter-pill");
            explorePills.forEach(pill => {
                if (pill.getAttribute("data-sport") === sport) {
                    pill.classList.add("active");
                } else {
                    pill.classList.remove("active");
                }
            });

            switchTab("explore");
            renderMainVenues();
        });
    });

    // Pill selectors on Explore sidebar
    const filterPills = document.querySelectorAll("#filterSportOptions .filter-pill");
    filterPills.forEach(pill => {
        pill.addEventListener("click", () => {
            filterPills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            renderMainVenues();
        });
    });

    // Triggers for listings change
    const inputsToTrigger = [
        document.getElementById("filterRegion"),
        document.getElementById("filterPriceRange"),
        document.getElementById("sortSelector")
    ];

    inputsToTrigger.forEach(input => {
        if (input) {
            input.addEventListener("change", renderMainVenues);
            input.addEventListener("input", () => {
                if (input.id === "filterPriceRange") {
                    document.getElementById("priceMax").innerText = `₹${input.value}`;
                }
                renderMainVenues();
            });
        }
    });

    // Reset filters
    const resetBtn = document.getElementById("resetFiltersBtn");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            filterPills.forEach(p => p.classList.remove("active"));
            document.querySelector("#filterSportOptions .filter-pill[data-sport='all']").classList.add("active");
            
            document.getElementById("filterRegion").value = "all";
            document.getElementById("filterPriceRange").value = 1500;
            document.getElementById("priceMax").innerText = "₹1,500";
            
            renderMainVenues();
        });
    }
}

// 8. INTERACTIVE SCHEDULER & BOOKING OVERLAYS
function bindBookingModalEvents() {
    const bookingModal = document.getElementById("bookingModal");
    const closeBtn = document.getElementById("closeBookingModalBtn");

    if (closeBtn && bookingModal) {
        closeBtn.addEventListener("click", () => {
            bookingModal.classList.remove("active");
        });
        bookingModal.addEventListener("click", (e) => {
            if (e.target === bookingModal) bookingModal.classList.remove("active");
        });
    }

    // Confirm button proceeds to Checkout
    const confirmSlotsBtn = document.getElementById("confirmSlotsBtn");
    if (confirmSlotsBtn) {
        confirmSlotsBtn.addEventListener("click", () => {
            bookingModal.classList.remove("active");
            if (!appState.currentUser) {
                openAuthModal(true);
            } else {
                openCheckout();
            }
        });
    }
}

// Opens the detail drawer, calculates rolling 7 days, renders available/booked slots
function openBookingModal(venueId) {
    const venue = VENUES_DB.find(v => v.id === venueId);
    if (!venue) return;

    appState.selectedVenue = venue;
    appState.selectedSlots = [];
    
    // Reset calculators in HTML
    document.getElementById("confirmSlotsBtn").disabled = true;

    // Fill details
    document.getElementById("modalVenueName").innerText = venue.name;
    document.getElementById("modalVenueSport").innerText = venue.sportLabel;
    document.getElementById("modalVenueRating").innerText = venue.rating;
    document.getElementById("modalVenueLocation").innerHTML = `${venue.location} ${venue.mapsLink ? `<a href="${venue.mapsLink}" target="_blank" class="maps-direct-link" title="Navigate in Google Maps" style="margin-left:0.6rem; vertical-align:middle; display:inline-flex; align-items:center;"><i class="fa-solid fa-map-location-dot gold-glow-text" style="font-size:1.15rem;"></i></a>` : ''}`;
    document.getElementById("modalVenuePrice").innerText = `₹${venue.pricePerHour}/hr`;
    document.getElementById("modalVenueDesc").innerText = venue.description;
    
    // Set Modal Gallery Slideshow
    const track = document.getElementById("modalGalleryTrack");
    const dotsContainer = document.getElementById("modalGalleryDots");
    
    if (track && dotsContainer) {
        track.innerHTML = venue.photos.map(p => `<div class="modal-gallery-slide" style="background-image: url('${p}');"></div>`).join("");
        dotsContainer.innerHTML = venue.photos.map((_, i) => `<span class="modal-gallery-dot ${i === 0 ? 'active' : ''}" data-idx="${i}"></span>`).join("");
        
        let modalActiveSlide = 0;
        track.style.transform = `translateX(0%)`;

        const updateModalSlider = () => {
            track.style.transform = `translateX(-${modalActiveSlide * 100}%)`;
            const dots = dotsContainer.querySelectorAll(".modal-gallery-dot");
            dots.forEach((d, idx) => {
                if (idx === modalActiveSlide) d.classList.add("active");
                else d.classList.remove("active");
            });
        };

        const nextBtn = document.getElementById("modalGalleryNext");
        const prevBtn = document.getElementById("modalGalleryPrev");

        // Clone and replace buttons to avoid event listener buildup
        const newNextBtn = nextBtn.cloneNode(true);
        const newPrevBtn = prevBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
        prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);

        newNextBtn.addEventListener("click", () => {
            modalActiveSlide = modalActiveSlide < venue.photos.length - 1 ? modalActiveSlide + 1 : 0;
            updateModalSlider();
        });

        newPrevBtn.addEventListener("click", () => {
            modalActiveSlide = modalActiveSlide > 0 ? modalActiveSlide - 1 : venue.photos.length - 1;
            updateModalSlider();
        });

        // dots click
        dotsContainer.querySelectorAll(".modal-gallery-dot").forEach((dot, idx) => {
            dot.addEventListener("click", () => {
                modalActiveSlide = idx;
                updateModalSlider();
            });
        });
    }

    // Fill Icons
    const amenitiesContainer = document.getElementById("modalVenueAmenities");
    amenitiesContainer.innerHTML = "";
    venue.amenities.forEach(a => {
        let iconClass = "fa-solid fa-star";
        if (a === "floodlights") iconClass = "fa-solid fa-lightbulb";
        if (a === "parking") iconClass = "fa-solid fa-car";
        if (a === "locker") iconClass = "fa-solid fa-door-closed";
        if (a === "cafe") iconClass = "fa-solid fa-mug-hot";
        if (a === "indoor") iconClass = "fa-solid fa-circle-nodes";

        const iconEl = document.createElement("i");
        iconEl.className = iconClass;
        iconEl.title = a;
        amenitiesContainer.appendChild(iconEl);
    });

    // 1. Generate 7 rolling days carousel
    generateDateCarousel();

    // 2. Load Slot Grid
    generateSlotGrids(venue);

    calculateBookingDetails();

    // Open Modal
    document.getElementById("bookingModal").classList.add("active");
}

function generateDateCarousel() {
    const container = document.getElementById("bookingDateCarousel");
    if (!container) return;

    container.innerHTML = "";
    
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const today = new Date();

    for (let i = 0; i < 7; i++) {
        const futureDate = new Date();
        futureDate.setDate(today.getDate() + i);

        const dateVal = `${futureDate.getFullYear()}-${String(futureDate.getMonth() + 1).padStart(2, '0')}-${String(futureDate.getDate()).padStart(2, '0')}`;
        
        const pill = document.createElement("div");
        pill.className = `date-pill ${i === 0 ? 'active' : ''}`;
        pill.setAttribute("data-date", dateVal);

        if (i === 0) appState.selectedDate = dateVal;

        pill.innerHTML = `
            <span>${days[futureDate.getDay()]}</span>
            <strong>${futureDate.getDate()}</strong>
            <span style="font-size:0.7rem; margin-top:2px;">${months[futureDate.getMonth()]}</span>
        `;

        pill.addEventListener("click", () => {
            document.querySelectorAll(".date-pill").forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            appState.selectedDate = dateVal;
            
            // Refresh slots when date updates (resets hour selected)
            appState.selectedSlots = [];
            generateSlotGrids(appState.selectedVenue);
            calculateBookingDetails();
        });

        container.appendChild(pill);
    }
}

function generateSlotGrids(venue) {
    const morningGrid = document.getElementById("slotsMorning");
    const afternoonGrid = document.getElementById("slotsAfternoon");
    const eveningGrid = document.getElementById("slotsEvening");
    const nightGrid = document.getElementById("slotsNight");

    morningGrid.innerHTML = "";
    afternoonGrid.innerHTML = "";
    eveningGrid.innerHTML = "";
    nightGrid.innerHTML = "";

    const startHour = venue.openHours.start;
    const endHour = venue.openHours.end;

    // A. Simulated "Already Booked" slots
    const seed = parseInt(venue.id.replace("v", "")) + parseInt(appState.selectedDate.replace(/-/g, "").slice(-2));
    const bookedSlotsList = [];
    if (seed % 2 === 0) bookedSlotsList.push(7, 8, 17, 18, 20);
    else bookedSlotsList.push(9, 10, 16, 19, 21, 22);

    // B. Real Customer Bookings (all bookings in local storage)
    let realBookedSlots = [];
    try {
        const bookingsStr = localStorage.getItem("courtix_direct_bookings");
        const allBookings = bookingsStr ? JSON.parse(bookingsStr) : [];
        allBookings.forEach(b => {
            const isMatchVenue = b.venueId === venue.id;
            const isMatchDate = b.rawDate === appState.selectedDate || 
                                new Date(b.date).toLocaleDateString() === new Date(appState.selectedDate).toLocaleDateString();
            if (isMatchVenue && isMatchDate && b.slots) {
                realBookedSlots = realBookedSlots.concat(b.slots);
            }
        });
    } catch (e) {
        console.error("Failed to parse customer bookings", e);
    }

    // C. Owner Blocked Slots
    let ownerBlockedSlots = [];
    try {
        const blocksStr = localStorage.getItem("courtix_owner_blocks");
        const allBlocks = blocksStr ? JSON.parse(blocksStr) : [];
        allBlocks.forEach(blk => {
            const isMatchVenue = blk.venueId === venue.id;
            const isMatchDate = blk.date === appState.selectedDate;
            if (isMatchVenue && isMatchDate && blk.slots) {
                ownerBlockedSlots = ownerBlockedSlots.concat(blk.slots);
            }
        });
    } catch (e) {
        console.error("Failed to parse owner blocks", e);
    }

    for (let hour = startHour; hour < endHour; hour++) {
        const btn = document.createElement("button");
        btn.className = "slot-btn";
        
        const formatHour = `${String(hour).padStart(2, '0')}:00`;
        const nextHour = `${String(hour + 1).padStart(2, '0')}:00`;
        btn.innerText = `${formatHour} - ${nextHour}`;
        btn.setAttribute("data-hour", hour);

        // Check if booked (simulated, customer-booked, or owner-blocked)
        const isBooked = bookedSlotsList.includes(hour) || 
                         realBookedSlots.includes(hour) || 
                         ownerBlockedSlots.includes(hour);
        if (isBooked) {
            btn.disabled = true;
            btn.classList.add("booked-slot");
        }

        // Event listener click
        btn.addEventListener("click", () => {
            toggleSlotSelect(hour, btn);
        });

        // Append to suitable sections
        if (hour < 12) morningGrid.appendChild(btn);
        else if (hour >= 12 && hour < 16) afternoonGrid.appendChild(btn);
        else if (hour >= 16 && hour < 21) eveningGrid.appendChild(btn);
        else nightGrid.appendChild(btn);
    }
}

function toggleSlotSelect(hour, btnEl) {
    if (appState.selectedSlots.includes(hour)) {
        appState.selectedSlots = appState.selectedSlots.filter(s => s !== hour);
        btnEl.classList.remove("selected");
    } else {
        if (appState.selectedSlots.length >= 4) {
            alert("⚠️ You can book a maximum of 4 continuous hours per transaction.");
            return;
        }
        appState.selectedSlots.push(hour);
        btnEl.classList.add("selected");
    }
    appState.selectedSlots.sort((a, b) => a - b);
    calculateBookingDetails();
}

function calculateBookingDetails() {
    const count = appState.selectedSlots.length;
    const rate = appState.selectedVenue ? appState.selectedVenue.pricePerHour : 0;
    const total = count * rate;

    const totalCostEl = document.getElementById("bookingTotalCost");
    const confirmBtn = document.getElementById("confirmSlotsBtn");

    if (totalCostEl) totalCostEl.innerText = `₹${total}`;
    if (confirmBtn) {
        confirmBtn.disabled = count === 0;
    }
}

// 9. CHECKOUT & SECURE PAYMENT SIMULATION
function bindPaymentCheckoutEvents() {
    const checkoutModal = document.getElementById("checkoutModal");
    const closeBtn = document.getElementById("closeCheckoutBtn");

    if (closeBtn && checkoutModal) {
        closeBtn.addEventListener("click", () => {
            checkoutModal.classList.remove("active");
        });
    }

    // Payment methods selector tabs
    const paymentTabs = document.querySelectorAll(".payment-tabs-headers .payment-tab");
    paymentTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            paymentTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const method = tab.getAttribute("data-method");
            document.querySelectorAll(".payment-tab-content").forEach(c => c.classList.remove("active"));
            document.getElementById(`method-${method}`).classList.add("active");
        });
    });

    // Coupon code apply trigger
    const applyCouponBtn = document.getElementById("applyCouponBtn");
    if (applyCouponBtn) {
        applyCouponBtn.addEventListener("click", () => {
            handleApplyCoupon();
        });
    }

    // Simulator pay UPI
    const simulatedPayBtn = document.getElementById("simulatedPayUPIBtn");
    if (simulatedPayBtn) {
        simulatedPayBtn.addEventListener("click", () => {
            completePaymentSuccess();
        });
    }

    // Card checkout form
    const cardForm = document.getElementById("cardCheckoutForm");
    if (cardForm) {
        cardForm.addEventListener("submit", (e) => {
            e.preventDefault();
            completePaymentSuccess();
        });
    }

    // Success Modal back home
    const successBtn = document.getElementById("successDashboardBtn");
    if (successBtn) {
        successBtn.addEventListener("click", () => {
            document.getElementById("successModal").classList.remove("active");
            switchTab("bookings");
        });
    }
}

function openCheckout() {
    const venue = appState.selectedVenue;
    const slots = appState.selectedSlots;
    const rate = venue.pricePerHour;
    const total = slots.length * rate;

    document.getElementById("checkoutVenueName").innerText = venue.name;

    // Formatting date description
    const formattedDate = new Date(appState.selectedDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    const slotsDisplay = slots.map(s => `${String(s).padStart(2, '0')}:00`).join(", ");
    document.getElementById("checkoutSlotDetails").innerText = `${venue.sportLabel} | ${formattedDate} | Slot: ${slotsDisplay}`;

    // Reset coupon values
    appState.appliedCoupon = null;
    appState.discountAmount = 0;
    appState.finalTotal = total;

    // Reset coupon elements in UI
    const input = document.getElementById("couponCodeInput");
    if (input) input.value = "";

    const feedback = document.getElementById("couponFeedbackMsg");
    if (feedback) {
        feedback.style.display = "none";
        feedback.innerText = "";
    }

    const discountRow = document.getElementById("checkoutDiscountRow");
    if (discountRow) discountRow.style.display = "none";

    // Direct cost displays (Split Payment 10% Advance / 90% direct venue)
    const advance = Math.round(total * 0.1);
    const balance = total - advance;

    if (document.getElementById("checkoutTotalCourtPrice")) {
        document.getElementById("checkoutTotalCourtPrice").innerText = `₹${total}`;
    }
    if (document.getElementById("checkoutAdvancePayable")) {
        document.getElementById("checkoutAdvancePayable").innerText = `₹${advance}`;
    }
    if (document.getElementById("checkoutRemainingBalance")) {
        document.getElementById("checkoutRemainingBalance").innerText = `₹${balance}`;
    }
    
    document.getElementById("checkoutModal").classList.add("active");
}

function completePaymentSuccess() {
    document.getElementById("checkoutModal").classList.remove("active");

    const venue = appState.selectedVenue;
    const date = appState.selectedDate;
    const slots = appState.selectedSlots;
    const rate = venue.pricePerHour;
    const total = slots.length * rate;
    
    // Check for discounted price
    const finalPaidTotal = appState.discountAmount > 0 ? appState.finalTotal : total;
    const advancePaid = Math.round(finalPaidTotal * 0.1);
    const remainingBalance = finalPaidTotal - advancePaid;
    
    const transactionId = "CTX-" + Math.floor(100000 + Math.random() * 900000);

    // 1. Save Reservation locally
    const newBooking = {
        id: transactionId,
        venueId: venue.id,
        venueName: venue.name,
        venueLocation: venue.location,
        sport: venue.sport,
        sportLabel: venue.sportLabel,
        date: new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
        rawDate: date,
        slots: slots,
        totalCost: finalPaidTotal,
        advancePaid: advancePaid,
        remainingBalance: remainingBalance,
        appliedCoupon: appState.appliedCoupon || null,
        discountAmount: appState.discountAmount || 0
    };

    appState.myBookings.unshift(newBooking);

    // Save and render
    saveStateToStorage();
    renderMyBookings();

    // 2. Render Digital Pass elements inside Success Modal
    document.getElementById("ticketSportBadge").innerText = venue.sportLabel;
    document.getElementById("ticketVenueName").innerText = venue.name;
    document.getElementById("ticketVenueLocation").innerText = venue.location;
    document.getElementById("ticketDate").innerText = newBooking.date;
    
    const slotsDisplay = slots.map(s => `${String(s).padStart(2, '0')}:00`).join(", ");
    document.getElementById("ticketTime").innerText = slotsDisplay;
    document.getElementById("ticketPassId").innerText = transactionId;

    // Trigger Success Screen
    document.getElementById("successModal").classList.add("active");
}

function showDigitalTicket(booking) {
    document.getElementById("ticketSportBadge").innerText = booking.sportLabel;
    document.getElementById("ticketVenueName").innerText = booking.venueName;
    document.getElementById("ticketVenueLocation").innerText = booking.venueLocation;
    document.getElementById("ticketDate").innerText = booking.date;
    
    const slotsDisplay = booking.slots.map(s => `${String(s).padStart(2, '0')}:00`).join(", ");
    document.getElementById("ticketTime").innerText = slotsDisplay;
    document.getElementById("ticketPassId").innerText = booking.id;

    // Open Success Modal as a simple ticket view overlay
    document.getElementById("successModal").classList.add("active");
}

// 10. AUTHENTICATION & PROFILE SESSION MANAGEMENT
function updateUserUIState() {
    const nameEl = document.getElementById("sidebarUserName");
    const levelEl = document.getElementById("sidebarUserLevel");
    const logoutBtn = document.getElementById("sidebarLogoutBtn");
    const avatarPic = document.getElementById("userProfilePic");

    if (appState.currentUser) {
        if (nameEl) nameEl.innerText = appState.currentUser.name;
        
        // Calculate player rank based on total bookings
        let bookingCount = appState.myBookings.length;
        let rank = "Beginner Player";
        if (bookingCount >= 5) rank = "Master Player";
        else if (bookingCount >= 3) rank = "Pro Player";
        else if (bookingCount >= 1) rank = "Active Player";
        
        if (levelEl) levelEl.innerText = rank;
        if (logoutBtn) logoutBtn.style.display = "inline-block";
        if (avatarPic) {
            // Apply a nice volt border glow for registered active users
            avatarPic.style.border = "2px solid var(--color-gold)";
            avatarPic.style.boxShadow = "0 0 10px rgba(197, 255, 26, 0.4)";
        }
    } else {
        if (nameEl) nameEl.innerText = "Guest Player";
        if (levelEl) levelEl.innerText = "Click to Sign In";
        if (logoutBtn) logoutBtn.style.display = "none";
        if (avatarPic) {
            avatarPic.style.border = "none";
            avatarPic.style.boxShadow = "none";
        }
    }
}

// Variable to store booking action that triggered the login modal, so we can resume it afterwards
let pendingBookingAction = false;

// OTP Authentication States
let generatedOTPCode = null;
let otpActivePhone = null;
let otpActiveCountryCode = null;
let otpTimerInterval = null;

function bindAuthEvents() {
    const sidebarUserBlock = document.getElementById("sidebarUserBlock");
    const authModal = document.getElementById("authModal");
    const closeAuthBtn = document.getElementById("closeAuthModalBtn");
    
    const authTabLogin = document.getElementById("authTabLogin");
    const authTabRegister = document.getElementById("authTabRegister");
    
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const otpRequestForm = document.getElementById("otpRequestForm");
    const otpVerifyForm = document.getElementById("otpVerifyForm");
    const otpNameForm = document.getElementById("otpNameForm");
    
    const toggleOTPLogin = document.getElementById("toggleOTPLogin");
    const toggleOTPRegister = document.getElementById("toggleOTPRegister");
    const backToPasswordLogin = document.getElementById("backToPasswordLogin");
    const resendOtpBtn = document.getElementById("resendOtpBtn");
    
    const logoutBtn = document.getElementById("sidebarLogoutBtn");

    // Click sidebar user profile: open auth modal if logged out
    if (sidebarUserBlock) {
        sidebarUserBlock.addEventListener("click", () => {
            if (!appState.currentUser) {
                openAuthModal();
            }
        });
    }

    // Toggle logout button directly
    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // prevent opening the login modal immediately
            logoutUser();
        });
    }

    // Modal tabs toggle
    if (authTabLogin && authTabRegister) {
        authTabLogin.addEventListener("click", () => {
            authTabLogin.classList.add("active");
            authTabRegister.classList.remove("active");
            
            // Show login form, hide all other forms
            loginForm.style.display = "block";
            loginForm.classList.add("active");
            registerForm.style.display = "none";
            registerForm.classList.remove("active");
            otpRequestForm.style.display = "none";
            otpVerifyForm.style.display = "none";
            otpNameForm.style.display = "none";
            
            document.getElementById("authModalTitle").innerText = "Welcome Player";
            document.getElementById("authModalSubtitle").innerText = "Join the elite Courtix sports community";
            clearAuthFeedback();
            clearInterval(otpTimerInterval);
        });

        authTabRegister.addEventListener("click", () => {
            authTabRegister.classList.add("active");
            authTabLogin.classList.remove("active");
            
            // Show register form, hide all other forms
            registerForm.style.display = "block";
            registerForm.classList.add("active");
            loginForm.style.display = "none";
            loginForm.classList.remove("active");
            otpRequestForm.style.display = "none";
            otpVerifyForm.style.display = "none";
            otpNameForm.style.display = "none";
            
            document.getElementById("authModalTitle").innerText = "Create Player Profile";
            document.getElementById("authModalSubtitle").innerText = "Register your account to start playing";
            clearAuthFeedback();
            clearInterval(otpTimerInterval);
        });
    }

    // Toggle to OTP Request Form
    if (toggleOTPLogin) {
        toggleOTPLogin.addEventListener("click", (e) => {
            e.preventDefault();
            loginForm.style.display = "none";
            loginForm.classList.remove("active");
            otpRequestForm.style.display = "block";
            otpRequestForm.classList.add("active");
            
            document.getElementById("authModalTitle").innerText = "OTP Verification";
            document.getElementById("authModalSubtitle").innerText = "Verify your identity via mobile OTP";
            clearAuthFeedback();
        });
    }
    
    if (toggleOTPRegister) {
        toggleOTPRegister.addEventListener("click", (e) => {
            e.preventDefault();
            registerForm.style.display = "none";
            registerForm.classList.remove("active");
            otpRequestForm.style.display = "block";
            otpRequestForm.classList.add("active");
            
            document.getElementById("authModalTitle").innerText = "OTP Verification";
            document.getElementById("authModalSubtitle").innerText = "Verify your identity via mobile OTP";
            clearAuthFeedback();
        });
    }

    // Toggle back to Password Login Form
    if (backToPasswordLogin) {
        backToPasswordLogin.addEventListener("click", (e) => {
            e.preventDefault();
            otpRequestForm.style.display = "none";
            otpRequestForm.classList.remove("active");
            loginForm.style.display = "block";
            loginForm.classList.add("active");
            
            document.getElementById("authModalTitle").innerText = "Welcome Player";
            document.getElementById("authModalSubtitle").innerText = "Join the elite Courtix sports community";
            clearAuthFeedback();
        });
    }

    // OTP 4-Digit Input Autofocus transition mechanism
    const otpFields = document.querySelectorAll(".otp-field");
    otpFields.forEach((field, index) => {
        field.addEventListener("input", (e) => {
            // Keep numeric only
            field.value = field.value.replace(/[^0-9]/g, "");
            if (field.value.length === 1 && index < 3) {
                otpFields[index + 1].focus();
            }
        });
        field.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && field.value.length === 0 && index > 0) {
                otpFields[index - 1].focus();
            }
        });
    });

    // Handle OTP Code request submit
    if (otpRequestForm) {
        otpRequestForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const phoneInput = document.getElementById("otpPhone");
            const codeSelector = document.getElementById("otpCountryCode");
            
            if (!phoneInput || !codeSelector) return;
            const phone = phoneInput.value.trim();
            const countryCode = codeSelector.value;
            
            if (!phone || phone.length !== 10) {
                showAuthFeedback("Please enter a valid 10-digit mobile number.");
                return;
            }
            
            // Set active states
            otpActivePhone = phone;
            otpActiveCountryCode = countryCode;
            
            // Generate random 4-digit code
            generatedOTPCode = String(Math.floor(1000 + Math.random() * 9000));
            
            // Clear inputs inside verification screen
            otpFields.forEach(f => f.value = "");
            
            // Smoothly switch forms
            otpRequestForm.style.display = "none";
            otpRequestForm.classList.remove("active");
            otpVerifyForm.style.display = "block";
            otpVerifyForm.classList.add("active");
            
            document.getElementById("authModalSubtitle").innerText = `Code sent to ${countryCode} ${phone.slice(0, 3)}•••${phone.slice(-3)}`;
            clearAuthFeedback();
            
            // Trigger customVolt Toast
            showOtpToast(generatedOTPCode);
            
            // Start countdown Resend timer
            startOtpCountdown();
            
            // Focus on first input box automatically
            setTimeout(() => otpFields[0].focus(), 150);
        });
    }

    // Handle Resend OTP click
    if (resendOtpBtn) {
        resendOtpBtn.addEventListener("click", (e) => {
            e.preventDefault();
            generatedOTPCode = String(Math.floor(1000 + Math.random() * 9000));
            showOtpToast(generatedOTPCode);
            startOtpCountdown();
            otpFields.forEach(f => f.value = "");
            otpFields[0].focus();
            showAuthFeedback("Verification code resent!", "success");
        });
    }

    // Handle OTP Verify Code Submit
    if (otpVerifyForm) {
        otpVerifyForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Collate 4 digit code
            const inputCode = Array.from(otpFields).map(f => f.value).join("");
            if (inputCode.length !== 4) {
                showAuthFeedback("Please enter all 4 verification digits.");
                return;
            }
            
            if (inputCode !== generatedOTPCode) {
                showAuthFeedback("Incorrect verification code. Please try again.");
                // Clear fields and focus first
                otpFields.forEach(f => f.value = "");
                otpFields[0].focus();
                return;
            }
            
            clearInterval(otpTimerInterval);
            verifyOtpSuccess();
        });
    }

    // Handle OTP Name Register Submit
    if (otpNameForm) {
        otpNameForm.addEventListener("submit", (e) => {
            e.preventDefault();
            handleOtpNameSubmit();
        });
    }

    // Close Auth Modal
    if (closeAuthBtn) {
        closeAuthBtn.addEventListener("click", () => {
            closeAuthModal();
        });
    }

    if (authModal) {
        authModal.addEventListener("click", (e) => {
            if (e.target === authModal) {
                closeAuthModal();
            }
        });
    }

    // Handle Login Submit
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            handleLoginSubmit();
        });
    }

    // Handle Register Submit
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            handleRegisterSubmit();
        });
    }
}

// In-App Toast secure notifier
function showOtpToast(code) {
    const toast = document.getElementById("otpToastAlert");
    const codeEl = document.getElementById("toastOtpCode");
    if (!toast || !codeEl) return;
    
    codeEl.innerText = code;
    toast.style.display = "flex";
    toast.style.animation = "slideInUp 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) forwards";
    
    if (toast._timeout) clearTimeout(toast._timeout);
    
    toast._timeout = setTimeout(() => {
        toast.style.animation = "slideOutDown 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) forwards";
        setTimeout(() => {
            toast.style.display = "none";
        }, 400);
    }, 8000);
}

// Countdown timer loop
function startOtpCountdown() {
    const countdownEl = document.getElementById("otpCountdown");
    const resendBtn = document.getElementById("resendOtpBtn");
    if (!countdownEl || !resendBtn) return;
    
    clearInterval(otpTimerInterval);
    resendBtn.style.display = "none";
    countdownEl.style.display = "inline-block";
    
    let timeLeft = 30;
    countdownEl.innerText = `Resend OTP in ${timeLeft}s`;
    
    otpTimerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(otpTimerInterval);
            countdownEl.style.display = "none";
            resendBtn.style.display = "inline-block";
        } else {
            countdownEl.innerText = `Resend OTP in ${timeLeft}s`;
        }
    }, 1000);
}

// Handler on OTP Verification Success
function verifyOtpSuccess() {
    const registeredUsers = getRegisteredUsers();
    const phoneFull = otpActiveCountryCode + " " + otpActivePhone;
    
    const existingUser = registeredUsers.find(u => u.phone === phoneFull);
    
    if (existingUser) {
        loginUser(existingUser);
        showAuthFeedback("Verification successful! Signed in.", "success");
        
        setTimeout(() => {
            closeAuthModal();
            if (pendingBookingAction) openCheckout();
        }, 1200);
    } else {
        // Toggle forms
        document.getElementById("otpVerifyForm").style.display = "none";
        document.getElementById("otpNameForm").style.display = "block";
        
        document.getElementById("authModalTitle").innerText = "Enter Name";
        document.getElementById("authModalSubtitle").innerText = "Complete your new player registration";
        clearAuthFeedback();
        
        setTimeout(() => {
            const nameInput = document.getElementById("otpRegName");
            if (nameInput) nameInput.focus();
        }, 150);
    }
}

// Complete Name Capture & Profile creation
function handleOtpNameSubmit() {
    const nameInput = document.getElementById("otpRegName");
    const emailInput = document.getElementById("otpRegEmail");
    if (!nameInput || !emailInput) return;
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();
    
    if (!name || !email) {
        showAuthFeedback("Please fill out all fields.");
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showAuthFeedback("Please enter a valid email address.");
        return;
    }
    
    const registeredUsers = getRegisteredUsers();
    
    // Check if email already exists
    const emailExists = registeredUsers.some(u => u.email === email);
    if (emailExists) {
        showAuthFeedback("An account with this email already exists!");
        return;
    }
    
    const phoneFull = otpActiveCountryCode + " " + otpActivePhone;
    
    // Create new player object
    const newUser = {
        name: name,
        email: email,
        phone: phoneFull,
        password: "OTP_USER_" + Math.floor(10000 + Math.random() * 90000),
        level: "Beginner Player"
    };
    
    registeredUsers.push(newUser);
    saveRegisteredUsers(registeredUsers);
    
    loginUser(newUser);
    showAuthFeedback("Profile registered successfully! Welcome to Courtix.", "success");
    
    nameInput.value = "";
    emailInput.value = "";
    
    setTimeout(() => {
        closeAuthModal();
        if (pendingBookingAction) openCheckout();
    }, 1200);
}

function openAuthModal(isRedirectFromBooking = false) {
    pendingBookingAction = isRedirectFromBooking;
    const authModal = document.getElementById("authModal");
    if (authModal) {
        authModal.classList.add("active");
        
        // Reset forms to login view initially
        const authTabLogin = document.getElementById("authTabLogin");
        if (authTabLogin) authTabLogin.click();
        
        // If redirecting from booking, let the player know with a nice banner
        if (isRedirectFromBooking) {
            showAuthFeedback("Please sign in or register to complete your court booking.", "info");
        } else {
            clearAuthFeedback();
        }
    }
}

function closeAuthModal() {
    const authModal = document.getElementById("authModal");
    if (authModal) {
        authModal.classList.remove("active");
    }
    pendingBookingAction = false;
    clearInterval(otpTimerInterval);
}

function clearAuthFeedback() {
    const feedback = document.getElementById("authFeedbackMsg");
    if (feedback) {
        feedback.style.display = "none";
        feedback.innerText = "";
    }
}

function showAuthFeedback(msg, type = "error") {
    const feedback = document.getElementById("authFeedbackMsg");
    if (feedback) {
        feedback.innerText = msg;
        feedback.style.display = "block";
        
        if (type === "success") {
            feedback.style.background = "rgba(197, 255, 26, 0.15)";
            feedback.style.border = "1px solid var(--color-gold)";
            feedback.style.color = "var(--color-gold)";
            feedback.style.boxShadow = "0 0 10px rgba(197, 255, 26, 0.2)";
        } else if (type === "info") {
            feedback.style.background = "rgba(0, 240, 255, 0.1)";
            feedback.style.border = "1px solid #00F0FF";
            feedback.style.color = "#00F0FF";
            feedback.style.boxShadow = "0 0 10px rgba(0, 240, 255, 0.15)";
        } else {
            // error
            feedback.style.background = "rgba(255, 75, 75, 0.15)";
            feedback.style.border = "1px solid #ff4b4b";
            feedback.style.color = "#ff4b4b";
            feedback.style.boxShadow = "0 0 10px rgba(255, 75, 75, 0.2)";
        }
    }
}

function getRegisteredUsers() {
    try {
        const usersStr = localStorage.getItem("courtix_registered_users");
        return usersStr ? JSON.parse(usersStr) : [];
    } catch (e) {
        console.error("Failed to load registered users", e);
        return [];
    }
}

function saveRegisteredUsers(users) {
    try {
        localStorage.setItem("courtix_registered_users", JSON.stringify(users));
    } catch (e) {
        console.error("Failed to save registered users", e);
    }
}

function seedDefaultUsers() {
    const users = getRegisteredUsers();
    if (users.length === 0) {
        const defaultUsers = [
            {
                name: "Rohit Sharma",
                email: "rohit@courtix.com",
                phone: "+91 9876543210",
                password: "123456",
                level: "Pro Player"
            }
        ];
        saveRegisteredUsers(defaultUsers);
    } else {
        // Upgrade existing Rohit Sharma if missing phone attribute
        let updated = false;
        users.forEach(u => {
            if (u.email === "rohit@courtix.com" && !u.phone) {
                u.phone = "+91 9876543210";
                updated = true;
            }
        });
        if (updated) {
            saveRegisteredUsers(users);
        }
    }
}

function handleRegisterSubmit() {
    const nameInput = document.getElementById("registerName");
    const emailInput = document.getElementById("registerEmail");
    const passwordInput = document.getElementById("registerPassword");
    const phoneInput = document.getElementById("registerPhone");
    const countryCodeInput = document.getElementById("registerCountryCode");

    if (!nameInput || !emailInput || !passwordInput || !phoneInput || !countryCodeInput) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;
    const phone = phoneInput.value.trim();
    const countryCode = countryCodeInput.value;
    const phoneFull = countryCode + " " + phone;

    if (!name || !email || !password || !phone) {
        showAuthFeedback("Please fill out all fields.");
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showAuthFeedback("Please enter a valid email address.");
        return;
    }

    // Validate 10-digit mobile number
    if (phone.length !== 10 || !/^[0-9]{10}$/.test(phone)) {
        showAuthFeedback("Please enter a valid 10-digit mobile number.");
        return;
    }

    if (password.length < 6) {
        showAuthFeedback("Password must be at least 6 characters.");
        return;
    }

    const registeredUsers = getRegisteredUsers();
    
    // Check if user with email already exists
    const emailExists = registeredUsers.some(u => u.email === email);
    if (emailExists) {
        showAuthFeedback("An account with this email already exists!");
        return;
    }

    // Check if user with phone already exists (extract last 10 digits to compare cleanly)
    const phoneDigits = phone;
    const phoneExists = registeredUsers.some(u => {
        if (!u.phone) return false;
        const uPhoneDigits = u.phone.replace(/[^0-9]/g, '');
        return uPhoneDigits.endsWith(phoneDigits);
    });
    if (phoneExists) {
        showAuthFeedback("An account with this mobile number already exists!");
        return;
    }

    // Create new player object
    const newUser = {
        name: name,
        email: email,
        phone: phoneFull,
        password: password,
        level: "Beginner Player"
    };

    registeredUsers.push(newUser);
    saveRegisteredUsers(registeredUsers);

    // Auto-login the user
    loginUser(newUser);

    showAuthFeedback("Profile created! Welcome to Courtix.", "success");

    // Reset input fields
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    passwordInput.value = "";

    // Close modal and proceed to checkout if pending
    setTimeout(() => {
        closeAuthModal();
        if (pendingBookingAction) {
            // Open checkout modal directly
            openCheckout();
        }
    }, 1200);
}

function handleLoginSubmit() {
    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("loginPassword");

    if (!emailInput || !passwordInput) return;

    const loginInputVal = emailInput.value.trim();
    const password = passwordInput.value;

    if (!loginInputVal || !password) {
        showAuthFeedback("Please enter both email/mobile and password.");
        return;
    }

    const registeredUsers = getRegisteredUsers();
    
    // Normalize input for comparisons
    const inputLower = loginInputVal.toLowerCase();
    const inputDigits = loginInputVal.replace(/[^0-9]/g, '');

    const matchedUser = registeredUsers.find(u => {
        // Match email
        const emailMatch = u.email && u.email.toLowerCase() === inputLower;
        
        // Match phone: can match plain 10-digit number or fully formatted country code number
        let phoneMatch = false;
        if (u.phone) {
            const uPhoneDigits = u.phone.replace(/[^0-9]/g, '');
            if (inputDigits.length >= 10 && uPhoneDigits.endsWith(inputDigits)) {
                phoneMatch = true;
            } else if (u.phone.toLowerCase() === inputLower) {
                phoneMatch = true;
            }
        }
        
        return (emailMatch || phoneMatch) && u.password === password;
    });

    if (!matchedUser) {
        showAuthFeedback("Invalid email/mobile or password. Please try again.");
        return;
    }

    // Login successfully
    loginUser(matchedUser);

    showAuthFeedback("Signed in successfully. Ready to play!", "success");

    // Reset input fields
    emailInput.value = "";
    passwordInput.value = "";

    // Close modal and proceed to checkout if pending
    setTimeout(() => {
        closeAuthModal();
        if (pendingBookingAction) {
            // Open checkout modal directly
            openCheckout();
        }
    }, 1200);
}

function loginUser(user) {
    appState.currentUser = user;
    try {
        localStorage.setItem("courtix_current_user", JSON.stringify(user));
    } catch (e) {
        console.error("Failed to save current user session", e);
    }
    updateUserUIState();
}

function logoutUser() {
    appState.currentUser = null;
    try {
        localStorage.removeItem("courtix_current_user");
    } catch (e) {
        console.error("Failed to remove user session", e);
    }
    updateUserUIState();
    
    // Switch to home tab to show clean guest state
    switchTab("home");
}

// 11. CHECKOUT COUPON CODE VALIDATION SYSTEM
const VALID_COUPONS = {
    "SPORTY20": { type: "percent", value: 20 },
    "COURTIX50": { type: "percent", value: 50 },
    "FIRSTPLAY": { type: "flat", value: 200 }
};

function handleApplyCoupon() {
    const input = document.getElementById("couponCodeInput");
    const feedback = document.getElementById("couponFeedbackMsg");
    const discountRow = document.getElementById("checkoutDiscountRow");
    const discountAmt = document.getElementById("checkoutDiscountAmount");
    
    const totalCourtPrice = document.getElementById("checkoutTotalCourtPrice");
    const advancePayable = document.getElementById("checkoutAdvancePayable");
    const remainingBalance = document.getElementById("checkoutRemainingBalance");

    if (!input || !feedback) return;

    const code = input.value.trim().toUpperCase();
    if (!code) {
        showCouponFeedback("Please enter a coupon code.", "error");
        return;
    }

    const coupon = VALID_COUPONS[code];
    if (!coupon) {
        showCouponFeedback("Invalid coupon code. Try SPORTY20 or COURTIX50!", "error");
        return;
    }

    const venue = appState.selectedVenue;
    const slots = appState.selectedSlots;
    const rate = venue.pricePerHour;
    const originalTotal = slots.length * rate;

    let discount = 0;
    if (coupon.type === "percent") {
        discount = Math.round(originalTotal * (coupon.value / 100));
    } else if (coupon.type === "flat") {
        discount = Math.min(coupon.value, originalTotal);
    }

    const newTotal = originalTotal - discount;

    // Cache coupon states
    appState.appliedCoupon = code;
    appState.discountAmount = discount;
    appState.finalTotal = newTotal;

    // Direct cost displays (Split Payment 10% Advance / 90% direct venue)
    const advance = Math.round(newTotal * 0.1);
    const balance = newTotal - advance;

    // Update Checkout UI details
    if (discountRow && discountAmt) {
        discountAmt.innerText = `-₹${discount}`;
        discountRow.style.display = "flex";
    }
    
    if (totalCourtPrice) totalCourtPrice.innerText = `₹${newTotal}`;
    if (advancePayable) advancePayable.innerText = `₹${advance}`;
    if (remainingBalance) remainingBalance.innerText = `₹${balance}`;

    showCouponFeedback(`Coupon code ${code} applied! Saved ₹${discount}.`, "success");
}

function showCouponFeedback(msg, type = "error") {
    const feedback = document.getElementById("couponFeedbackMsg");
    if (!feedback) return;
    feedback.innerText = msg;
    feedback.style.display = "block";

    if (type === "success") {
        feedback.style.background = "rgba(197, 255, 26, 0.12)";
        feedback.style.border = "1px solid var(--color-gold)";
        feedback.style.color = "var(--color-gold)";
        feedback.style.boxShadow = "0 0 10px rgba(197, 255, 26, 0.15)";
    } else {
        feedback.style.background = "rgba(255, 75, 75, 0.12)";
        feedback.style.border = "1px solid #ff4b4b";
        feedback.style.color = "#ff4b4b";
        feedback.style.boxShadow = "0 0 10px rgba(255, 75, 75, 0.15)";
    }
}
