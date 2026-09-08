const API_URL = 'https://script.google.com/macros/s/AKfycbyR9Mv0WCXysPKgIIzB_STi5rQlGAz28rfSQ5k2-E8oDzrEFe4fMYYk-Z8tMJX5S2eb/exec';
const API_KEY = 'MY_SECRET_KEY_2569'; // ต้องตรงกับที่ตั้งใน Apps Script

async function saveData() {
    const docCode = document.getElementById('docCode').value;
    const receivedBy = document.getElementById('receivedBy').value;
    const btn = document.getElementById('saveBtn');

    if (!docCode || !receivedBy) {
        alert("กรุณากรอกข้อมูลให้ครบครับ");
        return;
    }

    btn.disabled = true;
    btn.innerText = "กำลังบันทึก...";

    try {
        // ส่งแบบ GET (ผ่าน Query String)
        const params = new URLSearchParams({ 
            action: 'receive', 
            key: API_KEY, 
            docCode, 
            receivedBy 
        });

        const res = await fetch(`${API_URL}?${params.toString()}`);
        const data = await res.json();

        if (data.ok) {
            alert("บันทึกสำเร็จ!");
            document.getElementById('docCode').value = '';
            document.getElementById('receivedBy').value = '';
        } else {
            alert("เกิดข้อผิดพลาด: " + data.msg);
        }
    } catch (err) {
        alert("เชื่อมต่อเซิร์ฟเวอร์ไม่ได้");
    } finally {
        btn.disabled = false;
        btn.innerText = "บันทึกข้อมูล";
    }
}
