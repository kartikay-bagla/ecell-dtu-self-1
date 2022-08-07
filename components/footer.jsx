const footerDiv = document.getElementById("footer");
ReactDOM.render(<Footer />, footerDiv);
function Footer() {
    return <footer>
        <div className="footer-wrapper">
            <div className="single-footer" >
                <img src="image/ecelltext.png" className="footlogo" />
                <p>Entrepreneurship Cell<br />
                    Delhi Technological University<br />
                    (Formerly Delhi College of Engineering)
                </p>
            </div>
            <div className="single-footer">
                <h4>NAVIGATION</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index.html#sixthvphp">E-Summit</a></li>
                    <li><a href="index.html#seventhvphp">SW</a></li>
                    <li><a href="team.html">Team</a></li>
                </ul>
            </div>
            <div className="single-footer">
                <h4>CONTACT US</h4>
                <ul>
                    <li><a href="mailto:info@ecelldtu.in">info@ecelldtu.in</a></li>
                    <li><a href="#">Delhi Technological University </a></li>
                    <li><a href="#">Shahbad Daulatpur, Main Bawana Road, Delhi-110042</a></li>
                    <li><a href="tel:9871500839 ">+91 9871500839</a></li>
                    <li><a href="tel:9711086593">+91 9711086593</a></li>
                </ul>
            </div>
            <div className="single-footer">
                <h4 style={{marginTop:"0"}}>SOCIALS</h4>
                <a href="https://www.linkedin.com/company/ecelldtu/" target="_blank"><img src="image/linkedin logo.jpg" className="socialimg link grow glow" /></a>
                <a href="https://www.instagram.com/ecelldtu/" target="_blank"><img src="image/instagram logo.jpg" className="socialimg link grow glow" /></a>
                <a href="https://twitter.com/ecelldtu?lang=en" target="_blank"><img src="image/twitter logo.png" className="socialimg link grow glow" /></a>
                <a href="https://www.facebook.com/ECellDTU/" target="_blank"><img src="image/facebook logo.png" className="socialimg link grow glow" /></a>
                <a href="https://www.youtube.com/user/ecelldtu" target="_blank"><img src="image/youtube logo.png" className="socialimg link grow glow" /></a>
                <a href="https://www.quora.com/q/utucvggigaejekxt" target="_blank"><img src="image/quora logo.png" className="socialimg link grow glow" /></a>
            </div>
        </div>
        <hr style={{backgroundColor: "#f3f4f69a"}}/>
        <div className="bottomline">
            <div className="crypt"> © 2020 E-Cell DTU. All Rights Reserved</div>
            <div className="desby"> <a href="thev.html" >Meet The Developers </a></div>
        </div>
    </footer>
}