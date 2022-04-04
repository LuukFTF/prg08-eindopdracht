const w2v = require('word2vec');
const fs = require('fs');
const csv = require('csvtojson');
const { Parser } = require('json2csv');
const { type } = require('os');

const dir = 'docs/data/'
const corpus_file = dir+'firefox_corpus.txt'
const dest_vec_file = dir+'vectors_test.txt'

const vec_file = dir+'big/vectors_roularta_nl.txt'

const data_file_raw = dir+'choir_events_raw.csv'
const data_file_processed = dir+'choir_events_processed.csv'


dataProcess() 

async function dataProcess() {

    const events = await csv().fromFile('docs/data/choir_events_raw.csv');

    w2v.loadModel(vec_file, (error, model) => {
        console.log("SIZE: ", model.size);
        console.log("WORDS: ", model.words);

        for (let i = 0; i < events.length; i++) {
            vector = model.getVector(events[i].title)
            if (vector != null) {
                events[i].title = `[`+vector.values+`]`;
            } else {
                events[i].title = "";
            }            

            const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

            let eventDate = new Date(events[i].date) 
            let eventDay = weekday[eventDate.getDay()];
            events[i].date = eventDay            

            events[i].start_time = timeStringToFloat(events[i].start_time)
            events[i].end_time = timeStringToFloat(events[i].end_time)
        }        

        console.log(events[0])

        updateCsv(events)
    });
};



async function updateCsv(events){
    console.log(events);
    console.log("test");
    const eventsInCsv = new Parser({ fields: ["title", "location", "city", "date", "start_time", "end_time", "team", "lable"] }).parse(events);
    fs.writeFileSync('docs/data/choir_events_processed.csv', eventsInCsv);
}

function timeStringToFloat(time) {
    if (time != undefined && time != "" && time != "null") {
        let hoursMinutes = time.split(/[.:]/);
        let hours = parseInt(hoursMinutes[0], 10);
        let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
        return hours + minutes / 60;
    }
}

