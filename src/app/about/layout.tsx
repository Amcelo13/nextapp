import '../about.css'
const AboutLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="about-layout">
            Hello from About Layout
           {children}
        </div>
       )
    
}
export default AboutLayout