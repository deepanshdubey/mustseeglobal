// import { CustomLink } from "@/data/types";
// import React, { FC } from "react";
// import twFocusClass from "@/utils/twFocusClass";
// import Link from "next/link";
// import { Route } from "@/routers/types";

// const DEMO_PAGINATION: CustomLink[] = [
//   {
//     label: "1",
//     href: "#",
//   },
//   {
//     label: "2",
//     href: "#",
//   },
//   {
//     label: "3",
//     href: "#",
//   },
//   {
//     label: "4",
//     href: "#",
//   },
// ];

// export interface PaginationProps {
//   className?: string;
// }

// const Pagination: FC<PaginationProps> = ({ className = "" }) => {
//   const renderItem = (pag: CustomLink, index: number) => {
//     if (index === 0) {
//       // RETURN ACTIVE PAGINATION
//       return (
//         <span
//           key={index}
//           className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white ${twFocusClass()}`}
//         >
//           {pag.label}
//         </span>
//       );
//     }
//     // RETURN UNACTIVE PAGINATION
//     return (
//       <Link
//         key={index}
//         className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
//         href={pag.href as Route}
//       >
//         {pag.label}
//       </Link>
//     );
//   };

//   return (
//     <nav
//       className={`nc-Pagination inline-flex space-x-1 text-base font-medium ${className}`}
//     >
//       {DEMO_PAGINATION.map(renderItem)}
//     </nav>
//   );
// };

// export default Pagination;

import { CustomLink } from "@/data/types";
import React, { FC } from "react";
import twFocusClass from "@/utils/twFocusClass";
import Link from "next/link";
import { Route } from "@/routers/types";
import Button from "./Button";

const DEMO_PAGINATION: CustomLink[] = [
  {
    label: "1",
    href: "#",
  },
  {
    label: "2",
    href: "#",
  },
  {
    label: "3",
    href: "#",
  },
  {
    label: "4",
    href: "#",
  },
];

export interface PaginationProps {
  className?: string;
}

const Pagination: FC<any> = ({
  className = "",
  page,
  setPage = () => {},
  totalPages,
  setPageChanged,
}) => {
  const handlePagination = (page: any) => {
    //
    setPage(page);
    setPageChanged(true);
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    for (let pag = 1; pag <= totalPages; pag++) {
      if (pag == page) {
        paginationItems.push(
          <Button
            key={pag}
            className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white ${twFocusClass()}`}
          >
            {pag}
          </Button>
        );
      } else {
        paginationItems.push(
          <Button
            key={pag}
            onClick={() => handlePagination(pag)}
            className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
            // href={pag.href as Route}
          >
            {pag}
          </Button>
        );
      }
    }
    return paginationItems;
  };

  const renderItem = (pag: any, index: number) => {
    // if (index === 0) {

    if (index == page - 1) {
      // RETURN ACTIVE PAGINATION
      return (
        <span
          key={index}
          className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white ${twFocusClass()}`}
        >
          {pag.label}
        </span>
      );
    }
    // RETURN UNACTIVE PAGINATION
    return (
      // <Link
      //   key={index}
      //   className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
      //   href={pag.href as Route}
      // >
      //   {pag.label}
      // </Link>

      <Button
        key={index}
        onClick={() => handlePagination(pag.label)}
        className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
        // href={pag.href as Route}
      >
        {pag.label}
      </Button>
    );
  };

  return (
    <nav
      className={`nc-Pagination inline-flex space-x-1 text-base font-medium ${className}`}
    >
      {/* {DEMO_PAGINATION.map(renderItem)} */}
      {totalPages > 1 && renderPaginationItems()}
    </nav>
  );
};

export default Pagination;
