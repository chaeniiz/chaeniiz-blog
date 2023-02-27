import React from 'react';
import SectionHeader from '../section-header';
import IconButtonBar from '../icon-button-bar';
import Image from '../image';
import './style.scss';

function TechBlogSection({ techblogs }) {
  if (!techblogs || techblogs.length < 2) return null;
  return (
    <div className="tech-blog-section">
      <SectionHeader title="Tech Blogs" />
      {techblogs.map((techblog, index) =>
        index === 0 ? null : (
          <div className="techblog" key={index}>
            <div className="head" links={techblog.links}>
              {techblog.title}&nbsp;&nbsp;
              {techblog.links && (
                <IconButtonBar links={techblog.links} style={{ color: '#a8a8a8', fontSize: 24 }} />
              )}
            </div>
            <div className="body">
            {techblog.links && (
              <Image className="thumbnail" src={techblog.thumbnailUrl} links={techblog.links} />
            )}

              {techblog.techStack && (
                <div className="tech-stack">
                  {techblog.techStack.map((tech, index) => (
                    <div key={index} className="tech">
                      {tech}
                    </div>
                  ))}
                </div>
              )}
              <div className="description">{techblog.description}</div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}

export default TechBlogSection;
