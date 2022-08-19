import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


const NavBar =()=>{
    return(
  //     <Navbar bg="dark" variant="dark">
  //     <Container>
  //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  //       <Nav className="me-auto">
  //         <Nav.Link href="#home">Home</Nav.Link>
  //         <Nav.Link href="#features">Features</Nav.Link>
  //         <Nav.Link href="#pricing">Pricing</Nav.Link>
  //       </Nav>
  //     </Container>
  //   </Navbar>
  //   <br />
  //   <Navbar bg="primary" variant="dark">
  //     <Container>
  //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  //       <Nav className="me-auto">
  //         <Nav.Link href="#home">Home</Nav.Link>
  //         <Nav.Link href="#features">Features</Nav.Link>
  //         <Nav.Link href="#pricing">Pricing</Nav.Link>
  //       </Nav>
  //     </Container>
  //   </Navbar>

  //   <br />
  //   <Navbar bg="light" variant="light">
  //     <Container>
  //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  //       <Nav className="me-auto">
  //         <Nav.Link href="#home">Home</Nav.Link>
  //         <Nav.Link href="#features">Features</Nav.Link>
  //         <Nav.Link href="#pricing">Pricing</Nav.Link>
  //       </Nav>
  //     </Container>
  //   </Navbar>
  // </>
      <>
        <nav className="navbar navbar-expand-lg text-white bg-dark ">
         <a className="navbar-brand text-success" href="nav">Navbar</a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link text-white" href="nav">Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="nav">About Us</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link text-white"href="nav">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="nav">Meeting</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
    
    </nav>
    </>

    )
}

export default NavBar