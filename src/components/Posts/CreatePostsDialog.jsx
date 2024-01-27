import React, { useRef, useState } from 'react'
import { AppBar, Box, Button, IconButton, Input, InputLabel, TextareaAutosize, Toolbar, Typography } from '@mui/material'
import { Close, CloudUpload, DriveFileRenameOutline } from '@mui/icons-material';
import { useSnackbar } from 'notistack';


import { APP_NAME, api_glue, error_report_message } from '../../constants';
import UploadImagesList from './UploadImageList';


function CreatePostDialog({ initialValues, handleClose, refetchPosts }) {

    const submitButtonRef = useRef(null);
    // ---- Form Data ---------
    const [title, setTitle] = useState(initialValues ? (initialValues.title || '') : '');
    const [description, setDescription] = useState(initialValues ? (initialValues.description || '') : '');
    const [images, setImages] = useState(initialValues ? (initialValues.images || []) : []);


    const snackbar = useSnackbar();

    const resetFields = () => {
        setTitle("");
        setDescription("");
        setImages([]);
    }


    const onFormSubmit = (e) => {
        e.preventDefault();

        snackbar.enqueueSnackbar("Please Wait while images are being uploaded...", { variant: "info" });

        const formData = new FormData(e.target);

        // call api
        if (initialValues) {
            // update post
            api_glue
                .edit_post(initialValues.id, formData)
                .then(res => {
                    if (res.status == 'success') {
                        snackbar.enqueueSnackbar("Post Updated", { variant: "success" });
                        refetchPosts();
                    } else {
                        snackbar.enqueueSnackbar(res.data.message, { variant: res.status });
                    }
                    handleClose();
                }).catch(err => {
                    console.log(err);
                    snackbar.enqueueSnackbar(error_report_message, { variant: "error" });
                    handleClose();
                });

        } else {
            api_glue
                .create_post(formData)
                .then(res => {
                    if (res.status == 'success') {
                        snackbar.enqueueSnackbar("Post Uploaded", { variant: "success" });
                        refetchPosts();
                    } else {
                        snackbar.enqueueSnackbar(res.data.message, { variant: res.status });
                    }
                    handleClose();
                }).catch(err => {
                    console.log(err);
                    snackbar.enqueueSnackbar(error_report_message, { variant: "error" });
                    handleClose();
                });
        }
    };


    const handleDroppedFile = (files) => {
        if (files.length <= 0) return;
        setImages([...images, ...files]);
    }

    const handleFileDrop = (e) => {
        e.preventDefault();
        const files = [];

        if (e.dataTransfer.items) {

            [...e.dataTransfer.items].forEach((item, idx) => {
                if (item.kind == 'file' && item.type.split("/")[0] == "image") {
                    const file = item.getAsFile();
                    files.push(file);
                }
            })

        } else {

            [...e.dataTransfer.files].forEach((file, i) => {
                files.push(file);
            });

        }

        handleDroppedFile(files);

    }

    const onImageRemove = (images) => {
        setImages(images);
    }



    return (
        <>
            <AppBar sx={{ position: 'sticky' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <Close />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        {APP_NAME}
                    </Typography>
                    <Button autoFocus color="inherit" onClick={() => {
                        submitButtonRef?.current?.click();
                    }}>
                        save
                    </Button>
                </Toolbar>
            </AppBar>



            {/* FORM  */}

            <form onSubmit={onFormSubmit} className='px-4 flex flex-col gap-8' method="post" encType='multipart/form-data'>


                <InputLabel className="m-auto my-2">
                    {/* Upload Box */}
                    <Box
                        className="p-20 flex flex-col items-center border-2 rounded-lg border-dashed border-gray-500/50 gap-6"
                        onDrop={handleFileDrop}
                        onDragOver={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <Box>
                            <CloudUpload />
                        </Box>
                        Drop Your Images Here
                    </Box>
                    <input name="images" type="file" className="hidden" accept='image/*' multiple onChange={(e) => { handleDroppedFile([...e.target.files]) }} />
                </InputLabel>


                <Box className="flex flex-row gap-4 justify-around">
                    {
                        <UploadImagesList images={[...images]} onImageRemove={onImageRemove} />
                    }
                </Box>



                <Box className="flex items-center flex-col  gap-2">

                    <InputLabel>
                        <DriveFileRenameOutline className="opacity-50 mr-4" />
                        <Input varient="soft" type="text" name="title" size="lg" placeholder="Title" required value={title} onChange={(e) => setTitle(e.target.value)} />
                    </InputLabel>

                    <TextareaAutosize className='bg-inherit text-inherit shadow-md shadow-gray-700/50 min-w-[300px] my-20  px-8 py-4 rounded-lg' aria-label="minimum height" name="description" minRows={3} placeholder="Item Description" required value={description} onChange={(e) => setDescription(e.target.value)} />

                    <Button ref={submitButtonRef} varient="soft" type="submit" className="mt-10" color="primary"> Submit </Button>
                </Box>

            </form>

        </>
    )
}

export default CreatePostDialog;