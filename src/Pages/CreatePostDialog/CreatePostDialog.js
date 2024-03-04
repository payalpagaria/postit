import { Dialog, DialogContent ,DialogActions,TextField,Button} from "@mui/material"
import { useState } from "react";
import {createPost} from '../store/slice/postSlice'
import { useDispatch,useSelector } from "react-redux";
import MessageToast from "../MessageToast/MessageToast";
const CreatePostDialog=({open,setOpen})=>{
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [openmsg,setOpenMsg]=useState(false)
  const notification=useSelector((state)=>state?.post?.notification)
  const dispatch=useDispatch()

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleFormSubmit = () => {
    
      const payload = {
        title: title,
        body: body,
        id:1,
    }
    dispatch(createPost(payload))
      
      setTitle('');
      setBody('');
      
      setOpen(false)
      setOpenMsg(true)
  };

    return(<>
            <Dialog 
            open={open}
            onClose={()=>{setOpen(false)}}>
                <DialogContent>Create a Post</DialogContent>
                <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          fullWidth
          value={title}
          onChange={handleTitleChange}
        />
        <TextField
          margin="dense"
          label="Body"
          fullWidth
          multiline
          rows={4}
          value={body}
          onChange={handleBodyChange}
        />
      </DialogContent>
      <DialogActions>
        <Button  onClick={()=>{setOpen(false)}} color="primary">
          Cancel
        </Button>
        <Button onClick={handleFormSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>

            </Dialog>
            
    </>)
}
export default CreatePostDialog;