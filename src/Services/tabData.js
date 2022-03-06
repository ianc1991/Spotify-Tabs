import http from './httpCommon';

class TabDataService {
    // Get UG Scraped Links
    ugScrapedLinks = async(artist, song, req, res) => {
        const data = await http.get(`/ugscrape/${artist}/${song}`);
        if(!data) return console.log('Error at TabDataService running ugScrapedLinks()');
        console.log(data.data);
        return data.data;
    }
}

export default new TabDataService()