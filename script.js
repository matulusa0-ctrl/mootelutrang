// Init AOS
AOS.init({ duration: 1000, once: true });

// Navbar Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if(nav) {
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    }
});

// Mootelu Data
const places = [
    { 
        name: "ศาลเจ้าท่ามกงเยี่ย", 
        img: "image/mokongyeas.jpg", 
        tag: "HEALING & FAMILY", 
        time: "06:00 - 18:00 น.",
        loc: "ถ.เพลินพิทักษ์ ต.ทับเที่ยง",
        desc: "ศูนย์รวมจิตใจชาวตรัง โดดเด่นเรื่องการรักษาโรคภัยไข้เจ็บและการขอบุตร ผู้คนนิยมพาบุตรหลานมาฝากตัวเป็นลูกบุญธรรมเพื่อความร่มเย็นเป็นสุข เชื่อกันว่าท่านมีความเมตตาสูงมาก ใครเจ็บไข้ได้ป่วยมาขอพรก็มักจะหายวันหายคืน เป็นที่พึ่งทางใจยามยากลำบาก",
        offerings: "ส้มมงคล 4 ผล, น้ำชา, ขนมจันอับ",
        tip: "หากมีบุตรยาก ให้ขอลูกบุญธรรม แล้วนำไข่ต้มย้อมสีแดงมาถวาย"
    },
    { 
        name: "ศาลเจ้ากิวอ่องเอี่ย", 
        img: "image/kiwongee.jpg", 
        tag: "PURIFICATION", 
        time: "07:00 - 17:30 น.",
        loc: "ถ.ท่ากลาง ต.ทับเที่ยง",
        desc: "ต้นกำเนิดประเพณีถือศีลกินเจอันยิ่งใหญ่ ศักดิ์สิทธิ์ในการปัดเป่าสิ่งชั่วร้าย เสริมชะตาชีวิตให้พบเจอแต่ความสว่างไสว ผู้ที่ดวงตกหรือเจออุปสรรคในชีวิตมักจะมาขอพรที่นี่เพื่อเริ่มต้นชีวิตใหม่ที่สดใสกว่าเดิม",
        offerings: "ผลไม้ 5 อย่าง, ธูปเทียนทอง",
        tip: "ควรชำระร่างกายให้สะอาดและงดเนื้อสัตว์ก่อนเข้ากราบไหว้เพื่อความบริสุทธิ์"
    },
    { 
        name: "ศาลหลักเมืองตรัง", 
        img: "image/themaincourt.jpg", 
        tag: "STABILITY", 
        time: "ตลอด 24 ชั่วโมง",
        loc: "ต.ควนธานี อ.กันตัง",
        desc: "ตั้งอยู่ที่ควนธานี เป็นหลักชัยของเมือง เหมาะสำหรับผู้ที่ต้องการความมั่นคงในหน้าที่การงาน และบารมีในการปกครองคน ข้าราชการหรือผู้บริหารมักจะมากราบไหว้เพื่อความเป็นสิริมงคลในการทำงานให้ราบรื่น ไร้อุปสรรค",
        offerings: "พวงมาลัยดาวเรือง, ผ้าแพร 3 สี",
        tip: "ผูกผ้าแพร 3 สีที่เสาหลักเมือง แล้วอธิษฐานขอความมั่นคงหนักแน่น"
    },
    { 
        name: "ศาลเจ้าเปากง", 
        img: "image/baokongshrine.jpg", 
        tag: "JUSTICE", 
        time: "08:00 - 17:00 น.",
        loc: "ต.ทับเที่ยง อ.เมือง",
        desc: "เทพเจ้าแห่งความซื่อสัตย์ยุติธรรม ขอพรให้ชนะคดีความ ขจัดคนพาลและศัตรูหมู่มารออกจากชีวิต ใครที่ถูกใส่ร้ายป้ายสีหรือโดนกลั่นแกล้ง มาขอพรที่นี่จะช่วยให้ความจริงปรากฏและผ่านพ้นวิกฤตไปได้ด้วยดี",
        offerings: "น้ำชา, ผลไม้สีดำ (เช่น องุ่นดำ)",
        tip: "เขียนชื่อศัตรูหรืออุปสรรคลงในกระดาษแล้วอธิษฐานขอให้ท่านเปาบุ้นจิ้นช่วยขจัดปัดเป่า"
    },
    { 
        name: "วิหารคริสต์ตรัง", 
        img: "image/church.jpg", 
        tag: "LOVE & PEACE", 
        time: "09:00 - 16:00 น.",
        loc: "ถ.ห้วยยอด ต.ทับเที่ยง",
        desc: "สถาปัตยกรรมสีเหลืองนวลอันงดงาม ให้บรรยากาศสงบสุข เหมาะแก่การขอพรเรื่องความรักที่มั่นคงและครอบครัวที่อบอุ่น คู่รักมักมาถ่ายรูปและขอพรให้ความรักยืนยาวปราศจากอุปสรรค เป็นสถานที่ที่เปี่ยมไปด้วยพลังแห่งความรักและความหวัง",
        offerings: "ดอกกุหลาบขาว, เทียนหอม",
        tip: "อธิษฐานขอพรเงียบๆ ด้วยใจที่สงบ และระลึกถึงความรักที่บริสุทธิ์"
    },
    { 
        name: "วัดกะพังสุรินทร์", 
        img: "image/kaphangsurin.jpg", 
        tag: "PROSPERITY", 
        time: "05:00 - 19:00 น.",
        loc: "ถ.เวียนกะพัง ต.ทับเที่ยง",
        desc: "พระอารามหลวงคู่เมืองตรัง สถาปัตยกรรมงดงาม เหมาะแก่การทำบุญใหญ่เพื่อเสริมบารมีและโชคลาภวาสนา ภายในมีความร่มรื่น สงบ เหมาะแก่การปฏิบัติธรรมและนั่งสมาธิเพื่อเจริญสติ เพื่อดึงดูดสิ่งดีๆ เข้ามาในชีวิต",
        offerings: "สังฆทาน, ดอกบัว",
        tip: "เดินเวียนเทียนรอบอุโบสถ 3 รอบ พร้อมสวดมนต์บทอิติปิโสฯ"
    },
    { 
        name: "ศาลพระพิฆเนศ", 
        img: "image/ganesha.jpg", 
        tag: "SUCCESS", 
        time: "08:00 - 18:00 น.",
        loc: "ต.ทับเที่ยง อ.เมือง",
        desc: "เทพเจ้าแห่งปัญญาและศิลปวิทยาการ ผู้ขจัดอุปสรรคทั้งปวง เหมาะสำหรับคนทำงาน ศิลปิน และนักเรียนนักศึกษาที่ต้องการความสำเร็จในการสอบหรือการสร้างสรรค์ผลงานใหม่ๆ ท่านจะประทานปัญญาญาณให้ลุล่วง",
        offerings: "ขนมลาดู, นมสด, กล้วยน้ำว้า",
        tip: "กระซิบขอพรที่หูหนูบริวาร (มุสิกะ) แล้วปิดหูอีกข้างไว้ เพื่อฝากคำขอไปถึงพระพิฆเนศ"
    },
    { 
        name: "เจ้าแม่กวนอิม", 
        img: "image/guanyin.jpg", 
        tag: "MERCY", 
        time: "06:00 - 18:00 น.",
        loc: "เขาหนองยวน ต.ทับเที่ยง",
        desc: "พระโพธิสัตว์กวนอิมบนยอดเขาหนองยวน ประทานพรเรื่องความเมตตา การค้าขายคล่องตัว และความร่มเย็นเป็นสุข สามารถมองเห็นวิวเมืองตรังได้จากมุมสูง เป็นจุดที่ได้รับพลังจากธรรมชาติอย่างเต็มเปี่ยม",
        offerings: "ดอกบัวสีขาว, น้ำสะอาด, สร้อยมุกเทียม",
        tip: "งดทานเนื้อวัวในวันที่ไปไหว้ และสวดคาถาบูชาเจ้าแม่กวนอิม 9 จบ"
    },
    { 
        name: "วัดสาริการาม", 
        img: "image/sarikaram.jpg", 
        tag: "PROTECTION", 
        time: "07:00 - 17:00 น.",
        loc: "ต.โคกหล่อ อ.เมือง",
        desc: "สถานที่ศักดิ์สิทธิ์สำหรับการแก้ชง สะเดาะเคราะห์ ต่อชะตา พลิกจากร้ายให้กลายเป็นดี เชื่อกันว่าใครที่ปีชงหรือดวงตก หากมาทำบุญที่นี่จะช่วยผ่อนหนักให้เป็นเบา และเสริมดวงชะตาให้แข็งแกร่งขึ้น",
        offerings: "ชุดไหว้แก้ชง, น้ำมันเติมตะเกียง",
        tip: "ทำบุญโลงศพหรือเติมน้ำมันตะเกียง เพื่อต่อชะตาแสงสว่างแห่งชีวิต"
    }
];

