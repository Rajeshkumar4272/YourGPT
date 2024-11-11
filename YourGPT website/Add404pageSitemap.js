const fs = require('fs');
const xml2js = require('xml2js');

// Provide the correct path to the sitemap file
const sitemapPath = "C:\\Users\\ASD\\Desktop\\Rajesh\\New folder\\sitemap (2).xml"; // Update this with the correct path
const sitemap = fs.readFileSync(sitemapPath, 'utf-8');

// Parse the sitemap XML
xml2js.parseString(sitemap, (err, result) => {
    if (err) {
        console.error('Error parsing XML:', err);
        return;
    }

    // Create a new <url> tag for the 404 page
    const newUrl = {
        url: {
            loc: ['https://yourgpt.ai/404'],
            lastmod: [`2024 -08 - 21T05: 36: 13.502Z`],
            changefreq:[ 'daily'],
            priority: 0.7 
}
};

// Append the new URL to the sitemap
result.urlset.url.push(newUrl);

// Build the modified XML back into a string
const builder = new xml2js.Builder();
const modifiedSitemap = builder.buildObject(result);

// Save the modified sitemap back to the file
const modifiedSitemapPath = "C:\\Users\\ASD\\Desktop\\Rajesh\\New folder\\sitemap_modified.xml"; // Update this with the desired path
fs.writeFileSync(modifiedSitemapPath, modifiedSitemap);

console.log('Modified sitemap saved as sitemap_modified.xml');
console.log(modifiedSitemap);
});
