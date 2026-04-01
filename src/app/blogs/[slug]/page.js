"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Container, Row, Col, Button, Card, Spinner } from "react-bootstrap";
import { FaTwitter, FaFacebook, FaChevronLeft, FaChevronRight, FaArrowLeft } from "react-icons/fa";
import "./blogpost.css";

// Blog Data (Keep this same as your list)
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
  {
    slug: "networking-basics-lan-vlan",
    title: "Networking 101: Why You Need LAN & VLANs",
    description: "Understanding the building blocks of a secure network and why flat networks are a security risk.",
    date: "April 05, 2026",
    content: `
      <p>Imagine a large office where everyone is shouting in one room. It's chaotic, right? That’s exactly what a <strong>Flat Network (LAN)</strong> without segmentation looks like. In cybersecurity, we don't just build networks; we secure them.</p>

      <h3>What is a LAN?</h3>
      <p>A <strong>Local Area Network (LAN)</strong> connects devices in a limited area like your home or office. It allows them to share files, printers, and internet. But there's a problem: if one device is hacked, the hacker can easily move "laterally" to any other device on that LAN.</p>

      <h3>Why do we need VLANs?</h3>
      <p><strong>Virtual Local Area Networks (VLANs)</strong> allow us to split one physical switch into multiple logical networks. Here’s why they are essential:</p>
      <ul>
        <li><strong>Security:</strong> You can separate the "Guest Wi-Fi" from the "HR Database." Even if a guest is compromised, they can't see the database.</li>
        <li><strong>Performance:</strong> By reducing broadcast traffic, the network runs faster.</li>
        <li><strong>Organization:</strong> You can group users by department (Finance, IT, Sales) regardless of where they are sitting.</li>
      </ul>

      <p><strong>Pro Tip:</strong> As a security professional, always follow the principle of least privilege—only allow necessary VLANs to communicate through a firewall.</p>
    `
  },
  {
    slug: "iso-27001-basics-guide",
    title: "ISO 27001: The Gold Standard for Information Security",
    description: "A beginner's guide to understanding ISMS and why businesses are rushing to get certified.",
    date: "April 10, 2026",
    content: `
      <p>If you've heard the term <strong>ISMS (Information Security Management System)</strong>, you've heard of ISO 27001. But what is it exactly, and why should you care?</p>

      <h3>What is ISO 27001?</h3>
      <p>ISO/IEC 27001 is an international standard that provides a framework for managing sensitive company information so that it remains secure. It’s not just about IT; it involves people, processes, and technology.</p>

      <h3>Why do Companies need it?</h3>
      <ul>
        <li><strong>Trust:</strong> It proves to clients that you take their data seriously.</li>
        <li><strong>Legal Compliance:</strong> Helps in meeting GDPR and other regulatory requirements.</li>
        <li><strong>Risk Management:</strong> It forces you to identify vulnerabilities before they are exploited.</li>
      </ul>

      <h3>How to Implement it? (The Basics)</h3>
      <ol>
        <li><strong>Define Scope:</strong> Decide what needs protection (e.g., the whole company or just one department).</li>
        <li><strong>Risk Assessment:</strong> Identify threats. What could go wrong?</li>
        <li><strong>Implement Controls:</strong> Use Annex A controls (like Access Control, Cryptography, or Physical Security) to mitigate risks.</li>
        <li><strong>Internal Audit:</strong> Check if your system is working as planned.</li>
      </ol>

      <p><strong>Conclusion:</strong> ISO 27001 isn't a one-time project; it's a cycle of continuous improvement (PDCA: Plan-Do-Check-Act).</p>
    `
  }
];

const BlogPost = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);

  useEffect(() => {
    if (slug) {
      const currentPost = blogPosts[currentIndex];
      setPost(currentPost || null);
      window.scrollTo(0, 0); 
    }
  }, [slug, currentIndex]);

  if (!post) return (
    <div className="blog-post-wrapper d-flex justify-content-center align-items-center">
      <Spinner animation="border" variant="light" />
    </div>
  );

  return (
    <div className="blog-post-wrapper">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="blog-post-card">
              <Card.Body>
                {/* 2. Back Button */}
                <Button 
                  variant="link" 
                  className="p-0 mb-4 text-decoration-none text-secondary"
                  onClick={() => router.push('/')}
                >
                  <FaArrowLeft className="me-2" /> Back to Portfolio
                </Button>

                {/* 3. Title with Side Bar */}
                <h1 className="blog-post-title">{post.title}</h1>
                
                {/* 4. Main Body */}
                <div 
                  className="blog-post-content" 
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />

                {/* 5. Share Buttons */}
                <div className="share-section">
                  <Button className="cyber-btn-outline" onClick={() => window.open(`https://twitter.com/share?url=${window.location.href}`, "_blank")}>
                    <FaTwitter className="me-2" /> Twitter
                  </Button>
                  <Button className="cyber-btn-outline" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, "_blank")}>
                    <FaFacebook className="me-2" /> Facebook
                  </Button>
                </div>

                {/* 6. Navigation Controls */}
                <div className="nav-controls">
                  <Button 
                    className="cyber-btn-outline" 
                    disabled={currentIndex === 0}
                    onClick={() => router.push(`/blogs/${blogPosts[currentIndex - 1]?.slug}`)}
                  >
                    <FaChevronLeft className="me-2" /> Prev
                  </Button>

                  <Button 
                    className="cyber-btn-outline" 
                    disabled={currentIndex === blogPosts.length - 1}
                    onClick={() => router.push(`/blogs/${blogPosts[currentIndex + 1]?.slug}`)}
                  >
                    Next <FaChevronRight className="ms-2" />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogPost;