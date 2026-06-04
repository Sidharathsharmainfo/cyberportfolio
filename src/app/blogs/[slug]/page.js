"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Container, Row, Col, Button, Card, Spinner } from "react-bootstrap";
import { FaTwitter, FaFacebook, FaChevronLeft, FaChevronRight, FaArrowLeft } from "react-icons/fa";
import "./blogpost.css";

// Blog Data (Keep this same as your list)
const blogPosts = [
  {
    slug: "The journey from an intern to a cybersecurity auditor",
    title: "My Journey as a Cybersecurity Auditor",
    content: `
      <p>The journey from an intern to a cybersecurity auditor has been quite rewarding, although it was challenging. The path to becoming a cybersecurity auditor has been filled with learning, practical experience, and continuous development. I began as a cybersecurity auditor intern and over time, with hard work, curiosity, and hands-on learning, I progressed to becoming a full auditor.</p>

      <h3>As an intern</h3>
      <p>My initial role as a cybersecurity intern was to understand the company's internal security policies. I not only read the policy documents but also offered my ideas and feedback to team members. The inputs were well-received and the team could see I had a decent grasp of security fundamentals.</p>
      <p>I learned the ISO 27001 on my own to deepen my understanding as the organization I worked for was ISO and SOC certified and so it was valuable to know how global standards work at a practical level.</p>

      <h3>My first project: security camera compliance</h3>
      <p>Around 1.5 months into my internship, I was handed with my first big project:Security camera replacement with compliance requirement.</p>
      <p>I was given responsibilities related to research in this project, which were:</p>
      <ul>
        <li>Understanding camera components and how they work</li>
        <li>Researching compliance requirements</li>
        <li>Understanding cloud delivery and integration</li>
        <li>Shortlisting compliant camera models</li>
      </ul>
      <p>While my colleague handled documentation part and we presented proposals in the meeting. After conducting research for nearly a month we finalized ndaa compliant camera and decided a vendor and prepared the proposal along with pricing.This provided with immense confidence as well as hands on experience in the compliance driven decisions.</p>

      <h3>Moving into system and internal auditing</h3>
      <p>After I completed the above project, I moved to internal and system auditing tasks:</p>
      <ul>
        <li>Provide recommendations on slight non-conformities</li>
        <li>Reviewing firewall rules and incoming, outgoing traffic</li>
        <li>Monitoring access to the website with respect to the campaigns</li>
        <li>Reviewing the GPO policies as per requirement of the organization.</li>
      </ul>
      <p>This helped me learn how security policies are put to practice at the system level.</p>

      <h3>Phishing Campaigns & User awareness</h3>
      <p>I performed phishing campaigns for each quarter of the year and gave a report of employees who was caught by the phishing campaign and also gave them a guidance email:</p>
      <ul>
        <li>what not to do</li>
        <li>how to report</li>
        <li>what to be cautious of</li>
      </ul>
      <p>Over the past quarter's training sessions we have reduced the phishing incidents by almost 15%.</p>

      <h3>Today:</h3>
      <p>My current responsibilities at the office are:</p>
      <ul>
        <li>Assisting in creating the policy.</li>
        <li>Conducting system audits.</li>
        <li>Managing user GPO configurations.</li>
        <li>Conducting phishing campaigns and awareness training.</li>
      </ul>
      <p>From an intern to a cybersecurity auditor, my experience has been immensely rewarding, albeit challenging. Every project and every audit, no matter how big or small, has contributed significantly to my growth as a security professional.</p>`,
},
  {
    slug: "iso-27001-implementation-guide",
    title: "My Journey as a Cybersecurity Auditor",
    content: `
      <p>My journey in the field of cybersecurity auditing has been full of learning, hands‑on experience, and continuous growth. I began as a cybersecurity auditor intern, and over time, I worked my way up to becoming a full auditor through dedication, curiosity, and practical exposure.</p>

      <div class="custom-divider my-4"></div>

      <h3>Starting as an Intern</h3>
      <p>When I joined as a cybersecurity intern, my first responsibility was to study the company’s internal security policies. I not only read them but also shared my suggestions and viewpoints. My inputs were appreciated, and the team acknowledged that I had a good understanding of security fundamentals.</p>
      <p>To strengthen my foundation, I started learning ISO 27001 on my own, especially because the company I worked for was ISO and SOC certified. This helped me understand how global security standards work in real organizations.</p>

      <h3>My First Project: Security Camera Compliance</h3>
      <p>After about 1.5 months, I received my first major project: Security camera replacement with compliance requirements. My role was focused on research:</p>
      <ul>
        <li>Understanding camera components</li>
        <li>Studying compliance requirements</li>
        <li>Evaluating cloud delivery and integration</li>
        <li>Shortlisting compliant camera models</li>
      </ul>
      <p>My colleague handled documentation, and together we presented proposals in meetings. After a month of research and collaboration, we finalized NDAA‑compliant cameras, selected the vendor, and submitted the proposal with pricing details. This project gave me confidence and real-world exposure to compliance-driven decision-making.</p>

      <h3>Growing Into System Auditing & Internal Audits</h3>
      <p>Once the project was completed, I moved into internal auditing and system auditing. My responsibilities included:</p>
      <ul>
        <li>Suggesting minor non‑conformities</li>
        <li>Reviewing firewall rules</li>
        <li>Checking incoming and outgoing traffic</li>
        <li>Monitoring website access based on campaigns</li>
        <li>Reviewing GPO policies according to organizational needs</li>
      </ul>
      <p>This phase helped me understand how security controls work at a system level.</p>

      <h3>Phishing Campaigns & User Awareness</h3>
      <p>Every quarter, I conducted phishing campaigns and prepared reports on employees who fell for phishing attempts. I also sent them guidance emails explaining what they should avoid, how to identify phishing attempts, and best practices to stay secure. Through consistent awareness training, we successfully reduced phishing incidents by nearly 15%.</p>

      <h3>Where I Am Now</h3>
      <p>Today, my role includes:</p>
      <ul>
        <li>Helping with policy creation</li>
        <li>Conducting system audits</li>
        <li>Managing user GPO configurations</li>
        <li>Running phishing campaigns and awareness sessions</li>
      </ul>
      <p>My journey from intern to cybersecurity auditor has been challenging but incredibly rewarding. Every project, audit, and campaign has helped me grow into a more confident and skilled security professional.</p>`,
},
  {
    slug: "iso-27001-implementation-guide",
    title: "Step-by-Step ISO 27001:2022 Implementation Guide",
    content: `
      <p>ISO/IEC 27001:2022 is a globally recognized standard for <strong>Information Security Management Systems (ISMS)</strong>. It helps organizations protect sensitive data and manage security risks effectively.</p>
      
      <p>In this guide, I’ll walk you through a practical, step-by-step approach to implementing ISO 27001 based on my hands-on experience in the GRC domain.</p>

      <div class="custom-divider my-4"></div>

      <h3>Step 1: Define Scope</h3>
      <p>Start by defining the boundary of your ISMS. You need to identify what exactly you are protecting:</p>
      <ul>
        <li>Which systems, teams, or physical locations are included?</li>
        <li>What critical data needs protection (e.g., Customer PII, Intellectual Property)?</li>
      </ul>
      <p><em>Example: Cloud infrastructure, internal HR tools, and developer endpoints.</em></p>

      <h3>Step 2: Risk Assessment & Treatment</h3>
      <p>Identify risks that could impact the confidentiality, integrity, or availability of your data. For every risk (like Insider Threats or Data Breaches), create a <strong>Risk Register</strong>:</p>
      <ul>
        <li><strong>Impact & Likelihood:</strong> How bad is it and how likely is it?</li>
        <li><strong>Mitigation Plan:</strong> How will you fix or reduce it?</li>
      </ul>

      <h3>Step 3: Select Controls (Annex A)</h3>
      <p>Once risks are identified, map them to the <strong>ISO 27001 Annex A controls</strong>. These are categorized into Organizational, People, Physical, and Technological themes.</p>

      <h3>Step 4: Implement Policies & Documentation</h3>
      <p>Compliance is nothing without documentation. You must create and enforce:</p>
      <ul>
        <li>Access Control Policy</li>
        <li>Information Security Policy</li>
        <li>Incident Response Plan</li>
      </ul>

      <h3>Step 5: Evidence Collection & Automation</h3>
      <p>Modern GRC involves using tools like <strong>Vanta</strong> or <strong>Drata</strong> to automate evidence collection. This ensures you are always "audit-ready" rather than rushing at the end of the year.</p>

      <h3>Step 6: Internal Audit</h3>
      <p>Before the external certification body arrives, conduct an internal audit. This helps identify gaps and ensures your controls are actually working as intended.</p>

      <h3>Step 7: Continuous Monitoring (The PDCA Cycle)</h3>
      <p>Security is not a destination; it's a journey. Follow the <strong>Plan-Do-Check-Act</strong> cycle to review risks regularly and update controls based on new threats.</p>

      <div class="highlight-box mt-4 p-3" style="background: #111; border-left: 4px solid #fff;">
        <p class="mb-0"><strong>Author's Note:</strong> In my experience as a Cybersecurity Auditor, I successfully reduced compliance gaps by <strong>30%</strong> by strictly following these phases and focusing on risk-driven controls.</p>
      </div>`,
  },
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

      <p><strong>Stay tuned for the next blog to learn more!</strong></p>`,
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