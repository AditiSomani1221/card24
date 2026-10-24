window.addEventListener("DOMContentLoaded", () => {
    // ----------------------------------------------------
    // Translations Dictionary (English & Hindi)
    // ----------------------------------------------------
    const translations = {
        en: {
            "document-title": "Eternal Vows — Aayush & Aditi",
            "loader-mantra": "श्री गणेशाय नमः",
            "loader-title": "Eternal Vows",
            "loader-subtitle": "Blessed by Mahadev",
            "select-lang-text": "Choose Language / भाषा चुनें",
            "open-btn": "Open Invitation",
            
            "hero-title": "यदेतद् हृदयं तव तदस्तु हृदयं मम।<br>यदिदं हृदयं मम तदस्तु हृदयं तव॥",
            "hero-names": "Aayush 🪷 Aditi",
            "hero-date": "24<sup>th</sup> January 2027",
            "scroll-text": "Scroll to Begin",
            
            
            "groom-tag": "वर (Groom)",
            "groom-name": "Aayush",
            "groom-desc": "A calm soul, driven by ambition and grounded in values. Ready to embark on this beautiful path of companionship.",
            "bride-tag": "वधू (Bride)",
            "bride-name": "Aditi",
            "bride-desc": "A vibrant heart, filled with creativity and warmth. Stepping into this lifelong journey of love and togetherness.",
            
            // Events 23rd
            "date-23": "📅 23 January 2027",
            "tag-haldi": "Haldi Utsav",
            "title-haldi": "Haldi Ceremony",
            "time-haldi": "⏰ 08:00 AM",
            "desc-haldi": "A warm morning ceremony where family and friends apply auspicious turmeric paste to the couple.",
            
            "tag-ganesh": "Aarambh",
            "title-ganesh": "Ganesh Poojan",
            "time-ganesh": "⏰ 09:00 AM",
            "desc-ganesh": "Seeking the divine blessings of Lord Ganesha to mark the auspicious beginning of our wedding festivities and remove all obstacles from our paths.",
            
            "tag-carnival": "Utsav",
            "title-carnival": "Carnival",
            "time-carnival": "⏰ 02:00 PM",
            "desc-carnival": "A colorful, joyful afternoon filled with laughter, fun, games, and playful moments with our loved ones.",
            
            "tag-ring": "Sagaai",
            "title-ring": "Ring Ceremony",
            "time-ring": "⏰ 07:00 PM",
            "desc-ring": "Two rings, two families, and the beginning of a lifelong promise. We invite you to witness the formal ring exchange.",
            
            "tag-sangeet": "Sangeet",
            "title-sangeet": "Geet Sangeet",
            "time-sangeet": "⏰ 07:30 PM",
            "desc-sangeet": "Let the drums roll and the feet dance! Join us for a grand musical night packed with spectacular dance performances and celebrations.",
            
            // Events 24th
            "date-24": "📅 24 January 2027",
            "tag-mayra": "Bhaat / Mayra",
            "title-mayra": "Mayra Ritual",
            "time-mayra": "⏰ 09:00 AM",
            "desc-mayra": "A heartfelt ceremony celebrating family bonds and ancestral traditions, where the maternal family presents gifts and blessings to welcome the couple.",
            
            "tag-sajjangot": "Sajjan Got",
            "title-sajjangot": "Sajjan Got",
            "time-sajjangot": "⏰ 12:00 PM",
            "desc-sajjangot": "A traditional feast honoring our special guests from the groom's side with love, respect, and authentic flavors.",
            
            "tag-procession": "Baraat",
            "title-procession": "Procession",
            "time-procession": "⏰ 04:00 PM",
            "desc-procession": "The grand wedding procession of the groom starting with music, dance, and celebration as he rides to the wedding venue.",
            
            "tag-reception": "Celebration",
            "title-reception": "Wedding Reception",
            "time-reception": "⏰ 06:00 PM",
            "desc-reception": "A grand evening to celebrate our new journey as husband and wife. Join us for a delightful dinner, music, and congratulations.",
            
            "tag-wedding": "Vivah",
            "title-phere": "Holy Phere",
            "time-phere": "⏰ 11:00 PM",
            "desc-phere": "Bound by the sacred fire and seven vows, we unite our souls under the eternal blessings of Mahadev. Your presence is our greatest blessing.",
            
            // Formal Invitation (Patrika)
            "invite-mantra-1": "॥ श्री गणेशाय नमः ॥",
            "invite-mantra-2": "॥ श्री सचियाय मातायै नमः ॥",
            "invite-mantra-3": "॥ श्री बांकल माता नमः ॥",
            "invite-mantra-4": "॥ जय बालाजी ॥",
            "welcome-title": "Welcome",
            "invite-blessings-label": "With the Blessings of",
            "invite-elders": "Late Gokulbai &amp;<br>Late Onkarlalji Laddha",
            "invite-hosts": "Surekha &amp; Sanjay Laddha",
            "invite-request": "cordially request the honour of your presence at the wedding reception of their son",
            "invite-daughter-label": "Daughter of",
            "invite-bride-parents": "Mrs. Rama &amp; Mr. Mukesh ji Somani",

            // Venue
            "venue-title": "Venue",
            "venue-subtitle": "Where our celebrations come alive",
            "venue-name": "Shree Garden and Resorts",
            "venue-address": "Agra &ndash; Mumbai Road, near Gaushala,<br>Pipaldhar, Sendhwa,<br>Madhya Pradesh <span class=\"venue-pincode\">451666</span>",
            "venue-dates": "24<sup>th</sup> January 2027 &middot; 6:00 PM onwards",
            "venue-note": "The reception will be held at this venue",
            "venue-map-btn": "View on Google Maps",

            // Family & Well-wishers
            "family-title": "With Our Families",
            "family-subtitle": "Hearts that make this celebration whole",
            "family-happiness-title": "Sharing the Happiness",
            "family-happiness-names": "Pushpa Laddha<br>Vinay Laddha<br>Shobha and Subhash Totla<br>Manda and Hemant Bhutada<br>Nileema and Kiran Kabra",
            "family-delighted-title": "Delighted",
            "family-delighted-names": "Sunil and Urmila Baheti<br>Saras and Sanjana Laddha<br>Anushri and Raunak Dhoot<br>Smruti and Subhas Partani<br>Sanjyoti and Ajay Chandak<br>Ujjwala Anil Mundra<br>Archana Kabra",
            "family-nanihal-title": "Nanihal",
            "family-nanihal-names": "Santosh Pannalalji Kabra<br>Manisha Bankatji Kabra",
            "family-regards-title": "With Warm Regards",
            "family-regards-names": "Shivchandra Ji Laddha<br>Satyanarayan Ji Laddha<br>Damodar Ji Laddha<br>Gaurinandan Ji Laddha<br><span class=\"family-names-all\">and the entire Laddha family</span>",

            "rsvp-title": "Seek Blessings",
            "rsvp-subtitle": "With immense joy and the blessings of Lord Shiva, together with our families, we invite you to join us at our wedding reception and celebrate the beginning of our forever."
        },
        hi: {
            "document-title": "अटूट बंधन — आयुष और अदिति",
            "loader-mantra": "श्री गणेशाय नमः",
            "loader-title": "अटूट बंधन",
            "loader-subtitle": "महादेव के आशीर्वाद से",
            "select-lang-text": "भाषा चुनें / Choose Language",
            "open-btn": "निमंत्रण पत्र खोलें",
            
            "hero-title": "यदेतद् हृदयं तव तदस्तु हृदयं मम।<br>यदिदं हृदयं मम तदस्तु हृदयं तव॥",
            "hero-names": "आयुष 🪷 अदिति",
            "hero-date": "२४ जनवरी २०२७",
            "scroll-text": "शुरू करने के लिए स्क्रॉल करें",
            
            
            "groom-tag": "वर (दूल्हा)",
            "groom-name": "आयुष",
            "groom-desc": "एक शांत स्वभाव, महत्वाकांक्षा से प्रेरित और संस्कारों से जुड़े हुए। जीवन के इस सुंदर मार्ग पर कदम रखने के लिए तैयार।",
            "bride-tag": "वधू (दुल्हन)",
            "bride-name": "अदिति",
            "bride-desc": "एक जीवंत हृदय, रचनात्मकता और गर्मजोशी से भरपूर। प्यार और साथ के इस जीवन भर के सफर में कदम रखने के लिए तैयार।",
            
            // Events 23rd
            "date-23": "📅 २३ जनवरी २०२७",
            "tag-haldi": "हल्दी उत्सव",
            "title-haldi": "हल्दी की रस्म",
            "time-haldi": "⏰ सुबह 08:00 बजे",
            "desc-haldi": "एक सुखद सुबह का समारोह जहां परिवार और मित्र वर-वधू को शुभ हल्दी का लेप लगाते हैं।",
            
            "tag-ganesh": "शुभ आरंभ",
            "title-ganesh": "गणेश पूजन",
            "time-ganesh": "⏰ सुबह 09:00 बजे",
            "desc-ganesh": "विवाह उत्सव के शुभ आरंभ के लिए और हमारे मार्ग की सभी बाधाओं को दूर करने के लिए भगवान श्री गणेश के दिव्य आशीर्वाद की प्रार्थना।",
            
            "tag-carnival": "उत्सव",
            "title-carnival": "कार्निवल",
            "time-carnival": "⏰ दोपहर 02:00 बजे",
            "desc-carnival": "हंसी, खेल और प्रियजनों के साथ आनंदमयी पलों से भरी एक रंगीन दोपहर।",
            
            "tag-ring": "सगाई",
            "title-ring": "रिंग सेरेमनी",
            "time-ring": "⏰ शाम 07:00 बजे",
            "desc-ring": "दो अंगूठियां, दो परिवार और जीवन भर के वादे की शुरुआत। हम आपको इस रस्म का साक्षी बनने के लिए आमंत्रित करते हैं।",
            
            "tag-sangeet": "महिला संगीत",
            "title-sangeet": "गीत संगीत",
            "time-sangeet": "⏰ शाम 07:30 बजे",
            "desc-sangeet": "ढोल की थाप और थिरकते कदम! शानदार नृत्य प्रस्तुतियों और उत्सवों से भरी एक भव्य संगीतमय रात में हमारे साथ शामिल हों।",
            
            // Events 24th
            "date-24": "📅 २४ जनवरी २०२७",
            "tag-mayra": "भात / मायरा",
            "title-mayra": "मायरा उत्सव",
            "time-mayra": "⏰ सुबह 09:00 बजे",
            "desc-mayra": "पारिवारिक रिश्तों और परंपराओं का जश्न मनाने वाला समारोह, जहां ननिहाल पक्ष द्वारा उपहार और आशीर्वाद भेंट किए जाते हैं।",
            
            "tag-sajjangot": "सज्जन गोठ",
            "title-sajjangot": "सज्जन गोठ",
            "time-sajjangot": "⏰ दोपहर 12:00 बजे",
            "desc-sajjangot": "वर पक्ष के हमारे विशिष्ट मेहमानों के सम्मान में प्यार, आदर और पारंपरिक स्वादों से भरपूर एक पारंपरिक भोज।",
            
            "tag-procession": "बारात प्रस्थान",
            "title-procession": "निकासी एवं बारात",
            "time-procession": "⏰ शाम 04:00 बजे",
            "desc-procession": "धूमधाम, बैंड-बाजे और थिरकते बारातियों के साथ दूल्हे का भव्य बारात प्रस्थान।",
            
            "tag-reception": "विवाह प्रीतिभोज",
            "title-reception": "शादी का रिसेप्शन",
            "time-reception": "⏰ शाम 06:00 बजे",
            "desc-reception": "पति और पत्नी के रूप में हमारी नई यात्रा का जश्न मनाने के लिए एक भव्य शाम। आदरपूर्वक स्नेहभोज में आमंत्रित हैं।",
            
            "tag-wedding": "शुभ विवाह",
            "title-phere": "मंगल फेरे",
            "time-phere": "⏰ रात्रि 11:00 बजे",
            "desc-phere": "पवित्र अग्नि और सात वचनों के साथ हम महादेव के शाश्वत आशीर्वाद के तहत अपनी आत्माओं को एकजुट करते हैं। आपकी गरिमामयी उपस्थिति प्रार्थनीय है।",
            
            // Formal Invitation (Patrika)
            "invite-mantra-1": "॥ श्री गणेशाय नमः ॥",
            "invite-mantra-2": "॥ श्री सचियाय मातायै नमः ॥",
            "invite-mantra-3": "॥ श्री बांकल माता नमः ॥",
            "invite-mantra-4": "॥ जय बालाजी ॥",
            "welcome-title": "स्वागतम्",
            "invite-blessings-label": "आशीर्वाद",
            "invite-elders": "स्व. गोकुलबाई एवं<br>स्व. ओंकारलालजी लड्ढा",
            "invite-hosts": "सुरेखा एवं संजय लड्ढा",
            "invite-request": "अपने सुपुत्र के शुभ विवाह के उपलक्ष्य में आयोजित स्वागत समारोह (रिसेप्शन) में आपकी गरिमामयी उपस्थिति हेतु सादर आमंत्रित करते हैं",
            "invite-daughter-label": "सुपुत्री",
            "invite-bride-parents": "श्रीमती रमा एवं श्री मुकेश जी सोमानी",

            // Venue
            "venue-title": "आयोजन स्थल",
            "venue-subtitle": "जहाँ हमारे उत्सव साकार होंगे",
            "venue-name": "श्री गार्डन एंड रिसोर्ट्स",
            "venue-address": "आगरा &ndash; मुंबई रोड, गौशाला के पास,<br>पिपलधार, सेंधवा,<br>मध्य प्रदेश <span class=\"venue-pincode\">451666</span>",
            "venue-dates": "२४ जनवरी २०२७ &middot; शाम 6:00 बजे से",
            "venue-note": "स्वागत समारोह इसी स्थल पर आयोजित होगा",
            "venue-map-btn": "गूगल मैप्स पर देखें",

            // Family & Well-wishers
            "family-title": "हमारा परिवार",
            "family-subtitle": "वे हृदय जिनसे यह उत्सव पूर्ण होता है",
            "family-happiness-title": "हर्षोल्लास में सम्मिलित",
            "family-happiness-names": "पुष्पा लड्ढा<br>विनय लड्ढा<br>शोभा एवं सुभाष तोतला<br>मंदा एवं हेमंत भुतड़ा<br>नीलिमा एवं किरण काबरा",
            "family-delighted-title": "आनंदित",
            "family-delighted-names": "सुनील एवं उर्मिला बाहेती<br>सारस एवं संजना लड्ढा<br>अनुश्री एवं रौनक धूत<br>स्मृति एवं सुभाष परतानी<br>संज्योति एवं अजय चांडक<br>उज्ज्वला अनिल मूंदड़ा<br>अर्चना काबरा",
            "family-nanihal-title": "ननिहाल",
            "family-nanihal-names": "संतोष पन्नालालजी काबरा<br>मनीषा बंकटजी काबरा",
            "family-regards-title": "सादर सस्नेह",
            "family-regards-names": "शिवचंद्र जी लड्ढा<br>सत्यनारायण जी लड्ढा<br>दामोदर जी लड्ढा<br>गौरीनंदन जी लड्ढा<br><span class=\"family-names-all\">एवं समस्त लड्ढा परिवार</span>",

            "rsvp-title": "आशीर्वाद की कामना",
            "rsvp-subtitle": "अत्यंत हर्ष और भगवान शिव के आशीर्वाद के साथ, हमारे परिवारों के साथ मिलकर, हम आपको हमारे विवाह स्वागत समारोह में पधारकर हमारे जीवन के नए अध्याय की शुरुआत का उत्सव मनाने के लिए आमंत्रित करते हैं।"
        }
    };

    let currentLang = "en";
    let isPlaying = false;

    // ----------------------------------------------------
    // 1. LANGUAGE TRANSLATION LOGIC
    // ----------------------------------------------------
    const langBtnEn = document.getElementById("lang-en");
    const langBtnHi = document.getElementById("lang-hi");

    function getClockSVG(timeStr) {
        let hx = 12, hy = 7;
        let mx = 12, my = 5;
        
        switch (timeStr) {
            case "08:00":
                hx = 8.1; hy = 14.3;
                mx = 12; my = 5;
                break;
            case "09:00":
                hx = 7.5; hy = 12;
                mx = 12; my = 5;
                break;
            case "02:00":
                hx = 15.9; hy = 9.8;
                mx = 12; my = 5;
                break;
            case "12:00":
                hx = 12; hy = 7.5;
                mx = 12; my = 5;
                break;
            case "04:00":
                hx = 15.9; hy = 14.25;
                mx = 12; my = 5;
                break;
            case "06:00":
                hx = 12; hy = 16.5;
                mx = 12; my = 5;
                break;
            case "07:00":
                hx = 9.8; hy = 15.9;
                mx = 12; my = 5;
                break;
            case "07:30":
                hx = 8.8; hy = 15.2;
                mx = 12; my = 19;
                break;
            case "11:00":
                hx = 9.8; hy = 8.1;
                mx = 12; my = 5;
                break;
        }
        
        return `<svg class="custom-clock-icon" viewBox="0 0 24 24" width="18" height="18" style="vertical-align: middle; margin-right: 6px; color: var(--gold-dark); display: inline-block;"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8" fill="none"></circle><circle cx="12" cy="12" r="1.2" fill="currentColor"></circle><line x1="12" y1="12" x2="${hx}" y2="${hy}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></line><line x1="12" y1="12" x2="${mx}" y2="${my}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></line></svg>`;
    }

    function applyLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.getAttribute("data-key");
            if (translations[lang] && translations[lang][key]) {
                let html = translations[lang][key];
                
                // Replace 📅 with a custom calendar badge
                if (html.includes("📅")) {
                    const is24 = key.includes("24");
                    const day = lang === "hi" ? (is24 ? "२४" : "२३") : (is24 ? "24" : "23");
                    const month = lang === "hi" ? "जन" : "JAN";
                    html = html.replace("📅", `<span class="custom-cal-badge"><span class="cal-header">${month}</span><span class="cal-body">${day}</span></span>`);
                }
                
                // Replace ⏰ with a custom clock SVG based on the time
                if (html.includes("⏰")) {
                    let timeStr = "";
                    if (key.includes("haldi")) timeStr = "08:00";
                    else if (key.includes("ganesh") || key.includes("mayra")) timeStr = "09:00";
                    else if (key.includes("carnival")) timeStr = "02:00";
                    else if (key.includes("sajjangot")) timeStr = "12:00";
                    else if (key.includes("procession")) timeStr = "04:00";
                    else if (key.includes("reception")) timeStr = "06:00";
                    else if (key.includes("ring")) timeStr = "07:00";
                    else if (key.includes("sangeet")) timeStr = "07:30";
                    else if (key.includes("phere")) timeStr = "11:00";
                    
                    const clockSVG = getClockSVG(timeStr);
                    html = html.replace("⏰", clockSVG);
                }
                
                el.innerHTML = html;
            }
        });

        // Set HTML lang attribute
        document.documentElement.lang = lang;

        // Update document title
        if (translations[lang]["document-title"]) {
            document.title = translations[lang]["document-title"];
        }

        // Toggle active button style
        if (lang === "en") {
            if (langBtnEn) langBtnEn.classList.add("active");
            if (langBtnHi) langBtnHi.classList.remove("active");
        } else {
            if (langBtnHi) langBtnHi.classList.add("active");
            if (langBtnEn) langBtnEn.classList.remove("active");
        }
    }

    if (langBtnEn) {
        langBtnEn.addEventListener("click", () => applyLanguage("en"));
    }
    if (langBtnHi) {
        langBtnHi.addEventListener("click", () => applyLanguage("hi"));
    }

    // Apply language initially to swap static emojis in HTML with custom badges/SVGs
    applyLanguage(currentLang);

    // ----------------------------------------------------
    // 2. DYNAMIC FLOWER SHOWER SYSTEM
    // ----------------------------------------------------
    let flowerInterval = null;
    function startFlowerShower() {
        let container = document.querySelector(".flower-container");
        if (!container) {
            container = document.createElement("div");
            container.className = "flower-container";
            document.body.appendChild(container);
        }

        const petalTypes = ["petal-pink-light", "petal-pink-dark"];

        function createPetal() {
            const petal = document.createElement("div");
            petal.className = `flower-petal ${petalTypes[Math.floor(Math.random() * petalTypes.length)]}`;

            // Randomize size, rotation, delay and fallback path
            const size = Math.random() * 12 + 10; // 10px to 22px
            petal.style.width = `${size}px`;
            petal.style.height = `${size * 0.85}px`;
            petal.style.left = `${Math.random() * 100}vw`;

            const duration = Math.random() * 5 + 6; // 6s to 11s
            petal.style.animationDuration = `${duration}s`;

            const delay = Math.random() * 2;
            petal.style.animationDelay = `${delay}s`;

            container.appendChild(petal);

            // Clean up elements after animation finishes
            setTimeout(() => {
                petal.remove();
            }, (duration + delay) * 1000);
        }

        // Spawn initial set
        for (let i = 0; i < 8; i++) {
            createPetal();
        }
        // Continuous flow (slower interval for fewer petals)
        flowerInterval = setInterval(createPetal, 900);
    }

    // ----------------------------------------------------
    // 3. SPLASH / OPEN BUTTON MUSIC START LOGIC
    // ----------------------------------------------------
    const loader = document.querySelector(".loader");
    const openBtn = document.getElementById("open-invitation-btn");
    const bgMusic = document.getElementById("bg-music");
    const musicToggle = document.getElementById("music-toggle");

    if (openBtn) {
        openBtn.addEventListener("click", () => {
            // Play background music
            if (bgMusic) {
                bgMusic.play()
                    .then(() => {
                        isPlaying = true;
                        if (musicToggle) musicToggle.classList.add("playing");
                        console.log("Music playing successfully");
                    })
                    .catch(err => {
                        console.error("Music playback blocked or failed:", err);
                    });
            }

            // Start flower shower animation
            startFlowerShower();

            // Fade out loader/splash screen
            if (loader) {
                loader.style.opacity = "0";
                setTimeout(() => {
                    loader.style.display = "none";
                }, 1200);
            }
        });
    }

    // ----------------------------------------------------
    // 4. FLOATING MUSIC TOGGLE BUTTON WIDGET
    // ----------------------------------------------------
    if (musicToggle) {
        musicToggle.addEventListener("click", () => {
            if (isPlaying) {
                bgMusic.pause();
                musicToggle.classList.remove("playing");
                isPlaying = false;
            } else {
                bgMusic.play()
                    .then(() => {
                        musicToggle.classList.add("playing");
                        isPlaying = true;
                    })
                    .catch(err => {
                        console.error("Music play failed on click:", err);
                    });
            }
        });
    }

    // ----------------------------------------------------
    // 5. SCROLL REVEAL (Intersection Observer)
    // ----------------------------------------------------
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // ----------------------------------------------------
    // 6. PARALLAX EFFECT (Continuous shared background)
    // ----------------------------------------------------
    const sharedBg = document.querySelector(".divine-shared-bg");

    window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        if (sharedBg && window.innerWidth > 768) {
            sharedBg.style.transform = `translate3d(0, ${Math.round(scrolled * 0.15)}px, 0)`;
        } else if (sharedBg) {
            sharedBg.style.transform = "translate3d(0, 0, 0)";
        }
    });

    // ----------------------------------------------------
    // 7. RSVP FORM & BLESSINGS LOGIC (DEFENSIVE FALLBACK)
    // ----------------------------------------------------
    const rsvpForm = document.getElementById("rsvp-form");
    const blessingsWall = document.getElementById("blessings-wall");

    if (rsvpForm && blessingsWall) {
        const defaultBlessings = [
            {
                name: "Devendra & Sunita Somani",
                attendance: "attending",
                message: "Wishing you both a lifetime of love, laughter, and endless adventures! Looking forward to celebrating this beautiful union.",
                timestamp: Date.now() - 3600000 * 24
            },
            {
                name: "Aayush's Grandparents",
                attendance: "attending",
                message: "May Lord Shiva and Goddess Parvati shower Their divine blessings upon you today and always. Be happy, content and together forever.",
                timestamp: Date.now() - 3600000 * 12
            }
        ];

        function getBlessings() {
            const stored = localStorage.getItem("eternal_vows_blessings");
            if (stored) return JSON.parse(stored);
            localStorage.setItem("eternal_vows_blessings", JSON.stringify(defaultBlessings));
            return defaultBlessings;
        }

        function saveBlessing(name, attendance, message) {
            const blessings = getBlessings();
            blessings.unshift({ name, attendance, message, timestamp: Date.now() });
            localStorage.setItem("eternal_vows_blessings", JSON.stringify(blessings));
        }

        function renderBlessings() {
            const blessings = getBlessings();
            blessingsWall.innerHTML = blessings.map(b => {
                const statusClass = b.attendance === "attending" ? "status-attending" : "status-declined";
                const statusText = b.attendance === "attending" ? (currentLang === "hi" ? "सम्मिलित होंगे" : "Attending") : (currentLang === "hi" ? "असमर्थ" : "Declined");
                return `
                    <div class="blessing-item">
                        <div class="blessing-name">
                            <span>${escapeHTML(b.name)}</span>
                            <span class="blessing-status ${statusClass}">${statusText}</span>
                        </div>
                        <p class="blessing-text">"${escapeHTML(b.message)}"</p>
                    </div>
                `;
            }).join("");
        }

        function escapeHTML(str) {
            return str.replace(/[&<>'"]/g, tag => ({
                '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
            }[tag] || tag));
        }

        rsvpForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const nameInput = document.getElementById("guest-name");
            const attendanceInput = document.querySelector('input[name="attendance"]:checked');
            const messageInput = document.getElementById("guest-message");

            if (nameInput && attendanceInput && messageInput) {
                const name = nameInput.value.trim();
                const attendance = attendanceInput.value;
                const message = messageInput.value.trim();

                if (name && message) {
                    saveBlessing(name, attendance, message);
                    renderBlessings();
                    rsvpForm.reset();
                    alert(currentLang === "hi" ? `धन्यवाद, ${name}! आपकी शुभकामनाएं भेज दी गई हैं।` : `Thank you, ${name}! Your blessings have been posted.`);
                }
            }
        });

        renderBlessings();
    }
});