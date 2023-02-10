const HomeProduct=({title})=>{

    return(<>
    <div className="py-16 bg-neutral-50">
    <h1 className="font-display font-bold text-lg text-slate-900 px-8">{title}</h1>

<div className="flex justify-between py-8 px-8">
    <div>
        Product-Card-1
    </div>
    <div>
        Product-Card-2
    </div>
    <div>
        Product-Card-3
    </div>
    <div className="border-2">
        Product-Card-4
    </div>
</div>
    </div>
    </>)
}

export default HomeProduct;