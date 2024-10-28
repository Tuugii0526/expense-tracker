import Nav from "@/components/nav/Nav";

export default function Layout({ children }) {
  return (
    <div className="w-full h-fit bg-slate-50  grid grid-rows-[72px_1fr]">
      <div className="w-full h-[72px] bg-white">
        <div className="h-full w-[80%] max-w-[1200px] min-w-[240px] m-auto">
          <Nav/>
        </div>
      </div>
      <div className="flex ">
        <div className="h-[1150px] w-[80%] max-w-[1200px] min-w-[240px] m-auto my-10 rounded-2xl  "> 
          {children}
        </div>
      </div>
    </div>
  );
}