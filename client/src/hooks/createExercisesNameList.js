const createExercisesNameList = (currentSession) => {
    let exercisesNameList = [];

    const repeatPush = (item, times) => {
        for (let i = 0; i < times; i++) {
            exercisesNameList.push(...item);
        }
        return exercisesNameList;
    };

    for (let i = 0; i < currentSession.length; i += 2) {
        if (currentSession[i].series === 1 && currentSession[i + 1].series !== 2) {
            repeatPush([currentSession[i].name, "Pause", currentSession[i + 1].name, "Pause"], 3);
        } else if (currentSession[i + 1].series === 2) {
            repeatPush([currentSession[i].name, "Pause", currentSession[i + 1].name, "Pause", currentSession[i + 1].name, "Pause"], 3);
        } else {
            repeatPush([currentSession[i].name, "Pause", currentSession[i].name, "Pause", currentSession[i + 1].name, "Pause"], 3);
        }
    }

    return exercisesNameList;
};

export default createExercisesNameList;

