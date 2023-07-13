import { signIn } from 'next-auth/react'
import Image from "next/image";

export default function GoogleButton(props){
    return (
        <div>
            <button type='button' onClick={()=> signIn('google')} className="group relative flex w-full justify-center rounded-md border border-transparent bg-Bluegoogle py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                    <Image
                        src='google.svg'
                        width={24}
                        height={24}
                        alt='google'
                        className='object-contain'
                    />
                </span>
                {props.title}
            </button>
        </div>
    )
}