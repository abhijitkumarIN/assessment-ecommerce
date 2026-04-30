
export default function Container({
    children,
    className 
}: Readonly<{
    children: React.ReactNode;
    className?:string
}>) {
    return (
        
        <div className={`max-w-312 mx-auto lg:px-0 md:px-0 px-1 ${className}`}>
            {children}
        </div>

    )
}