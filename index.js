const w2v = require('word2vec');
const fs = require('fs');
const csv = require('csvtojson');
const { Parser } = require('json2csv')
// const fs = require("fs-extra");
// const model = require('word2vec/lib/model');

const dir = 'docs/data/'
const corpus_file = dir+'firefox_corpus.txt'
const dest_vec_file = dir+'vectors_test.txt'

const vec_file = dir+'big/vectors_roularta_nl.txt'

const data_file_raw = dir+'choir_events_raw.csv'
const data_file_processed = dir+'choir_events_processed.csv'




// w2v.word2vec(corpus_file, dest_vec_file, { size: 100 }, () => {
//     console.log("DONE");
// });


// dataProcessing()

// async function dataProcessing() {
//     console.log('before calling')
//     let events = await dataProcess()
//     console.log('after calling')
//     updateCsv(events)
// }


// async function someFunc() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('resolving promise')
//             resolve()
//         }, 1500)
//     })
// }

// async function main() {
//     console.log('before calling')
//     await someFunc()
//     console.log('after calling')
// }

// main()

dataProcess() 

async function dataProcess() {

    const events = await csv().fromFile('docs/data/choir_events_raw.csv');

    return new Promise(resolve => {
        w2v.loadModel(vec_file, (error, model) => {
            console.log("SIZE: ", model.size);
            console.log("WORDS: ", model.words);
    
            events[0].title = model.getVector(events[0].title).values;
    
            console.log(events[0])

            updateCsv(events)

        });

        resolve() 
    })
};



async function updateCsv(events){
    console.log(events);
    console.log("test");
    const eventsInCsv = new Parser({ fields: ["title", "location", "city", "date", "start_time", "end_time", "team", "lable"] }).parse(events);
    fs.writeFileSync('docs/data/choir_events_processed.csv', eventsInCsv);
}



