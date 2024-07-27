<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const canvasRef = ref(null);
const passSign = ref(false);

let numStars = 450;
let focalLength;
let centerX, centerY;
let stars = [],
	star;
const speed = 3; // 速度調整
const bgColor = "rgba(25, 35, 45, 1)";

const createStarsPosition = () => {
	const canvas = canvasRef.value;
	if (!canvas) return;

	centerX = canvas.width / 2;
	centerY = canvas.height / 2;

	stars = [];
	for (let i = 0; i < numStars; i++) {
		star = {
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			z: Math.random() * canvas.width * 2,
			o: Math.random() * 0.99 + 0.01,
		};
		stars.push(star);
	}
};

const drawStars = () => {
	const canvas = canvasRef.value;
	if (!canvas) return;

	const ctx = canvas.getContext("2d");
	if (!ctx) return;

	let pixelX, pixelY, pixelRadius;

	ctx.fillStyle = bgColor;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < numStars; i++) {
		star = stars[i];

		pixelX = (star.x - centerX) * (focalLength / star.z);
		pixelX += centerX;
		pixelY = (star.y - centerY) * (focalLength / star.z);
		pixelY += centerY;
		pixelRadius = Math.min(0.5 * (focalLength / star.z), 3); // 限制星星最大大小
		ctx.beginPath();
		ctx.arc(pixelX, pixelY, pixelRadius, 0, 2 * Math.PI);
		ctx.fillStyle = `rgba(255, 255, 255, ${star.o})`;
		ctx.fill();
	}
};

const animateStars = () => {
	for (let i = 0; i < numStars; i++) {
		star = stars[i];
		star.z -= speed;

		if (star.z <= 0) {
			star.z = canvasRef.value.width * 2;
		}
	}
};

const executeFrame = () => {
	drawStars();
	animateStars();
	requestAnimationFrame(executeFrame);
};

const adjustStarCountForScreenSize = () => {
	if (window.innerWidth <= 768) {
		// 判斷螢幕尺寸
		numStars = 150; // 手機螢幕時減少星星數量
	} else {
		numStars = 450; // 桌面螢幕時使用原來數量
	}
};

const handleResize = () => {
	adjustStarCountForScreenSize(); // 調整星星數量
	const canvas = canvasRef.value;
	if (canvas) {
		passSign.value = true;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		focalLength = canvas.width * 2;
		createStarsPosition();
	} else {
		passSign.value = false;
	}
};

onMounted(() => {
	handleResize(); // 初始時調整星星數量和畫布尺寸
	if (passSign.value) {
		executeFrame();
	}
	window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
	window.removeEventListener("resize", handleResize);
});
</script>

<template>
	<canvas ref="canvasRef" class="fixed top-0 left-0 w-full h-full z-0"></canvas>
</template>

<style scoped>
canvas {
	display: block;
}
</style>
