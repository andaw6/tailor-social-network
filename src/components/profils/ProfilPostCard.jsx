import { Card, Row, Col } from "react-bootstrap";
import Post from "../posts/show/Post";
import CreatePostNew from "../posts/create/CreatePostNew";


export default function ProfilPostCard({ user }) {

    return (
        <Card.Body className=" p-0">
            <Row>
                <Row>
                    <Col sm={12}>
                        <CreatePostNew user={user} />
                    </Col>
                    {user?.posts?.map(post => <Post post={post} />)}
                </Row>
            </Row>
        </Card.Body>
    );
}