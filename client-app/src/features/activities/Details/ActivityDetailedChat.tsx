import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Comment, Form, Header, Segment } from "semantic-ui-react";

export default observer (function ActivityDetailedChat() {
    return (
        <>
         <Segment
               textAlign='center'
               attached='top'
               inverted
               color='teal'
               style={{border: 'none'}}
         >
            <Header>Chat about this event</Header>
         </Segment>
         <Segment attached>
             <Comment.Group>
                <Comment>
                    <Comment.Avatar src='/assets/user.jpg'/>
                    <Comment.Content>
                        <Comment.Author as='a'>Matt</Comment.Author>
                        <Comment.Metadata>
                            <div>Today at 5:42 PM</div>
                        </Comment.Metadata>
                        <Comment.Text>How artistics!</Comment.Text>
                        <Comment.Action>
                            <Comment.Action>Reply</Comment.Action>
                        </Comment.Action>
                    </Comment.Content>
                </Comment>

                <Comment>
                    <Comment.Avatar src='/assets/user.jpg' />
                    <Comment.Content>
                        <Comment.Avatar as='a'>Joe Henderson</Comment.Avatar>
                        <Comment.Metadata>
                            <div>5 days ago</div>
                        </Comment.Metadata>
                        <Comment.Text>Dude, this is awesome. Thank you</Comment.Text>
                        <Comment.Action>
                            <Comment.Action>Reply</Comment.Action>
                        </Comment.Action>
                    </Comment.Content>
                </Comment>

                <Form reply>
                    <Form.TextArea/>
                    <Button
                           content='Add Reply'
                           labelPosition='left'
                           icon='edit'
                           primary
                    />
                </Form>
             </Comment.Group>
         </Segment>
        </>
    )
})