import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-[url('https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center rounded-md my-2">
      <div className="flex flex-col items-center gap-7">
        <h4 className="text-2xl font-semibold text-center text-white">
          Enroll Today, Lead Tomorrow
        </h4>
        <h2 className="text-4xl font-semibold text-white">
          Where Bright Futures Begin: Your First Step to Success
        </h2>

        <Link to="/admission">
          <Button color="blue" className="mx-auto text-center">
            Get Admission Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
