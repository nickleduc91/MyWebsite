import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Link } from 'react-scroll'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import React, { useState } from 'react'
import copy from 'copy-to-clipboard'

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nick-leduc-00178a231',
    icon: 'ri-linkedin-box-line ri-xl mt-1 text-indigo-600',
  },
  {
    name: 'Discord',
    href: 'https://discordapp.com/users/526523157763325953',
    icon: 'ri-discord-line ri-xl mt-1 text-indigo-600',
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

  return (
    <header className="sticky top-0 z-50">
      <nav className=" px-4 md:px-6 py-2.5 bg-black pt-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="justify-between items-center w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <div className="hidden md:flex md:flex-row md:space-x-8 md:mt-0">
                {tabs.map((tab) => (
                  <li>
                    <Link
                      key={tab.name}
                      to={tab.to}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer hover:text-white text-gray-400 border-gray-400 block py-2 pr-4 pl-3 border-b-2 hover:bg-gray-50 hover:border-indigo-600 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 font-dm"
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
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-500' : 'text-gray-700',
                            'font-dm group inline-flex items-center rounded-md block py-2 pr-6 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700',
                          )}
                        >
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
          </div>
        </div>
      </nav>
    </header>
  )
}
