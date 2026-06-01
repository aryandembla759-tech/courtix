// COURTIX - COURT OWNER DASHBOARD MOTOR ENGINE

// 1. STANDALONE facility database seed (Decoupled from app.js)
const VENUES_DB = [
    { id: "v1", name: "Extra Innings Turf & Cafe", sportLabel: "Cricket & Football", openHours: { start: 6, end: 24 } },
    { id: "v2", name: "Dugout Turf", sportLabel: "Cricket & Football", openHours: { start: 6, end: 24 } },
    { id: "v3", name: "The Sports Villa", sportLabel: "Cricket & Football", openHours: { start: 6, end: 24 } },
    { id: "v4", name: "The Pavilion Park", sportLabel: "Cricket & Football", openHours: { start: 6, end: 24 } },
    { id: "v5", name: "Virat Sports Arena", sportLabel: "Cricket & Football", openHours: { start: 6, end: 24 } },
    { id: "v6", name: "The Power Turf", sportLabel: "Cricket & Football", openHours: { start: 6, end: 24 } },
    { id: "v7", name: "SS Sports Turf", sportLabel: "Cricket & Football", openHours: { start: 6, end: 24 } },
    { id: "v8", name: "The Velocity Turf", sportLabel: "Cricket & Football", openHours: { start: 6, end: 24 } },
    { id: "v9", name: "Sport X Turf", sportLabel: "Cricket & Football", openHours: { start: 6, end: 24 } },
    { id: "v10", name: "Foocket Sports Arena", sportLabel: "Cricket & Football", openHours: { start: 6, end: 24 } },
    { id: "v11", name: "PickleX", sportLabel: "Pickleball Court", openHours: { start: 6, end: 24 } },
    { id: "v12", name: "Pickora", sportLabel: "Pickleball Court", openHours: { start: 6, end: 24 } },
    { id: "v13", name: "Sports Fusion", sportLabel: "Pickleball Court", openHours: { start: 6, end: 24 } },
    { id: "v14", name: "Pulse Badminton Academy", sportLabel: "Badminton Court", openHours: { start: 6, end: 24 } },
    { id: "v15", name: "Chawat Sports Academy", sportLabel: "Badminton Court", openHours: { start: 6, end: 24 } },
    { id: "v16", name: "Dyumani Sports Academy", sportLabel: "Badminton Court", openHours: { start: 6, end: 24 } }
];

// 2. DASHBOARD ACTIVE STATE
const ownerState = {
    selectedVenueId: "v1",
    selectedDate: "",
    activeBlockHour: null
};

// 3. INITIALIZATION HOOK
document.addEventListener("DOMContentLoaded", () => {
    // A. Set default Date select input to Today
    const dateInput = document.getElementById("ownerDateSelect");
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedToday = `${yyyy}-${mm}-${dd}`;
    
    if (dateInput) {
        dateInput.value = formattedToday;
        ownerState.selectedDate = formattedToday;
    }

    // B. Build Venues dropdown select options
    populateVenuesDropdown();

    // C. Bind DOM input action listeners
    bindControlListeners();
    bindModalListeners();

    // D. Initial Render Page
    refreshDashboard();
});

// Populate dropdown facilities
function populateVenuesDropdown() {
    const select = document.getElementById("ownerVenueSelect");
    if (!select) return;

    select.innerHTML = "";
    VENUES_DB.forEach(venue => {
        const opt = document.createElement("option");
        opt.value = venue.id;
        opt.innerText = `${venue.name} (${venue.sportLabel})`;
        select.appendChild(opt);
    });
}

// Bind Select changes and Date pick changes
function bindControlListeners() {
    const venueSelect = document.getElementById("ownerVenueSelect");
    const dateInput = document.getElementById("ownerDateSelect");

    if (venueSelect) {
        venueSelect.addEventListener("change", (e) => {
            ownerState.selectedVenueId = e.target.value;
            refreshDashboard();
        });
    }

    if (dateInput) {
        dateInput.addEventListener("change", (e) => {
            ownerState.selectedDate = e.target.value;
            refreshDashboard();
        });
    }
}

