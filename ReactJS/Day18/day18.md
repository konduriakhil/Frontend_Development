# Bootstrap Template

```jsx
import Home from "./components/Home";
import "./App.css";

function App(){
  
  return (
    <div>
      <Home />
    </div>
  )
}

export default App
```
## add it to index.html
```jsx
    <link rel="stylesheet" href=
      "https://cdnis.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />I
```
## create components
```jsx
import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Header from './Header'
import Services from './Services'

const Home = () => {

  return (
    <main className="sch_container">
		
        <Header />
        <Banner />
        <Services />
        <Footer />

		
    </main>
  )

}

export default Home
```

```jsx
import React from "react";

import logo from "../assets/images/10.png";

const Header = () => {
  return (
    <header id="header">
      <div className="header">
        <div className="logo">
            <img src={logo} alt="logo.." />
            </div>
        <div className="mainmenu">
          <ul className="menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <a href="services.html">Services</a>
            </li>
            <li>
              <a href="careers.html">Careers</a>
            </li>
            <li>
              <a href="login.html">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

```
```jsx
import React from 'react'
import banner from '../assets/images/banner.jpg'

const Banner = () => {
  return (
    <section id="banner">
        <div className="banner">
            <img src={banner} alt="Banner image" />
            <div className="bannerinfo">
                <h1>Welcome to Sri Chaitanya School</h1>
                <p>This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation</p>
            </div>
        </div>
    </section>
  )
}

export default Banner
```
```jsx

import React from 'react'

const Services = () => {
  return (
    
    <section id="services">
				<h1 className="section-title">Our Services</h1>
				<div className="services">
					<div className="service">
						<div className="icontitle">
							<div className="icon">
								<i className="fa fa-user"></i>
							</div>
							<div className="title">
								<h4>Some title will come here</h4>
							</div>
						</div>
						<div className="sdesc">
							<p>This program is free software; you can redistribute it and/or modify it under the terms of</p>
						</div>
					</div>
					
					<div className="service">
						<div className="icontitle">
							<div className="icon">
								<i className="fa fa-mobile"></i>
							</div>
							<div className="title">
								<h4>Some title will come here</h4>
							</div>
						</div>
						<div className="sdesc">
							<p>This program is free software; you can redistribute it and/or modify it under the terms of</p>
						</div>
					</div>
					
					<div className="service">
						<div className="icontitle">
							<div className="icon">
								<i className="fa fa-car"></i>
							</div>
							<div className="title">
								<h4>Some title will come here</h4>
							</div>
						</div>
						<div className="sdesc">
							<p>This program is free software; you can redistribute it and/or modify it under the terms of</p>
						</div>
					</div>
					
					<div className="service">
						<div className="icontitle">
							<div className="icon">
								<i className="fa fa-bank"></i>
							</div>
							<div className="title">
								<h4>Some title will come here</h4>
							</div>
						</div>
						<div className="sdesc">
							<p>This program is free software; you can redistribute it and/or modify it under the terms of</p>
						</div>
					</div>
					
					<div className="service">
						<div className="icontitle">
							<div className="icon">
								<i className="fa fa-phone"></i>
							</div>
							<div className="title">
								<h4>Some title will come here</h4>
							</div>
						</div>
						<div className="sdesc">
							<p>This program is free software; you can redistribute it and/or modify it under the terms of</p>
						</div>
					</div>
					
					<div className="service">
						<div className="icontitle">
							<div className="icon">
								<i className="fa fa-envelope"></i>
							</div>
							<div className="title">
								<h4>Some title will come here</h4>
							</div>
						</div>
						<div className="sdesc">
							<p>This program is free software; you can redistribute it and/or modify it under the terms of</p>
						</div>
					</div>
				</div>
			</section>

  )
}

export default Services
```
```jsx
import React from 'react'

const Footer = () => {
  return (
    <footer id="footer">
        <div className="footer">
            <p>&copy; 2022 All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer
```
### install 
```sh
npm i  react-router-dom
```
## routing
```jsx
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const About = () => {
  return (
	<div>
		<Header />
		<Footer />
	</div>
  )
}

export default About
```
```jsx
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path='/about' element={ <About></About>} /> 
      </Routes>
    </BrowserRouter>
  )

}

export default App
```
## change Header with Link component
```jsx
import React from "react";

import logo from "../assets/images/10.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="header">
        <div className="logo">
            <img src={logo} alt="logo.." />
            </div>
                <div className="mainmenu">
                  <ul className="menu">
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <Link to='/about'>About</Link>
                    </li>
                    <li>
                      <Link to='/contact'>Contact Us</Link>
                    </li>
                  </ul>
                </div>
          </div>
    </header>
  );
};

export default Header;
```
### wrong url rendering

