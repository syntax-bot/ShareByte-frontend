import React, { useEffect, useRef, useState } from 'react'
import { AppBar, Avatar, Badge, Box, Button, IconButton, Input, InputLabel, TextareaAutosize, Toolbar, Typography } from '@mui/material'
import { Close,  DriveFileRenameOutline, Edit } from '@mui/icons-material';
import { useSnackbar } from 'notistack';


import { api_glue, APP_NAME } from '../constants';
import { useLogin } from '../Contexts/LoginContext';


function EditUserProfileDialog({ handleClose }) {

    const snackbar = useSnackbar();
    const [loginData, setLoginData] = useLogin();
    const formButtonRef = useRef(null);

    // ---- Form Data ---------
    const [bio, setBio] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [photo, setPhoto] = useState(null);

    useEffect(() => {

        // set everything from login data
        setBio(loginData && loginData.bio);
        setName(loginData && loginData.name);
        setPhone(loginData && loginData.phone);
        setPhoto(loginData && loginData.photo);

    }, [])


    const onFormSubmit = (e) => {
        e.preventDefault();


        snackbar.enqueueSnackbar("Please Wait...", { variant: "info" });

        const formData = new FormData(e.target);
        api_glue.edit_user(formData).then(res => {
            if (res.status == 'success') {
                // set new data to loginData
                api_glue.get_me()
                    .then(me => {
                        console.log(me);
                        if (me.status == 'success') {
                            snackbar.enqueueSnackbar("Profile Updated Successfully", { variant: "success" });
                            setLoginData(me.data);
                            handleClose();
                        }
                    });
            }
        });
        // setTimeout(() => {
        //     snackbar.enqueueSnackbar("Uploaded...", { variant: "success" });
        //     setTimeout(handleClose, 1000);
        // }, 3000);
        // console.log();
    };


    const handleDroppedFile = (files) => {
        if (files.length <= 0) return;
        setPhoto(files[0]);
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
        setImage(null);
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
                        formButtonRef?.current?.click();
                    }}>
                        save
                    </Button>
                </Toolbar>
            </AppBar>



            {/* FORM  */}

            <form onSubmit={onFormSubmit} className='px-4 flex flex-col' method="post" encType='multipart/form-data'>


                <InputLabel className="m-auto my-2">
                    <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        badgeContent={
                            <Box className='p-3 rounded-full bg-black/30'>
                                <Edit />
                            </Box>
                        }
                    >
                        <Avatar
                            sx={{ width: 250, height: 250 }}
                            src={(typeof photo == typeof 'str') ? photo : ((photo) && URL.createObjectURL(photo))}
                            alt={name}
                        />
                    </Badge>
                    <input name="profile_pic" type="file" className="hidden" accept='image/*' onChange={(e) => { handleDroppedFile([...e.target.files]) }} />
                </InputLabel>


                <Box className="flex items-center flex-col  gap-4 mt-4">

                    <InputLabel>
                        <DriveFileRenameOutline className="opacity-50 mr-4" />
                        <Input varient="soft" type="text" name="name" size="lg" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </InputLabel>


                    <InputLabel>
                        <DriveFileRenameOutline className="opacity-50 mr-4" />
                        <Input varient="soft" type="text" name="phone" size="lg" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </InputLabel>

                    <InputLabel>
                        <DriveFileRenameOutline className="opacity-50 mr-4" />
                        <Input variant="soft" type="password" name="password" size="lg" placeholder='Password' />
                    </InputLabel>

                    <TextareaAutosize className='bg-inherit text-inherit shadow-md shadow-gray-700/50 min-w-[300px] mt-10 mb-20  px-8 py-4 rounded-lg outline-0' aria-label="minimum height" name="bio" minRows={3} placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} />

                    <Button ref={formButtonRef} varient="soft" type="submit" className="mt-10" color="primary"> Submit </Button>
                </Box>

            </form>

        </>
    )
}

export default EditUserProfileDialog;