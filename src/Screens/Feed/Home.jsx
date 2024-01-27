import React, { useEffect, useState } from 'react'
import { useLoader } from '../../Contexts/LoaderContext';
import PostCard from '../../components/Posts/PostCard'
import { Box, Fab, Stack } from '@mui/material';
import { Add } from '@mui/icons-material';


import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CreatePostDialog from '../../components/Posts/CreatePostsDialog';
import { api_glue, error_report_message } from '../../constants';
import { useSnackbar } from 'notistack';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});





function Home() {
  const [postsData, setPostsData] = useState(null);
  const [loading, setLoading] = useLoader();

  const [open, setOpen] = useState(false);
  const [editInitialValues, setEditInitialValues] = useState(null);

  const snackbar = useSnackbar();

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

  const fetchAllPosts = async () => {
    try {
      const posts = await api_glue.get_all_posts()
      if (posts.status == 'success') {
        setLoading(false);
        setPostsData(posts.data.posts.sort((a, b) => (new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())));
      } else {
        snackbar(error_report_message, { variant: 'error' });
      }
    } catch (err) {
      console.log(err);
      snackbar(error_report_message, { variant: 'error' });
    }
  }

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <Stack spacing={4} sx={{ position: 'relative' }}>
      <Box className="flex flex-col">
        {postsData &&
          postsData.map(data => <PostCard {...data} handleEdit={handleEditPost} key={data.id} refetchPosts={fetchAllPosts} />)
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
        <CreatePostDialog initialValues={editInitialValues} handleClose={handleClose} refetchPosts={fetchAllPosts} />
      </Dialog>


    </Stack>
  )
}

export default Home