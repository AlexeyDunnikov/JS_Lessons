function fib(num) {
  return num <= 1 ? num : fib(num - 1) + fib(num - 2);
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;

    script.onload = resolve(script);
    script.onerror = reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.body.append(script);
  });
}

let promise = loadScript("js/another.js");

promise.then(
  (script) => alert(`${script.src} загружен`),
  (error) => alert(`Ошибка: ${error.message}`)
);

promise.then((script) => {
  alert(fib(10));
});
