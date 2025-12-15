# 🚀 SEO Deployment Guide - amplius Cleantech

## 📋 Übersicht der implementierten SEO-Features

### ✅ **Implementiert:**

#### 1. **Structured Data (Schema.org)**
- ✅ LocalBusiness Schema (Homepage)
- ✅ Organization Schema (Homepage)
- ✅ Service Schemas (4 Service-Seiten)
- ✅ FAQ Schemas (4 Service-Seiten)
- ✅ Breadcrumb Schemas (alle Seiten)

#### 2. **Meta Tags & SEO**
- ✅ Title Tags (individuell pro Seite)
- ✅ Meta Descriptions (unique)
- ✅ Keywords
- ✅ Canonical URLs
- ✅ Open Graph Tags (Facebook/LinkedIn)
- ✅ Twitter Cards
- ✅ Robots Meta Tags

#### 3. **Navigation & UX**
- ✅ Breadcrumb-Navigation (visuell)
- ✅ Responsive Design
- ✅ Accessibility (ARIA Labels)

#### 4. **Sitemap & Robots**
- ✅ sitemap.xml (7 URLs)
- ✅ robots.txt

---

## 🗺️ **Sitemap.xml - Alle URLs**

| URL | Priorität | Change Freq |
|-----|-----------|-------------|
| `/` (Homepage) | 1.0 | weekly |
| `/reinigung` | 0.9 | monthly |
| `/anlagenpflege` | 0.9 | monthly |
| `/rauchmelder` | 0.9 | monthly |
| `/wartung` | 0.9 | monthly |
| `/impressum` | 0.3 | yearly |
| `/datenschutz` | 0.3 | yearly |

**Zugriff:** `https://amplius-cleantech.de/sitemap.xml`

---

## 🤖 **Robots.txt**

```txt
User-agent: *
Allow: /
Sitemap: https://amplius-cleantech.de/sitemap.xml
```

**Zugriff:** `https://amplius-cleantech.de/robots.txt`

---

## 🚀 **Deployment-Optionen**

### **Option 1: Vercel (EMPFOHLEN) ✅**

**Warum Vercel?**
- ✅ Automatisches SSR (Server-Side Rendering)
- ✅ Perfekte SEO-Indexierung
- ✅ Kostenlos für dein Projekt
- ✅ Automatische HTTPS
- ✅ CDN weltweit

**Deployment-Schritte:**

1. **GitHub Push:**
```bash
git add .
git commit -m "SEO optimization complete"
git push origin main
```

2. **Vercel verbinden:**
- Gehe zu https://vercel.com
- "Import Project"
- GitHub Repo auswählen
- Deploy klicken

3. **Custom Domain verbinden:**
- Vercel Dashboard → Settings → Domains
- `amplius-cleantech.de` hinzufügen
- DNS bei deinem Provider anpassen:
  ```
  A Record: 76.76.21.21
  CNAME: cname.vercel-dns.com
  ```

**✅ Fertig! Automatisches Deployment bei jedem Git Push**

---

### **Option 2: Netlify**

Ähnlich wie Vercel:
```bash
# Netlify CLI
npm install -g netlify-cli
netlify init
netlify deploy --prod
```

---

### **Option 3: GitHub Pages (⚠️ Nicht empfohlen für SEO)**

**Problem:** Client-Side Rendering → Schemas werden langsamer indexiert

Nur verwenden, wenn du keine andere Option hast.

---

## 📊 **Nach dem Deployment: Google Search Console**

### **1. Website verifizieren:**
- Gehe zu https://search.google.com/search-console
- Property hinzufügen: `https://amplius-cleantech.de`
- Verifizierung via DNS oder HTML-Tag

### **2. Sitemap einreichen:**
```
https://amplius-cleantech.de/sitemap.xml
```

### **3. Indexierung anfordern:**
- URL Inspection Tool
- Jede wichtige URL einzeln einreichen

---

## 🔍 **SEO-Testing Tools**

### **Vor dem Launch:**

1. **Schema Markup Validator:**
   ```
   https://validator.schema.org/
   ```
   → Teste alle 7 URLs

2. **Rich Results Test:**
   ```
   https://search.google.com/test/rich-results
   ```
   → Prüfe LocalBusiness, FAQs, Breadcrumbs

3. **Mobile-Friendly Test:**
   ```
   https://search.google.com/test/mobile-friendly
   ```

4. **PageSpeed Insights:**
   ```
   https://pagespeed.web.dev/
   ```
   → Ziel: 90+ Score

---

## 📈 **SEO-Checkliste nach Deployment**

### **Woche 1:**
- [ ] Google Search Console verifiziert
- [ ] Sitemap eingereicht
- [ ] Alle 7 URLs manuell indexiert
- [ ] Schema.org Markup validiert
- [ ] Bing Webmaster Tools eingerichtet

### **Woche 2-4:**
- [ ] Google Analytics / Matomo eingerichtet
- [ ] Local Citations erstellt (Google My Business)
- [ ] Backlinks aufgebaut (Branchenverzeichnisse)

### **Monat 2-3:**
- [ ] Content-Updates (Blog/News-Bereich?)
- [ ] Bewertungen sammeln (Google Reviews)
- [ ] Lokale Verzeichnisse (Gelbe Seiten, etc.)

---

## 🎯 **Wichtige SEO-Keywords (Kiel-Fokus)**

### **Primäre Keywords:**
- Gebäudereinigung Kiel
- Hausmeisterservice Kiel
- Rauchmelder Wartung Kiel
- Anlagenpflege Kiel
- Facility Management Kiel

### **Sekundäre Keywords:**
- Treppenhausreinigung Kiel
- Winterdienst Kiel
- Grünpflege Kiel
- Mehrfamilienhäuser Reinigung
- DIN 14676 Rauchmelder

---

## 🔧 **Sitemap.xml automatisch aktualisieren**

**WICHTIG:** Bei neuen Seiten `lastmod` Datum aktualisieren!

```xml
<lastmod>2024-12-14</lastmod>
```

→ Datum auf aktuelles Datum ändern, wenn du Content updatest

---

## 📞 **Support & Fragen**

Bei Deployment-Problemen:
1. Prüfe Browser-Konsole (F12)
2. Prüfe Vercel/Netlify Logs
3. Teste mit Google Rich Results Test

**Viel Erfolg! 🚀**
