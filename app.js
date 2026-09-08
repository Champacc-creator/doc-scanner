const API_URL = 'https://script.google.com/macros/s/AKfycbyR9Mv0WCXysPKgIIzB_STi5rQlGAz28rfSQ5k2-E8oDzrEFe4fMYYk-Z8tMJX5S2eb/exec'; // ← ลิงก์จากขั้นที่ 2
const API_KEY = 'MY_SECRET_KEY_2569';

async function callAPI(action, payload = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    // ต้องใช้ text/plain เพื่อเลี่ยง CORS preflight ของ Apps Script
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ action, key: API_KEY, ...payload })
  });
  return res.json();
}
