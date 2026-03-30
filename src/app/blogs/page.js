"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import './blog.css'; 

const blogPosts = [
  {
    slug: "introduction-to-cybersecurity",
    title: "Introduction to Cybersecurity",
    description: "Cybersecurity is crucial for protecting sensitive information from cyber threats.",
  },
  {
    slug: "the-developer-who-left-a-door-open",
    title: "The Developer Who Left a Door Open: A Lesson in Cybersecurity",
    description: "Bob was a talented developer working at a fast-growing startup. He loved building features, optimizing performance, and delivering products fast. Security?",
  },
];

const BlogList = () => {
  const router = useRouter();
  const [loadingSlug, setLoadingSlug] = useState(null);

  const handleNavigation = (slug) => {
    setLoadingSlug(slug);
    router.push(`/blogs/${slug}`);
  };

  return (
    <main id="blogs" className="blogContainer">
      <Container>
        <h1 className="heading mb-4">Blog List</h1>
        <Row className="g-4">
          {blogPosts.map((post) => (
            <Col key={post.slug} xs={12} sm={6} md={6} lg={4}>
              <Card className="blogCard">
                <Card.Body>
                  <Card.Title className="blogTitle">{post.title}</Card.Title>
                  <Card.Text className="blogDescription">
                    {post.description}
                  </Card.Text>
                  <Button
                    variant="dark"
                    className="blogButton"
                    disabled={loadingSlug === post.slug}
                    onClick={() => handleNavigation(post.slug)}
                  >
                    {loadingSlug === post.slug ? (
                      <>
                        <Spinner animation="border" size="sm" /> Loading...
                      </>
                    ) : (
                      "Read More"
                    )}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default BlogList;
