import { Typography } from "@material-tailwind/react";

export function FooterWithLogo() {
  return (
    <footer className="w-full p-8 bg-blue-50 rounded-md">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <Typography as="a" href="/" color="blue-gray" className="font-semibold text-lg ">
          &lt; Dev<span className="text-blue-500">School</span> &gt;
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="text-sm font-normal  transition-colors hover:text-blue-500 focus:text-blue-500">
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="text-sm font-normal  transition-colors hover:text-blue-500 focus:text-blue-500">
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="text-sm font-normal  transition-colors hover:text-blue-500 focus:text-blue-500">
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="text-sm font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-2 border-blue-300" />
      <Typography color="blue-gray" className="text-center font-normal text-xs text-blue-500">
        &copy; 2023 Material Tailwind
      </Typography>
    </footer>
  );
}
