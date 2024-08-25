import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function ProfileCard({student}) {
  const {_id, photo,name, admissionClass, phone, email}= student;
  return (
    <Card className="shadow-lg hover:bg-blue-50 transition-all">
      <div className="mx-auto">
        <img
          src={photo}
          alt={name}
          className="h-28 mt-4"
        />
      </div>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
       Class : {admissionClass}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
         Phone : {phone}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Email : {email}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Link to={`/details/${_id}`}> <Button color="blue">Details</Button></Link>
      </CardFooter>
    </Card>
  );
}
