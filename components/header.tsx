import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Link } from 'react-scroll'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import React, { useState } from 'react'
import copy from 'copy-to-clipboard'
import { saveAs } from 'file-saver'

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nick-leduc-00178a231',
    icon: 'ri-linkedin-box-line ri-xl mt-1 text-indigo-600',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/nickleduc91',
    icon: 'ri-github-fill ri-xl mt-1 text-indigo-600',
  },
  {
    name: '(613)-252-3412',
    icon: 'ri-phone-line ri-xl mt-1 text-indigo-600',
  },
]

const tabs = [
  {
    name: 'Home',
    to: 'home',
  },
  {
    name: 'About Me',
    to: 'about',
  },
  {
    name: 'Skills',
    to: 'skills',
  },
  {
    name: 'Experience',
    to: 'experience',
  },
  {
    name: 'Education',
    to: 'education',
  },
  {
    name: 'Projects',
    to: 'projects',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function index() {
  const [isCopied, setCopied] = useState(false)

  const copyToClipboard = () => {
    copy('nickleduc@cmail.carleton.ca')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1900)
  }

  const saveFile = () => {
    saveAs(
      'https://nickleduc.vercel.app/Nicholas-Leduc-Resume.pdf',
      'Nicholas_Leduc_Resume.pdf',
    )
  }

  return (
    <header className="sticky top-0 z-50">
      <nav className=" px-4 md:px-6 py-2.5 bg-black pt-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="justify-between items-center w-full md:flex md:order-1 flex flex-row">
            <ul className="w-auto flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <div className="hidden md:flex md:flex-row md:space-x-8 md:mt-0">
                {tabs.map((tab) => (
                  <li key={tab.name}>
                    <Link
                      to={tab.to}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="text-xl cursor-pointer hover:text-white text-gray-400 border-gray-400 block py-2 pr-4 pl-3 border-b-2 hover:border-indigo-600 hover:bg-transparent md:p-0 font-dm"
                    >
                      {tab.name}
                    </Link>
                  </li>
                ))}
              </div>
              <li>
                <Popover.Group as="nav" className="space-x-10 md:flex">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button className="font-dm group inline-flex items-center rounded-md py-2 pr-6 pl-3 text-xl md:p-0 hover:text-white hover:bg-transparent text-gray-400">
                          <span>Socials</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-indigo-600' : 'text-gray-400',
                              'h-5 w-5 group-hover:text-indigo-500',
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 -ml-4 mt-3 max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-6 bg-gray-400 px-5 py-6 sm:gap-8 sm:p-8">
                                {socials.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-200"
                                    target="_blank"
                                  >
                                    <i
                                      className={item.icon}
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                                <a
                                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-200"
                                  onClick={copyToClipboard}
                                  href="mailto:nickleduc@cmail.carleton.ca"
                                >
                                  <i
                                    className="ri-mail-send-line ri-xl mt-1 text-indigo-600"
                                    aria-hidden="true"
                                  />

                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      nickleduc@cmail.carleton.ca
                                    </p>
                                    <p
                                      className={classNames(
                                        isCopied ? '' : 'hidden',
                                        'flex transition-opacity ease-in duration-700 opacity-100 text-indigo-600',
                                      )}
                                    >
                                      Copied to clipboard!
                                    </p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </Popover.Group>
              </li>
            </ul>
            <div className="mt-3 flex flex-row bg-indigo-600 hover:bg-indigo-500 rounded-2xl py-1.5 px-2 w-48 md:w-40 lg:w-52 ">
              <button
                onClick={saveFile}
                className=" text-xl cursor-pointer text-gray-400 pl-3 font-dm float-right"
              >
                Download CV
              </button>
              <i className="ml-2 mt-0.5 ri-file-download-line text-gray-400"></i>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
