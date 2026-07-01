import { useEffect } from 'react';

const SITE_URL = 'https://liks.rw';
const DEFAULT_OG_IMAGE = 'https://liks.rw/icon-512.png';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
}

function setMetaContent(selector: string, value: string) {
  const el = document.querySelector<HTMLMetaElement>(selector);
  if (el) el.content = value;
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

export function useSEO({
  title,
  description,
  canonicalPath = '',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
}: SEOProps) {
  useEffect(() => {
    const canonicalURL = `${SITE_URL}${canonicalPath}`;

    document.title = title;
    setCanonical(canonicalURL);

    setMetaContent('meta[name="description"]', description);

    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', canonicalURL);
    setMetaContent('meta[property="og:image"]', ogImage);
    setMetaContent('meta[property="og:type"]', ogType);

    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
    setMetaContent('meta[name="twitter:image"]', ogImage);
  }, [title, description, canonicalPath, ogImage, ogType]);
}
