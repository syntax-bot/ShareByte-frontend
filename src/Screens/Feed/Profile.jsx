import React, { useState } from 'react'
import { useLogin } from '../../Contexts/LoginContext'
import { Avatar, Box, Dialog, Fab, Slide, Stack, Typography } from '@mui/material';
import { Edit, Phone } from '@mui/icons-material';
import EditUserProfileDialog from '../../components/EditUserProfileDialog';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Profile() {
  const [loginData] = useLogin();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  return (
    loginData &&
    <Box className="py-4 flex flex-col items-center">

      <Avatar
        sx={{ width: 250, height: 250 }}
        src={loginData.photo}
        alt={loginData.name}
      />

      <br />

      <Typography variant="h4">
        {loginData.name}
      </Typography>

      <br />

      <Typography variant="body" color="text.secondary">
        {loginData.bio}
      </Typography>

      <br />

      <Stack direction={"row"} gap={2}>
        <Phone />
        <Typography color="text.secondary">
          {loginData.phone}
        </Typography>
      </Stack>



      <Fab
        sx={{ position: 'fixed', bottom: 25, right: 25 }}
        onClick={() => { setOpen(true); }}
      >
        <Edit />
      </Fab>



      {/* Edit Profile Popup */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <EditUserProfileDialog handleClose={handleClose} />
      </Dialog>




    </Box>
  )
}
