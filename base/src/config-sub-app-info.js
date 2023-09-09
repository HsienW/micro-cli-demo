const subAppInfo = [
    {
        name: 'main-app',
        displayName: 'Main-App',
        entry: process.env.REACT_MAIN_APP_ENV,
        activeRule: '/main-app',
        container: '#main-app-root',
    },
    {
        name: 'sub-app',
        displayName: 'Sub-App',
        entry: process.env.REACT_SUB_APP_ENV,
        activeRule: '/sub-app',
        container: '#sub-app-root',
    }
];

export {
    subAppInfo
};

