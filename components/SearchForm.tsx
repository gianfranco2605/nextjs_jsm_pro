"use client"

import { useEffect, useState } from 'react';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { formUrlQuery } from '@/sanity/utils';



const SearchForm = () => {

    // next navigation functions
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname(); 

    const [search, setSearch] = useState('');

    // debouncing with useEffect
    // Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.
    // https://www.geeksforgeeks.org/debouncing-in-javascript/

    useEffect(() => {
        const delayDebounceFunction = setTimeout(() => {
            
            let newUrl = '';

            if(search) {
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: 'query',
                    value: search
                })
            } else {
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    keysToRemove: ['query']
                })
            }
            router.push(newUrl, {scroll: false})
        }, 300)

        return () => clearTimeout(delayDebounceFunction)
    }, [search])

    return (
        <form className='flex-center mx-auto mt-10 w-full sm:-mt-5 sm:px-5'>
            <label className='flex-center relative w-full max-w-3xl'>
                <Image
                    src="magnifying-glass.svg"
                    className='absolute left-8'
                    width={32}
                    height={32}
                    alt='Search icon'
                />
                {/* input from shadcn */}
                <Input 
                    className='base-regular h-fit border-0 bg-black-400 py-3 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800'
                    type='text'
                    placeholder='Search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </label>
        </form>
    )
}

export default SearchForm