import _ from "lodash";

const createSession = (exercises) => {
    const topBodyPart = [];
    const bottomBodyPart1 = [];
    const bottomBodyPart2 = [];

    exercises.forEach(exercise => {
        exercise.bodyPart === "top" && topBodyPart.push(exercise);
        exercise.bodyPart === "bottom" && exercise.series === 1 && bottomBodyPart1.push(exercise);
        exercise.bodyPart === "bottom" && exercise.series === 2 && bottomBodyPart2.push(exercise);
    });

    _.shuffle(bottomBodyPart1);

    const indexToRemove = bottomBodyPart1.findIndex(exercise => exercise.target === "glute");
    bottomBodyPart1.splice(indexToRemove, 1);

    const getRandomExercises = (arr, num) => {
        return arr.sort(() => 0.5 - Math.random()).slice(0, num);
    };

    const randomTop = getRandomExercises(topBodyPart, 3);
    const randomBottom1 = getRandomExercises(bottomBodyPart1, 2);
    const randomBottom2 = getRandomExercises(bottomBodyPart2, 1);

    const session = [];

    session.push(randomBottom1.pop());
    session.push(randomTop.pop());
    session.push(...randomBottom2);
    session.push(randomTop.pop());
    session.push(randomBottom1.pop());
    session.push(randomTop.pop());

    return session;
};

export default createSession;