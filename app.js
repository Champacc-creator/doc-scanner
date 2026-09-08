const API_URL = 'https://script.google.com/macros/s/AKfycbyR9Mv0WCXysPKgIIzB_STi5rQlGAz28rfSQ5k2-E8oDzrEFe4fMYYk-Z8tMJX5S2eb/exec';

const API_KEY = 'MY_SECRET_KEY_2569'; // ตรวจสอบให้ตรงกับโค้ดใน Apps Script


async function callAPI(action, payload = {}) {

  // ใช้ GET เพื่อเลี่ยงปัญหา CORS

  const params = new URLSearchParams({ action, key: API_KEY, ...payload });

  const res = await fetch(API_URL + '?' + params.toString());

  

  if (!res.ok) throw new Error('HTTP Error: ' + res.status);

  return res.json();

}
