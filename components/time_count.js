// D-Day calculation func.
function calculateDDay(eventDate) {
  const now = new Date();
  const event = new Date(eventDate);
  const diff = event - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days;
}

// DOM이 준비된 후 실행
document.addEventListener("DOMContentLoaded", function() {
  // fade-in 처리: .fade-in 클래스 요소에 IntersectionObserver 적용
  const fadeElements = document.querySelectorAll('.fade-in');
  const options = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  fadeElements.forEach(el => {
    observer.observe(el);
  });

  // D-Day 기능: 이벤트 날짜를 설정하여 d-day 요소에 남은 일수 표시
  const eventDate = "2025-10-18T11:00:00"; // ISO 날짜 형식
  const daysLeft = calculateDDay(eventDate);
  const dDayElement = document.getElementById("d-day");
  if (dDayElement) {
    dDayElement.textContent = "D-Day: " + daysLeft + "일 남았습니다.";
  }
});
