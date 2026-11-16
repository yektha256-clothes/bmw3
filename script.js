/* ===================================================
   THE MEMORY ODYSSEY: 7 ANIME CHAPTERS SCRIPT
   Horrible Scream Audio, Runaway No Button, Climax
   =================================================== */

// Global State
const STATE = {
    currentLevel: 1,
    soundEnabled: true,
    audioCtx: null
};

// Strict valid answers configuration (exact match required)
const ANSWERS = {
    1: ["7666"],
    2: ["kattankappi", "kattankaapi"],
    3: ["rambutan", "rambuttan", "rembutan", "rembuttan"],
    4: ["spanishdelight"],
    5: ["iritty", "iritti"]
};

// Answer normalization helper (removes spaces, symbols, lowercase)
function normalizeAnswer(str) {
    return (str || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Funny teasing lines when tapping the easter egg before solving
const TEASES = [
    "Potta, you think you can cheat by tapping here? Use your brain! 😂",
    "Don't rush, Pottadyyy! Think about that exact moment... 😉",
    "Aaha! Looking for secret clues? Nice try! 😜",
    "I know you remember this... don't act like you forgot! ❤️",
    "Our favorite place in the whole world... you definitely know this! 🌉"
];

// Runaway NO button funny phrases (User's authentic dialogues!)
const NO_PHRASES = [
    "nadakkoola mole",
    "ippo kittum kath ninno",
    "ayn vere aale nokk",
    "kollum njan",
    "adtha belliyaycha nokka",
    "nammaloda oole kali"
];

// Sound Synthesizer via Web Audio API (Funny & Romantic Mix)
class SoundEngine {
    constructor() {
        this.ctx = null;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
            STATE.audioCtx = this.ctx;
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    // Funny Cartoon Spring Boing (For dodging NO button & playful clicks)
    playCartoonBoing() {
        if (!STATE.soundEnabled) return;
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(750, now + 0.18);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.35);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.38);
    }

    // 1. Spooky Horror Shock (Funny & Spooky mix)
    playHorribleScream() {
        if (!STATE.soundEnabled) return;
        this.init();
        const now = this.ctx.currentTime;

        // Spooky screech
        const screechOsc = this.ctx.createOscillator();
        const screechGain = this.ctx.createGain();
        screechOsc.type = 'sawtooth';
        screechOsc.frequency.setValueAtTime(900, now);
        screechOsc.frequency.exponentialRampToValueAtTime(2200, now + 0.1);
        screechOsc.frequency.exponentialRampToValueAtTime(300, now + 0.8);

        screechGain.gain.setValueAtTime(0.25, now);
        screechGain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

        screechOsc.connect(screechGain);
        screechGain.connect(this.ctx.destination);
        screechOsc.start(now);
        screechOsc.stop(now + 0.85);

        // Funny dramatic cartoon spring & thud
        const thudOsc = this.ctx.createOscillator();
        const thudGain = this.ctx.createGain();
        thudOsc.type = 'triangle';
        thudOsc.frequency.setValueAtTime(160, now + 0.05);
        thudOsc.frequency.exponentialRampToValueAtTime(45, now + 0.7);
        thudGain.gain.setValueAtTime(0.3, now + 0.05);
        thudGain.gain.exponentialRampToValueAtTime(0.01, now + 0.75);

        thudOsc.connect(thudGain);
        thudGain.connect(this.ctx.destination);
        thudOsc.start(now + 0.05);
        thudOsc.stop(now + 0.75);
    }

    // 2. Cozy Romantic Chime (Level 2)
    playCozyChime() {
        if (!STATE.soundEnabled) return;
        this.init();
        const now = this.ctx.currentTime;
        [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(f, now + i * 0.1);
            gain.gain.setValueAtTime(0, now + i * 0.1);
            gain.gain.linearRampToValueAtTime(0.18, now + i * 0.1 + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.9);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + i * 0.1);
            osc.stop(now + i * 0.1 + 0.95);
        });
    }

    // 3. Road Trip Beep / Melody (Level 3)
    playTravelChime() {
        if (!STATE.soundEnabled) return;
        this.init();
        const now = this.ctx.currentTime;
        [440, 554.37, 659.25, 880].forEach((f, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(f, now + i * 0.08);
            gain.gain.setValueAtTime(0.15, now + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.6);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + i * 0.08);
            osc.stop(now + i * 0.08 + 0.65);
        });
    }

    // 4. Mountain Breeze Chime (Level 4)
    playMountainChime() {
        if (!STATE.soundEnabled) return;
        this.init();
        const now = this.ctx.currentTime;
        [587.33, 739.99, 880.00, 1174.66].forEach((f, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(f, now + i * 0.1);
            gain.gain.setValueAtTime(0.18, now + i * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 1.2);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + i * 0.1);
            osc.stop(now + i * 0.1 + 1.3);
        });
    }

    // 5. Iritty Bridge Fanfare (Level 5)
    playGrandFanfare() {
        if (!STATE.soundEnabled) return;
        this.init();
        const now = this.ctx.currentTime;
        const chords = [
            { f: [523.25, 659.25, 783.99], t: 0, d: 0.5 },
            { f: [587.33, 739.99, 880.00], t: 0.4, d: 0.5 },
            { f: [659.25, 830.61, 987.77, 1318.51], t: 0.8, d: 2.2 }
        ];

        chords.forEach(c => {
            c.f.forEach(freq => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now + c.t);
                gain.gain.setValueAtTime(0.15, now + c.t);
                gain.gain.exponentialRampToValueAtTime(0.001, now + c.t + c.d);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now + c.t);
                osc.stop(now + c.t + c.d);
            });
        });
    }

    // Romantic Proposal & Hug Melody (Level 6 & 7)
    playLoveMelody() {
        if (!STATE.soundEnabled) return;
        this.init();
        const now = this.ctx.currentTime;
        // Warm romantic chord sequence: C -> G -> Am -> F
        const notes = [
            { f: 523.25, t: 0 },
            { f: 659.25, t: 0.2 },
            { f: 783.99, t: 0.4 },
            { f: 1046.50, t: 0.6 },
            { f: 987.77, t: 1.0 },
            { f: 880.00, t: 1.4 },
            { f: 1046.50, t: 1.8 }
        ];

        notes.forEach(n => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(n.f, now + n.t);
            gain.gain.setValueAtTime(0, now + n.t);
            gain.gain.linearRampToValueAtTime(0.2, now + n.t + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, now + n.t + 1.2);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + n.t);
            osc.stop(now + n.t + 1.3);
        });
    }

    // Error Sound
    playErrorSound() {
        if (!STATE.soundEnabled) return;
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.linearRampToValueAtTime(80, now + 0.2);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
    }
}

