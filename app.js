const API_URL = 'https://script.google.com/macros/s/AKfycbyR9Mv0WCXysPKgIIzB_STi5rQlGAz28rfSQ5k2-E8oDzrEFe4fMYYk-Z8tMJX5S2eb/exec';
const API_KEY = 'MY_SECRET_KEY_2569'; // ต้องตรงกับที่ตั้งใน Apps Script

// ฟังก์ชันค้นหาข้อมูล (ถ้าต้องการ)

async function verifyDoc(docCode) {

    const res = await callAPI('verify', { docCode });

    return res;

}


async function saveData() {

    const docCode = document.getElementById('docCode').value;

    const receivedBy = document.getElementById('receivedBy').value;

    

    // 1. ตรวจสอบว่ารหัสนี้มีอยู่แล้วไหม?

    const check = await callAPI('verify', { docCode });

    if (check.found) {

        alert("คำเตือน: รหัสเอกสารนี้มีในระบบแล้ว!");

        return;

    }


    // 2. ถ้าไม่ซ้ำ ก็ทำการบันทึก

    const res = await callAPI('receive', { docCode, receivedBy });

    if (res.ok) {

        alert("บันทึกสำเร็จ!");

    } else {

        alert("ข้อผิดพลาด: " + res.msg);

    }

}
