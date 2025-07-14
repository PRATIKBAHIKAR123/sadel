export default function TopCompanies(){
    const comp = [
        
        {id: 2, name: "Company 2", img: "/Images/brands/image 3.png"},
        {id: 3, name: "Company 3", img: "/Images/brands/image 4.png"},
        {id: 4, name: "Company 4", img: "/Images/brands/image 5.png"},
        {id: 5, name: "Company 5", img: "/Images/brands/image 6.png"},
        {id: 6, name: "Company 6", img: "/Images/brands/image 7.png"},
        {id: 7, name: "Company 7", img: "/Images/brands/image 8.png"},
        {id: 8, name: "Company 8", img: "/Images/brands/image 9.png"},
        {id: 9, name: "Company 9", img: "/Images/brands/image 10.png"},
        {id: 10, name: "Company 10", img: "/Images/brands/image 11.png"},
        {id: 11, name: "Company 11", img: "/Images/brands/image 12.png"},
        {id: 12, name: "Company 12", img: "/Images/brands/image 13.png"},
        {id: 13, name: "Company 13", img: "/Images/brands/image 14.png"},
        {id: 14, name: "Company 14", img: "/Images/brands/image 15.png"},
        {id: 15, name: "Company 15", img: "/Images/brands/image 16.png"},
        {id: 16, name: "Company 16", img: "/Images/brands/image 17.png"},
        {id: 17, name: "Company 17", img: "/Images/brands/image 18.png"},
        {id: 18, name: "Company 18", img: "/Images/brands/image 19.png"},
        {id: 19, name: "Company 19", img: "/Images/brands/image 20.png"},
        {id: 20, name: "Company 20", img: "/Images/brands/image 21.png"},
        {id: 21, name: "Compnay 21", img: "/Images/brands/image 22.png"}
    ]
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="justify-start text-[#0e0f10] text-5xl font-bold font-['Urbanist'] leading-[72px]">
                Top company trust us
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-8">
                {comp.map((c,idx:number)=>(<div key={idx} className="bg-white rounded-xl shadow-[0px_4px_24px_0px_rgba(0,0,0,0.02)] p-4 flex items-center justify-center">
                    <div className="h-9 w-auto">
                    <img src={c.img} alt={c.name} className="w-full h-full" />
                    </div>
                </div>))}
            </div>
        </div>
    )
}