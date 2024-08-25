import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProfileCard } from "../components/ProfileCard";

const Studennts = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios("https://tera-dox-server.vercel.app/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  }, []);

  console.log(students);
  return (
    <div>
      <div className="bg-blue-50 p-3 my-2 rounded-md">
        <h2 className="text-3xl font-semibold text-blue-gray-700">
          Admission Request's
        </h2>
        <p className="font-semibold text-lg text-blue-500">
          Total Admission Requests is: {students.length}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {students.map((student, i) => (
          <ProfileCard key={i} student={student}></ProfileCard>
        ))}
      </div>
    </div>
  );
};

export default Studennts;
