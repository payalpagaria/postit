import { Dialog, DialogContent ,DialogActions,TextField,Button} from "@mui/material"
import { useState } from "react";
import {updatePost} from '../store/slice/postSlice'
import { useDispatch } from "react-redux";
const UpdatePostDialog=({ open,
    setOpen,
    title,
    setTitle,
    body,
    setBody,
    id ,
    setId,
    setOpen1,
    setMsg
})=>{

  const dispatch=useDispatch()
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleFormSubmit = () => {
   
       
      const payload={
        id: id,
        title: title,
        body: body,
        userId: 1,
      }
      dispatch(updatePost(payload))
      setTitle('');
      setBody('');
      setOpen(false)
      setMsg("Post has been updated sucessfully!!")
      setOpen1(true)
  };

    return(<>
            <Dialog 
            open={open}
            onClose={()=>{setOpen(false)}}>
                <DialogContent>Update Post</DialogContent>
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
export default UpdatePostDialog;