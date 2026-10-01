import { useState, useEffect } from "react";

export function useDebounce(value: string, delay: number) {
    const [useDebouncedValue, setUseDebouncedvalue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setUseDebouncedvalue(value)
        }, delay)

        return () => {
            clearTimeout(timer)
        }

    }, [value, delay])

    return useDebouncedValue

}