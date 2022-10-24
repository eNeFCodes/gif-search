import React from "react";

export const EnvironmentContext = React.createContext();

export const EnvironmentProvider = (props) => {
    const config = {
        API_KEY: '',
    };

    return (
        <EnvironmentContext.Provider value={config}>
            {props.children}
        </EnvironmentContext.Provider>
    );
}