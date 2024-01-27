import { Box, Link, Skeleton, Stack, Typography } from "@mui/material";
import { MAPS_API_KEY } from "../../constants";
import { Map } from "@mui/icons-material";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

const PostMap = ({ location_lat, location_long }) => {
    // Uncomment this to use api 
    // i have commented this to save usage
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: MAPS_API_KEY
    // })

    const isLoaded = false;

    const onLoad = (map) => {

    }

    return (
        <Box>
            <Box sx={{ mb: 1 }}>
                {isLoaded ?
                    <GoogleMap
                        mapContainerStyle={{
                            width: '100%',
                            height: 500,
                        }}
                        center={{
                            lat: location_lat,
                            lng: location_long,
                        }}
                        zoom={15}
                        onLoad={onLoad}
                    >

                        <MarkerF
                            position={{
                                lat: location_lat,
                                lng: location_long
                            }}
                        />
                    </GoogleMap>
                    :

                    <Skeleton height={500} width={'100%'} variant="rounded" />
                }
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