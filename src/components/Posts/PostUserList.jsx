import { Box, CardActions, CardContent, Collapse, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PostUserListItem from "./PostUserListItem";
import styled from "@emotion/styled";
import { KeyboardArrowDown } from "@mui/icons-material";

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


function PostUserList({ ids, tail, text }) {
    // TODO : limit number of profiles to show
    // TODO : by ```tail``` number And show some pagination?
    const [usersData, setUsersData] = useState(null);

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    useEffect(() => {
        setUsersData([
            {
                "id": 1,
                "name": "Prashanth Kumar",
                "phone": "+91828382838",
                "photo": null,
                "bio": "A user from stonage"
            }
        ])
    }, []);

    return (
        <Box>
            <CardActions disableSpacing>

                <Typography variant="body1" color="text.secondary">
                    {text}
                </Typography>

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
                    {ids &&
                        ids.map(id => (
                            <PostUserListItem key={id} id={id} />
                        ))
                    }
                </CardContent>
            </Collapse>
        </Box>
    )
}

export default PostUserList;