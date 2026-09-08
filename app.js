const API_URL = 'https://script.google.com/macros/s/AKfycbyR9Mv0WCXysPKgIIzB_STi5rQlGAz28rfSQ5k2-E8oDzrEFe4fMYYk-Z8tMJX5S2eb/exec'; // ← ลิงก์จากขั้นที่ 2
const API_KEY = 'MY_SECRET_KEY_2569';

async function callAPI(action, payload = {}) {

  // เปลี่ยนเป็นส่งแบบ Query String (GET) แทน POST

  const params = new URLSearchParams({ action, key: API_KEY, ...payload });

  const res = await fetch(`${API_URL}?${params.toString()}`);

  return res.json();

}
