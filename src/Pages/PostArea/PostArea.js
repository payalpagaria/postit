import { Card, CardContent, Divider, Paper, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import './PostArea.css'
import { useEffect, useState } from "react"
import UpdatePostDialog from "../UpdatePostDialog/UpdatePostDialog";
import DeleteDialog from "../DeleteDialog/DeleteDialog";
import { useDispatch,useSelector } from "react-redux";
import {Allposts} from '../store/slice/postSlice'
import MessageToast from "../MessageToast/MessageToast";
const PostArea = ({ Post }) => {
    let [getAll, setGetAll] = useState()
    const data=shuffleArray(useSelector((state)=>state?.post?.data));
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [id, setId] = useState('')
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [msg,setMsg]=useState('')
    const [openDelete,setOpenDelete]=useState(false)
    const dispatch=useDispatch();
    function shuffleArray(array) {
        const shuffledArray = [...array];


        for (let i = shuffledArray.length - 1; i > 0; i--) {

            const randomIndex = Math.floor(Math.random() * (i + 1));


            [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
        }

        return shuffledArray;
    }
    useEffect(() => {
        handlePostChange()
    }, [Post])

    const handlePostChange = () => {
        dispatch(Allposts())
    }
   
    const handleUpdate = (title, body, id) => {
        setTitle(title)
        setBody(body)
        setId(id)
        setOpen(true)

    }
    const handleDelete=(id)=>{
        setId(id)
        setOpenDelete(true)
    }
    return (
        <>


            <Paper className="post-paper">
                <Paper className="Title-paper">
                    <Typography className="Title-text">{Post === 'AllPosts' ? 'All Posts' : 'My Posts'}</Typography></Paper>
                <Paper className="card-container">

                    {
                        Post === 'AllPosts' ?
                            data.map(item => (
                                <Card className="card-outline">
                                    <CardContent className="title-name">{item.title}</CardContent>
                                    <Divider sx={{fontSize:'14px', width:'80%',marginLeft:'10px'}}/>

                                    <CardContent className="title-body">{item.body}</CardContent>


                                    {item.userId === 1 &&
                                        <CardContent>
                                            <IconButton aria-label="delete"
                                                onClick={()=>handleDelete(item.id)}>
                                                <DeleteIcon />
                                            </IconButton>

                                            <IconButton aria-label="update"
                                            onClick={()=>handleUpdate(item.title,item.body,item.id)}>
                                                <EditIcon />
                                            </IconButton>
                                        </CardContent>
                                    }
                                </Card>
                            )
                            )
                            :
                            data.map(item => (
                                item.userId === 1 &&
                                <Card className="card-outline">
                                    <CardContent className="title-name">{item.title}</CardContent>
                                    <Divider sx={{fontSize:'14px', width:'80%',marginLeft:'10px'}}/>

                                    <CardContent className="title-body">{item.body}</CardContent>
                                    <CardContent>
                                        <IconButton aria-label="delete"    onClick={()=>handleDelete(item.id)}>
                                            <DeleteIcon />
                                        </IconButton>

                                        <IconButton aria-label="update"
                                          onClick={()=>handleUpdate(item.title,item.body,item.id)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    </CardContent>
                                </Card>

                            ))
                    }

                </Paper>
            </Paper>
            {open &&    
            <UpdatePostDialog
                open={open}
                setOpen={setOpen}
                title={title}
                setTitle={setTitle}
                body={body}
                setBody={setBody}
                id={id} 
                setId={setId}
                setOpen1={setOpen1}
                setMsg={setMsg}
            /> 
            }
            {
                openDelete &&
                <DeleteDialog
                    id={id}
                    open={openDelete}
                    setOpen={setOpenDelete}
                    open1={open1}
                    setOpen1={setOpen1}
                    setMsg={setMsg}
                     
                />


            }
            {open1?
                <MessageToast
                    open={open1}
                    setOpen={setOpen1}
                    message={msg}
                    error={false}
                />
                :null
            }


        </>
    )
}
export default PostArea