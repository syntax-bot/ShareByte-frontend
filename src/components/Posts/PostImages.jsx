import { CardMedia, ImageList, ImageListItem } from "@mui/material";

const PostImages = ({ images, alt }) => {

    return (images.length != 1
        ?
        <ImageList sx={{ width: '100%', padding: 1 }} variant="quilted" cols={2} gap={4}>

            {
                images.map((image,idx) => (
                    <ImageListItem key={image}>
                        <img
                            src={`${image}`}
                            alt={alt}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))
            }
        </ImageList>
        :
        <CardMedia
            sx={{ padding: 1 }}
            component="img"
            // height="194"
            width="100%"
            image={`${images[0]}`}
            alt={alt}
        />

    )
}

export default PostImages;