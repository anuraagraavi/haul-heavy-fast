import type { LocationData } from "@/data/locations";

const SERVICE_TYPES = [
  "Flatbed Towing",
  "Emergency Towing",
  "Roadside Assistance",
  "Heavy-Duty Recovery",
  "Medium-Duty Towing",
  "Commercial Fleet Towing",
  "EV Towing",
  "Motorcycle Towing",
];

function e164FromDisplay(phone: string): string {
  return `+1${phone.replace(/\D/g, "").slice(-10)}`;
}

export function buildLocationSchemaJsonLd(params: {
  data: LocationData;
  canonicalUrl: string;
  baseUrl: string;
  imageUrls: string[];
  isCountyHub: boolean;
}): Record<string, unknown> {
  const { data, canonicalUrl, baseUrl, imageUrls, isCountyHub } = params;
  const telephone = e164FromDisplay(data.phone);
  const geoRadiusMeters = isCountyHub ? 35000 : 15000;

  const areaServed = isCountyHub
    ? {
        "@type": "AdministrativeArea",
        name: data.county,
        containedInPlace: { "@type": "AdministrativeArea", name: "California", identifier: "US-CA" },
      }
    : {
        "@type": "City",
        name: `${data.city}, CA`,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: `${data.county}, CA`,
        },
      };

  const reviews = data.testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
    reviewBody: t.quote,
  }));

  const orgId = `${canonicalUrl}#localBusiness`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "AutomotiveBusiness", "EmergencyService"],
        "@id": orgId,
        name: "Heavy Tow Pro",
        url: canonicalUrl,
        telephone,
        priceRange: "$$",
        image: imageUrls,
        serviceType: SERVICE_TYPES,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: data.aggregateRating.ratingValue,
          reviewCount: data.aggregateRating.reviewCount,
          bestRating: 5,
          worstRating: 1,
        },
        review: reviews,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        areaServed: {
          ...areaServed,
          geo: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: data.geo.lat,
              longitude: data.geo.lng,
            },
            geoRadius: geoRadiusMeters,
          },
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: data.nearestHub.address,
          addressLocality: data.nearestHub.city,
          addressRegion: "CA",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: data.geo.lat,
          longitude: data.geo.lng,
        },
      },
      {
        "@type": "Service",
        name: isCountyHub ? `${data.city} Towing & Recovery` : `${data.city} Towing Service`,
        areaServed,
        provider: { "@id": orgId },
        serviceType: SERVICE_TYPES,
      },
      {
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "Locations", item: `${baseUrl}/locations` },
          { "@type": "ListItem", position: 3, name: data.city, item: canonicalUrl },
        ],
      },
    ],
  };
}