// Bind Modal cancellation/submits
function bindModalListeners() {
    const cancelBtn = document.getElementById("closeBlockModalBtn");
    const form = document.getElementById("blockSlotForm");

    if (cancelBtn) {
        cancelBtn.addEventListener("click", () => {
            closeBlockModal();
        });
    }

    // Capture ESC key to close modal
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeBlockModal();
    });

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            handleBlockSubmit();
        });
    }
}

// 4. DATA ENGINE (LOCAL STORAGE ACCESSORS)
function getCustomerBookings() {
    try {
        const bookingsStr = localStorage.getItem("courtix_direct_bookings");
        const bookings = bookingsStr ? JSON.parse(bookingsStr) : [];
        bookings.forEach(b => {
            if (!b.status) b.status = "upcoming";
        });
        return bookings;
    } catch (e) {
        console.error("Failed to load customer bookings", e);
        return [];
    }
}

function saveCustomerBookings(bookings) {
    try {
        localStorage.setItem("courtix_direct_bookings", JSON.stringify(bookings));
    } catch (e) {
        console.error("Failed to save customer bookings", e);
    }
}

function getOwnerBlocks() {
    try {
        const blocksStr = localStorage.getItem("courtix_owner_blocks");
        return blocksStr ? JSON.parse(blocksStr) : [];
    } catch (e) {
        console.error("Failed to load owner blocks", e);
        return [];
    }
}

function saveOwnerBlocks(blocks) {
    try {
        localStorage.setItem("courtix_owner_blocks", JSON.stringify(blocks));
    } catch (e) {
        console.error("Failed to save owner blocks", e);
    }
}

// 5. MASTER CONTROLLER: DASHBOARD REFRESH
function refreshDashboard() {
    const venue = VENUES_DB.find(v => v.id === ownerState.selectedVenueId);
    if (!venue) return;

    // Display formatted date subtitle
    const dateLabel = document.getElementById("currentScheduleLabel");
    if (dateLabel) {
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        dateLabel.innerText = new Date(ownerState.selectedDate).toLocaleDateString('en-US', options);
    }

    // Refresh child panels
    renderTimelineGrid(venue);
    renderBookingsLog(venue);
    updateStats(venue);
}

