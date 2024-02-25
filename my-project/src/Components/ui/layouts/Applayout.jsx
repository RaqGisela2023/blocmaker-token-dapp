import Footer from "../../Footer";
import Header from "../../Header";

export default function Applayout({children}){
return (
<>
<Header/> 
<main>className=min-h-[85vh]>{children}
</main>
<Footer/> 
</>
)
} 
Applayout.propTypes={
children:Proptypes.nodes.isRequired   
}