let w2v = require( 'word2vec' );
// const fs = require("fs-extra");
// const model = require('word2vec/lib/model');

const dir = 'docs/data/'
const source_file = dir+'firefox_corpus.txt'
const dest_file = dir+'vectors_test.txt'

const vec_file = dir+'big/vectors_glove.txt'
// const dest_file = __dirname + '/docs/data/vectors_test.txt'

console.log(dir, source_file, dest_file)

// clear(dir, source_file)



// w2v.word2vec(source_file, dest_file, { size: 100 }, () => {
//     console.log("DONE");
// });


w2v.loadModel(vec_file, (error, model) => {
    console.log("SIZE: ", model.size);
    console.log("WORDS: ", model.words);
    console.log(model.mostSimilar("word", 20));
  });


// w2v.loadModel( 'docs/data/vectors_shakepeare.txt', function( error, model ) {
//     // console.log( model );

//     vec = model.getNearestWords( model.getVector( 'queen' ), 10 )

//     console.log(vec);
// });



// console.log(model)