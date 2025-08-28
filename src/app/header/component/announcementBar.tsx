import Link from "next/link";

const AnnouncementBar = () => {
    return (
        <div className="hidden md:block bg-black/40 text-white/80 backdrop-blur-sm absolute z-50 w-full">
            <div className="max-w-[1250px] mx-auto px-6 py-2 flex items-center justify-between text-[13px]">
                <div className="flex items-center gap-3">
                    <Link href="/ar" className="hover:text-white">العربية</Link>
                    <span className="opacity-60">|</span>
                    <span className="text-white">English</span>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="/en/global-contacts" className="hover:text-white">
                        Global contacts
                    </Link>
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 hover:text-white"
                        aria-label="Select region"
                    >
                        <span>You are in Aramco Global</span>
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-white/40">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" focusable="false" className="chakra-icon css-15pu37d" aria-hidden="true"><circle cx="12.0001" cy="12" r="9.6" stroke="#FFFFFF" fill="none" strokeWidth="1.6px" /><path d="M16.7999 12C16.7999 14.766 16.1945 17.2304 15.2553 18.9746C14.2986 20.7514 13.111 21.6 11.9999 21.6C10.8888 21.6 9.70119 20.7514 8.74448 18.9746C7.80531 17.2304 7.1999 14.766 7.1999 12C7.1999 9.23398 7.80531 6.76951 8.74448 5.02534C9.70119 3.24859 10.8888 2.39998 11.9999 2.39998C13.111 2.39998 14.2986 3.24859 15.2553 5.02534C16.1945 6.76951 16.7999 9.23398 16.7999 12Z" stroke="#FFFFFF" fill="none" strokeWidth="1.6px" /><path d="M20 17C20 15.8954 16.4183 15 12 15C7.58172 15 4 15.8954 4 17" stroke="#FFFFFF" fill="none" strokeWidth="1.6px" /><path d="M4 7C4 8.10457 7.58172 9 12 9C16.4183 9 20 8.10457 20 7" stroke="#FFFFFF" fill="none" strokeWidth="1.6px" /><line x1="12" y1="3.19995" x2="12" y2="20.8" stroke="#FFFFFF" fill="none" strokeWidth="1.6px" /></svg>
                        </span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path d="M4 8.5L12 16.5L20 8.5" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementBar;