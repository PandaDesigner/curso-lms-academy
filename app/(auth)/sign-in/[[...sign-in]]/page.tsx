import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-4 text-blue-50'>
                <h1 className='font-semibold text-4xl'> Welcom back 👋</h1>
                <p className='text-xl'>Sign in to continue to your account</p>
                <SignIn />
            </div>
        </>
    );
}