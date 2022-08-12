import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#">Todo-List</Navbar.Brand>
            <Nav className="me-auto">
                {/* <Link to="/">Todas as Tarefas</Link>
                <Link to="/create">Criar Nova Tarefa</Link> */}
                <Nav.Link onClick={() => navigate("/")}>Todas as Tarefas</Nav.Link>
                <Nav.Link onClick={() => navigate("/create")}>Criar Nova Tarefa</Nav.Link>
                {/* <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;