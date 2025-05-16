import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Dropdown, DropdownDivider, TextInput } from "flowbite-react";
import { signoutSuccess } from "../redux/user/userSlice";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../assets/Wn Resturants logo.png";

export default function Header() {
    const path = useLocation().pathname;
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl);
        }
    }, [location.search]);

    const handleSignout = async () => {
        try {
            const userId = localStorage.getItem('userId');
            const res = await fetch('/api/user/signout', {
                method: 'POST',
            });
            const data = await res.json();
            if (!res.ok) {
                console.log(data.message);
            } else {
                if (userId) {
                    localStorage.removeItem(`cart_${userId}`);
                }
                dispatch(signoutSuccess());
                navigate(`/`);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(location.search);
        urlParams.set('searchTerm', searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    };

    return (
        <header className="bg-gradient-to-r from-rose-900 via-yellow-900 to-rose-900 shadow-lg relative">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 flex items-center justify-between p-4 mx-auto max-w-7xl">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="logo" className="w-40 hover:opacity-90 transition-opacity" />
                </Link>

                <ul className="flex items-center gap-10">
                    <Link to="/">
                        <li className="hidden sm:inline text-rose-100 hover:text-white transition-colors duration-300 relative group">
                            <span>Home</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-rose-200 via-yellow-200 to-rose-200 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="hidden sm:inline text-rose-100 hover:text-white transition-colors duration-300 relative group">
                            <span>About</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-rose-200 via-yellow-200 to-rose-200 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </li>
                    </Link>
                    {!(currentUser?.role === "Manager" || currentUser?.isAdmin) && (
                        <Link to="/item">
                            <li className="hidden sm:inline text-rose-100 hover:text-white transition-colors duration-300 relative group">
                                <span>Menu</span>
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-rose-200 via-yellow-200 to-rose-200 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            </li>
                        </Link>
                    )}
                </ul>

                <div className='flex gap-4'>
                    {currentUser ? (
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <div className="flex items-center gap-2 group">
                                    <Avatar 
                                        alt='user' 
                                        img={currentUser.profilePicture} 
                                        rounded 
                                        className="ring-2 ring-rose-300/30 ring-offset-1 ring-offset-rose-900 group-hover:ring-rose-300/50 transition-all duration-300"
                                    />
                                    <span className="text-rose-100 group-hover:text-white transition-colors duration-300">
                                        {currentUser.username}
                                    </span>
                                </div>
                            }
                        >
                            <Dropdown.Header>
                                <span className='block text-sm'>@{currentUser.username}</span>
                                <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
                            </Dropdown.Header>
                            <Link to={'/Dashboard?tab=profile'}>
                                <Dropdown.Item>Profile</Dropdown.Item>
                            </Link>
                            <DropdownDivider />
                            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
                        </Dropdown>
                    ) : (
                        <Link to='/signin'>
                            <button className='px-6 py-2 text-rose-100 border-2 border-rose-400/30 hover:border-rose-400 hover:text-white rounded-lg transition-all duration-300 bg-rose-900/40 hover:bg-rose-900/60'>
                                Sign In
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}
