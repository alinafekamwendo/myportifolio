import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col gap-2 md:flex-row ">
        <span className=" md:text-2xl">Alinafe C. Kamwendo</span>
          <div className="text-[#ADB7BE] mb-4 max-w-md">
          <p>
            Emails: <span className="text-green-500">kamwendoalina@gmail.com</span>, <span className="text-orange-400">alinafekamwendo11@gmail.com</span>
          </p>
          <p>
            Address: <span className="text-green-500">P.O Box 31808
Lilongwe 3</span>
          </p>
          <p>
            {" "}
            Phone: <span className="text-gray-100 font-semibold">+265 993 925 060</span>
         </p>
        </div>
        <p className="text-slate-600 font-medium">
              &copy; {new Date().getFullYear()}. All rights reserved .
            </p>
      </div>
    </footer>
  );
};

export default Footer;
