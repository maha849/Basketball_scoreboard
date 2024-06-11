let homeCnt = 0;
let guestCnt = 0;
let homeCount = document.getElementById("home-count");
let guestCount = document.getElementById("guest-count");

function homeCnt1() {
  homeCnt += 1;
  homeCount.textContent = homeCnt;
}

function homeCnt2() {
  homeCnt += 2;
  homeCount.textContent = homeCnt;
}

function homeCnt3() {
  homeCnt += 3;
  homeCount.textContent = homeCnt;
}

function gstCnt1() {
  guestCnt += 1;
  guestCount.textContent = guestCnt;
}

function gstCnt2() {
  guestCnt += 2;
  guestCount.textContent = guestCnt;
}

function gstCnt3() {
  guestCnt += 3;
  guestCount.textContent = guestCnt;
}
