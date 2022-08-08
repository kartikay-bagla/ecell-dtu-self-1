const sponsorLogo = document.getElementById("sponsorLogoContainer");
ReactDOM.render(<Sponsors/> , sponsorLogo);
function Sponsors(){
    var objs = [
        { link: "/", src: "image/sponsor slide/niyo.png"},
        { link: "/", src: "image/sponsor slide/yocket.png"},
        { link: "/", src: "image/sponsor slide/yocket.png"},
        { link: "/", src: "image/sponsor slide/yocket.png"},
        { link: "/", src: "image/sponsor slide/yocket.png"},
        { link: "/", src: "image/sponsor slide/startuped.png"},
        { link: "/", src: "image/sponsor slide/yocket.png"},
        { link: "/", src: "image/sponsor slide/yocket.png"},
        { link: "/", src: "image/sponsor slide/startuped.png"},
    ];

    var i = 0;

        window.dispatchEvent(new Event('resize'));
    return <>
        {
            objs.map((obj) => (
                <Sponsor key={++i} link={obj.link} src={obj.src} />
            ))
        }
    </>
}
function Sponsor({link, src}){
    return (<div className="swiper-slide">
        <a href={link} target="blank">
            <img src={src} alt="" height="100%"/>
        </a>
    </div>);
}