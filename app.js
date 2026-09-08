const API_URL = 'https://script.google.com/macros/s/AKfycbyR9Mv0WCXysPKgIIzB_STi5rQlGAz28rfSQ5k2-E8oDzrEFe4fMYYk-Z8tMJX5S2eb/exec';
const API_KEY = 'MY_SECRET_KEY_2569'; // ต้องตรงกับที่ตั้งใน Apps Script

// ฟังก์ชันนี้ต้องมีเพื่อให้ saveData เรียกใช้งานได้ครับ
async function callAPI(action, payload = {}) {
    const API_URL = 'https://script.google.com/macros/s/AKfycbyR9Mv0WCXysPKgIIzB_STi5rQlGAz28rfSQ5k2-E8oDzrEFe4fMYYk-Z8tMJX5S2eb/exec';
    const API_KEY = 'MY_SECRET_KEY_2569';
    
    const params = new URLSearchParams({ action, key: API_KEY, ...payload });
    const res = await fetch(`${API_URL}?${params.toString()}`);
    return await res.json();
}

// แล้วค่อยต่อด้วยฟังก์ชัน saveData เดิมของคุณ
async function saveData() {
    const docCode = document.getElementById('Database').value;
    const receivedBy = document.getElementById('Record').value;
    
    // ตรงนี้คือจุดที่ทำให้เกิด Error เพราะเรียกใช้ callAPI
    const check = await callAPI('verify', { docCode }); 
    // ... โค้ดส่วนที่เหลือของคุณ
}
// ฟังก์ชันค้นหาข้อมูล (ถ้าต้องการ)

async function verifyDoc(docCode) {

    const res = await callAPI('verify', { docCode });

    return res;

}


async function saveData() {

    const docCode = document.getElementById('docCode').value;

    const receivedBy = document.getElementById('receivedBy').value;

    const btn = document.getElementById('saveBtn'); // ดึงตัวปุ่มมา


    if (!docCode || !receivedBy) {

        alert("กรุณากรอกข้อมูลให้ครบครับ");

        return;

    }


    // --- ส่วนที่เพิ่มเข้ามา: แสดงสถานะกำลังบันทึก ---

    btn.disabled = true; // ปิดปุ่มไม่ให้กดซ้ำ

    btn.innerText = "กำลังบันทึก..."; // เปลี่ยนข้อความ

    // ------------------------------------------


    try {

        const res = await callAPI('receive', { docCode, receivedBy });


        if (res.ok) {

            alert("บันทึกสำเร็จ!");

            document.getElementById('docCode').value = ''; // ล้างค่า

            document.getElementById('receivedBy').value = '';

        } else {

            alert("เกิดข้อผิดพลาด: " + res.msg);

        }

    } catch (err) {

        alert("เชื่อมต่อเซิร์ฟเวอร์ไม่ได้");

    } finally {

        // --- ส่วนที่เพิ่มเข้ามา: คืนค่าปุ่มให้กลับมาเหมือนเดิม ---

        btn.disabled = false; 

        btn.innerText = "บันทึกข้อมูล"; 

        // ------------------------------------------------

    }

}
