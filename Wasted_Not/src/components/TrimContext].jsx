import React, { useState } from "react";
import { Typography, Button } from "@mui/material";

// Create a context for TrimmableTypography component
export const TrimContext = React.createContext("");

const MAX_LENGTH = 30; // set the maximum length you want to show

 export const Trim = ({ text }) => {
  const { isExpanded, setIsExpanded } = React.useContext(TrimContext);

  const isTrimmable = text.length > MAX_LENGTH;
  const trimmedText = text.substring(0, MAX_LENGTH);
  const displayText = isExpanded ? text : trimmedText;

  return (
    <>
      <Typography>
        {displayText}
        {isTrimmable && !isExpanded && (
          <>
            ...
            <Button onClick={() => setIsExpanded(true)}>More</Button>
          </>
        )}
      </Typography>
      {isTrimmable && isExpanded && (
        <Button onClick={() => setIsExpanded(false)}>Less</Button>
      )}

      <TrimContext.Provider value={{ isExpanded, setIsExpanded }}>
        {text.children}
      </TrimContext.Provider>
    </>
  );
};

export default TrimContext;