const sounds = new SoundEngine();

// Level Switcher & Dynamic Theme Controller
function setLevel(lvl) {
    if (lvl < 1 || lvl > 7) return;
    STATE.currentLevel = lvl;
    localStorage.setItem('memory_hunt_level', lvl);

    // Update body theme class (Totally different visual ambiance for each level!)
    document.body.className = `theme-level-${lvl}`;

    // Update Progress Bar
    const progressFill = document.querySelector('.tracker-fill');
    const percent = ((lvl - 1) / 6) * 100;
    if (progressFill) progressFill.style.width = `${percent}%`;

    // Update Step Nodes
    document.querySelectorAll('.step-node').forEach((node, idx) => {
        const nodeLvl = idx + 1;
        node.classList.remove('active', 'done');
        if (nodeLvl === lvl) {
            node.classList.add('active');
        } else if (nodeLvl < lvl) {
            node.classList.add('done');
        }
    });

    // Show active level card
    document.querySelectorAll('.level-card').forEach(card => card.classList.remove('active'));
    const targetCard = document.getElementById(`level-${lvl}`);
    if (targetCard) {
        targetCard.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Auto focus input if present
        const input = targetCard.querySelector('.answer-input');
        if (input) setTimeout(() => input.focus(), 300);
    }
}

// Answer Validator (Strict exact checking)
function checkAnswer(lvl) {
    const input = document.getElementById(`input-${lvl}`);
    const errorEl = document.getElementById(`error-${lvl}`);
    const successBox = document.getElementById(`success-${lvl}`);
    const easterBox = document.getElementById(`easter-${lvl}`);
    const easterText = document.getElementById(`easter-text-${lvl}`);

    if (!input) return;
    const cleanUserVal = normalizeAnswer(input.value);

    // Empty check
    if (!cleanUserVal) {
        if (successBox) successBox.style.display = 'none';
        if (errorEl) {
            errorEl.innerText = "Empty aano? Type something, Pottadyyy! 😂";
            errorEl.style.display = 'block';
        }
        sounds.playErrorSound();
        input.style.borderColor = '#f87171';
        input.style.animation = 'errorShake 0.4s ease-in-out';
        setTimeout(() => { input.style.animation = ''; }, 450);
        return;
    }

    // Strict validation against exact answers list
    const validList = ANSWERS[lvl] || [];
    const isCorrect = validList.includes(cleanUserVal);

    if (isCorrect) {
        // Hide error
        if (errorEl) errorEl.style.display = 'none';

        // Play level-specific sounds
        if (lvl === 1) sounds.playHorribleScream();
        else if (lvl === 2) sounds.playCozyChime();
        else if (lvl === 3) sounds.playTravelChime();
        else if (lvl === 4) sounds.playMountainChime();
        else if (lvl === 5) {
            sounds.playGrandFanfare();
            triggerConfetti();
        }

        // Transform Hidden Easter Egg Box into emotional English quote
        if (easterBox && easterText) {
            easterBox.classList.add('unlocked');
            const unlockedQuotes = {
                1: "🔒 'Even in the deepest dark, you are the only one who holds the key to my heart.'",
                2: "☕ 'Steaming hot like my love for you... that cold night became my warmest memory.'",
                3: "🍒 'Every road trip, every little fight, every sweet fruit—I want it all with you, always.'",
                4: "🍦 'I would climb every mountain and face every storm just to see you smile like that.'",
                5: "🌉 'Our bridge, our memories, our forever home. You are my greatest adventure, Kunja.' ❤️"
            };
            easterText.innerText = unlockedQuotes[lvl];
        }

        // Show Success Box with Next Button
        if (successBox) {
            successBox.style.display = 'block';
            input.disabled = true;
            input.style.borderColor = '#10b981';
            input.style.background = 'rgba(16, 185, 129, 0.15)';
        }

    } else {
        // WRONG ANSWER: Ensure success box is ALWAYS completely hidden!
        if (successBox) successBox.style.display = 'none';
        if (easterBox) easterBox.classList.remove('unlocked');
        input.disabled = false;

        // Play wrong answer buzzer sound
        sounds.playErrorSound();

        if (errorEl) {
            const errorMessages = [
                "Ayyada! Thettaanallo potta... onnoodi chinthikku! 😉",
                "Oormikkan kazhiyunnille? Check the hint once more! 😂",
                "Brain rest edukkukayaano? Think deeper, Pottadyyy! 😜",
                "Wrong answer! Try again with full focus! ❤️"
            ];
            errorEl.innerText = errorMessages[Math.floor(Math.random() * errorMessages.length)];
            errorEl.style.display = 'block';
        }

        // Input shake animation
        input.style.borderColor = '#f87171';
        input.style.background = 'rgba(239, 68, 68, 0.12)';
        input.style.animation = 'errorShake 0.4s ease-in-out';
        setTimeout(() => {
            input.style.animation = '';
        }, 450);
    }
}

