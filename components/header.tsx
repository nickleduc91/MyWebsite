import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Link } from 'react-scroll'
import {
  ArrowPathIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import React, { useState } from 'react'
import copy from 'copy-to-clipboard'

const projects = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
]

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
    href: '',
    icon: 'ri-github-fill ri-xl mt-1 text-indigo-600',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function index() {
  const [isCopied, setCopied] = useState(false)

  const copyToClipboard = () => {
    copy('leducnick9@gmail.com')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1900)
  }

  return (
    <header className="sticky top-0 z-50">
      <nav className=" px-4 lg:px-6 py-2.5 bg-black pt-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-gray-400 border-gray-400 block py-2 pr-4 pl-3 border-b-2 hover:bg-gray-50 hover:border-indigo-600 lg:hover:bg-transparent lg:p-0 hover:text-white lg:dark:hover:bg-transparent font-dm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-gray-400 border-gray-400 block py-2 pr-4 pl-3 border-b-2 hover:bg-gray-50 hover:border-indigo-600 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent font-dm"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-gray-400 border-gray-400 block py-2 pr-4 pl-3 border-b-2 hover:bg-gray-50 hover:border-indigo-600 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent font-dm"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-gray-400 border-gray-400 block py-2 pr-4 pl-3 border-b-2 hover:bg-gray-50 hover:border-indigo-600 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent font-dm"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-gray-400 border-gray-400 block py-2 pr-4 pl-3 border-b-2 hover:bg-gray-50 hover:border-indigo-600 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent font-dm"
                >
                  Education
                </Link>
              </li>
              <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                <li>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-500' : 'text-gray-700',
                            'font-dm group inline-flex items-center rounded-md block py-2 pr-6 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700',
                          )}
                        >
                          <span>Socials</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-indigo-600' : 'text-gray-400',
                              'ml-2 h-5 w-5 group-hover:text-indigo-500',
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
                                  href="mailto:leducnick9@gmail.com"
                                >
                                  <i
                                    className="ri-mail-send-line ri-xl mt-1 text-indigo-600"
                                    aria-hidden="true"
                                  />

                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      leducnick9@gmail.com
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
                </li>
              </Popover.Group>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
