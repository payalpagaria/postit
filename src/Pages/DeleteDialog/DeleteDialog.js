import { Button, Dialog, DialogActions, DialogContent, Typography } from "@mui/material"
import {deletePost} from '../store/slice/postSlice'
import { useDispatch,useSelector } from "react-redux"
import { useState } from "react"
const DeleteDialog=({open, setOpen,id,open1,
    setOpen1,
    setMsg,
})=>{
   
    const dispatch=useDispatch()
    const handleYes=()=>{
        dispatch(deletePost(id))
        setOpen(false)
        setMsg("Post has been deleted sucessfully!!")
        setOpen1(true)
    }
    return(
        <>
            <Dialog 
                open={open}
                onClose={()=>{
                    setOpen(false)
                }}
            >
                <DialogContent>
                        <Typography>Do you want to Delete the post?</Typography>
                </DialogContent>
                <DialogActions sx={{display: 'flex',flexDirection:'row', justifyContent:'space-evenly'}}>
                    <Button 
                        onClick={()=>handleYes()}
                    >
                        Yes
                    </Button>
                    <Button  onClick={()=>{
                    setOpen(false)
                }}>No</Button>
                </DialogActions>

            </Dialog>
           
        </>

    )
}
export default DeleteDialog