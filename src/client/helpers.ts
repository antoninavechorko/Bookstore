export const backgroundColor = () => {
    const colors = [ '#D7E4FD', '#CAEFF0', '#FEE9E2', '#F4EEFD' ];
    const index = Math.floor(Math.random() * 4);

    return colors[index];
};