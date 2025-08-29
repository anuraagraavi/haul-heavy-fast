import { useEffect } from 'react';

const XmlSitemap = () => {
  useEffect(() => {
    const siteUrl = "https://heavytowpro.com";
    
    const urls = [
      // Main Pages
      { loc: "/", priority: "1.0", changefreq: "weekly" },
      { loc: "/about", priority: "0.8", changefreq: "monthly" },
      { loc: "/get-a-quote", priority: "0.9", changefreq: "weekly" },
      { loc: "/contact", priority: "0.8", changefreq: "monthly" },
      
      // Services
      { loc: "/services", priority: "0.9", changefreq: "weekly" },
      { loc: "/services/light-duty", priority: "0.8", changefreq: "weekly" },
      { loc: "/services/medium-duty", priority: "0.8", changefreq: "weekly" },
      { loc: "/services/heavy-duty", priority: "0.8", changefreq: "weekly" },
      
      // Service Areas
      { loc: "/locations", priority: "0.8", changefreq: "monthly" },
      
      // Blog
      { loc: "/blog", priority: "0.7", changefreq: "weekly" },
      { loc: "/blog/emergency-towing-guide", priority: "0.6", changefreq: "monthly" },
      { loc: "/blog/heavy-equipment-transport", priority: "0.6", changefreq: "monthly" },
      { loc: "/blog/fleet-management-reducing-downtime", priority: "0.6", changefreq: "monthly" },
      { loc: "/blog/san-francisco-towing-challenges", priority: "0.6", changefreq: "monthly" },
      { loc: "/blog/luxury-vehicle-transport", priority: "0.6", changefreq: "monthly" },
      
      // Legal
      { loc: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
      { loc: "/terms", priority: "0.3", changefreq: "yearly" },
      { loc: "/sitemap", priority: "0.4", changefreq: "monthly" },
      { loc: "/thank-you", priority: "0.2", changefreq: "yearly" }
    ];

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${siteUrl}${url.loc}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Override document content
    document.open();
    document.write(xmlContent);
    document.close();
  }, []);

  return null;
};

export default XmlSitemap;