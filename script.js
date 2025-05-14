// فتح وإغلاق القائمة الجانبية
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.querySelector(".content").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".content").style.marginLeft = "0";
}

document.getElementById("menu-btn").addEventListener("click", openNav);
document.getElementById("close-btn").addEventListener("click", closeNav);

// التايمر (عدد الأيام المتبقية)
window.onload = function() {
  const timerEl = document.getElementById("timer");
  if (timerEl) {
    const today = new Date();
    const examDate = new Date("2025-06-01"); // التاريخ المحدد
    const diffTime = examDate - today; 
    const daysDiff = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    if (daysDiff >= 0) {
      timerEl.textContent = daysDiff + " يومًا على امتحانات الثانوية العامة 2025";
    } else {
      timerEl.textContent = "انتهت امتحانات الثانوية العامة 2025";
    }
  }
};
