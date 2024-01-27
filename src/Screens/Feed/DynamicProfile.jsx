import { Phone } from "@mui/icons-material";
import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api_glue } from "../../constants";
import { useSnackbar } from "notistack";

function DynamicProfile() {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);

    const snackbar = useSnackbar();

    useEffect(() => {
        api_glue
            .get_profile_by_id(id)
            .then(res => {
                if (res.status == 'success') {
                    setUserData(res.data)
                } else {
                    setUserData({
                        id,
                        name: '[User Not Found]',
                        phone: '+91xxxxxxxxxx',
                        photo: 'https://api.dicebear.com/7.x/thumbs/svg?seed=[Unknown User]&radius=50&backgroundType=gradientLinear,solid&backgroundColor=164863,000000',
                        bio: '---',
                    });
                }
            }).catch((err) => {
                setUserData({
                    id,
                    name: '[User Not Found]',
                    phone: '+91xxxxxxxxxx',
                    photo: 'https://api.dicebear.com/7.x/thumbs/svg?seed=[Unknown User]&radius=50&backgroundType=gradientLinear,solid&backgroundColor=164863,000000',
                    bio: '---',
                });
            });

    }, []);
    return (
        <Box className="py-4 flex flex-col items-center">
            {userData ?

                <Avatar
                    sx={{ width: 250, height: 250 }}
                    src={userData.photo}
                    alt={userData.name}
                />
                :
                <Skeleton variant="circular" sx={{ width: 250, height: 250 }} />
            }

            <br />
            {userData ?

                <Typography variant="h4">
                    {userData.name}
                </Typography>
                :
                <Skeleton variant="text" sx={{ height: 41, width: "80%", maxWidth: 300 }} />
            }

            <br />

            {userData ?
                <a href={`tel:${userData.phone}`}>
                    <Stack direction={"row"} gap={2}>
                        <Phone />
                        <Typography color="text.secondary">
                            {userData.phone}
                        </Typography>
                    </Stack>
                </a>

                :

                <Skeleton variant="text" sx={{ height: 24, width: "70%", maxWidth: 250 }} />
            }

            <br />
            {userData ?

                <Typography variant="body" color="text.secondary">
                    {userData.bio}
                </Typography>
                :
                <Skeleton variant="text" sx={{ height: 150, width: "80%", maxWidth: 300 }} />
            }

        </Box>
    );
}

export default DynamicProfile;