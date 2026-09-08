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

    

  if (p.action === 'receive') {
    // 1. ใช้ TextFinder ค้นหาแทนการดึงข้อมูลทั้งชีต (เร็วขึ้นมาก)
  const range = recordSheet.getRange("B:B");

  const values = range.getValues();

  

  // ใช้ loop แบบปกติซึ่งมักจะเร็วกว่า TextFinder ในบางกรณี

  for (let i = 0; i < values.length; i++) {

    if (values[i][0] == p.docCode) {

      return ContentService.createTextOutput(JSON.stringify({ok: false, msg: 'ซ้ำ'})).setMimeType(ContentService.MimeType.JSON);

    }

  }


  recordSheet.appendRow([new Date(), p.docCode, p.receivedBy]);

  return ContentService.createTextOutput(JSON.stringify({ok: true, msg: 'บันทึกสำเร็จ'})).setMimeType(ContentService.MimeType.JSON);

}
