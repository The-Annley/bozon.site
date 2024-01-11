const scrollButton = document.getElementById("scrollButton");
const targetSection = document.getElementById("targetSection");

scrollButton.addEventListener("buy", () => {
  console.log("1");
  // Определяем позицию раздела относительно верха документа
  const targetPosition = targetSection.offsetTop;

  // Выполняем плавную прокрутку до позиции раздела
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth", // Добавляем плавную анимацию
  });
});
