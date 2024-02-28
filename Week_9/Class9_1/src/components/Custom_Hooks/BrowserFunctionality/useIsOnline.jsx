import React, { useEffect, useState } from 'react'

const useIsOnline = () => {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    useEffect(() => {
        // These events will run whenever the user will be online or offline
        window.addEventListener('offline', () => setIsOnline(false));
        window.addEventListener('online', () => setIsOnline(true));
    }, [])

  return isOnline
}

export default useIsOnline
