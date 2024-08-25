import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const imageHostingKey = "66c36ebac8cfebbc76676fb0650e9ac5";
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const AdmissionForm = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [reqLoader, setReqLoader] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const dateOfBirth = form.dob.value;
    const nationality = form.nationality.value;
    const religion = form.religion.value;
    const gender = form.gender.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const address = form.address.value;
    const admissionClass = form.class.value;
    const guardianName = form.guardianName.value;
    const guardianPhone = form.guardianPhone.value;
    setReqLoader(!reqLoader);

    if (!gender) {
      return alert("please select your gender");
    }
    if (!selectedFile) {
      return alert("please select a file");
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    const response = await fetch(`${imageHostingApi}`, {
      method: "POST",
      body: formData,
    });
    const picData = await response.json();

    if (picData.success) {
      const studentData = {
        name,
        dateOfBirth,
        nationality,
        religion,
        gender,
        phone,
        email,
        address,
        admissionClass,
        guardianName,
        guardianPhone,
        photo: picData.data.url,
      };

      axios
        .post(
          "https://tera-dox-server.vercel.app/students-admission",
          studentData
        )
        .then(() => {
          form.reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Admission Request send successful",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => console.error(err));
    } else {
      alert("Failed to upload image. Please try again.");
    }
  };

  return (
    <div className="my-4 w-[95%] mx-auto shadow-lg rounded-md shadow-blue-100 p-6">
      <div className="my-4">
        <h2 className="text-4xl font-semibold text-blue-300">
          School Admission Form
        </h2>
        <h4 className="font-semibold text-blue-gray-600">
          Enter your admission information bellow
        </h4>
      </div>
      <hr className="border border-blue-300 bg-blue-300" />
      <form onSubmit={handleForm} className="my-2 w-full space-y-6">
        <div>
          <label htmlFor="name" className="font-semibold text-blue-gray-700">
            Student Name
          </label>
          <input
            type="text"
            required
            name="name"
            id="name"
            placeholder="Student Name"
            className="w-full p-2 bg-blue-50 border-none outline-blue-300 rounded-md text-blue-500"
          />
        </div>
        <div className="flex w-full gap-8">
          <div className="w-full">
            <label htmlFor="dob" className="font-semibold text-blue-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              required
              name="dob"
              id="dob"
              className="w-full bg-blue-50 border-none outline-blue-300 p-2 text-blue-500 rounded-md"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="nationality"
              className="font-semibold text-blue-gray-700">
              Nationality
            </label>
            <input
              type="text"
              required
              placeholder="ex : Bangladeshi"
              name="nationality"
              id="nationality"
              className="w-full bg-blue-50 border-none outline-blue-300 p-2 text-blue-500 rounded-md"
            />
          </div>
        </div>
        <div className="flex w-full gap-8">
          <div className="w-full">
            <label
              htmlFor="religion"
              className="font-semibold text-blue-gray-700">
              Religion
            </label>
            <select
              name="religion"
              id="religion"
              className="w-full bg-blue-50 border-none outline-blue-300 p-2 text-blue-500 rounded-md">
              <option value="islam">Islam</option>
              <option value="hindu">Hindu</option>
              <option value="buddha">Buddha</option>
              <option value="christian">Christian</option>
            </select>
          </div>
          <div className="w-full">
            <h3>Gender</h3>
            <div className="w-full flex gap-4 bg-blue-50 p-2 rounded-md text-blue-500">
              <div className="space-x-2">
                <input type="radio" id="male" name="gender" value="Male" />
                <label htmlFor="male">Male</label>
              </div>

              <div className="space-x-2">
                <input type="radio" id="female" name="gender" value="Male" />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-8">
          <div className="w-full">
            <label htmlFor="phone" className="font-semibold text-blue-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              required
              name="phone"
              id="phone"
              placeholder="ex : +8801500000000"
              className="w-full bg-blue-50 border-none outline-blue-300 p-2 text-blue-500 rounded-md"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="font-semibold text-blue-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="ex : jhon@doe.co"
              name="email"
              id="email"
              className="w-full bg-blue-50 border-none outline-blue-300 p-2 text-blue-500 rounded-md"
            />
          </div>
        </div>
        <div>
          <label htmlFor="address" className="font-semibold text-blue-gray-700">
            Address
          </label>
          <input
            type="text"
            required
            name="address"
            id="address"
            placeholder="ex : Thana, District, Country"
            className="w-full p-2 bg-blue-50 border-none outline-blue-300 rounded-md text-blue-500"
          />
        </div>
        <div>
          <label htmlFor="class" className="font-semibold text-blue-gray-700">
            Admission Class
          </label>
          <input
            type="text"
            required
            name="class"
            id="class"
            placeholder="Which Class you want to admit"
            className="w-full p-2 bg-blue-50 border-none outline-blue-300 rounded-md text-blue-500"
          />
        </div>
        <div className="flex w-full gap-8">
          <div className="w-full">
            <label
              htmlFor="guardianName"
              className="font-semibold text-blue-gray-700">
              Guardian Name
            </label>
            <input
              type="text"
              required
              name="guardianName"
              id="guardianName"
              placeholder="ex : Max Plank"
              className="w-full bg-blue-50 border-none outline-blue-300 p-2 text-blue-500 rounded-md"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="guardianPhone"
              className="font-semibold text-blue-gray-700">
              Guardian Phone
            </label>
            <input
              type="tel"
              required
              placeholder="ex : +8801500000000"
              name="guardianPhone"
              id="guardian-phone"
              className="w-full bg-blue-50 border-none outline-blue-300 p-2 text-blue-500 rounded-md"
            />
          </div>
        </div>
        <div>
          <label htmlFor="photo" className="font-semibold text-blue-gray-700">
            Address
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            id="photo"
            className="w-full p-2 bg-blue-50 border-none outline-blue-300 rounded-md text-blue-500"
          />
        </div>
        <input
          type="submit"
          disabled={reqLoader}
          value={`${!reqLoader ? "Submit" : "Loading..."}`}
          className="w-full p-2 bg-blue-500 border-none rounded-md text-blue-50 hover:text-white hover:bg-blue-400 hover:shadow-sm hover:shadow-blue-300 transition-all"
        />
      </form>
    </div>
  );
};

export default AdmissionForm;