// Render the 24 hour timeline schedule grid
function renderTimelineGrid(venue) {
    const grid = document.getElementById("ownerTimelineGrid");
    if (!grid) return;

    grid.innerHTML = "";

    const startHour = venue.openHours.start;
    const endHour = venue.openHours.end;

    // Load active session user as fallback for older bookings
    let fallbackName = "Online Player";
    try {
        const curUserStr = localStorage.getItem("courtix_current_user");
        if (curUserStr) {
            const curUser = JSON.parse(curUserStr);
            if (curUser.name) fallbackName = curUser.name;
        }
    } catch(e) {}

    // Retrieve active reservation datasets
    const allCustomerBookings = getCustomerBookings();
    const allOwnerBlocks = getOwnerBlocks();

    // Map customer bookings and owner blocks active for this venue & date
    const dayCustomerBookings = allCustomerBookings.filter(b => {
        const isMatchVenue = b.venueId === venue.id;
        const isMatchDate = b.rawDate === ownerState.selectedDate || 
                            new Date(b.date).toLocaleDateString() === new Date(ownerState.selectedDate).toLocaleDateString();
        return isMatchVenue && isMatchDate;
    });

    const dayOwnerBlocks = allOwnerBlocks.filter(blk => {
        return blk.venueId === venue.id && blk.date === ownerState.selectedDate;
    });

    // Populate timeline items
    for (let hour = startHour; hour < endHour; hour++) {
        const slotEl = document.createElement("div");
        slotEl.className = "timeline-slot";

        const formatHour = `${String(hour).padStart(2, '0')}:00`;
        const nextHour = `${String(hour + 1).padStart(2, '0')}:00`;
        
        // 1. Time Column
        const timeCol = document.createElement("div");
        timeCol.className = "slot-time-col";
        
        const timeTitle = document.createElement("span");
        timeTitle.className = "slot-time-title";
        timeTitle.innerText = `${formatHour} - ${nextHour}`;
        
        const timePeriod = document.createElement("span");
        timePeriod.className = "slot-time-period";
        timePeriod.innerText = hour < 12 ? "Morning" : (hour >= 12 && hour < 16 ? "Afternoon" : (hour >= 16 && hour < 21 ? "Evening" : "Night"));
        
        timeCol.appendChild(timeTitle);
        timeCol.appendChild(timePeriod);
        slotEl.appendChild(timeCol);

        // 2. Occupancy resolution
        const customerMatch = dayCustomerBookings.find(b => b.slots && b.slots.includes(hour));
        const blockMatch = dayOwnerBlocks.find(blk => blk.slots && blk.slots.includes(hour));

        const statusPill = document.createElement("span");
        statusPill.className = "slot-status-pill";

        const metaInfo = document.createElement("span");
        metaInfo.className = "slot-meta-info";

        const actionWrapper = document.createElement("div");
        actionWrapper.className = "slot-actions";

        if (customerMatch) {
            // Customer Booked state
            statusPill.classList.add("slot-status-booked");
            statusPill.innerHTML = `<i class="fa-solid fa-user-tag"></i> Booked`;
            
            // Try to extract client name from booking ID details
            let clientName = customerMatch.name || fallbackName;
            
            metaInfo.innerText = `Client: ${clientName} (${customerMatch.id})`;

            const actionBtn = document.createElement("button");
            actionBtn.className = "slot-btn-action slot-btn-red";
            actionBtn.innerHTML = `<i class="fa-solid fa-ban-smoking"></i> Revoke`;
            actionBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                triggerCancelBooking(customerMatch.id, customerMatch.venueName, `${formatHour} - ${nextHour}`);
            });
            actionWrapper.appendChild(actionBtn);

        } else if (blockMatch) {
            // Owner Blocked state
            statusPill.classList.add("slot-status-blocked");
            statusPill.innerHTML = `<i class="fa-solid fa-lock"></i> Blocked`;
            metaInfo.innerText = blockMatch.note || "Offline / Maintenance";

            const actionBtn = document.createElement("button");
            actionBtn.className = "slot-btn-action slot-btn-orange";
            actionBtn.innerHTML = `<i class="fa-solid fa-lock-open"></i> Unlock`;
            actionBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                triggerUnblockSlot(blockMatch.id, `${formatHour} - ${nextHour}`);
            });
            actionWrapper.appendChild(actionBtn);

        } else {
            // Available state
            statusPill.classList.add("slot-status-available");
            statusPill.innerHTML = `<i class="fa-solid fa-circle-check"></i> Available`;
            metaInfo.innerText = "Slot is completely open";

            const actionBtn = document.createElement("button");
            actionBtn.className = "slot-btn-action";
            actionBtn.innerHTML = `<i class="fa-solid fa-ban"></i> Block`;
            actionBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                openBlockModal(hour, `${formatHour} - ${nextHour}`);
            });
            actionWrapper.appendChild(actionBtn);
        }

        slotEl.appendChild(statusPill);
        slotEl.appendChild(metaInfo);
        slotEl.appendChild(actionWrapper);
        grid.appendChild(slotEl);
    }
}

