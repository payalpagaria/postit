import { Paper, Typography ,Box, Button} from "@mui/material";
import './SideNav.css'
import writeIcon from '../../Assets/img/writing-icon.svg'
import PostArea from "../../Pages/PostArea/PostArea";
import CreatePostDialog from "../CreatePostDialog/CreatePostDialog";
import { useState } from "react";
const SideNav=()=>{
    const [creatIcon,setCreateIcon]=useState(false)
    const [Post,setPost]=useState('AllPosts')
    const handleWriteClick=()=>{
        setCreateIcon(true) 
    }
   
    return(<>
    <Box className='outer-body'>
            <Paper className="SideNav-container" elevation={3}>
                <Box className='creat-post'>
                    <Typography>Create New post</Typography>
                    <img src={writeIcon} alt='img' className="post-img" onClick={handleWriteClick}></img>
                </Box>
              <Box className='button-container'>
                <Button variant="contained" size="medium" onClick={()=>setPost('MyPosts')}>My Posts</Button>
                <Button variant="contained" size="medium"onClick={()=>setPost('AllPosts')}>All Posts</Button>
              </Box>
            </Paper>
            <PostArea Post={Post}/>
            {
                creatIcon && <CreatePostDialog open={creatIcon} setOpen={setCreateIcon}/>
            }

    </Box>
    </>
    )
}
export default SideNav;