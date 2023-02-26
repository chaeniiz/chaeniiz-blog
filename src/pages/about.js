import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import Bio from '../components/bio';
import TimeStampSection from '../components/timestamp-section';
import ProjectSection from '../components/project-section';
import TechBlogSection from '../components/tech-blog-section';

function AboutPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { author, about, language } = metaData;
  const { timestamps, techblogs, projects } = about;
  return (
    <Layout>
      <Seo title="About" />
      <Bio author={author} language={language} />
      <TimeStampSection timestamps={timestamps} />
      <TechBlogSection techblogs={techblogs} />
      <ProjectSection projects={projects} />
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        language
        author {
          name
          bio {
            role
            description
            thumbnail
          }
          social {
            github
            linkedIn
            email
          }
        }

        about {
          timestamps {
            date
            activity
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }

          techblogs {
            title
            description
            techStack
            thumbnailUrl
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }

          projects {
            title
            description
            techStack
            thumbnailUrl
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }

        }
      }
    }
  }
`;
