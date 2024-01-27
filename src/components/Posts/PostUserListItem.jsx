import { MoreVert, Phone } from "@mui/icons-material";
import { Avatar, CardHeader, IconButton, Skeleton, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PostUserListItem({ id }) {
    const [userData, setUserData] = useState(null);

    const navigate = useNavigate();

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
        <>
            <CardHeader
                avatar={
                    userData ?
                        <Avatar sx={{ bgcolor: red[500], cursor: 'pointer' }} aria-label="recipe"
                            src={userData.photo}
                            onClick={() => {
                                navigate(`/feed/profile/${userData.id}`);
                            }}

                        >
                            {userData.name[0].toUpperCase()}
                        </Avatar>
                        :
                        <Skeleton variant="circular" width={40} height={40} />
                }
                action={
                    userData &&
                    <IconButton aria-label="settings" href={`tel:${userData.phone}`}>
                        <Phone />
                    </IconButton>

                }
                title={
                    userData ?
                        <Typography className="cursor-pointer inline-block"
                            onClick={() => {
                                navigate(`/feed/profile/${userData.id}`);
                            }}
                        >
                            {userData.name}
                        </Typography>
                        :
                        <Skeleton variant="text" width={"100%"} height={20} />
                }
                subheader={
                    userData ?
                        <Typography
                            color="text.secondary"
                            variant="body2"
                            sx={{
                                "& .MuiInputBase-input": {
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                }
                            }}
                        >
                            {
                                userData.bio
                            }

                        </Typography>
                        :
                        <Skeleton varient="text" width={"100%"} height={20} />
                }
            />

        </>
    )
}

export default PostUserListItem;