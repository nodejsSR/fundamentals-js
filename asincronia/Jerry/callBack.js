function tarea1(callback) {
  setTimeout(() => {
    console.log("esta es la tarea 1 completada");
    callback();
  }, 3000);
}

function tarea2(callback) {
  setTimeout(() => {
    console.log("esta es la tarea 2 completada");
    callback();
  }, 3000);
}

function tarea3(callback) {
  setTimeout(() => {
    console.log("esta es la tarea 3 completada");
    callback();
  }, 3000);
}

tarea1(() => {
  tarea2(() => {
    tarea3(() => console.log("Tareas terminadas"));
  });
});
