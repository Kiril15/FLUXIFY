import { useEffect, useRef } from "react";

const NUM_STARS = 200;

type Star = {
    x: number;
    y: number;
    radius: number;
    opacity: number;
    speed: number;
};

const generateStars = (w: number, h: number): Star[] =>
    Array.from({ length: NUM_STARS }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.2 + 0.05,
    }));

const AnimatedStars = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<Star[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            starsRef.current = generateStars(canvas.width, canvas.height);
        };

        resize();

        let animationFrameId: number;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const star of starsRef.current) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius);
                gradient.addColorStop(0, "#8176AF");
                gradient.addColorStop(1, "#C0B7E8");
                ctx.fillStyle = gradient;
                ctx.globalAlpha = star.opacity;
                ctx.fill();
                ctx.globalAlpha = 1;
                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
            }  
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();
        window.addEventListener("resize", resize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
        />
    );
};

export default AnimatedStars;