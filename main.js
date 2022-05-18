// road
const canvas = document.getElementById("myCanvas");
canvas.width = 200;

const ctx = canvas.getContext("2d");    // context
const car = new Car(100, 100, 30, 50);  // car
car.draw(ctx);

animate();

function animate() {
  car.update();

  canvas.height = window.innerHeight;
  car.draw(ctx);
  requestAnimationFrame(animate);
}