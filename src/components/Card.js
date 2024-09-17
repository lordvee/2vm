const Card = ({children})=> {
    return (
        <div class="bg-white bg-opacity-90 lg:p-8 md:p-6 rounded-lg shadow-lg max-w-3xl border-2 border-transparent transition duration-200 ease-out hover:border-slate-500 hover:shadow-[0_0_20px_5px_rgb(93,117,130)]">
            {...children}
         </div>
    )
}

export default Card;