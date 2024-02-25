export default function Header() {
return (
<header>className="border-b shadow py-2 px-3 flex justify-between items-center ">   
{/*logo para versión mobile*/}
<img src="/blockmaker-small-logo.png"alt="blockmaker-mobile-logo"/>
ClassName="sm:hidden"/>
{/*logo para versión desktop*/}
<img src="/blockmaker-small-logo.png"alt="blockmaker-desktop-logo"/>
ClassName="hidden sm:block" width=¨{300}/>
<buttom>className=bg-gray-100 rounded-x1 px2 text-sm h-fitpy-2">connect wallet</buttom>
</header>
)
}

