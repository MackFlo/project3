import React from "react";

// This row component lets us use a bootstrap row without having to think about classNames
export const Row = ({ fluid, children }) => (
    <div className={`row${fluid ? "-fluid" : ""}`}>
    {children}
    </div>
);