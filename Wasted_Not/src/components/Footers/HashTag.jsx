import React from 'react'
import { Box, Typography } from '@mui/material'

export default function HashTag() {
  return (
    <Box
    sx={{
      position:'absolute',
      bottom:'0',
      width: "100%",
      backgroundColor: "#f5f5f5",
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