// Render Cards
const grid = document.getElementById("cardGrid");
if (grid) {
    places.forEach((p, i) => {
        const cardHTML = `
            <div class="card-wrapper" data-aos="fade-up" data-aos-delay="${i*50}">
                <div class="card" onclick="openModal(${i})">
                    <div class="card-img-box">
                        <img src="${p.img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1599707367072-cd6ad6cb3d2e?q=80&w=2070&auto=format&fit=crop'">
                    </div>
                    <div class="card-body">
                        <span class="card-tag">${p.tag}</span>
                        <h3>${p.name}</h3>
                        <p>${p.desc}</p>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });

    // 3D Tilt Effect
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Modal
const modal = document.getElementById("modal");
function openModal(index) {
    if (!modal) return;
    const p = places[index];
    const imgEl = document.getElementById("mImg");
    imgEl.src = p.img;
    imgEl.onerror = function() { this.src = 'https://images.unsplash.com/photo-1599707367072-cd6ad6cb3d2e?q=80&w=2070&auto=format&fit=crop'; };
    
    document.getElementById("mTitle").innerText = p.name;
    document.getElementById("mTag").innerText = p.tag;
    document.getElementById("mDesc").innerText = p.desc;
    document.getElementById("mTime").innerText = p.time;
    document.getElementById("mLoc").innerText = p.loc;
    document.getElementById("mOfferings").innerText = p.offerings;
    document.getElementById("mTip").innerText = p.tip;
    
    modal.style.display = "flex";
    setTimeout(() => { modal.classList.add("show"); }, 10);
    document.body.style.overflow = "hidden";
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove("show");
    setTimeout(() => { modal.style.display = "none"; }, 400);
    document.body.style.overflow = "auto";
}

window.onclick = (e) => { if (e.target == modal) closeModal(); }

// Lucky Number
function randomLuckyNumber() {
    const el = document.getElementById("luckyResult");
    if (!el) return;
    el.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="font-size:2rem; color:var(--gold-dark);"></i>';
    
    setTimeout(() => {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        let i = 0;
        const interval = setInterval(() => {
            el.innerText = Math.floor(Math.random() * 99);
            i++;
            if (i > 15) {
                clearInterval(interval);
                el.innerHTML = `${num1}${num2}`;
                el.style.color = "#FFE5B4";
            }
        }, 50);
    }, 500);
}

// Particle Canvas
const canvas = document.getElementById("sacred-canvas");
if (canvas) {
    const ctx = canvas.getContext("2d");
    let particles = [];
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();
    
    class Particle {
        constructor() { this.reset(true); }
        reset(initial = false) {
            this.x = Math.random() * canvas.width;
            this.y = initial ? Math.random() * canvas.height : canvas.height + 50;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = (Math.random() * -1) - 0.2;
            this.size = Math.random() * 2 + 0.5;
            this.opacity = Math.random() * 0.5;
            this.fadeRate = Math.random() * 0.002 + 0.001;
        }
        update() {
            this.x += this.vx; this.y += this.vy; this.opacity -= this.fadeRate;
            if (this.opacity <= 0 || this.y < -50) this.reset();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
            ctx.shadowBlur = 5; ctx.shadowColor = "#D4AF37";
            ctx.fill(); ctx.shadowBlur = 0;
        }
    }
    for (let i = 0; i < 100; i++) particles.push(new Particle());
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    animate();
}