function tarea1() {
  setTimeout(() => {
    console.log("esta es la tarea 1 completada");
  }, 3000);
}

function tarea2() {
  setTimeout(() => {
    console.log("esta es la tarea 2 completada");
  }, 3000);
}

function tarea3() {
  setTimeout(() => {
    console.log("esta es la tarea 3 completada");
  }, 3000);
}

async function ejecutarTareas() {
  await tarea1();
  await tarea2();
  await tarea3();
  console.log("Tarea terminadas");
}

ejecutarTareas();
