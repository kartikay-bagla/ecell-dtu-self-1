const reportDiv = document.getElementById("report");
ReactDOM.render(<ReportSection />, reportDiv);
function ReportSection() {
    const objs = [
        {src: "https://drive.google.com/file/d/1CRTyTVrshcmWzfLtU59CYmj_57SSgG3/preview", fileName: "File 1"},
        {src: "https://drive.google.com/file/d/1CRTyTVrshcmWzfLtU59CYmj_57SSgG3/preview", fileName: "File 1"},
        {src: "https://drive.google.com/file/d/1CRTyTVrshcmWzfLtU59CYmj_57SSgG3/preview", fileName: "File 1"},
        {src: "https://drive.google.com/file/d/1CRTyTVrshcmWzfLtU59CYmj_57SSgG3/preview", fileName: "File 1"},
        {src: "https://drive.google.com/file/d/1CRTyTVrshcmWzfLtU59CYmj_57SSgG3/preview", fileName: "File 1"},
    ];
    var i = 0;


    return <>

        <h1 className="headings insitehead pt-4 pb-4 mb-0" style={{ color: "rgb(0, 0, 0)" }} id="thirdvphp">EVENT <b className="under"> REPORTS</b></h1>
        <div className="thirdvp pt-3 pb-5" >
            <div className="thicontainer" >
                {
                    objs.map((obj) => (
                        <Report key={++i} src={obj.src} title={obj.fileName}/>
                    ))
                }
            </div>
            <br id="thilinebreak" />
        </div>
        <div style={{ padding: "1em" }}></div>
    </>
}

{/* <iframe src={src} width="320" height="240" allow="autoplay"></iframe>; */}

function Report({ src, title }) {
    return <div className="thibox" style={{ backgroundColor: "rgb(0, 0, 0)", width: "300px", height: "400px" }}>
            <div style={{ fontWeight: "800", fontSize: "1.5em", textAlign: "center", color: "whitesmoke" }}>{title}</div>
            <iframe src={src} width="300px" height="400px" allow="autoplay"></iframe>
    </div>;

}

//Original Modified Code.
        // <h1 className="headings insitehead pt-4 pb-4 mb-0" style={{color: "rgb(0, 0, 0)"}} id="thirdvphp">EVENT <b className="under"> REPORTS</b></h1>
        // <div className="thirdvp pt-3 pb-5" >
        //     <div className="thicontainer" >
        //         <div className="thibox" style={{backgroundColor: "rgb(0, 0, 0)", width:"300px", height: "400px" }}>
        //             <div style={{fontWeight: "800", fontSize: "1.5em", textAlign:"center", color: "whitesmoke"}} > Report 1</div>
        //             <iframe src="https://drive.google.com/file/d/1CRTyTVrshcmWzfLtU59CYmj_57SSgGp3/preview" width="300px" height="400px" allow="autoplay">
                        
        //                 {/* <div className="thidetails">
        //                     <div className="thicontent inibackone">
        //                         <iframe src="https://drive.google.com/file/d/1CRTyTVrshcmWzfLtU59CYmj_57SSgGp3/preview" width="320" height="240" allow="autoplay"></iframe>;
        //                         <h3>DTU Connect</h3>
        //                         <a href="initiatives.html#dtucon">Read More</a>
        //                     </div>
        //                 </div> */}
        //             </iframe>
        //         </div>
        //         {/* <div className="thibox" >
        //             <div className="thithumb">
        //                 <img src="image/interndtuweb.jpg" />
        //             </div>
        //             <div className="thidetails">
        //                 <div className="thicontent inibacktwo">
        //                     <img src="image/ecelltext.png" />
        //                     <h3>InternDTU</h3>
        //                     <a href="initiatives.html#interndtu">Read More</a>

        //                 </div>
        //             </div>
        //         </div> */}
        //     </div>
        //     <br id="thilinebreak" />
        // </div>
        // <div style={{padding: "1em"}}></div>