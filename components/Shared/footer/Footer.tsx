
import Link from 'next/link';
import { CONSTANTS } from '../constants';

export const Footer = () => {
    return (
        <footer className='py-4 px-6 border-t bg-white w-full'>
            <div className='flex justify-between items-center text-sm
            text-slate-400'>
                <p>{CONSTANTS.footerYear}</p>
                <div className='flex gap-4 items-center'>
                    <Link className='hover:text-violet-900/60 hover:opacity-80 transition-all' href="/privacy-policy"> {CONSTANTS.private} </Link>
                    <Link className='hover:text-violet-900/60 hover:opacity-80 transition-all' href="/terms"> {CONSTANTS.terms} </Link>
                </div>
            </div>
        </footer>
    )
}
