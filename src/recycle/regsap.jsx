// utils/animations.js
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reusable GSAP animation
 * @param {string} target - Selector atau ref target animasi
 * @param {Object} options - Optional animasi tambahan
 */
export function reAnimateLogo({target, options = {}}) {
    gsap.from(target, {
        opacity: 0,
        x: 150,
        duration: 1.2,
        ease: "back.out(1.7)",
        onComplete: () => gsap.set(target, {clearProps: "transform"}),
        ...options,
    });
}

export function reAnimateStats({selector, options = {}}) {
    const logos = gsap.utils.toArray(selector);
    gsap.fromTo(
        logos,
        {
            y: 80,
            opacity: 0,
            scale: 0.8,
        },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.2,
        }
    );
}

export function reAnimateProjects({selector}) {
    const cards = gsap.utils.toArray(`${selector}`);

    cards.forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
            },
            opacity: 0,
            y: 60,
            duration: 0.5,
            ease: "back.in",
        });
    });
}

export function reAnimateSkills({selector}) {
    const items = gsap.utils.toArray(`${selector}`);

    gsap.fromTo(
        items,
        {
            y: -80,
            opacity: 0,
            scale: 0.9,
        },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "bounce.inOut",
            stagger: 0.15,
            scrollTrigger: {
                trigger: selector,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
            },
        }
    );
}
