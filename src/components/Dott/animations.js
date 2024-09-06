const animations = [
    {
        name: "lookAround1",
        motions: [
            {
                t: 0.5,
                d: 1,
                leftEye: "lookLeft",
                rightEye: "lookLeft",
                mouth: "lookLeft",
            },
            {
                t: 0.8,
                d: 1.5,
                leftEye: "lookRight",
                rightEye: "lookRight",
                mouth: "lookRight",
            },
        ],
    },

    {
        name: "lookAround2",
        motions: [
            {
                t: 0.2,
                d: 2,
                leftEye: "lookRight",
                rightEye: "lookRight",
                mouth: "lookRight",
            },
            {
                t: 3,
                d: 1,
                leftEye: "lookLeft squint",
                rightEye: "lookLeft squint",
                mouth: "lookRight",
            },
        ],
    },

    //     {
    //         name: "yawn",
    //         motions: [
    //             {
    //                 t: 1.5,
    //                 d: 0,
    //                 leftEye: "yawn1",
    //                 rightEye: "yawn1",
    //                 mouth: "yawn1",
    //             },
    //             {
    //                 t: 2,
    //                 d: 0,
    //                 leftEye: "yawn2",
    //                 rightEye: "yawn2",
    //                 mouth: "yawn2",
    //             },
    //             {
    //                 t: 1.8,
    //                 d: 0,
    //                 leftEye: "yawn3",
    //                 rightEye: "yawn3",
    //                 mouth: "yawn3",
    //             },
    //             {
    //                 t: 2.3,
    //                 d: 0,
    //                 leftEye: "yawn2",
    //                 rightEye: "yawn2",
    //                 mouth: "yawn2",
    //             },
    //         ],
    //     },
];

export default animations;
