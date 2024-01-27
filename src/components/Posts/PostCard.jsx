import { Avatar, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Skeleton, Stack, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { red } from '@mui/material/colors';
import { Favorite, KeyboardArrowDown, MoreVert, Share } from '@mui/icons-material';
import PostImages from './PostImages';
import PostMap from './PostMap';


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

function PostHeader({ user_id, createdAt }) {
    const [userData, setUserData] = useState(null);
    const date = new Date(createdAt);

    useEffect(() => {
        //  Fetch User Data From user_id
        setTimeout(() => { // emulate delay
            setUserData({
                "id": 1,
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
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"
                        src={userData.photo}
                    >
                        {userData.name[0].toUpperCase()}
                    </Avatar>
                    :
                    <Skeleton variant="circular" width={40} height={40} />
            }
            action={
                userData &&
                <IconButton aria-label="settings">
                    <MoreVert />
                </IconButton>

            }
            title={
                userData ?
                    <>
                        {userData.name}
                    </>
                    :
                    <Skeleton varient="text" width={"100%"} height={20} />
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
}) {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ margin: '10px 25px' }}>

            <PostHeader userId={{ user_id }} createdAt={createdAt} />


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
                <IconButton aria-label="add me as hungry">
                    <Favorite />
                </IconButton>

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
                    

                    {/* List of helpers HERE*/}
                    {/* List of needys HERE*/}
                </CardContent>
            </Collapse>
        </Card >
    );
}


export default PostCard;