import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";

export default function HomePage() {
    return (
       <Segment inverted textAlign='center' vertical className='masthead' >
          <Container text>
              <Header as='h1' inverted>
                   <Image size='massive' src='/assets/logo.jpg' alt='logo' style={{marginBottom: 12}} />
                   Dot Net Project
              </Header>
              <Header as='h2' inverted content='Welcome to Dot Net Project' />
              <Button as={Link} ro='/activities' size='huge' inverted>
                    Take me to the Dot Net Project!
              </Button>
          </Container>
       </Segment>
    )
}