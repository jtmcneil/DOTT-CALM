import animations from "./animations";

// const leftEye = document.getElementById("LeftEye");
// const rightEye = document.getElementById("RightEye");
// const mouth = document.getElementById("Mouth");

export const delay = async (seconds) => {
    await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

export const runAnimation = async (animation, leftEye, rightEye, mouth) => {
    function setMotion(motion) {
        leftEye.style.transition = `all ${motion.t}s ease`;
        rightEye.style.transition = `all ${motion.t}s ease`;
        mouth.style.transition = `all ${motion.t}s ease`;

        leftEye.className = motion.leftEye;
        rightEye.className = motion.rightEye;
        mouth.className = motion.className;
    }

    let t = 0;
    for (let motion of animation.motions) {
        setMotion(motion);
        await delay(motion.t + motion.d);
        // setInterval(() => {
        //     setMotion(motion);
        // }, t);
        // t += motion.t + motion.d;
    }
};

// export { runAnimation, animations };
