import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000); // Fondo negro
document.body.appendChild(renderer.domElement);

// Crear geometría base para los cubos
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Materiales con diferentes colores
const material1 = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Verde
const material2 = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Rojo
const material3 = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Azul

// Crear los tres cubos
const cube1 = new THREE.Mesh(geometry, material1);
const cube2 = new THREE.Mesh(geometry, material2);
const cube3 = new THREE.Mesh(geometry, material3);

// Posicionar los cubos cerca del centro
cube1.position.x = -2;  // Izquierda
cube2.position.x = 0;   // Centro
cube3.position.x = 2;   // Derecha

// Agregar los cubos a la escena
scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

// Luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Luz ambiental (para suavizar sombras)
const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
scene.add(ambientLight);

// Posicionar la cámara
camera.position.z = 5;

// Función de animación
function animate() {
    // Rotaciones diferentes para cada cubo
    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.02;

    cube2.rotation.x += 0.05;
    cube2.rotation.y += 0.015;

    cube3.rotation.x += 0.02;
    cube3.rotation.y += 0.055;

    renderer.render(scene, camera);
}

// 🔹 Iniciar animación correctamente
renderer.setAnimationLoop(animate);
