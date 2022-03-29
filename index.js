let w2v = require( 'word2vec' );
const model = require('word2vec/lib/model');



w2v.loadModel( 'vectors.txt', function( error, model ) {
    // console.log( model );

    vec = model.getNearestWords( model.getVector( 'black' ), 10 )

    console.log(vec);
});



// console.log(model)