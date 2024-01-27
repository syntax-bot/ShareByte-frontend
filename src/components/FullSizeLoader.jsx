/** @jsxImportSource @emotion/react   */

import React from 'react'
import { Box, CircularProgress, css } from '@mui/material'

function FullSizeLoader() {
    return (
        <Box css={
            css`
                display:flex;
                height:100%;
                min-height:100svh;
                align-items:center;
                justify-content:center;
            `
        }>
            <CircularProgress />
        </Box>
    )
}

export default FullSizeLoader