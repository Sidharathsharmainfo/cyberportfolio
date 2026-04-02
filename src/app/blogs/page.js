"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Row, Col, Card, Button, Spinner, Pagination } from "react-bootstrap";
import { motion } from "framer-motion";
import './blog.css'; 

const blogPosts = [
  {
    slug: "iso-27001-implementation-guide", // Naya Slug
    title: "Step-by-Step ISO 27001 Implementation Guide",
    description: "A practical approach to building an ISMS, defining scope, and closing compliance gaps by 30%.",
    date: "April 1, 2026"
  },
 {
    slug: "iso-27001-basics-guide",
    title: "ISO 27001: The Gold Standard",
    description: "A beginner's guide to understanding ISMS and why businesses need this certification for trust.",
    date: "March 27, 2026"
  }, 
  {
    slug: "networking-basics-lan-vlan",
    title: "Networking 101: LAN & VLANs",
    description: "Understanding the building blocks of a secure network and why segmentation is a security must-have.",
    date: "March 23, 2026"
  },
  {
    slug: "the-developer-who-left-a-door-open",
    title: "The Developer Who Left a Door Open",
    description: "A deep dive into how a small oversight in code led to a major security breach at a fast-growing startup.",
    date: "Feb 2, 2026"
  },
  {
    slug: "introduction-to-cybersecurity",
    title: "Introduction to Cybersecurity",
    description: "Cybersecurity is crucial for protecting sensitive information from cyber threats in the modern digital age.",
    date: "Jan 22, 2026"
  },

];

const BlogList = () => {
  const router = useRouter();
  const [loadingSlug, setLoadingSlug] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Smooth scroll up to blog section when page changes
    document.getElementById('blogs').scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigation = (slug) => {
    setLoadingSlug(slug);
    router.push(`/blogs/${slug}`);
  };

  return (
    <>
     <section id="blogs" className="blog-section">
        <Container>
          <div className="custom-divider my-5"></div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Dark Theme Heading with Side Border */}
            <h2 className="heading mb-5">Security Insights</h2>
          </motion.div>

          <Row className="g-4 mt-2">
            {currentPosts.map((post, index) => (
              <Col key={post.slug} xs={12} md={6} lg={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="cyber-blog-card">
                    <Card.Body className="d-flex flex-column p-4">
                      <div className="blog-date">{post.date}</div>
                      <Card.Title className="blog-card-title">{post.title}</Card.Title>
                      <Card.Text className="blog-card-text">
                        {post.description}
                      </Card.Text>
                      <div className="mt-auto">
                        <Button
                          variant="outline-light"
                          className="cyber-btn-sm"
                          disabled={loadingSlug === post.slug}
                          onClick={() => handleNavigation(post.slug)}
                        >
                          {loadingSlug === post.slug ? (
                            <Spinner animation="border" size="sm" />
                          ) : (
                            "Read Analysis"
                          )}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Pagination Controls */}
          {blogPosts.length > postsPerPage && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination className="custom-pagination">
                {[...Array(Math.ceil(blogPosts.length / postsPerPage))].map((_, i) => (
                  <Pagination.Item 
                    key={i + 1} 
                    active={i + 1 === currentPage}
                    onClick={() => paginate(i + 1)}
                  >
                    {i + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default BlogList;