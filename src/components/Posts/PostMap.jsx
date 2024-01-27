import { Box, Card, CardActions, CardContent, Link, Skeleton, Stack, Typography } from "@mui/material";
import { MAPS_API_KEY } from "../../constants";
import { Map } from "@mui/icons-material";
import { useState } from "react";

const PostMap = ({ location_lat, location_long }) => {
    const [loading, setLoading] = useState(true);

    return (
        <Box>
            <Box>

                {loading &&
                    <Skeleton variant="rounded" height={500} width="100%" sx={{ mb: 2 }} />
                }
                <iframe
                    width={loading ? "0" : "100%"}
                    style={{ border: 0 }}
                    height={loading ? "0" : "500"}
                    loading="lazy"
                    allowfullscreen
                    onLoad={() => {
                        setLoading(false);
                    }}
                    src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${location_lat},${location_long}`}
                />
            </Box>
            <Box>
                <Link target="_blank" underline="hover" href={`https://www.google.com/maps/place/${location_lat},${location_long}`}>
                    <Stack direction={"row"} gap={2}>
                        <Map />
                        <Typography variant="body2">
                            Open In Larger Map
                        </Typography>
                    </Stack>
                </Link>
            </Box>
        </Box>
    );
}

/*


<iframe
                width="300"
                height="170"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?q='+YOUR_LAT+','+YOUR_LON+'&hl=es&z=14&amp;output=embed"
            >
            </iframe>
            <br />
            <small>
                <a
                    href="https://maps.google.com/maps?q='+data.lat+','+data.lon+'&hl=es;z=14&amp;output=embed"
                    style="color:#0000FF;text-align:left"
                    target="_blank"
                >
                    See map bigger
                </a>
            </small>

            */


export default PostMap;