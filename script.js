// ============================
// PASTE YOUR MAIN LINK HERE
// ============================
//  
// const MAIN_LINK = "User your link here ";


// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// FAQ
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-question");

  if (btn) {
    btn.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  }
});

// Popup elements
const popupOverlay = document.getElementById("popupOverlay");
const popupClose = document.getElementById("popupClose");
const openPopupBtns = document.querySelectorAll(".open-popup-btn");
const showPopupOffer = document.getElementById("showPopupOffer");
const ctaPopupBtn = document.getElementById("ctaPopupBtn");
const floatingCouponBtn = document.getElementById("floatingCouponBtn");
const popupContinueBtn = document.getElementById("popupContinueBtn");

// Coupon copy
const copyCouponBtn = document.getElementById("copyCouponBtn");
const couponCodeEl = document.getElementById("couponCode");

let popupShown = false;

// Open popup
function openPopup() {
  if (!popupOverlay) return;

  popupOverlay.classList.add("active");
  document.body.classList.add("popup-open");
}

// Close popup
function closePopup() {
  if (!popupOverlay) return;

  popupOverlay.classList.remove("active");
  document.body.classList.remove("popup-open");
}

// Auto popup after 10 seconds
setTimeout(() => {
  if (!popupShown) {
    openPopup();
    popupShown = true;
  }
}, 10000);

// Close popup from cross button
if (popupClose) {
  popupClose.addEventListener("click", () => {
    closePopup();
  });
}

// Close popup when clicking outside popup content
if (popupOverlay) {
  popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
      closePopup();
    }
  });
}

// Open popup from all Buy Now buttons
openPopupBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    openPopup();
  });
});

// Open popup from offer section button
if (showPopupOffer) {
  showPopupOffer.addEventListener("click", () => {
    openPopup();
  });
}

// Open popup from CTA button
if (ctaPopupBtn) {
  ctaPopupBtn.addEventListener("click", () => {
    openPopup();
  });
}

// Continue button inside popup
if (popupContinueBtn) {
  popupContinueBtn.addEventListener("click", () => {
    closePopup();

    const coursesSection = document.getElementById("courses");
    if (coursesSection) {
      coursesSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
}

// Floating coupon button scroll to offers section
if (floatingCouponBtn) {
  floatingCouponBtn.addEventListener("click", () => {
    const offersSection = document.getElementById("offers");

    if (offersSection) {
      offersSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
}

// Copy coupon code
if (copyCouponBtn && couponCodeEl) {
  copyCouponBtn.addEventListener("click", async () => {
    const couponCode = couponCodeEl.innerText.trim();

    try {
      await navigator.clipboard.writeText(couponCode);
      copyCouponBtn.textContent = "Coupon Copied!";

      setTimeout(() => {
        copyCouponBtn.textContent = "Copy Coupon";
      }, 1800);
    } catch (error) {
      copyCouponBtn.textContent = "Copy Failed";

      setTimeout(() => {
        copyCouponBtn.textContent = "Copy Coupon";
      }, 1800);
    }
  });
}
// Apply same link to all buttons
const globalButtons = document.querySelectorAll(".global-link");

globalButtons.forEach((btn) => {
  if (btn.tagName === "A") {
    btn.setAttribute("href", MAIN_LINK);
  }

  btn.addEventListener("click", () => {
    window.location.href = MAIN_LINK;
  });
});