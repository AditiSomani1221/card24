// ==========================================================
// Wedding Reception — "An Evening"
// Link options:  reception.html?to=Sharma%20Family&lang=hi
//   to   → greets that guest by name
//   lang → "hi" opens in Hindi
// ==========================================================

window.addEventListener("DOMContentLoaded", () => {
    // ----------------------------------------------------
    // Translations (English & Hindi)
    // ----------------------------------------------------
    const translations = {
        en: {
            "doc-title": "Reception — Aayush & Aditi",
            "gate-for": "A special invitation for",
            "gate-hint": "Tap the diya to open",
            "dear": "Dear {name},",
            "dear-all": "Dear Family & Friends,",
            "hero-eyebrow": "Join us for an evening to celebrate",
            "name-groom": "Aayush",
            "name-bride": "Aditi",
            "hero-title": "Wedding Reception",
            "hero-when": "Sunday · 24 January 2027 · 6:00 PM onwards",
            "scroll-cue": "Scroll down · the sun is setting",

            "blessings-label": "With the blessings of",
            "elders": "Late Gokulbai &amp; Late Onkarlalji Laddha",
            "hosts": "Surekha &amp; Sanjay Laddha",
            "request": "cordially request the honour of your presence at the wedding reception of their son",
            "with": "with",
            "daughter-label": "Daughter of",
            "bride-parents": "Mrs. Rama &amp; Mr. Mukesh ji Somani",

            "evening-title": "The Evening",
            "time-big": "6:00 PM onwards",
            "time-what": "Dinner · Music · Blessings",
            "countdown-label": "Until the evening begins",
            "cd-days": "Days",
            "cd-hours": "Hours",
            "cd-mins": "Minutes",
            "cd-secs": "Seconds",
            "now": "The evening is here — see you tonight!",
            "after": "Thank you for celebrating with us",

            "venue-title": "Venue",
            "venue-name": "Shree Garden and Resorts",
            "venue-address": "Agra – Mumbai Road, near Gaushala,<br>Pipaldhar, Sendhwa,<br>Madhya Pradesh 451666",
            "btn-map": "Directions",
            "btn-calendar": "Add to Calendar",

            "family-title": "With love from our families",
            "family-happiness-title": "Sharing the Happiness",
            "family-happiness-names": "Pushpa Laddha<br>Vinay Laddha<br>Shobha and Subhash Totla<br>Manda and Hemant Bhutada<br>Nileema and Kiran Kabra",
            "family-delighted-title": "Delighted",
            "family-delighted-names": "Sunil and Urmila Baheti<br>Saras and Sanjana Laddha<br>Anushri and Raunak Dhoot<br>Smruti and Subhas Partani<br>Sanjyoti and Ajay Chandak<br>Ujjwala Anil Mundra<br>Archana Kabra",
            "family-nanihal-title": "Nanihal",
            "family-nanihal-names": "Santosh Pannalalji Kabra<br>Manisha Bankatji Kabra",
            "family-regards-title": "With Warm Regards",
            "family-regards-names": "Shivchandra Ji Laddha<br>Satyanarayan Ji Laddha<br>Damodar Ji Laddha<br>Gaurinandan Ji Laddha<br><em>and the entire Laddha family</em>",

            "night-message": "With immense joy and the blessings of Lord Shiva, together with our families, we invite you to join us at our wedding reception and celebrate the beginning of our forever.",
            "night-sign": "See you under the stars",
            "night-family": "— The Laddha Family"
        },
        hi: {
            "doc-title": "स्वागत समारोह — आयुष और अदिति",
            "gate-for": "विशेष आमंत्रण",
            "gate-hint": "निमंत्रण खोलने के लिए दीया जलाएँ",
            "dear": "प्रिय {name},",
            "dear-all": "प्रिय स्वजन,",
            "hero-eyebrow": "एक शाम, हमारे साथ",
            "name-groom": "आयुष",
            "name-bride": "अदिति",
            "hero-title": "विवाह स्वागत समारोह",
            "hero-when": "रविवार · २४ जनवरी २०२७ · शाम 6:00 बजे से",
            "scroll-cue": "नीचे स्क्रॉल करें · शाम ढल रही है",

            "blessings-label": "आशीर्वाद",
            "elders": "स्व. गोकुलबाई एवं स्व. ओंकारलालजी लड्ढा",
            "hosts": "सुरेखा एवं संजय लड्ढा",
            "request": "अपने सुपुत्र के शुभ विवाह के उपलक्ष्य में आयोजित स्वागत समारोह (रिसेप्शन) में आपकी गरिमामयी उपस्थिति हेतु सादर आमंत्रित करते हैं",
            "with": "संग",
            "daughter-label": "सुपुत्री",
            "bride-parents": "श्रीमती रमा एवं श्री मुकेश जी सोमानी",

            "evening-title": "शुभ संध्या",
            "time-big": "शाम 6:00 बजे से",
            "time-what": "स्नेहभोज · संगीत · आशीर्वाद",
            "countdown-label": "शाम शुरू होने में",
            "cd-days": "दिन",
            "cd-hours": "घंटे",
            "cd-mins": "मिनट",
            "cd-secs": "सेकंड",
            "now": "शुभ संध्या आ गई — आज शाम मिलते हैं!",
            "after": "हमारे उत्सव में शामिल होने के लिए धन्यवाद",

            "venue-title": "आयोजन स्थल",
            "venue-name": "श्री गार्डन एंड रिसोर्ट्स",
            "venue-address": "आगरा – मुंबई रोड, गौशाला के पास,<br>पिपलधार, सेंधवा,<br>मध्य प्रदेश 451666",
            "btn-map": "रास्ता देखें",
            "btn-calendar": "कैलेंडर में जोड़ें",

            "family-title": "सस्नेह — हमारा परिवार",
            "family-happiness-title": "हर्षोल्लास में सम्मिलित",
            "family-happiness-names": "पुष्पा लड्ढा<br>विनय लड्ढा<br>शोभा एवं सुभाष तोतला<br>मंदा एवं हेमंत भुतड़ा<br>नीलिमा एवं किरण काबरा",
            "family-delighted-title": "आनंदित",
            "family-delighted-names": "सुनील एवं उर्मिला बाहेती<br>सारस एवं संजना लड्ढा<br>अनुश्री एवं रौनक धूत<br>स्मृति एवं सुभाष परतानी<br>संज्योति एवं अजय चांडक<br>उज्ज्वला अनिल मूंदड़ा<br>अर्चना काबरा",
            "family-nanihal-title": "ननिहाल",
            "family-nanihal-names": "संतोष पन्नालालजी काबरा<br>मनीषा बंकटजी काबरा",
            "family-regards-title": "सादर सस्नेह",
            "family-regards-names": "शिवचंद्र जी लड्ढा<br>सत्यनारायण जी लड्ढा<br>दामोदर जी लड्ढा<br>गौरीनंदन जी लड्ढा<br><em>एवं समस्त लड्ढा परिवार</em>",

            "night-message": "अत्यंत हर्ष और भगवान शिव के आशीर्वाद के साथ, हमारे परिवारों के साथ मिलकर, हम आपको हमारे विवाह स्वागत समारोह में पधारकर हमारे जीवन के नए अध्याय की शुरुआत का उत्सव मनाने के लिए आमंत्रित करते हैं।",
            "night-sign": "तारों की छाँव में मिलते हैं",
            "night-family": "— समस्त लड्ढा परिवार"
        }
    };

    const params = new URLSearchParams(window.location.search);
    const guestName = (params.get("to") || "").trim().slice(0, 60);
    let currentLang = params.get("lang") === "hi" ? "hi" : "en";

    // 6:00 PM IST on 24 January 2027, and the end of that day
    const EVENT_START = Date.UTC(2027, 0, 24, 12, 30);
    const EVENT_DAY_END = Date.UTC(2027, 0, 24, 18, 29);

    const t = key => translations[currentLang][key] ?? translations.en[key] ?? "";

    // ----------------------------------------------------
    // 1. LANGUAGE
    // ----------------------------------------------------
    const langButtons = document.querySelectorAll(".lang-switch button");
    const greeting = document.getElementById("greeting");
    const gateGuest = document.getElementById("gate-guest");
    const gateName = document.getElementById("gate-name");

    if (guestName) {
        gateName.textContent = guestName;
        gateGuest.hidden = false;
    }

    function applyLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.title = t("doc-title");

        document.querySelectorAll("[data-i18n]").forEach(el => {
            el.innerHTML = t(el.dataset.i18n);
        });

        // The guest's name comes from the link, so it is set as text, never HTML
        greeting.textContent = guestName ? t("dear").replace("{name}", guestName) : t("dear-all");

        langButtons.forEach(btn => {
            btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
        });

        updateCountdown();
    }

    langButtons.forEach(btn => {
        btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
    });

    // ----------------------------------------------------
    // 2. COUNTDOWN
    // ----------------------------------------------------
    const countdown = document.getElementById("countdown");
    const countdownDone = document.getElementById("countdown-done");
    const cd = {
        days: document.getElementById("cd-days"),
        hours: document.getElementById("cd-hours"),
        mins: document.getElementById("cd-mins"),
        secs: document.getElementById("cd-secs")
    };

    function updateCountdown() {
        const now = Date.now();
        const left = EVENT_START - now;

        if (left <= 0) {
            countdown.hidden = true;
            countdownDone.hidden = false;
            countdownDone.textContent = now < EVENT_DAY_END ? t("now") : t("after");
            return;
        }

        const s = Math.floor(left / 1000);
        cd.days.textContent = Math.floor(s / 86400);
        cd.hours.textContent = String(Math.floor((s % 86400) / 3600)).padStart(2, "0");
        cd.mins.textContent = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
        cd.secs.textContent = String(s % 60).padStart(2, "0");
    }

    applyLanguage(currentLang);
    setInterval(updateCountdown, 1000);

    // ----------------------------------------------------
    // 3. SKY: sunset → twilight → night as the guest scrolls
    // ----------------------------------------------------
    const root = document.documentElement;
    const skyStops = [
        { at: 0, colors: ["#1f2a5a", "#b45a7c", "#f0a25e"] },
        { at: 0.45, colors: ["#0d1433", "#3d2a5e", "#7c3f5e"] },
        { at: 1, colors: ["#02050f", "#071028", "#0e1a3a"] }
    ].map(stop => ({ at: stop.at, colors: stop.colors.map(hexToRgb) }));

    function hexToRgb(hex) {
        const n = parseInt(hex.slice(1), 16);
        return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    }

    function mix(a, b, k) {
        return `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * k)).join(",")})`;
    }

    const clamp01 = v => Math.min(1, Math.max(0, v));
    const smooth = (from, to, v) => {
        const k = clamp01((v - from) / (to - from));
        return k * k * (3 - 2 * k);
    };

    // Scattered stars, only in the upper sky
    const starField = document.getElementById("stars");
    for (let i = 0; i < 110; i++) {
        const star = document.createElement("span");
        star.className = "star-dot";
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.pow(Math.random(), 1.4) * 78}%`;
        const size = Math.random() < 0.15 ? 3 : Math.random() < 0.5 ? 2 : 1;
        star.style.width = star.style.height = `${size}px`;
        star.style.animationDelay = `${(Math.random() * 3.5).toFixed(2)}s`;
        starField.appendChild(star);
    }

    let ticking = false;
    function paintSky() {
        ticking = false;
        const max = root.scrollHeight - window.innerHeight;
        const p = max > 0 ? clamp01(window.scrollY / max) : 0;

        const i = p < skyStops[1].at ? 0 : 1;
        const from = skyStops[i];
        const to = skyStops[i + 1];
        const k = (p - from.at) / (to.at - from.at);
        root.style.setProperty("--sky-top", mix(from.colors[0], to.colors[0], k));
        root.style.setProperty("--sky-mid", mix(from.colors[1], to.colors[1], k));
        root.style.setProperty("--sky-bottom", mix(from.colors[2], to.colors[2], k));

        root.style.setProperty("--sun-y", (p * 70).toFixed(2));
        root.style.setProperty("--sun-o", (1 - smooth(0.1, 0.45, p)).toFixed(3));
        root.style.setProperty("--stars", smooth(0.2, 0.7, p).toFixed(3));
        root.style.setProperty("--moon-y", ((1 - smooth(0.5, 0.95, p)) * 40).toFixed(2));
        root.style.setProperty("--moon-o", smooth(0.55, 0.85, p).toFixed(3));
    }

    function requestPaint() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(paintSky);
        }
    }

    window.addEventListener("scroll", requestPaint, { passive: true });
    window.addEventListener("resize", requestPaint);
    paintSky();

    // ----------------------------------------------------
    // 4. SCROLL REVEAL
    // ----------------------------------------------------
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

    // ----------------------------------------------------
    // 5. MUSIC
    // ----------------------------------------------------
    const music = document.getElementById("music");
    const musicBtn = document.getElementById("music-btn");

    function playMusic() {
        music.play()
            .then(() => musicBtn.classList.add("playing"))
            .catch(() => musicBtn.classList.remove("playing"));
    }

    musicBtn.addEventListener("click", () => {
        if (music.paused) {
            playMusic();
        } else {
            music.pause();
            musicBtn.classList.remove("playing");
        }
    });

    // ----------------------------------------------------
    // 6. OPENING: light the diya
    // ----------------------------------------------------
    const gate = document.getElementById("gate");
    const gateDiya = document.getElementById("gate-diya");

    gateDiya.addEventListener("click", () => {
        if (gate.classList.contains("lit")) return;
        gate.classList.add("lit");
        playMusic();

        setTimeout(() => {
            window.scrollTo(0, 0);
            document.body.classList.remove("is-locked");
            document.body.classList.add("is-open");
            gate.classList.add("gone");
            requestPaint();
        }, 1300);

        setTimeout(() => {
            gate.hidden = true;
        }, 2600);
    });

    // ----------------------------------------------------
    // 7. ADD TO CALENDAR (.ics file)
    // ----------------------------------------------------
    document.getElementById("add-calendar").addEventListener("click", () => {
        const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
        const ics = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//Eternal Vows//Reception//EN",
            "CALSCALE:GREGORIAN",
            "BEGIN:VEVENT",
            "UID:aayush-aditi-reception-20270124@eternalvows",
            `DTSTAMP:${stamp}`,
            "DTSTART:20270124T123000Z",
            "DTEND:20270124T163000Z",
            "SUMMARY:Wedding Reception — Aayush & Aditi",
            "LOCATION:Shree Garden and Resorts\\, Agra–Mumbai Road\\, near Gaushala\\, Pipaldhar\\, Sendhwa\\, Madhya Pradesh 451666",
            "DESCRIPTION:6:00 PM onwards. Directions: https://maps.app.goo.gl/TpYXcLr2PKFUnaeE8",
            "END:VEVENT",
            "END:VCALENDAR"
        ].join("\r\n");

        const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
        const link = document.createElement("a");
        link.href = url;
        link.download = "aayush-aditi-reception.ics";
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
});
