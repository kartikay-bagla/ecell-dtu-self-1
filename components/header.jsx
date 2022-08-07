const headerDiv = document.getElementById("header");
ReactDOM.render(<Header/>, headerDiv);
function Header(){
    return <header>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
            <a className="navbar-brand pl-3" href="#">
                <img src="image/ecelltext.png" className="logoimg" alt="logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-md-auto mr-5 text-capitalize ">
                    <li className="nav-item ml-0 pl-0 px-2">
                        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link" href="about.html">About <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link" href="intitiatives.html">Initiatives</a>
                    </li>


                    <li className="nav-item px-2">
                        <a className="nav-link" href="#sixthvphp">E-Summit</a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link" href="#seventhvphp">SW</a>
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link" href="social.html">Social</a>
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link" href="https://anchor.fm/entrepreneurship-cell-dtu">Podcast</a>
                    </li>




                    <li className="nav-item dropdown px-2">
                        <a className="nav-link dropdown-toggle" href="#testvphp" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Message
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#testvphp">Testimonials</a>
                            <a className="dropdown-item" href="message.html">Faculty</a>

                        </div>
                    </li>

                    <li className="nav-item px-2">
                        <a className="nav-link" href="#contactformvphp">Contact</a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link" href="/reports">Reports</a>
                    </li>

                    <li className="nav-item dropdown px-2">
                        <a className="nav-link dropdown-toggle" href="#fifthvphp" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Team
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="team.html">Our Team</a>
                            <a className="dropdown-item" href="pastMembers.html">Past Members</a>

                        </div>
                    </li>





                </ul>


            </div>
        </nav>

        <nav className="navbarsm">

            <a className="navbar-brand" href="#">
                <img src="image/ecelltext.png" className="logoimgsm " a="logo"/>
            </a>
        </nav>

        <div className="sidebar" id="sidebar">
            <div className="toggle" onClick={toggle_div}></div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="index.html#aboutvphp">About</a></li>
                <li><a href="index.html#thirdvphp">Initiatives</a></li>

                <li><a href="index.html#sixthvphp">E-Summit</a></li>
                <li><a href="index.html#seventhvphp">SW</a></li>
                <li><a href="social.html">Social</a></li>
                <li><a href="https://anchor.fm/entrepreneurship-cell-dtu">Podcast</a></li>
                <li><a href="index.html#testvphp">Testimonial</a></li>
                <li><a href="index.html#contactformvphp">Contact</a></li>
                <li><a href="message.html">Message</a></li>
                <li><a href="reports.html">Reports</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="pastMembers.html">Past Members</a></li>
            </ul>

        </div>


    </header>
}

