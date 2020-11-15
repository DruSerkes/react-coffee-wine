export const locationSuccess = (position: Position) => {
    const { latitude, longitude } = position.coords;
    return { latitude, longitude };
};


export const locationFail = (error: PositionError) => {
    console.log({ error });
    return { error }
};