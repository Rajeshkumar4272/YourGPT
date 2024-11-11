const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');
const xml2js = require('xml2js');

async function runSitemap() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Read the modified sitemap XML file
        const sitemapPath = "C:\\Users\\ASD\\Desktop\\Rajesh\\New folder\\sitemap_modified.xml";
        const sitemap = fs.readFileSync(sitemapPath, 'utf-8');

        // Parse the sitemap XML
        const parsedSitemap = await xml2js.parseStringPromise(sitemap);

        // console.log("Parsed Sitemap:", JSON.stringify(parsedSitemap, null, 2)); // Detailed log

        const urls = (parsedSitemap.urlset.url || []).map(url => {
            if (url && url.loc && url.loc[0]) {
                return url.loc[0];
            } else {
                console.warn('Skipping invalid URL entry:', JSON.stringify(url, null, 2)); // Detailed log
                return null;
            }
        }).filter(Boolean);  // Remove null entries

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await driver.quit();
    }
}

runSitemap();
