const createDurationList = (currentSession) => {
    const durationList = [];

    const repeatPush = (item, times) => {
        for (let i = 0; i < times; i++) {
            durationList.push(...item);
        }
        return durationList;
    };

    for (let i = 0; i < currentSession.length; i += 2) {
        if (currentSession[i].series === 1 && currentSession[i + 1].series !== 2) {
            repeatPush([currentSession[i].duration, 15, currentSession[i + 1].duration, 15], 3);
        } else if (currentSession[i + 1].series === 2) {
            repeatPush([currentSession[i].duration, 15, currentSession[i + 1].duration, 15, currentSession[i + 1].duration, 15], 3);
        } else {
            repeatPush([currentSession[i].duration, 15, currentSession[i].duration, 15, currentSession[i + 1].duration, 15], 3);
        }
    }

    return durationList;
};

export default createDurationList;

