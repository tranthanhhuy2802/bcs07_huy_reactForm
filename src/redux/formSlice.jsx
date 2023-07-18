import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrSearch:[],
  arrSinhVien: [],
  sinhVien: {
    maSV: "",
    hoTen: "",
    sdt: "",
    email: "",
  },
  edit:false
};
const sinhVienSlice = createSlice({
  name: "itemSV",
  initialState,
  reducers: {
    themSV: (state, action) => {
      const sinhVien = action.payload;
      state.arrSinhVien.push(sinhVien);
    },
    xoaSV: (state, action) => {
      const maSV = action.payload;
      state.arrSinhVien = state.arrSinhVien.filter((sinhVien) => {
        return sinhVien.maSV !== maSV;
      });
    },
    suaSV: (state, action) => {
      const viTri = state.arrSinhVien.findIndex((sinhVien) => {
        return sinhVien.maSV === action.payload.maSV;
      });

      if (viTri !== -1) {
        state.arrSinhVien.splice(viTri, 1);
        state.arrSinhVien.push(action.payload);
      }
    },
    getSinhVien: (state, action) => {
      console.log(action.payload)
      state.sinhVien = action.payload;
      
    },
    setEdit: (state,action)=>{
      console.log(action.payload)
      state.edit = action.payload
    }
  },
});
export const { themSV, getSinhVien, xoaSV, suaSV,setEdit} = sinhVienSlice.actions;

export default sinhVienSlice.reducer;
