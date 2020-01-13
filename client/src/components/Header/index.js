import React from "react";
import "./style.css";

const NMHeader = (props) =>
{
    return (
        <header className="header-class">
            <nav className="navbar navbar-dark navbar-expand-lg">
                <a className="navbar-brand nav-title px-2" href="https://nmikstas.github.io/portfolio/index.html">Nick Mikstas Portfolio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="container text-center">
                    <h1>{props.title}</h1>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="https://nmikstas.github.io/portfolio/index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://nmikstas.github.io/portfolio/resume.html">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://nmikstas.github.io/portfolio/web.html">Web</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://nmikstas.github.io/portfolio/embedded.html">Embedded</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://nmikstas.github.io/portfolio/fpga.html">FPGA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://nmikstas.github.io/portfolio/dsp.html">DSP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://nmikstas.github.io/portfolio/games.html">Games</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default NMHeader;