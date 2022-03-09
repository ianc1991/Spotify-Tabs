import http from './httpCommon';

class TabDataService {
    // Get UG Scraped Links
    ugScrapedLinks = async(artist, song, req, res) => {
        const data = await http.get(`/ugscrape/${artist}/${song}`);
        if(!data) return console.log('Error at TabDataService running ugScrapedLinks()');
        return data.data;
    }

    ugGetTab = async(link, req, res) => {
        console.log(link);
        const encodedLink = '&url=' + encodeURIComponent(`${link}`);
        const data = await http.get(`/ugscrape/tab`, {
            params: {
                link: link
            }
        }
        );
        if(!data) return console.log('Error at TabDataService running ugGetTab()');
        return data.data;
    }
}

export default new TabDataService()