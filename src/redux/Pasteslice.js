import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';


const initialState = {
  Pastes: localStorage.getItem("Pastes")
    ? JSON.parse(localStorage.getItem("Pastes"))
    : []

}

export const Pasteslice = createSlice({
  name: 'Paste',
  initialState,
  reducers: {
    addtopaste: (state, action) => {
      const paste = action.payload;
      if (paste !== '') {
        state.Pastes.push(paste);
        localStorage.setItem("Pastes", JSON.stringify(state.Pastes))
        toast.success("Note created sucessfully")
      }
      else {
        toast.error("Paste cannot be empty ❌")
      }


    },

    updatetopaste: (state, action) => {
      const paste = action.payload;
      const index = state.Pastes.findIndex((item) => item._id === paste._id)
      if (index >= 0) {
        state.Pastes[index] = paste
        localStorage.setItem("Pastes", JSON.stringify(state.Pastes))
        toast.success(" Update sucessfully")
      }
      else{
        toast.error("No record found")
      }

    },

    resetallpaste: (state, action) => {
      state.Pastes = [];
      localStorage.removeItem("Pastes")
      toast.success("Notes clear successfully")
    },
    deletepaste: (state, action) => {
      const Pasteid = action.payload;
      console.log(Pasteid);
      const index = state.Pastes.findIndex((item) => item._id === Pasteid)
      if (index >= 0) {
        state.Pastes.splice(index, 1);
        localStorage.setItem("Pastes", JSON.stringify(state.Pastes))
        toast.success(" Deleted sucessfully")
      }
      else{
        toast.error("No record found")
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addtopaste, updatetopaste, resetallpaste, deletepaste } = Pasteslice.actions

export default Pasteslice.reducer