function tarea1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("esta es la tarea 1 completada"), 1000);
  });
}

function tarea2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("esta es la tarea 2 completada"), 1000);
  });
}

function tarea3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("esta es la tarea 3 completada"), 1000);
  });
}

tarea1()
  .then((resultado) => {
    console.log(resultado);
    return tarea2();
  })
  .then((result) => {
    console.log(result);
    return tarea3();
  })
  .then((result) => console.log(result))
  .catch((error) => console.error(`error:  ${error}`));
