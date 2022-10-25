import React from "react";

export const EnvironmentContext = React.createContext();

export const EnvironmentProvider = (props) => {
    const config = {
        API_KEY: 'Z2yj1zlW53iWFjqS3kvp4m9nLSJhyvd6',
    };

    return (
        <EnvironmentContext.Provider value={config}>
            {props.children}
        </EnvironmentContext.Provider>
    );
}