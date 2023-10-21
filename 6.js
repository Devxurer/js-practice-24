console.log("Завдання: 6 ==============================");

// Створюємо функцію task6, яка використовує setImmediate та проміси.
function task6() {
  // Створюємо новий проміс.
  // Використовуємо функцію setImmediate, щоб виконати функцію асинхронно.
  // Генеруємо випадкове число від 0 до 1
  // Якщо випадкове число менше 0.5, резолвимо проміс з рядком Більше ніж 0.5.
  // Інакше відхиляемо проміс з рядком Менше ніж 0.5 .
  new Promise((resolve, reject) => {
    setImmediate(() => {
      let randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve("More then 0.5");
      } else {
        reject("Less then 0.5");
      }
    });
  })
    .then((result) => {
      console.log(`Проміс зарезолвився з значенням:`, result);
    })
    .catch((error) => {
      console.log(`Проміс відхилився з помилкою: ${error}`);
    })
    .finally(() => {
      console.log("Promise done");
    });
}

// Викликаємо функцію task6
task6();
