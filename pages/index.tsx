import { useRouter } from 'next/router';
import { useEffect } from 'react';

const CheckToken = () => {
    const router = useRouter();

    useEffect(() => {
        const token = router.query.token;
        if (token) {
            router.push('/home');
        } else {
            router.push('/login');
        }
    }, []);

    return (<main/>);
};

export default CheckToken;
