let w2v = require( 'word2vec' );
const model = require('word2vec/lib/model');



w2v.loadModel( 'vectors.txt', function( error, model ) {
    // console.log( model );

    console.log( model.mostSimilar( 'queen', 20 ) );
});



// console.log(model)