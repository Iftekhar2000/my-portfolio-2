import image from "../assets/react-2.svg"


export default function NavBar() {
  return (
    <nav className="px-8 flex justify-between items-center py-4 text-white bg-slate-800 sticky top-0 z-10">
    <div>
        <img
            className="max-w-[200px] md:max-w-[330px]"
            style={{ maxWidth: '40px', maxHeight: '40px' }} 
            src={image}
            alt="my image"
        />
    </div>

    <div className="flex gap-3">
        <div>
            My Skills
        </div>

        <div>
            My Portfolio
        </div>

        <div>
            Footer
        </div>
    </div>
</nav>

  )
}
