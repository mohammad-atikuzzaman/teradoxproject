import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios(`https://tera-dox-server.vercel.app/details/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className=" my-4 rounded-md p-5 mx-auto sm:p-10 md:p-16 bg-blue-800 text-gray-100">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={data?.photo}
          alt={data?.name}
          className="w-full h-60 sm:h-96 bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-blue-900">
          <div className="space-y-2">
            <p className="inline-block text-2xl font-semibold sm:text-3xl">
              {data?.name}
            </p>
            <div className="text-xs text-gray-400">
              <p className="text-xs hover:underline">
                Class {data.admissionClass}
              </p>
            </div>
          </div>
          <div className="text-gray-100 space-y-2">
            <div className="flex justify-between">
              <p>Nationality : {data?.nationality}</p>
              <p>Religion : {data?.religion}</p>
            </div>
            <div className="flex justify-between">
              <p>Date Of Birth : {data?.dateOfBirth}</p>
              <p>Gender : {data?.gender}</p>
            </div>
            <div className="flex justify-between">
              <p>Phone : {data?.phone}</p>
              <p>Email : {data?.email}</p>
            </div>
            <p> Address : {data?.address}</p>
            <div className="flex justify-between">
              <p>Guardian Name : {data?.guardianName}</p>
              <p>Guardian Phone {data?.guardianPhone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
