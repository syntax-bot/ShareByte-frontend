import { Phone } from "@mui/icons-material";
import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DynamicProfile() {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    useEffect(() => {

        setTimeout(() => {

            setUserData({
                id,
                name: 'Prashanth Kumar',
                phone: '+9183526374633',
                photo: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Prashanth%20Kumar&radius=50&backgroundType=gradientLinear,solid&backgroundColor=164863,000000',
                bio: 'A user from stonage',
            });

        }, 3000)

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