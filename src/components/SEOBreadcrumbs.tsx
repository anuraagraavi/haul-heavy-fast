import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

export default function SEOBreadcrumbs() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Create breadcrumb items based on current path
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ];

  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Convert segments to readable labels
    let label = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Custom labels for specific routes
    const customLabels: Record<string, string> = {
      'services': 'Towing Services',
      'light-duty': 'Light Duty Towing',
      'medium-duty': 'Medium Duty Towing', 
      'heavy-duty': 'Heavy Duty Towing',
      'get-quote': 'Get a Quote',
      'contact': 'Contact Us',
      'about': 'About Us',
      'blog': 'Blog & Resources',
      'locations': 'Service Areas',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service'
    };

    if (customLabels[segment]) {
      label = customLabels[segment];
    }

    breadcrumbs.push({
      label,
      href: currentPath,
      current: index === pathSegments.length - 1
    });
  });

  // Don't show breadcrumbs on homepage
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav 
      className="bg-muted/20 border-b border-border py-3"
      aria-label="Breadcrumb navigation"
    >
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground mx-2" />
              )}
              
              {breadcrumb.current ? (
                <span 
                  className="text-foreground font-medium"
                  aria-current="page"
                >
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  to={breadcrumb.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center"
                >
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}