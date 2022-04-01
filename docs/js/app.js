import { DecisionTree } from "./libraries/decisiontree.js"
import { VegaTree } from "./libraries/vegatree.js"

const csvFile = "./data/choir_events_processed.csv"
const trainingLabel = "lable"
const ignoredColumns = []

function loadData() {
    Papa.parse(csvFile, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: results => trainModel(results.data)
    })
}

function trainModel(data){
    data.sort(() => (Math.random() - 0.5))
    let trainData = data
    // let trainData = data.slice(0, Math.floor(data.length * 0.8))
    // let testData  = data.slice(Math.floor(data.length * 0.8) + 1)
    // console.log("testData:", testData)
    console.log("trainData:", trainData)

    let decisionTree = new DecisionTree({
        ignoredAttributes: ignoredColumns,
        trainingSet: trainData,
        categoryAttr: trainingLabel
    })
    
    // console.log(decisionTree.toJSON())

    let visual = new VegaTree('#view', 1800, 620, decisionTree.toJSON())

    predictInput(decisionTree)

    // predictAll(decisionTree, testData)
    // predictOne(decisionTree, testData)
}

loadData()


function predictOne(decisionTree, testData){
    let prediction = decisionTree.predict(testData[0])

    if(prediction === testData[0].lable) {
        console.log("CORRECTE  VOORSPELLING!")
    } else {
        console.log("!incorrect")
    }

    console.log(prediction, testData[0].lable)
}


function predictAll(decisionTree, testData) {
    let amountCorrect = 0

    for(let testItem of testData) {
        let prediction = decisionTree.predict(testItem) 

        if(prediction === testItem.lable) {
            amountCorrect++
          }
    }

    let accuracy = amountCorrect / testData.length

    console.log(testData, amountCorrect)

    console.log("The Accuracy is: " + Math.round(accuracy*10000 *100, 4) /10000 + "%")
}

function predictInput(decisionTree){
    let prediction = decisionTree.predict({
        "title": "",
        "location": "cascade",
        "city": "hendrik-ido-ambacht",
        "date": "thursday",
        "start_time": "19.75",
        "end_time": "22.25",
        "team": "all"
    })

    // let prediction = decisionTree.predict({
    //     "title": "",
    //     "location": "kunstmin",
    //     "city": "dordrecht",
    //     "date": "saturday",
    //     "start_time": "20",
    //     "end_time": "22",
    //     "team": "[all, audience]"
    // })
    
    console.log(`this event is a ${prediction}`)
}