import React, { useEffect, useState } from 'react'
import { useLoader } from '../../Contexts/LoaderContext';
import PostCard from '../../components/Posts/PostCard'
import { Stack } from '@mui/material';


function HomeSkeleton() {
  return (
    <>
      Loading...
      Skeleton...
      Here...
    </>
  );
}

function Home() {
  const [postsData, setPostsData] = useState(null);
  const [loading, setLoading] = useLoader();

  useEffect(() => {
    setLoading(false);

    // set timeout to simulate network load
    // setTimeout(() => {
    setPostsData([

      { // a record from database
        "id": 1,
        "user_id": 1,
        "title": "Feast In Munirka",
        "description": "Youre Invited to Come And Eat In Munirka in marriage aniversary since we have some excess food for 100 more people.",
        "images": [
          "https://mui.com/static/images/cards/paella.jpg",
          "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format",
        ],
        "helpers_user_id": [1],
        "needys_user_id": [1],
        "location_lat": -80.8716,
        "location_long": -107.7561,
        "createdAt": "2024-01-21T09:27:28.372Z",
        "updatedAt": "2024-01-21T09:29:07.866Z",
      },
      { // a record from database
        "id": 2,
        "user_id": 1,
        "title": "Feast In Munirka",
        "description": "Youre Invited to Come And Eat In Munirka in marriage aniversary since we have some excess food for 100 more people.",
        "images": [
          "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format",
          "https://mui.com/static/images/cards/paella.jpg",
        ],
        "helpers_user_id": [1],
        "needys_user_id": [1],
        "location_lat": -80.8716,
        "location_long": -107.7561,
        "createdAt": "2024-01-21T09:27:28.372Z",
        "updatedAt": "2024-01-21T09:29:07.866Z",
      },
      { // a record from database
        "id": 3,
        "user_id": 1,
        "title": "Feast In Munirka",
        "description": "Youre Invited to Come And Eat In Munirka in marriage aniversary since we have some excess food for 100 more people.",
        "images": [
          "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format",
        ],
        "helpers_user_id": [1],
        "needys_user_id": [1],
        "location_lat": -80.8716,
        "location_long": -107.7561,
        "createdAt": "2024-01-21T09:27:28.372Z",
        "updatedAt": "2024-01-21T09:29:07.866Z",
      },

    ])
    // }, 3000);
  }, []);

  return (
    postsData ?
      <Stack spacing={4}>
        {
          postsData.map(data => <PostCard {...data} key={data.id} />)
        }
      </Stack>
      :
      <HomeSkeleton />
  )
}

export default Home