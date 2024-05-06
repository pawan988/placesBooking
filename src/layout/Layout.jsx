// import React from "react";
// import Sidebar from "../componetns/sidebar/Sidebar";

// const Layout = ({ children, noSidebar }) => {
//   return (
//     <div className="md:flex">
//       {!noSidebar && <Sidebar />}
//       <div className={!noSidebar ? "p-4 sm:ml-64 w-full" : "w-full"}>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Layout;

import React from "react";
import Sidebar from "../componetns/sidebar/Sidebar";
import Header from "../componetns/header/Header";

const Layout = ({ children, noSidebar, setIsOpen, isOpen }) => {
  return (
    <div className="flex">
      {!noSidebar && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className={!noSidebar ? "p-4 sm:ml-5 w-full" : "w-full"}>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
