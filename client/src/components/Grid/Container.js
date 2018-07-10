import React from "react";

// This container component allows us to use a bootstrap container without worrying about classNames
export const Container = ({ fluid, children }) => (
    <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
    </div>
);