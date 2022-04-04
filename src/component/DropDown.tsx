import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
// import { ChevronDownIcon } from '@heroicons/react/solid'
import { Listbox } from "@headlessui/react";
import { UserContext } from "../context/Context";

const DropDown = ({setSearchProduct}:any) => {
  const { productView } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState<any>({});
   console.log(searchTerm.name,"searchterm ");

  // console.log(searchterm);

  // const filterDropDown=productView.filter((val:any)=>{
  //  return val=== productView;
  // })

  // useEffect(()=>{
  //   console.log({searchterm});
  // },[searchterm])

  // useEffect(()=>{
  //   console.log({productView});
  //   setSearchTerm(productView[0])
  // },[productView])

  return (
    <>
      <div className="w-72   fixed ">
        <Listbox value={searchTerm} onChange={setSearchProduct}>
          <div className="relative mt-1">
            <Listbox.Button
              className="relative w-full h-14 mt-4 py-2 pl-3 pr-10 text-left 
                                   bg-slate-700 rounded-lg shadow-md cursor-default focus:outline-none 
                                   focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white 
                                   focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 
                                   focus-visible:border-indigo-500 sm:text-sm text-white"
            >
              <label className="text-white"></label>
              <span className="block truncate">
                {searchTerm ? searchTerm.name : null}
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white
                                          rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 
                                          focus:outline-none sm:text-sm"
              >
                {productView.map((person: any, personIdx: any) => (
                  
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `cursor-default select-none relative py-2 pl-10 pr-4 ${
                        active ? "text-amber-900 bg-amber-100" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            {/* <CheckIcon className="w-5 h-5" aria-hidden="true" /> */}
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </>
  );
};

export default DropDown;
