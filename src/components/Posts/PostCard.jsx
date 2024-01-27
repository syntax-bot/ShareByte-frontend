import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Collapse, Divider, IconButton, Menu, MenuItem, Skeleton, Stack, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { red } from '@mui/material/colors';
import { BackHand, DoNotTouch, Fastfood, Favorite, KeyboardArrowDown, MoreVert, NoFood, Phone, Share } from '@mui/icons-material';
import PostImages from './PostImages';
import PostMap from './PostMap';
import { useLogin } from '../../Contexts/LoginContext';
import PostUserList from './PostUserList';
import { useNavigate } from 'react-router-dom';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));




const month_map = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function PostHeader({ creatorUserId, loginUserId, createdAt, handleEditClick }) {

    const [userData, setUserData] = useState(null);
    const date = new Date(createdAt);

    const [menuOpen, setMenuOpen] = useState(false);
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);

    const navigate = useNavigate();

    const handleMenuOpen = (e) => {
        setMenuAnchorEl(e.target);
        setMenuOpen(true);
    }

    const handleMenuClose = (e) => {
        setMenuAnchorEl(null);
        setMenuOpen(false);
    }


    useEffect(() => {
        //  Fetch User Data From creatorUserId
        setTimeout(() => { // emulate delay
            setUserData({
                "id": creatorUserId,
                "name": "Prashanth Kumar",
                "phone": "+91828382838",
                "photo": "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format",
                "bio": "A user from stonage"
            });
        }, 3000);
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
                                <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
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

function PostCard({
    id,
    user_id,
    title,
    description,
    images,
    helpers_user_id,
    needys_user_id,
    location_lat,
    location_long,
    createdAt,

    handleEdit,
}) {
    const [expanded, setExpanded] = useState(false);

    const [loginData] = useLogin();
    const [isNeedy, setIsNeedy] = useState(needys_user_id && needys_user_id.includes(loginData?.id));
    const [isHelper, setIsHelper] = useState(helpers_user_id && helpers_user_id.includes(loginData?.id));

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleEditClick = () => {
        handleEdit({
            id,
            user_id,
            title,
            description,
            images,
            helpers_user_id,
            needys_user_id,
            location_lat,
            location_long,
            createdAt,
        })
    }

    const addOrRemoveFromNeedy = () => {
        setIsNeedy(!isNeedy);
        const method = isNeedy ? 'DELETE' : 'GET';
        console.log(method);
    }
    const addOrRemoveFromHelper = () => {
        setIsHelper(!isHelper);
        const method = isHelper ? 'DELETE' : 'GET';
        console.log(method);
    }

    return (
        <Card className="mx-auto my-[25px] max-w-[650px]">

            <PostHeader handleEditClick={handleEditClick} creatorUserId={user_id} loginUserId={loginData.id} createdAt={createdAt} />


            <PostImages images={images} alt={title} />

            <Typography variant="h6" color="text.primary" sx={{ padding: '0px 10px' }}>
                {title}
            </Typography >


            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography >
            </CardContent >

            <CardActions disableSpacing>
                <Button aria-label="add me as hungry"
                    startIcon={
                        isNeedy ?
                            <NoFood />
                            :
                            <Fastfood />
                    }
                    onClick={addOrRemoveFromNeedy}
                >
                    {isNeedy
                        ?
                        "Remove Me From Needy"
                        :
                        "Add Me As Needy"
                    }
                </Button>

                <Button aria-label="add me as hungry"
                    startIcon={
                        isHelper ?
                            <DoNotTouch />
                            :
                            <BackHand />
                    }
                    onClick={addOrRemoveFromHelper}
                >
                    {isHelper
                        ?
                        "Remove Me From Helper"
                        :
                        "Add Me As Helper"
                    }
                </Button>

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <KeyboardArrowDown />
                </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Location Map:</Typography>

                    <PostMap id={id} location_lat={location_lat} location_long={location_long} />

                    <Divider />


                    <PostUserList ids={needys_user_id} text={`Needys (${needys_user_id.length})`} />

                    <PostUserList ids={helpers_user_id} text={`Helpers (${helpers_user_id.length})`} />

                </CardContent>
            </Collapse>
        </Card >
    );
}


export default PostCard;