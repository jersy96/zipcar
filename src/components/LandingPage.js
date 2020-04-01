import React from 'react';
import '../styles/main.css';
import Mockup from '../images/mockup.png';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="App">
      <div id="showcase">
        <header>
            <nav class='cf'>
                <ul class='cf'>
                    <li class="hide-on-small">
                        <a href='#showcase'>Zipcar</a>
                    </li>
                    <li>
                        <a href='#rent'>Rent</a>
                    </li>
                    <li>
                        <a href='#singup'>Sing up</a>
                    </li>
                    <li>
                        <a href='#gifcard'>Giftcard</a>
                    </li>
                </ul>
                <a href='#' id='openup'>Zipcar</a>
            </nav>
        </header>

        <div class="section-main container">
            <h1>Zipcar.</h1>
            <h2>The way car renting must be.</h2>
            <p class="lead hide-on-small">
                Renting a car never was too easy. Register, set your close location to take your car and start the trip you always wanted. With Zipcar we take the experience to a whole new level, so, what are you waitting for?
            </p>
        </div>
      </div>
      <section id="rent" class="section">
        <div class="container">
          <h2 class="section-head">
            <i class="fas fa-car"></i> Rent
          </h2>
          <h3>Ready to go? Fill the form and we will set it up for you.
          </h3>
          <p class="lead">
            Totally free, only pay when the service is used.
          </p>
          <Link to="login" className="btn btn-primary">Start now</Link>
          <img src={Mockup} alt="abc"/>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