```jsx
import React from 'react'

const Error404 = () => {
  return (
    <div>
      <section>
        <h1 style={{ fontSize: '40px', textAlign: 'center' }}>
          404 Page Not Found</h1>
      </section>
    </div >
  )
}

export default Error404
```
```jsx
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const TodoList = () => {
    return (
        <div>
            <Header />
            <section>
                <h1>Todo List</h1>
            </section>
            <Footer />
        </div>
    )
}

export default TodoList
```

### empty div or react fragment or empty fragment
#### To avoid additional divisions we are using this
```jsx
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const TodoList = () => {
    return (
        <React.Fragment>
            <Header />
            <section className='content'>
                <h1>Todo List</h1>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default TodoList
```
```css
.content{
	width: 85%;
	margin: 0px auto;
	padding: 40px 0px;
}
```

# ChatGPT Notes
Here are your **final notes** for the React + Bootstrap routing-based project setup, formatted cleanly and interview-friendly:

---

## 🧱 React Project with Routing, Bootstrap & FontAwesome

---

## 📁 Project Structure Overview

```
/src
 ├── App.js
 ├── App.css
 └── components/
      ├── Home.js
      ├── Header.js
      ├── Banner.js
      ├── Services.js
      ├── Footer.js
      ├── About.js
      ├── TodoList.js
      └── Error404.js
/public
 └── index.html
```

---

## ✅ index.html Setup

Add the following `<link>` inside the `<head>` tag of `public/index.html` to include **FontAwesome**:

```html
<link rel="stylesheet" href="https://cdnis.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
```

---

## 🧩 App.js – With Routing

```jsx
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

## 🏠 Home.js

```jsx
import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import Services from './Services';

const Home = () => {
  return (
    <main className="sch_container">
      <Header />
      <Banner />
      <Services />
      <Footer />
    </main>
  );
};

export default Home;
```

---

## 🧭 Header.js – With Routing Links

```jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/10.png";

const Header = () => {
  return (
    <header id="header">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo.." />
        </div>
        <div className="mainmenu">
          <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
```

---

## 🖼️ Banner.js

```jsx
import React from 'react';
import banner from '../assets/images/banner.jpg';

const Banner = () => {
  return (
    <section id="banner">
      <div className="banner">
        <img src={banner} alt="Banner image" />
        <div className="bannerinfo">
          <h1>Welcome to Sri Chaitanya School</h1>
          <p>This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License...</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
```

---

## 💼 Services.js – With FontAwesome Icons

```jsx
import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <h1 className="section-title">Our Services</h1>
      <div className="services">
        {["user", "mobile", "car", "bank", "phone", "envelope"].map(icon => (
          <div className="service" key={icon}>
            <div className="icontitle">
              <div className="icon">
                <i className={`fa fa-${icon}`}></i>
              </div>
              <div className="title">
                <h4>Some title will come here</h4>
              </div>
            </div>
            <div className="sdesc">
              <p>This program is free software; you can redistribute it and/or modify it under the terms of</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
```

---

## 📞 Footer.js

```jsx
import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer">
        <p>&copy; 2022 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
```

---

## 📄 About.js (Simple Routed Component)

```jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const About = () => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

export default About;
```

---

## ❌ Error404.js – For Wrong URLs

```jsx
import React from 'react';

const Error404 = () => {
  return (
    <div>
      <section>
        <h1 style={{ fontSize: '40px', textAlign: 'center' }}>
          404 Page Not Found
        </h1>
      </section>
    </div>
  );
};

export default Error404;
```

---

## ✅ TodoList.js – Two Versions

### 1. With `div`

```jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const TodoList = () => {
  return (
    <div>
      <Header />
      <section>
        <h1>Todo List</h1>
      </section>
      <Footer />
    </div>
  );
};

export default TodoList;
```

### 2. With `<React.Fragment>` (cleaner DOM)

```jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const TodoList = () => {
  return (
    <React.Fragment>
      <Header />
      <section className='content'>
        <h1>Todo List</h1>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default TodoList;
```

---

## 🧢 Snippet is at `./assets/css/style.css`

```css
.content {
  width: 85%;
  margin: 0px auto;
  padding: 40px 0px;
}
```

---

## 📦 Package Installation

Install React Router DOM (v6+):

```bash
npm i react-router-dom
```

---
