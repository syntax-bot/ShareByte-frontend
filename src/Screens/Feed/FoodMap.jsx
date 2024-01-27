import React, { useEffect, useState } from 'react'
import FullSizeLoader from '../../components/FullSizeLoader';
import { useLogin } from '../../Contexts/LoginContext';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { MAPS_API_KEY, api_glue, images } from '../../constants';
import { MarkEmailReadTwoTone } from '@mui/icons-material';
import { Skeleton } from '@mui/material';
import { useSnackbar } from 'notistack';

function FoodMap() {
    const [markers, setMarkers] = useState(null);
    const [loginData] = useLogin();
    const [myLocation, setMyLocation] = useState(null);
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: MAPS_API_KEY
    // })

    const isLoaded = false;

    const snackbar = useSnackbar();

    useEffect(() => {

        // setInterval(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setMyLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        });
        // }, 500);

        // from api
        api_glue.get_all_posts()
            .then(posts => {
                if (posts.status == 'success') {
                    setMarkers(posts.data.posts.filter(post => !!(post.location_lat)));
                } else {
                    snackbar.enqueueSnackbar('Failed Fetching Markers', { variant: 'error' });
                }
            })
            .catch(err => {
                snackbar.enqueueSnackbar('Failed Fetching Markers', { variant: 'error' });
            })

        // setMarkers([
        //     { title: 'feast in munirka1', location_lat: 28.546714, location_long: 77.165102 },
        //     { title: 'feast in munirka2', location_lat: 28.546732, location_long: 77.165243 },
        //     { title: 'feast in munirka3', location_lat: 28.546632, location_long: 77.164143 },
        // ]);
    }, []);


    const onLoad = (map) => {

    }



    return (
        loginData && markers ?
            <div>
                {isLoaded ?
                    <GoogleMap

                        mapContainerStyle={{
                            width: '100%',
                            height: '100%',
                            minHeight: '100svh',
                        }}
                        center={{
                            lat: loginData.location_lat,
                            lng: loginData.location_long,
                        }}
                        zoom={15}
                        onLoad={onLoad}
                    >


                        {
                            myLocation ?

                                <MarkerF
                                    position={{
                                        lat: myLocation.lat,
                                        lng: myLocation.lng
                                    }}
                                    label={"you are here"}
                                    icon={images.circle}
                                />
                                :
                                <MarkerF
                                    position={{
                                        lat: loginData.location_lat,
                                        lng: loginData.location_long
                                    }}
                                    label={"you are here"}
                                    icon={images.circle}

                                />
                        }



                        {
                            markers.map(marker => (
                                <MarkerF
                                    position={{
                                        lat: marker.location_lat,
                                        lng: marker.location_long
                                    }}
                                    label={marker.title}
                                    icon={images.food}
                                />
                            ))
                        }

                    </GoogleMap>
                    :
                    <Skeleton
                        animation="wave"
                        variant="rectangular" sx={{
                            width: '100%',
                            height: '100%',
                            minHeight: '100svh',
                        }}

                    />
                }
            </div>
            :
            <FullSizeLoader />
    )
}

export default FoodMap