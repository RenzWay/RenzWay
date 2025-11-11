import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect} from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Tester() {
    useEffect(() => {
        gsap.utils.toArray(".card").forEach((card) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 100%",
                    toggleActions: "play reverse play reverse",
                    // scrub: true
                },
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "back.inOut"
            })
        })
    }, []);
    // useGSAP(() => {
    //     gsap.utils.toArray(".card").forEach((card) => {
    //         gsap.from(card, {
    //             scrollTrigger: {
    //                 trigger: card,
    //                 start: "top 90%", // animasi mulai ketika card mendekati viewport
    //                 toggleActions: "play reverse play reverse", // hanya play sekali
    //             },
    //             y: 80,
    //             opacity: 0,
    //             duration: 0.8,
    //             ease: "power3.out",
    //         });
    //     });
    // });

    return (
        <main className="min-h-screen bg-gray-100 p-8 space-y-6">
            <header className="sticky top-0 bg-white shadow-sm p-4 z-10">
                <h1 className="text-2xl font-bold text-gray-800">Scroll Animation Test</h1>
            </header>

            <div className="grid p-4 gap-6">
                {Array.from({length: 20}, (_, i) => (
                    <div
                        key={i}
                        className="card bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                    >
                        <h3 className="font-semibold">Card {i + 1}</h3>
                        <p className="text-sm text-gray-500 mt-2">
                            This card animates when scrolled into view.
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}
