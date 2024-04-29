

export function Container({children,title} : any){
    return (
        <>
            <section className="container-border">
                <h2>{title}</h2>
                <hr/>
                <div>{children}</div>
            </section>
        </>
    )
}