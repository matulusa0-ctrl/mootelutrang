document.addEventListener("DOMContentLoaded", function() {
    
    // ข้อมูลบทสวด (ไม่ต้องใช้รูป)
    const mantras = [
        {
            title: "คาถาบูชาเจ้าแม่กวนอิม",
            desc: "สวดบูชาเพื่อขอพรด้านเมตตา หายป่วยไข้ (ศาลเจ้าท่ามกงเยี่ย / กิวอ่องเอี่ย)",
            chant: "นำโม ไต๋ซือ ไต๋ปุย กิวโคว่ กิวหลั่ง กวงไต๋เล่งก้ำ กวนซีอิมผู่สัก <br>(กราบ)<br> นำโมฮุก นำโมหวบ นำโมเจ็ง นำโมกิวโคว่ กิวหลั่ง กวงไต๋เล่งก้ำ กวนซีอิมผู่สัก <br>ทั่งจี้โต โอม เกียล้อฮวดโต เกียล้อฮวดโต <br>เกียออฮวดโต ล้อเกียฮวดโต ล้อเกียฮวดโต <br>ซาผ่อออ เทียงล้อซิ้ง ตี่ล้อซิ้ง นั้งลี่หลั่ง <br>หลั่งลี่ซิง เจ็กเฉียก ใจเอียง ห่วยอุ่ยติ๊ง <br>นำโมมหากวนซีอิมผู่สัก"
        },
        {
            title: "คาถาบูชาพระพิฆเนศ",
            desc: "สวดเพื่อความสำเร็จ ขจัดอุปสรรคทั้งปวง",
            chant: "โอม ศรี คเณศายะ นะมะฮา <br>(3 จบ)<br> ขอความสำเร็จในด้านต่างๆ ขอโชคลาภ <br>และขอให้การงานราบรื่น ปราศจากอุปสรรคทั้งปวง"
        },
        {
            title: "คาถาบูชาศาลหลักเมือง",
            desc: "เสริมความมั่นคงในหน้าที่การงาน บารมี (ศาลหลักเมืองตรัง)",
            chant: "ศรีโรเม เทพเทวานัง พระหลักเมืองเทวานัง <br>พระภูมิเทวานัง ทีปธูปจะบุปผัง สักการะวันทนัง <br>สูปพยัญชนะ สัมปันนัง สารีนัง <br>อุททะกัง วะรัง เตปิตุมเห <br>อานุรักษ์ขันตุ อาโรขเยนะ สุเขนะจะ"
        },
        {
            title: "คาถาบูชาหลวงพ่อวัน (วัดประสิทธิชัย)",
            desc: "เมตตามหานิยม แคล้วคลาดปลอดภัย",
            chant: "นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ (3 จบ) <br><br> พุทธัง อาราธนานัง <br>ธัมมัง อาราธนานัง <br>สังฆัง อาราธนานัง <br>ขอบารมีหลวงพ่อวัน มะนะโส <br>คุ้มครองรักษา ให้ข้าพเจ้าแคล้วคลาดปลอดภัย เจริญรุ่งเรือง"
        },
        {
            title: "บทแผ่เมตตา",
            desc: "สวดหลังทำบุญหรือไหว้พระ เพื่อความร่มเย็นเป็นสุข",
            chant: "สัพเพ สัตตา <br>สัตว์ทั้งหลายที่เป็นเพื่อนทุกข์ เกิดแก่เจ็บตายด้วยกันทั้งหมดทั้งสิ้น <br>อเวรา โหนตุ <br>จงเป็นสุขเป็นสุขเถิด อย่าได้มีเวรแก่กันและกันเลย <br>อัพยาปัชฌา โหนตุ <br>จงเป็นสุขเป็นสุขเถิด อย่าได้เบียดเบียนซึ่งกันและกันเลย <br>อนีฆา โหนตุ <br>จงเป็นสุขเป็นสุขเถิด อย่าได้มีความทุกข์กายทุกข์ใจเลย <br>สุขี อัตตานัง ปะริหะรันตุ <br>จงมีความสุขกาย สุขใจ รักษาตนให้พ้นจากทุกข์ภัยทั้งสิ้นเถิด"
        }
    ];

    const listEl = document.getElementById("mantraList");
    const displayTitle = document.getElementById("dTitle");
    const displayDesc = document.getElementById("dDesc");
    const displayChant = document.getElementById("dChant");
    const displayActions = document.getElementById("dActions");

    // Render List
    if(listEl) {
        mantras.forEach((m, index) => {
            const item = document.createElement("div");
            item.className = "mantra-item";
            item.innerHTML = `
                <div>
                    <h4 style="color:#fff; margin-bottom:5px;">${m.title}</h4>
                    <span style="font-size:0.8rem; color:#888;">${m.desc.substring(0, 30)}...</span>
                </div>
                <i class="fa-solid fa-chevron-right" style="color:var(--gold-dark);"></i>
            `;
            item.onclick = () => selectMantra(index, item);
            listEl.appendChild(item);
        });
    }

    // Function to show Mantra
    window.selectMantra = function(index, element) {
        // Remove active class from all
        document.querySelectorAll(".mantra-item").forEach(el => el.classList.remove("active"));
        // Add to clicked
        element.classList.add("active");

        const data = mantras[index];
        
        // Fade out effect
        displayChant.style.opacity = 0;
        
        setTimeout(() => {
            displayTitle.innerText = data.title;
            displayDesc.innerText = data.desc;
            displayChant.innerHTML = data.chant;
            
            displayChant.style.display = "block";
            displayActions.style.display = "block";
            
            // Fade in
            displayChant.style.transition = "opacity 0.5s";
            displayChant.style.opacity = 1;
        }, 200);
    };

    // Copy Function
    window.copyMantra = function() {
        const textToCopy = displayChant.innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            const btn = document.querySelector(".action-btn");
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-check"></i> คัดลอกแล้ว';
            setTimeout(() => {
                btn.innerHTML = originalHTML;
            }, 2000);
        });
    };
});