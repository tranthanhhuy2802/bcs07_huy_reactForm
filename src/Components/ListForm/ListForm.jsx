import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSinhVien,
  suaSV,
  xoaSV,
  setEdit,
  searchMaSV,
} from "../../redux/formSlice";

const ListForm = () => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const { arrSinhVien, arrSearch } = useSelector((state) => {
    return state.arrSinhVien;
  });
  console.log(arrSinhVien);
  console.log(arrSearch);
  return (
    <div>
      <input
        className="w-1/3 border-2 "
        placeholder="tìm kiếm mã sinh viên"
        onChange={(event) => {
          setSearch(event.target.value);
          dispatch(searchMaSV(event.target.value));
        }}
      ></input>
      <span>
        <button
          onClick={() => {
            dispatch(searchMaSV(search));
          }}
          className="bg-green-500 border-2"
        >
          Tìm Kiếm
        </button>
      </span>
      <table className="table" cellPadding={20}>
        <thead className="bg-dark text-white">
          <tr>
            <th>Mã Sv</th>
            <th>Họ và Tên</th>
            <th>Số Điện Thoại </th>
            <th>Email</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {(search
            ? arrSearch
            : arrSinhVien).map((item, index) => {
                const { maSV } = item;
                return (
                  <tr key={index}>
                    <td>{item.maSV}</td>
                    <td>{item.hoTen}</td>
                    <td>{item.sdt}</td>
                    <td>{item.email}</td>
                    <td>
                      <button
                        onClick={() => {
                          dispatch(xoaSV(maSV));
                        }}
                        className="bg-red-500 py-2 px-4 rounded-lg text-white"
                      >
                        Xóa
                      </button>
                      <button
                        onClick={() => {
                          dispatch(
                            getSinhVien(item),
                            dispatch(setEdit("true"))
                          );
                        }}
                        className="bg-yellow-500 py-2 px-4 rounded-lg ml-3 text-white"
                      >
                        Sửa
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default ListForm;
