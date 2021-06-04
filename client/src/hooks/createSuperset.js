const createSuperset = (currentSession, chunkSize) => {
    const supersetList = [];

    for (let i = 0; i < currentSession.length; i += chunkSize) {
        let chunk = currentSession.slice(i, i + chunkSize);
        supersetList.push(chunk);
    }

    return supersetList;
};

export default createSuperset;