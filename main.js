// 필요한 것들
// 1. 박스 2개
// 2. 드롭다운리스트 - 아이템 선택시 바뀜
// 3. 환율정보
// 4. 금액 입력시 실시간 환전 정보 띄움
// 5. 숫자를 한국어로 나타내줌


// 환율 정보
let currencyRatio = {
  USD: {
    KRW: 1335.74,
    USD: 1,
    VND: 23405.00,
    unit: "달러"
  },
  KRW: {
    KRW: 1,
    USD: 0.00075,
    VND: 17.52,
    unit: "원"
    
  },
  VND: {
    KRW: 0.057,
    USD: 0.000043,
    VND: 1,
    unit: "동"
  }
}

let fromCurrency = "USD";
let toCurrency = "KRW";

// from currency
document.querySelectorAll('#from-currency a').forEach(menu => menu.addEventListener("click", function(){
  // 1. 버튼을 가져오기
  // 2. 버튼 값 바꾸기
  document.getElementById('from-btn').textContent = this.textContent;
  // 3. 선택한 currency 값을 변수에 저장
  fromCurrency = this.textContent;

}))


// to currency
document.querySelectorAll('#to-currency a').forEach(menu => menu.addEventListener("click", function(){
  document.getElementById('to-btn').textContent = this.textContent;
  toCurrency = this.textContent;
}))


// input event
function convert(){
  // 1. 환전
  // 얼마 환전 ? 가지고 있는돈(from Currency) 
  // 돈 * 환율 = 환전금액
  let amount = document.querySelector('.from-input').value;
  document.querySelector('.input-value span').innerHTML = amount;

  let exchange = amount * currencyRatio[fromCurrency][toCurrency];
  console.log(exchange);

  document.querySelector('.to-input').value = exchange;
}