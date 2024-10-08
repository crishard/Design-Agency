
export const Input = () => {
  return (
    <div className="relative">
                    
    <input
        type="text"
        placeholder="Enter Your Email Address"
        className="border-[1.5px] px-6 py-4 pr-20 border-black rounded-xl w-full"
    />


    <button
        className="bg-orange px-5 py-3 font-semibold rounded-xl text-white absolute right-2 top-1/2 transform -translate-y-1/2 max-[470px]:static max-[470px]:mt-12"
    >
        Subscribe
    </button>
</div>
  )
}
