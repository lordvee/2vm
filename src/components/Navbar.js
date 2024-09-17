import Image
    from "next/image";
export default function Navbar(props){
    
    console.log( props);
    const { sel: [selection, setSelection], pickSection} = props;
    console.log( selection, setSelection, pickSection);
    
    return (
        <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Image src="/img/logo_compact.png"
                    width={120}
                    height={50}
                    alt="Picture of the author"
                />
                <div className="space-x-4">
                    <button  onClick={ ()=> pickSection('home')} className="hover:text-gray-300">Home</button>
                    <button  onClick={ ()=> pickSection('about')} className="hover:text-gray-300">About Us</button>
                    <button onClick={ ()=> pickSection('services')}  className="hover:text-gray-300">Services</button>
                    <button onClick={ ()=> pickSection('product')}  className="hover:text-gray-300">Products</button>
                    <button onClick={ ()=> pickSection('contact')}  className="hover:text-gray-300">Contact</button>
                </div>
            </div>
        </nav>
    );
}
