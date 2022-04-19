import React, { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

import Avatar1 from "assets/avatar/1.png";
import Avatar2 from "assets/avatar/2.png";
import Avatar3 from "assets/avatar/3.png";
import Avatar4 from "assets/avatar/4.png";
import Avatar5 from "assets/avatar/5.png";
import Avatar6 from "assets/avatar/6.png";
import Avatar7 from "assets/avatar/7.png";
import Avatar8 from "assets/avatar/8.png";
import Avatar9 from "assets/avatar/9.png";
import Avatar10 from "assets/avatar/10.png";
import Avatar11 from "assets/avatar/11.png";
import Avatar12 from "assets/avatar/12.png";
import Avatar13 from "assets/avatar/13.png";
import Avatar14 from "assets/avatar/14.png";
import Avatar15 from "assets/avatar/15.png";
import Avatar16 from "assets/avatar/16.png";

const plans = [
    {
        icon: Avatar1,
        val: "1"
    },
    {
        icon: Avatar2,
        val: "2"
    },
    {
        icon: Avatar3,
        val: "3"
    },
    {
        icon: Avatar4,
        val: "4"
    },
    {
        icon: Avatar5,
        val: "5"
    },
    {
        icon: Avatar6,
        val: "6"
    },
    {
        icon: Avatar7,
        val: "7"
    },
    {
        icon: Avatar8,
        val: "8"
    },
    {
        icon: Avatar9,
        val: "9"
    },
    {
        icon: Avatar10,
        val: "10"
    },
    {
        icon: Avatar11,
        val: "11"
    },
    {
        icon: Avatar12,
        val: "12"
    },
    {
        icon: Avatar13,
        val: "13"
    },
    {
        icon: Avatar14,
        val: "14"
    },
    {
        icon: Avatar15,
        val: "15"
    },
    {
        icon: Avatar16,
        val: "16"
    }
]

export default function Example() {
    const [selected, setSelected] = useState(plans[0])

    return (
        <RadioGroup className="grid sm:grid-cols-4 grid-cols-3 sm:grid-rows-4 grid-rows-6 gap-1" value={selected} onChange={setSelected}>
            {plans.map((plan) => (
                <RadioGroup.Option
                    key={plan.name}
                    value={plan}
                    className={({ checked }) =>
                        `${checked ? 'bg-purple bg-opacity-75 text-white border-white border' : 'bg-white'} md:w-32 md:h-32  h-28 w-28 relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                    }
                >
                    {() => (
                        <img className='w-full h-full border-darkGray bg-darkGray rounded-full border' src={plan.icon} alt="" />
                    )}
                </RadioGroup.Option>
            ))}

        </RadioGroup>
    )
}

/* function CheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
                                <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
                                <path
                                    d="M7 13l3 3 7-7"
                                    stroke="#fff"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            )
} */