// Easter Egg Tap Handler (Teases before solving)
function tapEaster(lvl) {
    const easterBox = document.getElementById(`easter-${lvl}`);
    const easterText = document.getElementById(`easter-text-${lvl}`);

    if (easterBox && !easterBox.classList.contains('unlocked')) {
        sounds.playCozyChime();
        const tease = TEASES[(lvl - 1) % TEASES.length];
        easterText.innerText = tease;
        easterBox.style.transform = 'scale(1.03)';
        setTimeout(() => { easterBox.style.transform = 'scale(1)'; }, 200);
    }
}

// ===================================================
// LEVEL 6: RUNAWAY "NO" BUTTON & PROPOSAL LOGIC
// ===================================================
// Dedicated safe evasion slots around the container (Guaranteed NEVER to overlap YES)
const DODGE_SLOTS = [
    { top: '12px', left: '12px', right: 'auto', bottom: 'auto' },                     // Top Left
    { top: '12px', right: '12px', left: 'auto', bottom: 'auto' },                    // Top Right
    { bottom: '12px', left: '12px', right: 'auto', top: 'auto' },                   // Bottom Left
    { bottom: '12px', right: '12px', left: 'auto', top: 'auto' },                  // Bottom Right
    { top: '8px', left: '50%', transform: 'translateX(-50%)', right: 'auto', bottom: 'auto' },   // Directly Above YES
    { bottom: '8px', left: '50%', transform: 'translateX(-50%)', right: 'auto', top: 'auto' },// Directly Below YES
    { top: '50%', left: '10px', transform: 'translateY(-50%)', right: 'auto', bottom: 'auto' },  // Far Left
    { top: '50%', right: '10px', transform: 'translateY(-50%)', left: 'auto', bottom: 'auto' }  // Far Right
];

let noClickCount = 0;

