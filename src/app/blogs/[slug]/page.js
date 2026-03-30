"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import "./blogpost.css";

const blogPosts = [
  {
    slug: "introduction-to-cybersecurity",
    title: "Introduction to Cybersecurity: Why It Matters More Than Ever",
    content: `
      <p>In today's fast-paced digital world, the question is no longer <strong>whether we should be concerned about cybersecurity</strong>—it’s <strong>how we can protect ourselves effectively</strong>. Cybersecurity has become a crucial concern for individuals, businesses, and, importantly, developers.</p>

      <p><strong>Why is cybersecurity such an essential field to dive into?</strong></p>
      
      <p>Imagine this: Your personal data, online accounts, or even your company's sensitive information—<strong>all stored in the digital world.</strong> What if that data could be accessed by malicious actors in the blink of an eye? In a world where everything is connected, the threat of cyberattacks is always looming.</p>

      <p><strong>But here’s the thing—</strong> cybersecurity is about more than just protecting your personal data. It's about ensuring:</p>
      <ul>
      <li><strong>Confidentiality</strong> – Preventing unauthorized access to sensitive information.</li>
      <li><strong>Integrity</strong> – Ensuring data remains unaltered.</li>
        <li><strong>Availability</strong> – Keeping services up and running without disruptions.</li>
      </ul>

      <p><strong>For developers, understanding and integrating cybersecurity into their workflow is no longer optional; it’s a responsibility.</strong></p>

      <p>So, what does this mean for developers? How does it impact their day-to-day work? And, most importantly, how can we stay ahead of potential threats in this ever-evolving digital landscape?</p>

      <p><strong>Stay tuned for the next blog to learn more!</strong></p>
    `,
  },
  {
    slug: "the-developer-who-left-a-door-open",
    title: "The Developer Who Left a Door Open: A Lesson in Cybersecurity",
    content: `
      <p><strong>Meet Bob.</strong> A talented developer working at a fast-growing startup. He loved building features, optimizing performance, and delivering products fast. Security? <strong>That was something for the IT security team to worry about</strong>—or so he thought.</p>

      <h3>The Costly Mistake</h3>
      <p>One day, Bob was assigned to develop a login system for a new app. Pressed for time, he used a basic authentication method:</p>

      <ul>
        <li>No multi-factor authentication</li>
        <li>No rate limiting</li>
        <li>No password encryption</li>
      </ul>

      <p><strong>“It works, so it’s fine,”</strong> he thought.</p>

      <h3>The Breach</h3>
      <p>A few months later, disaster struck.</p>
      
      <p>A hacker, lurking in the shadows, found Bob’s application. Using a simple <strong>brute-force attack</strong>, they guessed weak passwords. Within minutes, they had access to thousands of user accounts. Worse yet, since Bob hadn’t encrypted stored passwords, the hacker <strong>extracted the entire database</strong>.</p>

      <p><strong>The breach made headlines. Users lost trust. The startup’s reputation was damaged.</strong> And Bob? He learned a painful lesson—<strong>security is not optional.</strong></p>

      <h3>Why Developers Are the First Line of Defense</h3>
      <p>Like Bob, many developers focus on building features while overlooking security. But in reality, <strong>every piece of code is a potential entry point for attackers.</strong> A single oversight—an open port, an unpatched library, or weak authentication—can lead to catastrophic breaches.</p>

      <h3>How Can Developers Stay Ahead?</h3>
      <ul>
        <li><strong>Think Like a Hacker:</strong> Before deploying code, ask yourself—<em>how would someone try to break this?</em> Use penetration testing tools like Burp Suite or OWASP ZAP.</li>
        <li><strong>Follow Secure Coding Practices:</strong> Validate user inputs, use parameterized queries, and never store passwords in plain text.</li>
        <li><strong>Encrypt Everything:</strong> Whether it’s passwords, API keys, or sensitive user data, encryption is a must.</li>
        <li><strong>Stay Updated:</strong> Cyber threats evolve daily. Keep learning about the latest vulnerabilities and security best practices.</li>
        <li><strong>Make Security a Habit:</strong> Integrate security checks into your development process (<strong>DevSecOps</strong>) rather than treating it as an afterthought.</li>
      </ul>

      <h3>The Takeaway</h3>
      <p>A small mistake in code can open doors for attackers. But a security-conscious developer can <strong>shut those doors before they’re even found.</strong></p>

      <p><strong>Next time, we’ll dive deeper into how hackers think and how ethical hacking can make you a better developer. Stay tuned!</strong></p>
    `,
  },
];


const BlogPost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const router = useRouter();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);

  useEffect(() => {
    if (slug) {
      const currentPost = blogPosts[currentIndex];
      setPost(currentPost || null);
    }
  }, [slug]);

  if (!slug) return <div>Loading...</div>;
  if (!post) return <div>Post not found!</div>;

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/share?url=${window.location.href}&text=${post.title}`, "_blank");
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, "_blank");
  };

  const handlePrevious = () => {
    if (currentIndex === 0) {
      router.push("/blogs");
    } else {
      router.push(`/blogs/${blogPosts[currentIndex - 1].slug}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < blogPosts.length - 1) {
      router.push(`/blogs/${blogPosts[currentIndex + 1].slug}`);
    } else {
      router.push("/blogs");
    }
  };

  return (
    <Container>
      <Row className="blog-container">
        <Col md={12}>
          <Card className="blog-card">
            <Card.Body>
              <Card.Title className="blog-title">{post.title}</Card.Title>
              <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

              <div className="social-share-buttons">
                <Button className="share-button" variant="dark" onClick={shareOnTwitter}>
                  <FaTwitter /> Share on Twitter
                </Button>
                <Button className="share-button" variant="dark" onClick={shareOnFacebook}>
                  <FaFacebook /> Share on Facebook
                </Button>
              </div>

              {/* Navigation Buttons */}
              <div className="navigation-buttons mt-4">
                <Button variant="secondary" onClick={() => router.push("/")} className="me-2">
                  Back to Home
                </Button>

                <Button
                  variant="secondary"
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className="me-2"
                >
                  {currentIndex === 0 ? "Back to Blogs" : "← Previous"}
                </Button>

                <Button
                  variant="secondary"
                  onClick={handleNext}
                  disabled={currentIndex === blogPosts.length - 1}
                >
                  {currentIndex === blogPosts.length - 1 ? "Back to Blogs" : "Next →"}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPost;
