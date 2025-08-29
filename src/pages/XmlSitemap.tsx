import { useEffect } from 'react';

const XmlSitemap = () => {
  useEffect(() => {
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Main Pages -->
  <url><loc>https://heavytowpro.com/</loc><changefreq>weekly</changefreq></url>
  <url><loc>https://heavytowpro.com/about</loc><changefreq>monthly</changefreq></url>
  <url><loc>https://heavytowpro.com/get-a-quote</loc><changefreq>weekly</changefreq></url>
  <url><loc>https://heavytowpro.com/contact</loc><changefreq>monthly</changefreq></url>

  <!-- Services -->
  <url><loc>https://heavytowpro.com/services</loc><changefreq>weekly</changefreq></url>
  <url><loc>https://heavytowpro.com/services/light-duty</loc><changefreq>weekly</changefreq></url>
  <url><loc>https://heavytowpro.com/services/medium-duty</loc><changefreq>weekly</changefreq></url>
  <url><loc>https://heavytowpro.com/services/heavy-duty</loc><changefreq>weekly</changefreq></url>

  <!-- Service Areas -->
  <url><loc>https://heavytowpro.com/locations</loc><changefreq>monthly</changefreq></url>
  <url><loc>https://heavytowpro.com/locations#san-francisco</loc><changefreq>monthly</changefreq></url>
  <url><loc>https://heavytowpro.com/locations#san-mateo</loc><changefreq>monthly</changefreq></url>
  <url><loc>https://heavytowpro.com/locations#alameda</loc><changefreq>monthly</changefreq></url>
  <url><loc>https://heavytowpro.com/locations#santa-clara</loc><changefreq>monthly</changefreq></url>

  <!-- Specialized Services -->
  <url><loc>https://heavytowpro.com/services/light-duty#flatbed</loc><changefreq>weekly</changefreq></url>
  <url><loc>https://heavytowpro.com/services/light-duty#motorcycle</loc><changefreq>weekly</changefreq></url>
  <url><loc>https://heavytowpro.com/services/light-duty#exotic</loc><changefreq>weekly</changefreq></url>
  <url><loc>https://heavytowpro.com/services/light-duty#private-property</loc><changefreq>weekly</changefreq></url>
  <url><loc>https://heavytowpro.com/services/heavy-duty#equipment</loc><changefreq>weekly</changefreq></url>
  <url><loc>https://heavytowpro.com/services/heavy-duty#recovery</loc><changefreq>weekly</changefreq></url>
  <url><loc>https://heavytowpro.com/services/heavy-duty#fleet</loc><changefreq>weekly</changefreq></url>

  <!-- Resources -->
  <url><loc>https://heavytowpro.com/blog</loc><changefreq>weekly</changefreq></url>
  <url><loc>https://heavytowpro.com/blog/emergency-towing-guide</loc><changefreq>monthly</changefreq></url>
  <url><loc>https://heavytowpro.com/blog/heavy-equipment-transport</loc><changefreq>monthly</changefreq></url>
  <url><loc>https://heavytowpro.com/blog/fleet-management-downtime-costs</loc><changefreq>monthly</changefreq></url>
  <url><loc>https://heavytowpro.com/blog/sf-towing-challenges</loc><changefreq>monthly</changefreq></url>
  <url><loc>https://heavytowpro.com/blog/luxury-vehicle-transport</loc><changefreq>monthly</changefreq></url>

  <!-- Legal -->
  <url><loc>https://heavytowpro.com/privacy-policy</loc><changefreq>yearly</changefreq></url>
  <url><loc>https://heavytowpro.com/terms</loc><changefreq>yearly</changefreq></url>
  <url><loc>https://heavytowpro.com/sitemap</loc><changefreq>monthly</changefreq></url>

</urlset>`;

    // Override document content
    document.open();
    document.write(xmlContent);
    document.close();
  }, []);

  return null;
};

export default XmlSitemap;