function dodgeNo(e) {
    if (e && e.preventDefault && e.type === 'touchstart') {
        e.preventDefault();
    }
    sounds.playCartoonBoing();
    const noBtn = document.getElementById('runaway-no-btn');
    if (!noBtn) return;

    noClickCount++;

    // Pick safe evasion slot that never overlaps the YES button
    const slot = DODGE_SLOTS[(noClickCount - 1) % DODGE_SLOTS.length];

    noBtn.style.position = 'absolute';
    noBtn.style.left = slot.left;
    noBtn.style.right = slot.right;
    noBtn.style.top = slot.top;
    noBtn.style.bottom = slot.bottom;
    noBtn.style.transform = slot.transform || 'none';
    noBtn.style.zIndex = '9999';

    // Change text playfully with exact user phrases
    const phrase = NO_PHRASES[(noClickCount - 1) % NO_PHRASES.length];
    noBtn.innerText = phrase;
}

function acceptLove() {
    sounds.playLoveMelody();
    triggerConfetti();

    // Advance to Level 7 (Climax & Hug)
    setTimeout(() => {
        setLevel(7);
    }, 600);
}

// Complete Reset Function (Wipes cached inputs, errors, reveals, and returns fresh to Level 1)
function resetEverything() {
    localStorage.removeItem('memory_hunt_level');

    // Initial easter texts for levels 1 to 5
    const initialEasterTexts = {
        1: "Potta, don't run away seeing the ghosts! Type Shandhamma's secret code 😉",
        2: "Brrr... shivering in the cold! Do you remember what he held in his hand? ☕",
        3: "Red color, spiky on the outside, sweet on the inside... just like you, pottadyyy! 🍒",
        4: "I held it behind my back so carefully before it melted on that hill top! 🍦",
        5: "The place that holds our footsteps, our conversations, our forever home... 🌉"
    };

    // Reset all level inputs, states, errors, success reveals
    for (let lvl = 1; lvl <= 5; lvl++) {
        const input = document.getElementById(`input-${lvl}`);
        if (input) {
            input.value = '';
            input.disabled = false;
            input.style.borderColor = '';
            input.style.background = '';
        }

        const errorEl = document.getElementById(`error-${lvl}`);
        if (errorEl) {
            errorEl.style.display = 'none';
        }

        const successBox = document.getElementById(`success-${lvl}`);
        if (successBox) {
            successBox.style.display = 'none';
        }

        const easterBox = document.getElementById(`easter-${lvl}`);
        if (easterBox) {
            easterBox.classList.remove('unlocked');
        }

        const easterText = document.getElementById(`easter-text-${lvl}`);
        if (easterText && initialEasterTexts[lvl]) {
            easterText.innerText = initialEasterTexts[lvl];
        }
    }

    // Reset Level 6 NO Button
    const noBtn = document.getElementById('runaway-no-btn');
    if (noBtn) {
        noBtn.style.position = 'relative';
        noBtn.style.left = '';
        noBtn.style.right = '';
        noBtn.style.top = '';
        noBtn.style.bottom = '';
        noBtn.style.transform = '';
        noBtn.style.zIndex = '9999';
        noBtn.innerText = 'NO 💔';
    }
    noClickCount = 0;

    // Return to Level 1
    setLevel(1);
}

// Enter Key triggers answer checking
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const activeCard = document.querySelector('.level-card.active');
        if (activeCard) {
            const btn = activeCard.querySelector('.submit-btn');
            if (btn) btn.click();
        }
    }
});

// Sound Toggle
function toggleSound() {
    STATE.soundEnabled = !STATE.soundEnabled;
    const btn = document.getElementById('sound-toggle');
    if (btn) {
        btn.innerHTML = STATE.soundEnabled ? '🔔' : '🔕';
        btn.classList.toggle('active', STATE.soundEnabled);
    }
}

// Confetti Explosion
function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#ffd700', '#f43f5e', '#a855f7', '#38bdf8', '#ffffff', '#fbbf24'];
    const particles = Array.from({ length: 90 }, () => ({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.7) * 16,
        r: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        rotation: Math.random() * 360,
        spin: (Math.random() - 0.5) * 8
    }));

    function renderConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let activeCount = 0;

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.25;
            p.rotation += p.spin;
            p.alpha -= 0.007;

            if (p.alpha > 0) {
                activeCount++;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = Math.max(0, p.alpha);
                ctx.fillRect(-p.r, -p.r, p.r * 2, p.r * 1.5);
                ctx.restore();
            }
        });

        if (activeCount > 0) {
            requestAnimationFrame(renderConfetti);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    renderConfetti();
}

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Completely wipe all past answers, reveals, and success displays on load
    resetEverything();

    // Audio init on first interaction
    window.addEventListener('click', () => sounds.init(), { once: true });
    window.addEventListener('touchstart', () => sounds.init(), { once: true });
});
