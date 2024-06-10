import React from 'react';

interface AppContextProps {
    logged: boolean
    setLogged: (val: boolean) => void
    loadingPage: boolean
    setLoadingPage: (val: boolean) => void

}

export const AppContext = React.createContext<AppContextProps>({

    logged: false, setLogged: (_val: boolean) => {},
    loadingPage: false, setLoadingPage: (_val: boolean) => {}

});
