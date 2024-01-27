import { Avatar, CardHeader, IconButton, Menu, MenuItem, Skeleton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { red } from '@mui/material/colors';
import { MoreVert, Phone } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { api_glue } from '../../constants';

const month_map = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function PostHeader({ postId, creatorUserId, loginUserId, createdAt, handleEditClick, refetchPosts }) {

    const [userData, setUserData] = useState(null);
    const date = new Date(createdAt);

    const [menuOpen, setMenuOpen] = useState(false);
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);

    const navigate = useNavigate();

    const handleMenuOpen = (e) => {
        setMenuAnchorEl(e.target);
        setMenuOpen(true);
    }

    const handleDeleteClick = (e) => {
        api_glue.delete_post(postId).then(res => {
            refetchPosts();
            handleMenuClose();
        });
    }

    const handleMenuClose = (e) => {
        setMenuAnchorEl(null);
        setMenuOpen(false);
    }


    useEffect(() => {
        //  Fetch User Data From creatorUserId
        api_glue.get_profile_by_id(creatorUserId)
            .then(userData => {
                if (userData.status == 'success') {
                    setUserData(userData.data);
                }
            })
    }, [])

    return (
        <CardHeader
            avatar={
                userData ?
                    <Avatar sx={{ bgcolor: red[500], cursor: 'pointer' }} aria-label="recipe"
                        src={userData.photo}
                        onClick={() => {
                            navigate(`/feed/profile/${creatorUserId}`);
                        }}
                    >
                        {userData.name[0].toUpperCase()}
                    </Avatar>
                    :
                    <Skeleton variant="circular" width={40} height={40} />
            }
            action={
                userData &&
                <>
                    {(creatorUserId == loginUserId) ?
                        <>
                            <IconButton onClick={handleMenuOpen} aria-label="settings">
                                <MoreVert />
                            </IconButton>


                            <Menu
                                anchorEl={menuAnchorEl}
                                open={menuOpen}
                                onClose={handleMenuClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
                                <MenuItem onClick={() => { handleMenuClose(); handleEditClick() }}>Edit</MenuItem>
                            </Menu>
                        </>
                        :
                        <IconButton aria-label="settings" href={`tel:${userData.phone}`}>
                            <Phone />
                        </IconButton>

                    }
                </>

            }
            title={
                userData ?
                    <>
                        <Typography
                            className="cursor-pointer"
                            onClick={() => {
                                navigate(`/feed/profile/${creatorUserId}`);
                            }}
                        >
                            {userData.name}
                        </Typography>
                    </>
                    :
                    <Skeleton variant="text" width={"100%"} height={20} />
            }
            subheader={
                userData ?
                    <>
                        {
                            month_map[date.getMonth()] + " " + (date.getDay() + 1) + ", " + date.getFullYear()
                        }

                    </>
                    :
                    <Skeleton varient="text" width={"100%"} height={20} />
            }
        />
    )
}


export default PostHeader;