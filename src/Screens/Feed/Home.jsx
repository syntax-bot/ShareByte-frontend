import React, { useEffect, useState } from 'react'
import { useLoader } from '../../Contexts/LoaderContext';
import PostCard from '../../components/Posts/PostCard'
import { Box, Fab, Stack } from '@mui/material';
import { Add } from '@mui/icons-material';


import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CreatePostDialog from '../../components/Posts/CreatePostsDialog';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});





function Home() {
  const [postsData, setPostsData] = useState(null);
  const [loading, setLoading] = useLoader();

  const [open, setOpen] = useState(false);
  const [editInitialValues, setEditInitialValues] = useState(null);

  const handleEditPost = (initialValues) => {
    setOpen(true);
    setEditInitialValues(initialValues);
    console.log(initialValues);
  }

  const handleClickOpen = () => {
    setOpen(true);
    setEditInitialValues(null);
  };

  const handleClose = () => {
    setOpen(false);
    setEditInitialValues(null);
  };


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
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
          "helpers_user_id": [],
          "needys_user_id": [1, 2, 3, 4, 5],
          "location_lat": 28.546714,
          "location_long": 77.165102,
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
          "needys_user_id": [],
          "location_lat": 28.546714,
          "location_long": 77.165102,
          "createdAt": "2024-01-21T09:27:28.372Z",
          "updatedAt": "2024-01-21T09:29:07.866Z",
        },
        { // a record from database
          "id": 3,
          "user_id": 2,
          "title": "Feast In Munirka",
          "description": "Youre Invited to Come And Eat In Munirka in marriage aniversary since we have some excess food for 100 more people.",
          "images": [
            "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format",
          ],
          "helpers_user_id": [1],
          "needys_user_id": [1],
          "location_lat": 28.546714,
          "location_long": 77.165102,
          "createdAt": "2024-01-21T09:27:28.372Z",
          "updatedAt": "2024-01-21T09:29:07.866Z",
        },

      ])
    }, 3000);
  }, []);

  return (
    <Stack spacing={4} sx={{ position: 'relative' }}>
      <Box className="flex flex-col">
        {postsData &&
          postsData.map(data => <PostCard {...data} handleEdit={handleEditPost} key={data.id} />)
        }
      </Box>
      <Fab color="secondary" aria-label="edit"
        sx={{
          position: 'fixed',
          bottom: 25,
          right: 25,
        }}
        onClick={handleClickOpen}
      >
        <Add sx={{ color: 'text.primary' }} />
      </Fab>



      {/* ----------------- */}

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <CreatePostDialog initialValues={editInitialValues} handleClose={handleClose} />
      </Dialog>


    </Stack>
  )
}

export default Home