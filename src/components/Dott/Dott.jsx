import { useEffect, useRef, useState } from "react";
import "./Dott.css";
import { runAnimation } from "./animate";
import animations from "./animations";

const ANIMATION_DELAY_MIN = 8;
const ANIMATION_DELAY_MAX = 12;

export default function Dott({ audioEnabled = false }) {
    const [motion, setMotion] = useState({ leftEye: "", rightEye: "", t: 1 });
    const initialized = useRef(false);

    function timeout(delay) {
        return new Promise((res) => setTimeout(res, delay));
    }

    // const runAnimation = () => {};

    useEffect(() => {
        const animateDott = async () => {
            const defaultMotion = { leftEye: "", rightEye: "", t: 1 };
            initialized.current = true;

            const span = ANIMATION_DELAY_MAX - ANIMATION_DELAY_MIN;
            const delay =
                Math.floor(Math.random() * (span + 1)) + ANIMATION_DELAY_MIN;
            const randomIndex = Math.floor(Math.random() * animations.length);
            const animation = animations[randomIndex];
            console.log(animation);

            await timeout(delay * 1000);
            for (let motion of animation.motions) {
                setMotion(motion);
                await timeout((motion.t + motion.d) * 1000);
            }
            setMotion(defaultMotion);
            animateDott();
        };

        if (!initialized.current) {
            animateDott();
        }
    }, []);

    return (
        <div id="Dott">
            <div id="Face" className={motion.face || ""}>
                <div id="FaceTop" className="faceHalf">
                    <div id="Eyes" className="faceHalf">
                        <div
                            id="LeftEye"
                            className={`eye ${motion.leftEye} `}
                            style={{ transition: `all ${motion.t}s ease` }}
                        ></div>
                        <div
                            id="RightEye"
                            className={`eye ${motion.rightEye}`}
                            style={{ transition: `all ${motion.t}s ease` }}
                        ></div>
                    </div>
                </div>
                <div id="FaceBottom" className="faceHalf">
                    <div
                        id="Mouth"
                        className={`${motion.mouth}`}
                        style={{ transition: `all ${motion.t}s ease` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
