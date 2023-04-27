import React, { useState } from "react";
import { Typography, Button } from "@mui/material";

// Create a context for TrimmableTypography component
export const TrimContexts = React.createContext("");

const MAX_LENGTH = 30; // set the maximum length you want to show

 export const TrimContext = ({ text }) => {
  const { isExpanded, setIsExpanded } = React.useContext(TrimContexts);

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
