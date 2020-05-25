import React from "react";

const CommonContext = React.createContext({
    editMode: false,
    setEditMode: () => { }
});

const CommonProvider = CommonContext.Provider
const CommonConsumer = CommonContext.Consumer

export { CommonContext, CommonProvider, CommonConsumer }