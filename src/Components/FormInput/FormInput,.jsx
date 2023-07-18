import React, { useState } from "react";
import ListForm from "../ListForm/ListForm";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getSinhVien, themSV, suaSV, setEdit } from "../../redux/formSlice";
import * as yup from "yup";

const FormInput = () => {
  const { sinhVien, edit } = useSelector((state) => {
    return state.arrSinhVien;
  });
  console.log(sinhVien);
  console.log(edit);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      maSV: sinhVien.maSV,
      hoTen: sinhVien.hoTen,
      email: sinhVien.email,
      sdt: sinhVien.sdt,
    },
    validationSchema: yup.object({
      maSV: yup.string().required("Mã sinh viên không được bỏ trống"),
      hoTen: yup.string().required("Họ tên không được bỏ trống"),
      email: yup.string().required("email Không được để trống"),
      sdt: yup.string().required("Số điện thoại không được bỏ trống"),
    }),
    enableReinitialize: true,
    onSubmit: (values) => {
      if (edit) {
        dispatch(suaSV(values));
        dispatch(setEdit(false));
        dispatch(
          getSinhVien({
            maSV: "",
            hoTen: "",
            email: "",
            sdt: "",
          })
        );
        formik.handleReset();
      } else {
        dispatch(themSV(values));
        formik.handleReset();
      }
    },
  });
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
    touched,
    errors,
    values,
  } = formik;
  return (
    <>
      <div className="text-3xl fw-bold text-white text-center py-3 bg-slate-800">
        Thông Tin Sinh Viên
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <label class="block mb-2 text-xl font-medium text-gray-900 ">
              Mã Sinh Viên
            </label>
            <input
              onBlur={handleBlur}
              disabled={edit}
              type="text"
              name="maSV"
              value={values.maSV}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
             {errors.maSV && touched.maSV ?  <p className="text-red-500">{errors.maSV}</p> : ""}
            <label class="block mb-2 text-xl font-medium text-gray-900 ">
              Số Điện Thoại
            </label>
            <input
                          onBlur={handleBlur}

              type="number"
              name="sdt"
              value={values.sdt}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
              {errors.sdt && touched.sdt ?  <p className="text-red-500">{errors.sdt}</p> : ""}
          </div>
          <div className="col-6">
            <label class="block mb-2 text-xl font-medium text-gray-900 ">
              Họ và Tên
            </label>
            <input
                          onBlur={handleBlur}

              type="text"
              name="hoTen"
              value={values.hoTen}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
              {errors.hoTen && touched.hoTen ?  <p className="text-red-500">{errors.hoTen}</p> : ""}
            <label class="block mb-2 text-xl font-medium text-gray-900 ">
              Email
            </label>
            <input
                          onBlur={handleBlur}

              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.email && touched.email ?  <p className="text-red-500">{errors.email}</p> : ""}
          </div>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-3"
        >
          Thêm
        </button>
      </form>
      <ListForm />
    </>
  );
};

export default FormInput;
