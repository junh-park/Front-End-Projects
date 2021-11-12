import styled from "styled-components"

const Container = styled.div`
    height: 50px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 500;

`
const Announcement = () => {
    return (
        <Container>
            Super Deal! Free shipping on Orders over $50
        </Container>
    )
}

export default Announcement
