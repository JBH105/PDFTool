import { useContext, useEffect, useState, Fragment } from "react";
import Link from "next/link";
import GlobalContext from "@/contexts/GlobalContext";
import { useRouter } from "next/router";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
const toolsOption = [
  {
    id: 1,
    img: "/assets/tools/merge.png",
    title: "Merge PDF",
    des: "Combine PDFs in the order you want with the easiest PDF merger available.",
    url: "/merge-pdf",
  },
  {
    id: 2,
    img: "/assets/tools/crop.png",
    title: "Crop PDF",
    des: "Reduce file size while optimizing for maximal PDF quality.",
    url: "/crop/flipkart",
  },
  {
    id: 3,
    img: "/assets/tools/word.svg",
    title: "PDF to Word",
    des: "Easily convert your PDF files into easy to edit DOC and DOCX documents. The converted WORD document is almost 100% accurate.",
    url: "#",
  },
  {
    id: 4,
    img: "/assets/tools/powerPoint.svg",
    title: "PDF to PowerPoint",
    des: "Turn your PDF files into easy to edit PPT and PPTX slideshows.",
    url: "#",
  },
  {
    id: 5,
    img: "/assets/tools/excel.svg",
    title: "PDF to Excel",
    des: "Pull data straight from PDFs into Excel spreadsheets in a few short seconds.",
    url: "#",
  },
  {
    id: 9,
    img: "/assets/tools/jpg.svg",
    title: "PDF to JPG",
    des: "Convert each PDF page into a JPG or extract all images contained in a PDF.",
    url: "#",
  },
  {
    id: 6,
    img: "/assets/tools/pdf.svg",
    title: "Word to PDF",
    des: "Make DOC and DOCX files easy to read by converting them to PDF.",
    url: "#",
  },
  {
    id: 7,
    img: "/assets/tools/pPdf.svg",
    title: "PowerPoint to PDF",
    des: "Make PPT and PPTX slideshows easy to view by converting them to PDF.",
    url: "#",
  },
  {
    id: 8,
    img: "/assets/tools/ePdf.svg",
    title: "Excel to PDF",
    des: "Make EXCEL spreadsheets easy to read by converting them to PDF.",
    url: "#",
  },
  {
    id: 10,
    img: "/assets/tools/jPdf.svg",
    title: "JPG to PDF",
    des: "Convert JPG images to PDF in seconds. Easily adjust orientation and margins.",
    url: "#",
  },
];

const ecommerce = [
  {
    id: 1,
    img: "/assets/tools/flipkart-logo.png",
    title: "FlipKart",
    des: "Combine PDFs in the order you want with the easiest PDF merger available.",
    url: "/crop/flipkart",
  },
  {
    id: 2,
    img: "/assets/tools/Meesho_Logo.png",
    title: "Meesho",
    des: "Reduce file size while optimizing for maximal PDF quality.",
    url: "/crop/meesho",
  },
];

const navigation = {
  nav: [
    {
      name: "Home",
      href: "/",
      current: false,
      accept: "",
    },
    // {
    //   name: "Crop PDF",
    //   href: "/crop-pdf",
    //   current: false,
    //   accept: "application/pdf",
    // },
    {
      name: "Merge PDF",
      href: "/merge-pdf",
      current: false,
      accept: "application/pdf",
    },
  ],
  main: [
    {
      name: "PDF To URL",
      href: "/crop-pdf",
      current: false,
      accept: "application/pdf",
    },
    {
      name: "XLSX To URL",
      href: "/xlsx-to-url",
      current: false,
      accept:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    {
      name: "DOC To URL",
      href: "/doc-to-url",
      current: false,
      accept: "application/msword",
    },
    {
      name: "DOCX To URL",
      href: "/docs-to-url",
      current: true,
      accept:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    },
    {
      name: "PPT To URL",
      href: "/ppt-to-url",
      current: false,
      accept: "application/vnd.ms-powerpoint",
    },
    {
      name: "PPTX To URL",
      href: "/pptx-to-url",
      current: false,
      accept:
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    },
    {
      name: "IMAGE To URL",
      href: "/image-to-url",
      current: false,
      accept: "image/*",
    },
  ],
};

export default function Header({ HandelSelectTab }) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { selectTab, setSelectTab } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    setSelectTab(
      navigation.nav?.find((item) => item.href === router?.pathname)
    );
  }, [router.pathname]);

  const closePopover = () => {
    setIsOpen(false);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const HandleTools = (title) => {
    if (title === "Tools") {
      setTools(toolsOption);
    } else {
      setTools(ecommerce);
    }
  };
  return (
    <header className="bg-white top-0 sticky z-[999] shadow-dark">
      <nav
        className="mx-auto flex container items-center justify-between px-6 h-[80px] lg:px-8 "
        aria-label="Global"
      >
        <a href="/" className="-m-1.5 p-1.5">
          {/* <span className="sr-only">Your Company</span> */}
          <img className="h-[60px] w-auto" src="/assets/logo.png" alt="" />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden h-full items-center lg:flex lg:gap-x-12">
          {navigation.nav.map((item) => {
            return (
              <div className="h-full relative items-center lg:flex">
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSelectTab(item)}
                  className={`text-sm group font-semibold leading-6 text-gray-900`}
                >
                  {item.name}
                </Link>
                <div
                  className={`${
                    item.name === selectTab?.name ? "w-full" : "w-0"
                  } absolute bottom-0 h-[2px] bg-gray-700`}
                >
                  {" "}
                </div>
              </div>
            );
          })}
          <div className="relative inline-block text-left">
            <button
              onClick={() => {
                toggleDropdown();
                HandleTools("E-commerce");
              }}
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            >
              E-commerce
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="relative inline-block text-left">
            <button
              onClick={() => {
                toggleDropdown();
                HandleTools("Tools");
              }}
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            >
              Tools
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              {/* <span className="sr-only">Your Company</span> */}
              <img className="h-8 w-auto" src="/assets/Group1.svg" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.nav.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setSelectTab(item);
                      setMobileMenuOpen(false);
                    }}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative inline-block text-left mt-6">
            <button
              onClick={() => {
                router.push("/tools");
                setMobileMenuOpen(false);
              }}
              type="button"
              className="text-sm group font-semibold leading-6 text-gray-900"
            >
              Tools
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>

      {isOpen && (
        <div className="origin-top-right overflow-hidden absolute right-6 mt-1 rounded-3xl shadow-lg bg-white ring-1 ring-gray-900/5">
          <div className="overflow-hidden">
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
                  onClick={closePopover}
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <img
                      src={item.img}
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-auto">
                    <a
                      onClick={() => {
                        router.push(item.url);
                      }}
                      className="block font-semibold text-gray-900"
                    >
                      {item.title}
                      <span className="absolute inset-0" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                >
                  <item.icon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
