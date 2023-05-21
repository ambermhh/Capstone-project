import React from 'react'
import { Box, Typography } from '@mui/material'

export default function HashTag() {
  return (
    <Box
    sx={{
      width: "100%",
      backgroundColor: "white",
      padding: "4px",
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <Typography>#joy</Typography>
    <Typography>#environment</Typography>
    <Typography>©copyright 2023</Typography>
    <Typography>#zerowaste</Typography>
    <Typography>#trend</Typography>
  </Box>

  )
}