// Render Master customer bookings log panel
function renderBookingsLog(venue) {
    const container = document.getElementById("ownerBookingsLog");
    const countTag = document.getElementById("bookingsCountTag");
    if (!container) return;

    container.innerHTML = "";

    const allCustomerBookings = getCustomerBookings();
    
    // Filter bookings active for this venue on selected date
    const dayBookings = allCustomerBookings.filter(b => {
        const isMatchVenue = b.venueId === venue.id;
        const isMatchDate = b.rawDate === ownerState.selectedDate || 
                            new Date(b.date).toLocaleDateString() === new Date(ownerState.selectedDate).toLocaleDateString();
        return isMatchVenue && isMatchDate;
    });

    if (countTag) {
        countTag.innerText = `${dayBookings.length} Customer Reservation${dayBookings.length !== 1 ? 's' : ''}`;
    }

    if (dayBookings.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem 1.5rem; color: var(--color-text-muted);">
                <i class="fa-solid fa-receipt" style="font-size: 2.5rem; opacity: 0.15; margin-bottom: 1rem; display: block;"></i>
                <h3 style="font-size: 0.95rem; font-weight: 600; color: #fff;">No online player bookings</h3>
                <p style="font-size: 0.8rem; margin-top: 4px;">Reservations made on the client portal appear here.</p>
            </div>
        `;
        return;
    }

    // Calculate total remaining collection amount (excluding completed bookings)
    let totalRemainingToReceive = 0;
    dayBookings.forEach(b => {
        if (b.status !== "completed") {
            const remaining = b.remainingBalance !== undefined ? b.remainingBalance : (b.totalCost - Math.round(b.totalCost * 0.1));
            totalRemainingToReceive += remaining;
        }
    });

    // Create a beautiful, prominent summary header card
    const summaryCard = document.createElement("div");
    summaryCard.className = "booking-summary-card";
    summaryCard.style.cssText = `
        background: linear-gradient(135deg, rgba(255, 159, 67, 0.12) 0%, rgba(255, 159, 67, 0.03) 100%);
        border: 1px solid rgba(255, 159, 67, 0.2);
        border-radius: 14px;
        padding: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1.2rem;
        box-shadow: 0 8px 32px rgba(255, 159, 67, 0.08);
        backdrop-filter: blur(12px);
    `;
    summaryCard.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.8rem;">
            <div style="height: 42px; width: 42px; border-radius: 10px; background: rgba(255, 159, 67, 0.15); border: 1px solid rgba(255, 159, 67, 0.25); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: var(--color-owner-orange);">
                <i class="fa-solid fa-hand-holding-dollar"></i>
            </div>
            <div>
                <div style="font-size: 0.85rem; color: rgba(255, 255, 255, 0.9); font-weight: 600;">Total Remaining to Collect</div>
                <div style="font-size: 0.7rem; color: var(--color-text-muted); margin-top: 2px;">From all customers on this day</div>
            </div>
        </div>
        <div style="text-align: right;">
            <div style="font-size: 1.4rem; font-weight: 800; color: var(--color-owner-orange); font-family: var(--font-heading); text-shadow: 0 0 10px rgba(255, 159, 67, 0.2);">₹${totalRemainingToReceive}</div>
        </div>
    `;
    container.appendChild(summaryCard);

    // Load active session user as fallback for older bookings
    let fallbackName = "Online Player";
    let fallbackEmail = "player@courtix.com";
    let fallbackPhone = "No phone registered";
    try {
        const curUserStr = localStorage.getItem("courtix_current_user");
        if (curUserStr) {
            const curUser = JSON.parse(curUserStr);
            if (curUser.name) fallbackName = curUser.name;
            if (curUser.email) fallbackEmail = curUser.email;
            if (curUser.phone) fallbackPhone = curUser.phone;
        }
    } catch(e) {}

    dayBookings.forEach(b => {
        const card = document.createElement("div");
        card.className = "booking-card";
        if (b.status === "completed") {
            card.style.borderColor = "rgba(29, 209, 161, 0.2)";
            card.style.background = "rgba(29, 209, 161, 0.01)";
        }

        const slotsDisplay = b.slots.map(s => `${String(s).padStart(2, '0')}:00`).join(", ");
        const remaining = b.remainingBalance !== undefined ? b.remainingBalance : (b.totalCost - Math.round(b.totalCost * 0.1));
        const advance = b.advancePaid !== undefined ? b.advancePaid : Math.round(b.totalCost * 0.1);

        let footerHTML = "";
        if (b.status === "completed") {
            footerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: var(--color-text-muted);">
                    <span>Total Reservation Value:</span>
                    <strong style="color: #fff; font-size: 0.9rem;">₹${b.totalCost}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: var(--color-owner-green);">
                    <span><i class="fa-solid fa-circle-check"></i> 10% Advance Paid Online:</span>
                    <strong>₹${advance}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; background: rgba(29, 209, 161, 0.08); padding: 0.5rem 0.8rem; border-radius: 8px; border: 1px solid rgba(29, 209, 161, 0.15); margin-top: 4px;">
                    <span style="color: var(--color-owner-green); font-weight: 600;"><i class="fa-solid fa-check-double"></i> Remaining Collected at Venue:</span>
                    <strong style="color: var(--color-owner-green); font-size: 1.05rem; font-weight: 800;">₹${remaining}</strong>
                </div>
                <div style="margin-top: 0.5rem; background: rgba(29, 209, 161, 0.12); color: var(--color-owner-green); font-weight: 700; font-size: 0.8rem; padding: 0.6rem; border-radius: 8px; text-align: center; border: 1px solid rgba(29, 209, 161, 0.25); text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; justify-content: center; gap: 0.4rem;">
                    <i class="fa-solid fa-circle-check"></i> Payment Received & Completed
                </div>
            `;
        } else {
            footerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: var(--color-text-muted);">
                    <span>Total Reservation Value:</span>
                    <strong style="color: #fff; font-size: 0.9rem;">₹${b.totalCost}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: var(--color-owner-green);">
                    <span><i class="fa-solid fa-circle-check"></i> 10% Advance Paid Online:</span>
                    <strong>₹${advance}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; background: rgba(255, 159, 67, 0.08); padding: 0.5rem 0.8rem; border-radius: 8px; border: 1px solid rgba(255, 159, 67, 0.15); margin-top: 4px;">
                    <span style="color: var(--color-owner-orange); font-weight: 600;"><i class="fa-solid fa-hand-holding-dollar"></i> Collect Remaining at Venue:</span>
                    <strong style="color: var(--color-owner-orange); font-size: 1.05rem; font-weight: 800;">₹${remaining}</strong>
                </div>
                <button class="slot-btn-action slot-btn-orange" style="margin-top: 0.6rem; width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.65rem; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border-radius: 8px;" onclick="triggerMarkPaymentReceived('${b.id}', '${b.name || fallbackName}', ${remaining})">
                    <i class="fa-solid fa-circle-dollar-to-slot"></i> Payment Received
                </button>
            `;
        }

        card.innerHTML = `
            <div class="booking-card-header">
                <span class="booking-id-tag" style="${b.status === 'completed' ? 'background: rgba(29, 209, 161, 0.15); color: var(--color-owner-green); border: 1px solid rgba(29, 209, 161, 0.25);' : ''}">${b.id} ${b.status === 'completed' ? '✓' : ''}</span>
                <button class="slot-btn-action slot-btn-red" style="font-size: 0.75rem; padding: 0.3rem 0.6rem;" onclick="triggerCancelBooking('${b.id}', '${b.venueName}', '${slotsDisplay}')">
                    <i class="fa-solid fa-trash-can"></i> Revoke Pass
                </button>
            </div>
            <div class="booking-card-body">
                <div class="booking-body-row">
                    <i class="fa-solid fa-user"></i>
                    <span class="booking-customer-name">${b.name || fallbackName}</span>
                </div>
                <div class="booking-body-row">
                    <i class="fa-solid fa-envelope"></i>
                    <span>${b.email || fallbackEmail}</span>
                </div>
                <div class="booking-body-row">
                    <i class="fa-solid fa-phone"></i>
                    <span>${b.phone || fallbackPhone}</span>
                </div>
                <div class="booking-body-row">
                    <i class="fa-solid fa-clock"></i>
                    <strong style="color: #fff;">Hours: ${slotsDisplay}</strong>
                </div>
            </div>
            <div class="booking-card-footer" style="display: flex; flex-direction: column; gap: 0.6rem; align-items: stretch; margin-top: 1rem; padding-top: 0.8rem; border-top: 1px solid rgba(255, 255, 255, 0.05); font-family: var(--font-body);">
                ${footerHTML}
            </div>
        `;

        container.appendChild(card);
    });
}

// Update counters
function updateStats(venue) {
    const allCustomerBookings = getCustomerBookings();
    const allOwnerBlocks = getOwnerBlocks();

    // Map bookings and blocks active for this venue on selected date
    const dayCustomerBookings = allCustomerBookings.filter(b => {
        const isMatchVenue = b.venueId === venue.id;
        const isMatchDate = b.rawDate === ownerState.selectedDate || 
                            new Date(b.date).toLocaleDateString() === new Date(ownerState.selectedDate).toLocaleDateString();
        return isMatchVenue && isMatchDate;
    });

    const dayOwnerBlocks = allOwnerBlocks.filter(blk => {
        return blk.venueId === venue.id && blk.date === ownerState.selectedDate;
    });

    // Count slots
    let customerBookedCount = 0;
    dayCustomerBookings.forEach(b => {
        if (b.slots) customerBookedCount += b.slots.length;
    });

    let ownerBlockedCount = 0;
    dayOwnerBlocks.forEach(blk => {
        if (blk.slots) ownerBlockedCount += blk.slots.length;
    });

    const totalOperatingHours = venue.openHours.end - venue.openHours.start;
    const remainingAvailableHours = totalOperatingHours - customerBookedCount - ownerBlockedCount;

    // Push values to DOM
    document.getElementById("statCustomerBookedCount").innerText = customerBookedCount;
    document.getElementById("statOwnerBlockedCount").innerText = ownerBlockedCount;
    
    const availableEl = document.getElementById("statHoursAvailableCount");
    if (availableEl) {
        availableEl.innerText = Math.max(0, remainingAvailableHours);
    }
}

// 6. BLOCK MODAL ACTION CONTROLLERS
function openBlockModal(hour, formattedTimeRange) {
    ownerState.activeBlockHour = hour;
    
    document.getElementById("blockSlotDetails").innerText = `Restrict Slot: ${formattedTimeRange} for court maintenance, offline booking, or tournaments.`;
    document.getElementById("blockReasonInput").value = "";
    document.getElementById("blockSlotModal").classList.add("active");
    
    setTimeout(() => {
        document.getElementById("blockReasonInput").focus();
    }, 150);
}

function closeBlockModal() {
    document.getElementById("blockSlotModal").classList.remove("active");
    ownerState.activeBlockHour = null;
}

function handleBlockSubmit() {
    const reasonInput = document.getElementById("blockReasonInput");
    if (!reasonInput || ownerState.activeBlockHour === null) return;

    const reason = reasonInput.value.trim();
    if (!reason) return;

    const allBlocks = getOwnerBlocks();

    // Create a new block entry
    const newBlock = {
        id: "BLK-" + Math.floor(100000 + Math.random() * 900000),
        venueId: ownerState.selectedVenueId,
        date: ownerState.selectedDate,
        slots: [ownerState.activeBlockHour],
        note: reason
    };

    allBlocks.push(newBlock);
    saveOwnerBlocks(allBlocks);

    closeBlockModal();
    refreshDashboard();
    
    showToast("Slot Restricted", "Selected timing has been marked as blocked successfully.");
}

// Unlock / Unblock a slot
function triggerUnblockSlot(blockId, formattedTimeRange) {
    if (!confirm(`Are you sure you want to unlock and release the slot ${formattedTimeRange}?`)) return;

    const allBlocks = getOwnerBlocks();
    const updated = allBlocks.filter(blk => blk.id !== blockId);
    saveOwnerBlocks(updated);

    refreshDashboard();
    showToast("Slot Unlocked", "The slot has been released and is now open for online bookings.");
}

// Revoke a customer booking pass
window.triggerCancelBooking = function(bookingId, venueName, formattedSlots) {
    if (!confirm(`⚠️ WARNING: Are you sure you want to revoke Booking Pass ${bookingId} for ${venueName} at hours ${formattedSlots}?\n\nThis will remove the transaction record and immediately release the slots!`)) return;

    const allBookings = getCustomerBookings();
    const updated = allBookings.filter(b => b.id !== bookingId);
    saveCustomerBookings(updated);

    refreshDashboard();
    showToast("Booking Revoked", `Customer reservation pass ${bookingId} has been successfully canceled.`);
};

// Mark payment received and set status to completed
window.triggerMarkPaymentReceived = function(bookingId, customerName, remainingAmount) {
    if (!confirm(`Are you sure you want to mark Booking Pass ${bookingId} for ${customerName} as Completed?\n\nThis confirms you have received the remaining balance of ₹${remainingAmount} at the venue.`)) return;

    const allBookings = getCustomerBookings();
    const updated = allBookings.map(b => {
        if (b.id === bookingId) {
            b.status = "completed";
        }
        return b;
    });
    saveCustomerBookings(updated);

    refreshDashboard();
    showToast("Payment Received", `Booking pass ${bookingId} has been successfully marked as completed.`);
};

// 7. TOAST NOTIFICATION MODULE
function showToast(title, desc) {
    const alertBox = document.getElementById("ownerToastAlert");
    const titleEl = document.getElementById("toastTitle");
    const descEl = document.getElementById("toastDesc");

    if (!alertBox || !titleEl || !descEl) return;

    titleEl.innerText = title;
    descEl.innerText = desc;

    alertBox.style.display = "flex";

    // Auto fadeout after 3.2 seconds
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 3200);
}
