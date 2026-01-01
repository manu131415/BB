// frontend/components/membersection.tsx
import React from 'react';
import './membersection.css';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  tags?: string[];
  link?: string;
  className?: string;
}

const MemberCard: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  tags = [],
  link,
  className = ''
}) => {
  return (
    <div className={`member-card ${className}`}>
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt={title} className="card-img" loading="lazy" />
        </div>
      )}

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>

        {tags.length > 0 && (
          <div className="card-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}

        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
            View Profile
          </a>
        )}
      </div>
    </div>
  );
};

const teamMembers = [
  {
    title: "John Doe",
    description: "Founder & CEO with 10+ years of experience in web development and digital strategy.",
    imageUrl: "/team/john-doe.jpg",
    tags: ["Leadership", "Strategy", "Development"],
    link: "#"
  },
  {
    title: "Jane Smith",
    description: "Lead Designer specializing in beautiful UI/UX design and interactive experiences.",
    imageUrl: "/team/jane-smith.jpg",
    tags: ["UI/UX", "Product Design", "Branding"],
    link: "#"
  },
  {
    title: "Alex Johnson",
    description: "Senior Developer with expertise in React, Node.js and modern full-stack architecture.",
    imageUrl: "/team/alex-johnson.jpg",
    tags: ["Frontend", "Backend", "DevOps"],
    link: "#"
  },
  {
    title: "Sarah Williams",
    description: "Marketing Director focused on growth, storytelling, and impactful brand presence.",
    imageUrl: "/team/sarah-williams.jpg",
    tags: ["Marketing", "SEO", "Content Strategy"],
    link: "#"
  }
];

const MembersSection: React.FC = () => {
  return (
    <section className="members-section">
      
      {/* HEADER using CSS now */}
      <div className="team-section-header">
        <h2>Meet Our Team</h2>
        <p>
          A team of passionate dreamers, creators, and innovators coming together
          to build meaningful digital experiences.
        </p>
      </div>

      <div className="members-grid">
        {teamMembers.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default MembersSection;
