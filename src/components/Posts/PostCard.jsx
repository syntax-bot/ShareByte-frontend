import { Button, Card, CardActions, CardContent, Collapse, Divider, IconButton, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';
import { BackHand, DoNotTouch, Fastfood, KeyboardArrowDown, NoFood } from '@mui/icons-material';
import PostImages from './PostImages';
import PostMap from './PostMap';
import { useLogin } from '../../Contexts/LoginContext';
import PostUserList from './PostUserList';
import { api_glue } from '../../constants';
import PostHeader from './PostHeader';


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

    //--- methods
    handleEdit,
    refetchPosts,
}) {
    const [expanded, setExpanded] = useState(false);

    const [needysUserIds, setNeedysUserIds] = useState(needys_user_id);
    const [helpersUserIds, setHelpersUserIds] = useState(helpers_user_id);

    const [loginData] = useLogin();
    const [isNeedy, setIsNeedy] = useState(needys_user_id && needys_user_id.includes(loginData?.id));
    const [isHelper, setIsHelper] = useState(helpers_user_id && helpers_user_id.includes(loginData?.id));

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    const handleEditClick = () => {
        handleEdit({
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
        })
    }

    const addOrRemoveFromNeedy = () => {
        if (isNeedy) {
            api_glue
                .remove_me_from_needy(id)
                .then(res => {
                    if (res.status == 'success') {
                        setIsNeedy(false);
                        setNeedysUserIds(needysUserIds.filter(nuid => nuid != loginData.id));
                    }
                });
        } else {
            api_glue
                .add_me_as_needy(id)
                .then(res => {
                    if (res.status == 'success') {
                        setIsNeedy(true);
                        setNeedysUserIds([...needysUserIds, loginData.id]);
                    }
                });
        }
    }

    const addOrRemoveFromHelper = () => {
        if (isHelper) {
            api_glue
                .remove_me_from_helper(id)
                .then(res => {
                    if (res.status == 'success') {
                        setIsHelper(false);
                        setHelpersUserIds(helpersUserIds.filter(huid => huid != loginData.id));
                    }
                });
        } else {
            api_glue
                .add_me_as_helper(id)
                .then(res => {
                    if (res.status == 'success') {
                        setIsHelper(true);
                        setHelpersUserIds([...helpersUserIds, loginData.id]);
                    }
                });
        }
    }




    return (
        <Card className="mx-auto my-[25px] max-w-[650px]">

            <PostHeader postId={id} handleEditClick={handleEditClick} creatorUserId={user_id} loginUserId={loginData.id} createdAt={createdAt} refetchPosts={refetchPosts} />


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
                {/* show these actions (add as needy and helper)  only when user is not creator of this post*/}
                {(user_id != loginData.id) &&
                    <>
                        <Button aria-label="add me as hungry"
                            startIcon={
                                isNeedy ?
                                    <NoFood />
                                    :
                                    <Fastfood />
                            }
                            onClick={addOrRemoveFromNeedy}
                        >
                            {isNeedy
                                ?
                                "Remove Me From Needy"
                                :
                                "Add Me As Needy"
                            }
                        </Button>

                        <Button aria-label="add me as hungry"
                            startIcon={
                                isHelper ?
                                    <DoNotTouch />
                                    :
                                    <BackHand />
                            }
                            onClick={addOrRemoveFromHelper}
                        >
                            {isHelper
                                ?
                                "Remove Me From Helper"
                                :
                                "Add Me As Helper"
                            }
                        </Button>
                    </>
                }


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

                    <Divider />


                    <PostUserList ids={needysUserIds} text={`Needys (${needysUserIds ? needysUserIds.length : '0'})`} />

                    <PostUserList ids={helpersUserIds} text={`Helpers (${helpersUserIds ? helpersUserIds.length : '0'})`} />

                </CardContent>
            </Collapse>
        </Card >
    );
}


export default PostCard;