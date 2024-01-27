import { Cancel } from '@mui/icons-material'
import { IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import React from 'react'

function UploadImagesList({ images, onImageRemove }) {


    return (
        <div>
            <ImageList variant="masonry" cols={3} gap={20} className="max-w-[380px]">
                {
                    images.map((image, idx) => (

                        <ImageListItem key={idx}>

                            <img src={(typeof image == typeof 'str') ? image : URL.createObjectURL(image)} className="w-[50px]" />

                            <ImageListItemBar
                                sx={{
                                    // background: 'red !important',
                                    top: '18px',
                                    transform: 'translateY(100%)',
                                    bottom: '100%',
                                }}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        onClick={() => {
                                            images.splice(idx, 1);
                                            onImageRemove(images);
                                        }}
                                    >
                                        <Cancel />
                                    </IconButton>
                                }
                            />

                        </ImageListItem>




                    ))
                }

            </ImageList>
        </div>
    )
}

export default UploadImagesList